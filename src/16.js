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

console.warn("The lesson 16 Code")
console.warn("The lesson 16 Code", "catch")
// Rx.Observable.from(["a", "b", "c", "d", 2])
//     .zip(
//         Rx.Observable.interval(500),
//         x => x
//     )
//     .map(x => x.toUpperCase())
//     // .catch(e => Rx.Observable.of("h"))
//     // .catch(e => Rx.Observable.empty())
//     .catch((e, obs) => obs.delay(1000))
//     .subscribe(generateSubscriber())

console.warn("The lesson 16 Code", "retry")
// Rx.Observable.from(["a", "b", "c", "d", 2])
//     .zip(
//         Rx.Observable.interval(500),
//         x => x
//     )
//     .map(x => x.toUpperCase())
//     .retry(1)
//     .subscribe(generateSubscriber())

console.warn("The lesson 16 Code", "retryWhen")
// Rx.Observable.from(["a", "b", "c", "d", 2])
//     .zip(
//         Rx.Observable.interval(500),
//         x => x
//     )
//     .map(x => x.toUpperCase())
//     .retryWhen(errorObs => Rx.Observable.of(1, 2, 3))
//     // .retryWhen(errorObs => errorObs.delay(1000))
//     .subscribe(generateSubscriber())

console.warn("The lesson 16 Code", "repeat")
// Rx.Observable.from("abc")
//     .zip(
//         Rx.Observable.interval(500),
//         x => x
//     )
//     .repeat(2)
//     .subscribe(generateSubscriber())