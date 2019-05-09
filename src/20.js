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

console.warn("The lesson 20 Code")
console.warn("The lesson 20 Code", "window")
// Rx.Observable.interval(1000)
// Rx.Observable.fromEvent(document, "click")
//     .window(
//         Rx.Observable.interval(1000)
//         // Rx.Observable.fromEvent(document, "click")
//     )
//     .map(innerObservable => innerObservable.count())
//     .switch()
//     .subscribe(generateSubscriber())


// Rx.Observable.interval(300)
//     .take(5)
//     .groupBy(x => x % 2)
//     .subscribe(generateSubscriber())


// var people = [
//     { name: 'Anna', score: 100, subject: 'English' },
//     { name: 'Anna', score: 90, subject: 'Math' },
//     { name: 'Anna', score: 96, subject: 'Chinese' },
//     { name: 'Jerry', score: 80, subject: 'English' },
//     { name: 'Jerry', score: 100, subject: 'Math' },
//     { name: 'Jerry', score: 90, subject: 'Chinese' },
// ];

// Rx.Observable.from(people)
//     // .zip(
//     //     Rx.Observable.interval(300),
//     //     (x, y) => x
//     // )
//     .groupBy(person => person.name)
//     .map(group => group.reduce((acc, curr) => ({
//         name: curr.name,
//         score: curr.score + acc.score
//     })))
//     .mergeAll()
//     .subscribe(console.log);