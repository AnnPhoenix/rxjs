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

console.warn("The lesson 23 Code")
var subject = new Rx.Subject();
var o1 = generateSubscriber();
var o2 = generateSubscriber();
subject.subscribe(o1);
subject.subscribe(o2);
subject.next(1)
subject.next(2)

console.warn("The lesson 23 Code", "BehaviorSubject")
// var sub1 = new Rx.BehaviorSubject(0)
// sub1.subscribe(o1)
// sub1.next(1)
// sub1.next(2)
// sub1.next(3)
// setTimeout(() => {
//     sub1.subscribe(o2)
// }, 3000)

console.warn("The lesson 23 Code", "ReplaySubject")
// var sub2 = new Rx.ReplaySubject(2)
// sub2.subscribe(o1)
// sub2.next(1)
// sub2.next(2)
// sub2.next(3)
// setTimeout(() => {
//     sub2.subscribe(o2)
// }, 3000)

console.warn("The lesson 23 Code", "AsyncSubject")
// var sub3 = new Rx.AsyncSubject()
// sub3.subscribe(o1)
// sub3.next(1)
// sub3.next(2)
// sub3.next(3)
// sub3.complete()
// setTimeout(() => {
//     sub3.subscribe(o2)
// }, 3000)