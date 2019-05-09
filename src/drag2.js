import * as Rx from "rxjs/Rx"
console.warn("The lesson [Drag2] Code")

const video = document.querySelector("#video");
const anchor = document.querySelector("#anchor");
const scroll = Rx.Observable.fromEvent(document, "scroll");
scroll
    .map(e => anchor.getBoundingClientRect().bottom < 0)
    .subscribe(bool => {
        bool ? video.classList.add("video-fixed") : video.classList.remove("video-fixed")
    })

const mouseDown = Rx.Observable.fromEvent(video, "mousedown");
const mouseUp = Rx.Observable.fromEvent(document, "mouseup");
const mouseMove = Rx.Observable.fromEvent(document, "mousemove");

// valid val
const validValue = (value, max, min) => {
    return Math.min(Math.max(value, min), max)
}

mouseDown
    .filter(e => video.classList.contains("video-fixed"))
    .flatMap(e => mouseMove.takeUntil(mouseUp))
    .withLatestFrom(mouseDown, (move, down) => {
        return {
            x: validValue(move.clientX - down.offsetX, window.innerWidth - 320, 0),
            y: validValue(move.clientY - down.offsetY, window.innerHeight - 180, 0)
        }
    })
    .subscribe(pos => {
        video.style.top = `${pos.y}px`;
        video.style.left = `${pos.x}px`;
    })