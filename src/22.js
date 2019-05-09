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

console.warn("The lesson 22 Code")
console.warn("The lesson 22 Code", "subject")

var observerA = generateSubscriber();
var observerB = generateSubscriber();
var subject = {
    observers: [],
    subscribe(observer) {
        this.observers.push(observer)
    },
    next(value) {
        this.observers.forEach(o => o.next(value))
    },
    error(e) {
        this.observers.forEach(o => o.error(e))
    },
    complete() {
        this.observers.forEach(o => o.complete())
    }
}

// subject.subscribe(observerA);
// Rx.Observable.interval(1000).take(3).subscribe(subject);
// setTimeout(() => {
//     subject.subscribe(observerB)
// }, 1000)

// var subject2 = new Rx.Subject();
// subject2.subscribe(observerA)
// Rx.Observable.interval(1000).take(3).subscribe(subject2)
// setTimeout(() => {
//     subject2.subscribe(observerB)
// }, 1000)