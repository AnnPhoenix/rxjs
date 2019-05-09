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

console.warn("The lesson 10 Code")

/* combineLatest */
console.warn("The lesson 10 Code", "combineLatest")
// Rx.Observable.interval(500).take(3).combineLatest(
//     Rx.Observable.interval(300).take(6),
//     (x, y) => x + y
// ).subscribe(generateSubscriber());

/* combineLatest */
console.warn("The lesson 10 Code", "combineLatest")
// Rx.Observable.interval(500).take(3).zip(
//     Rx.Observable.interval(300).take(6),
//     (x, y) => x + y
// ).subscribe(generateSubscriber())

/* zip */
console.warn("The lesson 10 Code", "zip")
// Rx.Observable.from("hello").zip(
//     Rx.Observable.of(1, 2, 3, 4, 5),
//     // Rx.Observable.interval(1000),
//     (x, y) => x
// ).subscribe(generateSubscriber())

/* withLatestFrom */
console.warn("The lesson 10 code", "withLatestFrom")
// Rx.Observable.from("hello").zip(
//     Rx.Observable.interval(500),
//     (x, y) => x
// ).withLatestFrom(
//     Rx.Observable.from([0, 1, 0, 0, 0, 1]).zip(
//         Rx.Observable.interval(300),
//         (x, y) => x
//     ),
//     (x, y) => {
//         console.warn(y)
//         return y === 1 ? x.toUpperCase() : x;
//     }
// ).subscribe(generateSubscriber())