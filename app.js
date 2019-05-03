import * as Rx from 'rxjs';

var observer_1 = {
  next: x => console.log('Observer1 got a value: ' + x),
  error: err => console.log('Observer1 got an error: ' + err),
  complete: () => console.log('Observer1 got Complete'),
}; // データを受け取った時に何をするのかが書かれている

function subscribe_1(observer){
  observer.next(1);
  observer.next(2);
  setTimeout(function(){
    observer.next(3);
  }, 1000);
}

// create Observable object
var observable_1 = Rx.Observable.create(subscribe_1);

console.log("before");
observable_1.subscribe(observer_1);
console.log("after");
