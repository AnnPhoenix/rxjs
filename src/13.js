import * as Rx from "rxjs/Rx"

function generateSubscriber() {
    return {
        next: function (value) {
            console.log(value)
        },
        complete: function () {
            console.log('complete!');
        },
        error: function (error) {
            console.error(error)
        }
    }
}

console.warn("The lesson 13 Code")
console.warn("The lesson 13 Code", "delay")
// Rx.Observable.interval(300)
//     .take(5)
//     .delay(1000)
//     .subscribe(generateSubscriber());

// 可以传Date
// Rx.Observable.interval(300)
//     .take(5)
//     .delay(new Date(new Date().getTime() - 1000))
//     .subscribe(generateSubscriber())

console.warn("The lesson 13 Code", "delayWhen")
// Rx.Observable.interval(300).take(5).delayWhen(
//     x => Rx.Observable.empty().delay(100 * x * x)
// ).subscribe(generateSubscriber())

var imgList = document.querySelectorAll(".delay-when");
var movePos = Rx.Observable.fromEvent(document, "mousemove")
    .throttleTime(12)
    .map(e => ({ x: e.clientX, y: e.clientY }))

function followMouse(DOMArr) {
    const delayTime = 600;
    DOMArr.forEach((item, index) => {
        movePos
            .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
            .subscribe(pos => {
                item.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
            })
    })
}

followMouse(Array.from(imgList))