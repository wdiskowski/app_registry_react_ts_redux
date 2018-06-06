interface NomNoml {
    draw: (canvas: HTMLCanvasElement, code: string, scale?: number) => any
}


declare module 'nomnoml' {
    const nomnoml: NomNoml;
    export = nomnoml;
}
