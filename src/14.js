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

console.warn("The lesson 14 Code")
console.warn("The lesson 14 Code", "debounce")
// Rx.Observable.interval(300)
//     .take(5)
//     .debounceTime(1000)
//     .subscribe(generateSubscriber())

console.warn("The lesson 14 Code", "throttle")
// Rx.Observable.interval(300).take(5).throttleTime(1000).subscribe(generateSubscriber())