/**
 * Stars
 *
 * Inspired by Steve Courtney's poster art for Celsius GS's Drifter - http://celsiusgs.com/drifter/posters.php
 * by Cory Hughart - http://coryhughart.com
 *
 * Updated to work nicer with ES6 and mobile 02/10/23, Lucas Bubner.
 */

let canvas = document.getElementById("stars"),
    particleCount = 100,
    flareCount = 10,
    motion = 0.03,
    color = "#ed1c24",
    particleSizeBase = 1.1,
    particleSizeMultiplier = 0.5,
    flareSizeBase = 100,
    flareSizeMultiplier = 100,
    lineWidth = 1,
    // Chance per frame of link, higher = smaller chance
    linkChance = 5,
    // Min linked vertices
    linkLengthMin = 7,
    // Max linked vertices
    linkLengthMax = 10,
    // Number between 0 & 1
    linkOpacity = 0.2,
    // Link fade-out frames
    linkFade = 400,
    // Distance a link travels in 1 frame
    linkSpeed = 0.1,
    glareAngle = -60,
    glareOpacityMultiplier = 0.01,
    renderParticles = true,
    renderParticleGlare = false,
    renderFlares = true,
    renderLinks = true,
    renderMesh = false,
    flicker = true,
    // Higher = smoother flicker
    flickerSmoothing = 15,
    blurSize = 1,
    randomMotion = true,
    noiseLength = 1000,
    noiseStrength = 1;

// Reduce settings if on mobile
if (/Mobi/.test(navigator.userAgent)) {
    particleCount = 25;
    flareCount = 5;
    noiseLength = 500;
    blurSize = 0.5;
}

let context = canvas.getContext("2d"),
    mouse = { x: 0, y: 0 },
    // Multiplier for delaunay points, since floats too small can mess up the algorithm
    c = 1000,
    n = 0,
    nAngle = (Math.PI * 2) / noiseLength,
    nRad = 100,
    nPos = { x: 0, y: 0 },
    points = [],
    vertices = [],
    triangles = [],
    links = [],
    particles = [],
    flares = [];

function init() {
    let i, j, k;

    // requestAnimFrame polyfill
    window.requestAnimFrame = (() => {
        return (
            window.requestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    resize();

    mouse.x = canvas.clientWidth / 2;
    mouse.y = canvas.clientHeight / 2;

    // Create particle positions
    for (i = 0; i < particleCount; i++) {
        let p = new Particle();
        particles.push(p);
        points.push([p.x * c, p.y * c]);
    }

    // Delaunay triangulation
    vertices = Delaunay.triangulate(points);

    // Create an array of "triangles" (groups of 3 indices)
    let tri = [];
    for (i = 0; i < vertices.length; i++) {
        if (tri.length === 3) {
            triangles.push(tri);
            tri = [];
        }
        tri.push(vertices[i]);
    }

    // Tell all the particles who their neighbors are
    for (i = 0; i < particles.length; i++) {
        // Loop through all triangles
        for (j = 0; j < triangles.length; j++) {
            // Check if this particle's index is in this triangle
            k = triangles[j].indexOf(i);
            // If it is, add its neighbors to the particles contacts list
            if (k !== -1) {
                triangles[j].forEach((value) => {
                    if (value !== i && particles[i].neighbors.indexOf(value) === -1) {
                        particles[i].neighbors.push(value);
                    }
                });
            }
        }
    }

    if (renderFlares) {
        // Create flare positions
        for (i = 0; i < flareCount; i++) {
            flares.push(new Flare());
        }
    }

    // Motion mode
    if ("ontouchstart" in document.documentElement && window.DeviceOrientationEvent) {
        window.addEventListener(
            "deviceorientation",
            (e) => {
                mouse.x = canvas.clientWidth / 2 - (e.gamma / 90) * (canvas.clientWidth / 2) * 2;
                mouse.y = canvas.clientHeight / 2 - (e.beta / 90) * (canvas.clientHeight / 2) * 2;
            },
            true
        );
    } else {
        // Mouse move listener
        document.body.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
    }

    // Animation loop
    function animLoop() {
        requestAnimFrame(animLoop);
        resize();
        render();
    }

    animLoop();
}

function render() {
    if (!canvas) return;
    if (randomMotion) {
        n++;
        if (n >= noiseLength) {
            n = 0;
        }

        nPos = noisePoint(n);
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (blurSize > 0) {
        context.shadowBlur = blurSize;
        context.shadowColor = color;
    }

    if (renderParticles) {
        // Render particles
        for (let i = 0; i < particleCount; i++) {
            particles[i].render();
        }
    }

    if (renderMesh) {
        // Render all lines
        context.beginPath();
        for (let v = 0; v < vertices.length - 1; v++) {
            // Splits the array into triplets
            if ((v + 1) % 3 === 0) {
                continue;
            }

            let p1 = particles[vertices[v]],
                p2 = particles[vertices[v + 1]];

            let pos1 = position(p1.x, p1.y, p1.z),
                pos2 = position(p2.x, p2.y, p2.z);

            context.moveTo(pos1.x, pos1.y);
            context.lineTo(pos2.x, pos2.y);
        }
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.stroke();
        context.closePath();
    }

    if (renderLinks) {
        // Possibly start a new link
        if (random(0, linkChance) === linkChance) {
            let length = random(linkLengthMin, linkLengthMax);
            let start = random(0, particles.length - 1);
            startLink(start, length);
        }

        // Render existing links
        // Iterate in reverse so that removing items doesn't affect the loop
        for (let l = links.length - 1; l >= 0; l--) {
            if (links[l] && !links[l].finished) {
                links[l].render();
            } else {
                delete links[l];
            }
        }
    }

    if (renderFlares) {
        // Render flares
        for (let j = 0; j < flareCount; j++) {
            flares[j].render();
        }
    }
}

function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = canvas.width * (canvas.clientHeight / canvas.clientWidth);
}

function startLink(vertex, length) {
    links.push(new Link(vertex, length));
}

class Particle {
    constructor() {
        this.x = random(-0.1, 1.1, true);
        this.y = random(-0.1, 1.1, true);
        this.z = random(0, 4);
        this.color = color;
        this.opacity = random(0.1, 1, true);
        this.flicker = 0;
        // Placeholder for neighbors
        this.neighbors = [];
    }
    render() {
        let pos = position(this.x, this.y, this.z),
            r = (this.z * particleSizeMultiplier + particleSizeBase) * (sizeRatio() / 1000),
            o = this.opacity;

        if (flicker) {
            let newVal = random(-0.5, 0.5, true);
            this.flicker += (newVal - this.flicker) / flickerSmoothing;
            if (this.flicker > 0.5) this.flicker = 0.5;
            if (this.flicker < -0.5) this.flicker = -0.5;
            o += this.flicker;
            if (o > 1) o = 1;
            if (o < 0) o = 0;
        }

        context.fillStyle = this.color;
        context.globalAlpha = o;
        context.beginPath();
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();

        if (renderParticleGlare) {
            context.globalAlpha = o * glareOpacityMultiplier;
            context.ellipse(
                pos.x,
                pos.y,
                r * 100,
                r,
                (glareAngle - (nPos.x - 0.5) * noiseStrength * motion) * (Math.PI / 180),
                0,
                2 * Math.PI,
                false
            );
            context.fill();
            context.closePath();
        }

        context.globalAlpha = 1;
    }
}

class Flare {
    constructor() {
        this.x = random(-0.25, 1.25, true);
        this.y = random(-0.25, 1.25, true);
        this.z = random(0, 2);
        this.color = color;
        this.opacity = random(0.001, 0.01, true);
    }

    render() {
        let pos = position(this.x, this.y, this.z),
            r = (this.z * flareSizeMultiplier + flareSizeBase) * (sizeRatio() / 1000);

        // Feathered circles
        context.beginPath();
        context.globalAlpha = this.opacity;
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        context.globalAlpha = 1;
    }
}

class Link {
    constructor(startVertex, numPoints) {
        this.length = numPoints;
        this.verts = [startVertex];
        this.stage = 0;
        this.linked = [startVertex];
        this.distances = [];
        this.traveled = 0;
        this.fade = 0;
        this.finished = false;
    }
    render() {
        // Stages:
        // 0. Vertex collection
        // 1. Render line reaching from vertex to vertex
        // 2. Fade out
        // 3. Finished (delete me)
        let i, p, pos, points;

        switch (this.stage) {
            // VERTEX COLLECTION STAGE
            case 0:
                // Grab the last member of the link
                let last = particles[this.verts[this.verts.length - 1]];
                if (last && last.neighbors && last.neighbors.length > 0) {
                    // Grab a random neighbor
                    let neighbor = last.neighbors[random(0, last.neighbors.length - 1)];
                    // If we haven't seen that particle before, add it to the link
                    if (this.verts.indexOf(neighbor) === -1) {
                        this.verts.push(neighbor);
                    }
                    // If we have seen that particle before, we'll just wait for the next frame
                } else {
                    this.stage = 3;
                    this.finished = true;
                }

                if (this.verts.length >= this.length) {
                    // Calculate all distances at once
                    for (i = 0; i < this.verts.length - 1; i++) {
                        let p1 = particles[this.verts[i]],
                            p2 = particles[this.verts[i + 1]],
                            dx = p1.x - p2.x,
                            dy = p1.y - p2.y,
                            dist = Math.sqrt(dx * dx + dy * dy);

                        this.distances.push(dist);
                    }
                    this.stage = 1;
                }
                break;

            // RENDER LINE ANIMATION STAGE
            case 1:
                if (this.distances.length > 0) {
                    points = [];
                    //let a = 1;
                    // Gather all points already linked
                    for (i = 0; i < this.linked.length; i++) {
                        p = particles[this.linked[i]];
                        pos = position(p.x, p.y, p.z);
                        points.push([pos.x, pos.y]);
                    }

                    let linkSpeedRel = linkSpeed * 0.00001 * canvas.width;
                    this.traveled += linkSpeedRel;
                    let d = this.distances[this.linked.length - 1];
                    // Calculate last point based on linkSpeed and distance travelled to next point
                    if (this.traveled >= d) {
                        this.traveled = 0;
                        // We've reached the next point, add coordinates to array
                        this.linked.push(this.verts[this.linked.length]);
                        p = particles[this.linked[this.linked.length - 1]];
                        pos = position(p.x, p.y, p.z);
                        points.push([pos.x, pos.y]);

                        if (this.linked.length >= this.verts.length) {
                            this.stage = 2;
                        }
                    } else {
                        // We're still travelling to the next point, get coordinates at travel distance
                        // http://math.stackexchange.com/a/85582
                        let a = particles[this.linked[this.linked.length - 1]],
                            b = particles[this.verts[this.linked.length]],
                            t = d - this.traveled,
                            x = (this.traveled * b.x + t * a.x) / d,
                            y = (this.traveled * b.y + t * a.y) / d,
                            z = (this.traveled * b.z + t * a.z) / d;

                        pos = position(x, y, z);

                        points.push([pos.x, pos.y]);
                    }

                    this.drawLine(points);
                } else {
                    this.stage = 3;
                    this.finished = true;
                }
                break;

            // FADE OUT STAGE
            case 2:
                if (this.verts.length > 1) {
                    if (this.fade < linkFade) {
                        this.fade++;

                        // Render full link between all vertices and fade over time
                        points = [];
                        let alpha = (1 - this.fade / linkFade) * linkOpacity;
                        for (i = 0; i < this.verts.length; i++) {
                            p = particles[this.verts[i]];
                            pos = position(p.x, p.y, p.z);
                            points.push([pos.x, pos.y]);
                        }
                        this.drawLine(points, alpha);
                    } else {
                        this.stage = 3;
                        this.finished = true;
                    }
                } else {
                    this.stage = 3;
                    this.finished = true;
                }
                break;

            // FINISHED STAGE
            case 3:
            default:
                this.finished = true;
                break;
        }
    }
    drawLine(points, alpha) {
        if (typeof alpha !== "number") alpha = linkOpacity;

        if (points.length > 1 && alpha > 0) {
            context.globalAlpha = alpha;
            context.beginPath();
            for (let i = 0; i < points.length - 1; i++) {
                context.moveTo(points[i][0], points[i][1]);
                context.lineTo(points[i + 1][0], points[i + 1][1]);
            }
            context.strokeStyle = color;
            context.lineWidth = lineWidth;
            context.stroke();
            context.closePath();
            context.globalAlpha = 1;
        }
    }
}

// Utils
function noisePoint(i) {
    let a = nAngle * i,
        cosA = Math.cos(a),
        sinA = Math.sin(a),
        rad = nRad;
    return {
        x: rad * cosA,
        y: rad * sinA,
    };
}

function position(x, y, z) {
    return {
        x: x * canvas.width + (canvas.width / 2 - mouse.x + (nPos.x - 0.5) * noiseStrength) * z * motion,
        y: y * canvas.height + (canvas.height / 2 - mouse.y + (nPos.y - 0.5) * noiseStrength) * z * motion,
    };
}

function sizeRatio() {
    return canvas.width >= canvas.height ? canvas.width : canvas.height;
}

function random(min, max, float) {
    return float ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min + 1)) + min;
}

if (canvas) init();
