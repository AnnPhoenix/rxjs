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

console.warn("The lesson 12 Code")
console.warn("The lesson 12 Code", "Array.prototype.reduce")
var arr = [1, 2, 3, 4];
var result = arr.reduce((origin, next) => {
    console.log(origin);
    return origin + next;
}, 0)

console.log(result);

console.warn("The lesson 12 Code", "scan")
Rx.Observable.from("hello")
    // .zip(
    //     Rx.Observable.interval(600),
    //     (x, y) => x
    // )
    .scan((origin, next) => origin + next, "")
    .subscribe(generateSubscriber())

const add = document.querySelector("#add")
const minus = document.querySelector("#minus")
const state = document.querySelector(".state")

const addClick = Rx.Observable.fromEvent(add, "click").mapTo(1)
const minusClick = Rx.Observable.fromEvent(minus, "click").mapTo(-1)

Rx.Observable.empty()
    .startWith(0)
    .merge(addClick, minusClick)
    .scan((origin, next) => origin + next, 0)
    .subscribe(value => state.innerHTML = value)

console.warn("The lesson 12 Code", "buffer")
// Rx.Observable.interval(300).buffer(
//     Rx.Observable.interval(901)
// ).subscribe(generateSubscriber());

console.warn("The lesson 12 Code", "bufferTime")
// Rx.Observable.interval(300)
//     .bufferTime(1000)
//     .subscribe(generateSubscriber());

console.warn("The lesson 12 Code", "bufferCount")
// Rx.Observable.interval(300)
//     .bufferCount(3)
//     .subscribe(generateSubscriber());

console.warn("The lesson 12 Code", "double click practice")
Rx.Observable.fromEvent(
    document.querySelector("#doubleClick"),
    "click"
).bufferTime(1000)
    .filter(arr => arr.length >= 2)
    .subscribe(value => {
        alert("success");
    })