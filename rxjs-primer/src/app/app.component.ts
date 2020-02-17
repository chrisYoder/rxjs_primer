import { Component, OnInit } from '@angular/core';
import { Observable, of, from, fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-primer';
	
// 	TekTutorialsHub
	
	// <!-- Observable Constructor -->
	
	// obs = new Observable((observer) => {
	// 	console.log('Observable starts')
		
	// 	setTimeout( () => {observer.next('1')}, 1000);
	// 	setTimeout( () => {observer.next('2')}, 2000);
	// 	setTimeout( () => {observer.next('3')}, 3000);
	// 	// setTimeout( () => {observer.error('error emitted')}, 3500);
	// 	setTimeout( () => {observer.complete()}, 3500);
	// 	setTimeout( () => {observer.next('4')}, 4000);
	// 	setTimeout( () => {observer.next('5')}, 5000);
		
	// })
	
	// data=[]
	
	ngOnInit() {
		
// 	TekTutorialsHub
		// <!-- Of Operator --> 
		
		// const array1 = [1, 2, 3, 4, 5, 6, 7];
		// const array2 = ['a', 'b','c','d','e','f','g']
		// const obsof2 = of(array1, array2);
		
		// obsof2.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Complete')
		// )
		
		// const obsof3 = of(1, 2, 3);
		// obsof3.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Complete')
		// )
		
		// const obsof4 = of('hello', 'world');
		// obsof4.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Complete')
		// )
		
		// const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7], 'Hello World');
		// obsof5.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Complete')
		// )
		
		// <!-- From Operator --> 
		
		// const array3 = [1, 2, 3, 4, 5, 6, 7];
		// const obsfrom1 = from(array3); 
		// obsfrom1.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Completed')
		// )
		
		// const obsfrom2 = from('hello world');
		// obsfrom2.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Completed')
		// )
		
		// let myMap = new Map();
		// myMap.set(0, 'Hello');
		// myMap.set(1, 'World');
		// const obsfrom3 = from(myMap);
		// obsfrom3.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Completed')
		// )
		
		// const obsfrom4 = from(this.generateNos());
		// obsfrom4.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Completed')
		// )
		
		// const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
		// const obsfrom5 = from(promiseSource);
		// obsfrom5.subscribe(
		// 	val => console.log(val),
		// 	error => console.error(error),
		// 	() => console.log('Completed')
		// )
		
		
// 	RxJs Primer
		
		const button = document.getElementById('myButton');
		const myObservable = fromEvent(button, 'click');
		const sub = myObservable.subscribe(event => console.log(event));
		
		const dataSource = of(1, 2, 3, 4, 5)
		const subscription = dataSource.pipe(
			// add 1 to each emitted value
			map(value => value + 1)
		).subscribe(value => console.log(value));
		
		console.log('----');
		
		const subscription2 = dataSource.pipe(
			filter(value => value >= 2)
		).subscribe(value => console.log(value));
	}
	
	// *generateNos(){
	// 	var i = 0;
	// 	while (i < 5) {
	// 		i = i + 1;
	// 		yield i;
	// 	}
	// }
}
