# RxJs Primer

Source: 
- [RxJS Primer - Learn RxJS](https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer)
- [Create RxJs observables using create, of, and from in angular](https://www.tektutorialshub.com/angular/rxjs-observable-using-create-of-from-in-angular/)


## What is an Observable
- An observable represents a stream, or a source of data that can arrive over time.
	- You can create an observable from pretty much everything but the most common use case is from events.
	- observables are cold, or do not activate a producer until there is a subscription
	


## Subscription

- Subscriptions are what set everything in motion. 
- Think of them like a faucet where you have a stream of water ready to be tapped (observable) and someone needs to turn the handle (subscriber)
- To create a subscription I call the subscribe method
	- subscription method also accepts an object map to handle the case of error or completion
	```javascript
		const sub = myObservable.subscribe({
			next: event => console.log(event),
			error: err => console.error(err),
			complete: () => console.log('Complete')
		});
				
	```
	- each subscription will create a new execution context. Calling subscibe a second time will create a new event listener.
	- a subscription creates a one on one, one-sided conversation between the observable and the observer. 
		- this is like your boss(the observable) yelling (emitting) at you (the observer). 
		- aka unicasting
- observable sources emit data to observers in a push based model. The observable doesn't know or care what subscribers do with the data, it simply pushes it down the line.

---
## Operators

- Offer a way to manipulate values from a soure, return an observable of the transformed values

### Map operator
- transforms emitted values from an observable sources

### Filter Operator 
- filters emitted values and returns the desired results

### Pipe Operator 
- acts like an assembly line for operators
- it is not uncommon to use 5 or more operators within an observable chain contained within the pipe function.
	
### Of Operator
- creates the observable from the arguments that you pass into it. Each argument is emitted seperately and sequentially. It sends the complete signal in the end.

### From Operator
- takes one argument that can be iterated and converts it into an observables
	- converts: 
		- array
		- anything that behaves like an array
		- Promise
		- any iterable object
		- collections
		- any observable like object
		
## Categories of operators

- Creation operators 
	- of, from, fromEvent
- Combination operators (join information from multiple observables)
	- combineLatest, concat, merge, startWith, withLatestFrom
- Error Handling Operators 
	- catchError
- Filtering Operators (accept or reject values from an observable source and dealing with backpressure-- the build up of values within a stream)
	- debounceTime, distinctUntilChanged, filter, take, takeUntil
- Multicasting operators (allows side-effects to be shared among multiple subscribers)
	- shareReplay
- Transformation Operators (transforms values as they pass through the operator chain)
	- concatMap, map, mergeMap, scan, switchMap
	