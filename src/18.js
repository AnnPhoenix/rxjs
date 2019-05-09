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

console.warn("The lesson 18 Code")
console.warn("The lesson 18 Code", "concatMap")
// Rx.Observable.fromEvent(document.body, "click")
//     // .map(e => Rx.Observable.interval(1000).take(3))
//     // .concatAll()
//     .concatMap(e => Rx.Observable.interval(1000).take(3))
//     .subscribe(generateSubscriber())

console.warn("The lesson 18 Code", "switchMap")
// Rx.Observable.fromEvent(document.body, "click")
//     // .map(e => Rx.Observable.interval(1000).take(3))
//     // .switch()
//     .switchMap(e => Rx.Observable.interval(1000).take(3))
//     .subscribe(generateSubscriber())

console.warn("The lesson 18 Code", "mergeMap")
// Rx.Observable.fromEvent(document.body, "click")
//     // .map(e => Rx.Observable.interval(1000).take(3))
//     // .merge()
//     .mergeMap(e => Rx.Observable.interval(1000).take(3))
//     .subscribe(generateSubscriber())