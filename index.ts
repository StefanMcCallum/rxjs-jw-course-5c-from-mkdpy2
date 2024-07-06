import { from } from 'rxjs';

// Very similar to of, except takes an array argument
// Also takes a promise argument
// Also takes an Observable argument

// from(['Alice', 'Ben', 'Charlie']).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved!');
  reject('Rejected!');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
  error: (err) => console.log('Error:', err),
});
