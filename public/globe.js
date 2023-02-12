// https://codepen.io/ben_sterling/pen/xEKmEB
(function () {
    //here we go
    var width,
        height,
        container,
        canvas,
        ctx,
        points = true;

    initStructure();
    initAnimation();

    function initStructure() {
        width = 470;
        height = 490;

        container = document.getElementById("geo-globe");
        canvas = document.getElementById("canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");

        dark = "rgba(153,3,9,1)";
        light = "rgba(237,28,35,1)";
        gold = "rgba(141,116,75,1)";

        // Boring setup
        points = [];

        points = [
            { x: 216, originX: 216, y: 49, originY: 49, rad: 4, color: dark }, //0
            { x: 125, originX: 125, y: 95, originY: 95, rad: 4, color: dark }, //1
            { x: 250, originX: 250, y: 100, originY: 100, rad: 10, color: dark }, //2
            { x: 346, originX: 346, y: 80, originY: 80, rad: 4, color: dark }, //3
            { x: 51, originX: 51, y: 182, originY: 182, rad: 4, color: dark }, //4
            { x: 120, originX: 120, y: 205, originY: 205, rad: 6, color: dark }, //5
            { x: 380, originX: 380, y: 165, originY: 165, rad: 4, color: dark }, //6
            { x: 420, originX: 420, y: 190, originY: 190, rad: 6, color: dark }, //7
            { x: 50, originX: 50, y: 270, originY: 270, rad: 3, color: dark }, //8
            { x: 293, originX: 293, y: 260, originY: 260, rad: 12, color: dark }, //9
            { x: 65, originX: 65, y: 320, originY: 320, rad: 3, color: dark }, //10
            { x: 170, originX: 170, y: 350, originY: 350, rad: 9, color: dark }, //11
            { x: 400, originX: 400, y: 300, originY: 300, rad: 4, color: dark }, //12
            { x: 100, originX: 100, y: 370, originY: 370, rad: 4, color: dark }, //13
            { x: 290, originX: 290, y: 380, originY: 380, rad: 6, color: dark }, //14
            { x: 370, originX: 370, y: 370, originY: 370, rad: 3, color: dark }, //15
            { x: 175, originX: 175, y: 400, originY: 400, rad: 4, color: dark }, //16
            { x: 270, originX: 270, y: 415, originY: 415, rad: 4, color: dark }, //17

            { x: 314, originX: 314, y: 184, originY: 184, rad: 4, color: light }, //18
            { x: 235, originX: 235, y: 270, originY: 270, rad: 6, color: light }, //19
            { x: 112, originX: 112, y: 315, originY: 315, rad: 5, color: light }, //20
            { x: 140, originX: 140, y: 150, originY: 150, rad: 4, color: light }, //19
        ];

        for (var i = 0; i < points.length; i++) {
            points[i].jointo = [];
            points[i].length = getRandomInt(16, 35);
            points[i].seperation = getRandomInt(500, 1300);
            points[i].offset = getRandomInt(100, 1000);
        }

        //group up and choose your partner
        points[0].jointo.push(points[1], points[2], points[3]);
        points[1].jointo.push(points[4], points[2], points[5]);
        points[2].jointo.push(points[3], points[5], points[6], points[9]);
        points[3].jointo.push(points[6], points[7]);
        points[4].jointo.push(points[5], points[8], points[10]);
        points[5].jointo.push(points[9], points[10], points[11]);
        points[6].jointo.push(points[7], points[9], points[12]);
        points[7].jointo[0] = points[12];
        points[8].jointo[0] = points[10];
        points[9].jointo.push(points[11], points[12], points[14]);
        points[10].jointo.push(points[11], points[13], points[16]);
        points[11].jointo.push(points[14], points[16]);
        points[12].jointo.push(points[14], points[15]);
        points[13].jointo[0] = points[16];
        points[14].jointo.push(points[15], points[16], points[17]);
        points[15].jointo[0] = points[17];
        points[16].jointo[0] = points[17];

        points[18].jointo.push(points[2], points[7], points[19]);
        points[19].jointo.push(points[12], points[17], points[4], points[20]);
        points[20].jointo.push(points[8], points[16]);
        points[21].jointo.push(points[18], points[4], points[0]);

        // Do the drawy-draw for circles
        for (var i in points) {
            var c = new Circle(points[i], points[i].rad, points[i].color);
            points[i].circle = c;
        }
    }

    // The move part
    function initAnimation() {
        render();
        for (var i in points) {
            shiftPoint(points[i]);
        }
    }

    //do the thing
    function render() {
        ctx.clearRect(0, 0, width, height);
        for (var i in points) {
            if (points[i].color == light) {
                drawLines(points[i]);
                drawTransit(points[i]);
                points[i].circle.draw();
            }
        }
        for (var i in points) {
            if (points[i].color == dark) {
                drawLines(points[i]);
                drawTransit(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(render);
    }

    //tweenage
    function shiftPoint(p) {
        TweenLite.to(p, 1 + 2 * Math.random(), {
            x: getRandomInt(p.originX - 8, p.originX + 8),
            y: getRandomInt(p.originY - 8, p.originY + 8),
            // ease:Circ.easeInOut,
            ease: Circ.easeOut,
            onComplete: function () {
                shiftPoint(p);
            },
        });
    }

    // Every point has a friend
    function drawLines(p) {
        for (var i in p.jointo) {
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.jointo[i].x, p.jointo[i].y);
            ctx.strokeStyle = p.color;
            ctx.stroke();
        }
    }

    //follow the leader
    function drawTransit(p) {
        for (var i in p.jointo) {
            if (p.offset != null) {
                ctx.save();
                ctx.setLineDash([p.length, p.seperation]);
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.jointo[0].x, p.jointo[0].y);
                if (p.color == light) {
                    ctx.strokeStyle = light;
                } else {
                    ctx.strokeStyle = gold;
                }
                ctx.lineDashOffset = p.offset;
                ctx.stroke();
                ctx.restore();
                p.offset = p.offset + 0.2 + 0.4 * Math.random();
            }
        }
    }

    //circlify
    function Circle(pos, rad, color) {
        this.draw = function () {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, rad, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
        };
    }

    //don't be too random
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})();
