import * as Rx from "rxjs/Rx"

console.warn("The lesson 8 Code")

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

// // take
console.warn("The lesson 8 Code", "take");
// Rx.Observable.interval(1000).take(3).subscribe(generateSubscriber())

// // first
console.warn("The lesson 8 Code", "first");
// Rx.Observable.interval(1000).first().subscribe(generateSubscriber())

// // takeUntil
console.warn("The lesson 8 Code", "takeUntil");
// var source = Rx.Observable.interval(1000);
// var click = Rx.Observable.fromEvent(document.body, "click");
// source.takeUntil(click).subscribe(generateSubscriber());

// concatAll
console.warn("The lesson 8 Code", "concatAll");
// var click1 = Rx.Observable.fromEvent(document.body, "click");
// var source1 = click1.map(e => Rx.Observable.of(1, 2, 3));
// console.log(source1);
// console.log(source1.concatAll())
// source1.concatAll().subscribe(generateSubscriber());
// source1.subscribe(generateSubscriber());