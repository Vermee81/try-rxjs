var observer_1 = {
  next: x => console.log('Observer1 got a value: ' + x),
  error: err => console.log('Observer1 got an error: ' + err),
  complete: () => console.log('Observer1 got Complete'),
}; // データを受け取った時に何をするのかが書かれている

function subscribe_1(observer){
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}// 指定のObserverに、『1,2,3』というデータと『完了』を送る

subscribe_1(observer_1);
// subscribe_1が送るデータの受け取り手としてobserver_1を指定する

