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

console.warn("The lesson 24 Code")
console.warn("The lesson 24 Code", "multicast", "refCount", "publish")
var observer1 = generateSubscriber()
var observer2 = generateSubscriber()
var observable = Rx.Observable.interval(1000)
    .take(3)
    .share()
    // .publish()
    // // .multicast(new Rx.Subject())
    // .refCount()

// observable.subscribe(observer1)
// // observable.connect()

// setTimeout(() => {
//     observable.subscribe(observer2)
// }, 1000)