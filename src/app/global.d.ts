// global.d.ts
declare module globalThis {
    function fetch(url: RequestInfo, init?: RequestInit);
}
