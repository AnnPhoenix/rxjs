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

console.warn("The lesson 9 Code")

/* skip */
console.warn("The lesson 9 Code", "skip")
// Rx.Observable.interval(1000).skip(3).subscribe(generateSubscriber())

/* takeLast */
console.warn("The lesson 9 Code", "takeLast");
// takeLast需要等待Observable全部执行完才取值
// last just like takeLast(1)
// Rx.Observable.interval(1000).take(6).takeLast(2).subscribe(generateSubscriber())
// Rx.Observable.interval(1000).take(6).subscribe(generateSubscriber())
// Rx.Observable.interval(1000).take(6).last().subscribe(generateSubscriber())

/* concat */
console.warn("The lesson 9 Code", "concat");
// var rx = Rx.Observable.interval(1000).take(3);
// var rx2 = Rx.Observable.of(3);
// var rx3 = Rx.Observable.of(4, 5, 6);
// rx.concat(rx2, rx3).subscribe(generateSubscriber())
// // 静态写法
// Rx.Observable.concat(rx, rx2, rx3).subscribe(generateSubscriber());

/* startWith */
console.warn("The lesson 9 Code", "startWith");
// Rx.Observable.interval(1000).take(2).startWith(9999).subscribe(generateSubscriber())

/* merge 多个observable同时处理*/
console.warn("The lesson 9 Code", "merge")
// Rx.Observable.merge(
//     Rx.Observable.interval(500).take(3),
//     Rx.Observable.interval(300).take(6),
// ).subscribe(generateSubscriber())