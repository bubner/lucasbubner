export function* stepAccumulate(increment: number, startAtZero?: boolean) {
    let accumulated = 0;
    if (startAtZero) yield 0;
    while (true) {
        yield accumulated += increment;
    }
}

export function shuffle<T>(array: Array<T>): Array<T> {
    return array
        .map((v) => ({ val: v, rand: Math.random() }))
        .sort((a, b) => a.rand - b.rand)
        .map((vp) => vp.val);
}