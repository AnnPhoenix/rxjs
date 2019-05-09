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

console.warn("The lesson 28 Code")
// console.log("before subscribe")
// Rx.Observable.create(observer => {
//     observer.next(1)
//     observer.next(2)
//     observer.next(3)
//     observer.complete()
// })
//     .observeOn(Rx.Scheduler.async)
//     .subscribe(generateSubscriber())
// console.log("after subscribe")

Rx.Observable.of(10).repeat().take(1)
.subscribe(console.log);