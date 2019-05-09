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

console.warn("The lesson 6 Code")

// of
console.warn("The lesson 6 Code", "of")
var obervable = Rx.Observable.of("A", "B");
obervable.subscribe(value => console.log("next", value));

// from
console.warn("The lesson 6 Code", "from")
var arr = ["Ann", "Phoenixer"]
var observable1 = Rx.Observable.from(arr);
observable1 = Rx.Observable.from("Ann Phoenixer");
// observable1 = Rx.Observable.from(Promise.resolve("Promise.resolve"));
// observable1 = Rx.Observable.from(Promise.reject("Promise.reject"));
observable1.subscribe(
    value => console.log("next", value),
    e => console.error("error", e),
    () => console.log("complete"),
);

// // fromEvent
// console.warn("The lesson 6 Code", "fromEvent")
// var observable2 = Rx.Observable.fromEvent(document.body, "click");
// observable2.subscribe(
//     value => console.log("next", value),
//     e => console.error("error", e),
//     () => console.log("complete"),
// );

// fromEventPattern
console.warn("The lesson 6 Code", "fromEventPattern")
class Producer {
    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        if (typeof listener === "function") {
            this.listeners.push(listener);
        } else {
            throw new Error("listener must be function!");
        }
    }

    removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }

    notify(message) {
        this.listeners.forEach(listener => {
            listener(message);
        })
    }
}

var egghead = new Producer();

var obervable3 = Rx.Observable.fromEventPattern(
    egghead.addListener.bind(egghead),
    egghead.removeListener.bind(egghead),
    // handler => egghead.addListener(handler),
    // handler => egghead.removeListener(handler)
);

obervable3.subscribe(
    value => console.log(value),
    e => console.error(e),
    () => console.log("complete")
)

egghead.notify("Hello! Can you hear me?");

// empty 0
console.warn("The lesson 6 Code", "empty")
Rx.Observable.empty().subscribe({
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!');
    },
    error: function (error) {
        console.log(error)
    }
});

// never
console.warn("The lesson 6 Code", "never")
Rx.Observable.never().subscribe(generateSubscriber())

// throw
console.warn("The lesson 6 Code", "throw")
Rx.Observable.throw("Oop!").subscribe(generateSubscriber())

// interval
console.warn("The lesson 6 Code", "interval")
// Rx.Observable.interval(1000).subscribe(generateSubscriber())

// // timer
// console.warn("The lesson 6 Code", "timer")
// var unsubscription = Rx.Observable.timer(1000, 3000).subscribe(generateSubscriber());
// setTimeout(() => {
//     unsubscription.unsubscribe();
// }, 5000)