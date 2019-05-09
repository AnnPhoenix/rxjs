import * as Rx from "rxjs/Rx"

console.warn("The lesson 5 Code")

/* 创建 */
var observable = Rx.Observable.create(observer => {
    observer.next("Jerry");
    observer.next("Anna");

    // setTimeout(() => {
    //     observer.next("RxJS 30 days!")
    // }, 30)
})

console.log("start");
observable.subscribe(value => {
    console.log(value);
})
console.log("end");

/* 建立一个观察者 */
var observable1 = Rx.Observable.create(observer => {
    observer.next("A");
    observer.next("B");
    observer.complete();
    observer.error("Error in here!");
    observer.next("not work");
})

var observer1 = {
    next(value) {
        console.info(value);
    },

    error(error) {
        console.error(error)
    },

    complete() {
        console.log("complete")
    }
}

// 可以传递observer或直接传入方法
observable1.subscribe(observer1);
observable1.subscribe(value => {
    console.info("next", value)
}, error => {
    console.error("error", error);
}, () => {
    console.log("complete")
});