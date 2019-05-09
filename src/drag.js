import * as Rx from "rxjs/Rx"

console.warn("The lesson drag Code")

const dragDOM = document.querySelector("#drag");
const body = document.body;

const mouseDown = Rx.Observable.fromEvent(dragDOM, "mousedown");
const mouseUp = Rx.Observable.fromEvent(body, "mouseup");
const mouseMove = Rx.Observable.fromEvent(body, "mousemove");

let startX, startY, domX, domY;
dragDOM && mouseDown
    .map(e => {
        startX = e.clientX;
        startY = e.clientY;
        domX = dragDOM.style.left ? Number(dragDOM.style.left.slice(0, -2)) : 0;
        domY = dragDOM.style.top ? Number(dragDOM.style.top.slice(0, -2)) : 0;
        return e
    })
    .flatMap(e => {
        return mouseMove.takeUntil(mouseUp)
    })
    // .map(e => {
    //     return mouseMove.takeUntil(mouseUp)
    // })
    // .concatAll()
    .map(m => ({ x: m.clientX, y: m.clientY }))
    .subscribe(pos => {
        dragDOM.style.left = `${domX + (pos.x - startX)}px`;
        dragDOM.style.top = `${domY + (pos.y - startY)}px`;
        console.log(domX, domY)
    })