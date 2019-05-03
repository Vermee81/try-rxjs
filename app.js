import * as Rx from 'rxjs';

var observable_1 = Rx.of(1, 2, 3);

var observer_1 = {
  next: x => console.log('Observer1 got a value: ' + x),
  error: err => console.log('Observer1 got an error: ' + err),
  complete: () => console.log('Observer1 got Complete'),
}; // データを受け取った時に何をするのかが書かれている

observable_1.subscribe(observer_1);
// subscribe_1が送るデータの受け取り手としてobserver_1を指定する
