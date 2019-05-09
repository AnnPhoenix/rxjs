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

console.warn("The lesson 17 Code")
console.warn("The lesson 17 Code", "concatAll")
// Rx.Observable.fromEvent(document.body, "click")
//     .map(e => Rx.Observable.interval(1000).take(3))
//     .concatAll()
//     .subscribe(generateSubscriber())


console.warn("The lesson 17 Code", "switch")
// Rx.Observable.fromEvent(document.body, "click")
//     .map(e => Rx.Observable.interval(1000))
//     .switch()
//     .subscribe(generateSubscriber())


console.warn("The lesson 17 Code", "mergeAll")
// Rx.Observable.fromEvent(document.body, "click")
//     .map(e => Rx.Observable.interval(1000).take(3))
//     .mergeAll(2)
//     .subscribe(generateSubscriber())