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

console.warn("The lesson 15 Code")
console.warn("The lesson 15 Code", "distinct")
// Rx.Observable.from("abcab").zip(
//     Rx.Observable.interval(300),
//     x => x
// ).distinct().subscribe(generateSubscriber())

// Rx.Observable.from([{ value: "a" }, { value: "b" }, { value: "c" }, { value: "a" }, { value: "B" }])
//     .zip(
//         Rx.Observable.interval(300),
//         x => x
//     )
//     .distinct(obj => String.prototype.toUpperCase.call(obj.value))
//     .subscribe(generateSubscriber())

// Rx.Observable.from("abccb")
//     .zip(
//         Rx.Observable.interval(300),
//         x => x
//     )
//     .distinctUntilChanged()
//     .subscribe(generateSubscriber())