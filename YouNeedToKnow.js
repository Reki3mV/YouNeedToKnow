/*
Map and Filter
Both are array methods and both return a new array when
applying. Filter additionally eliminates items that don´t match.
*/

const DATA = [
	{id: 1, title: 'first'},
	{id: 2, title: 'first'},
	{id: 3, title: 'first'},
	{id: 4, title: 'first'},
	];

const upperData = DATA.map(el=> el.title.toUpperCase());
console.table(upperData);

const moduloData = DATA.filter(el=> el.id % 2 === 0);
console.table(moduloData);

console.table(DATA);

/*
Slice and Splice
Method returns a new array with selected elements, while
splice method changes the contents of an existing array
*/

const charactersArr = [
	'Withcher',
	'Harry Potter',
	'Luke Skywalker',
	'Tony Stark',
	];

const copyArr = [...charactersArr];

copyArr.splice( 0, 1 );
console.log(copyArr);

copyArr.splice( copyArr.length, 1, 'Wonder Woman');
console.log(copyArr);

const selected = charactersArr.slice( 0, 2);
console.log(selected);

console.log(charactersArr);

/*
Concat
This method returns a new array of merging 
two or more arrays
*/

const arr1 = [ 1, 2, 3, 4 ];
const arr2 = [ 10, 20, 30, 40 ];
const arr3 = [ 100, 200, 300, 400 ];

const mergedArr = arr1.concat( arr2, arr3 );

console.log(mergedArr);

/*
Find and Find Index
The find method returns the first element that  satisfies the
condition, while findIndex returns the index of that element.
*/

const DATA = [
	{id: 1, title: 'first'},
	{id: 2, title: 'first'},
	{id: 3, title: 'first'},
	{id: 4, title: 'first'},
	];

const itemIdx = DATA.findIndex( el => el.id === 2 );
console.log(itemIdx);

const item = DATA.find( el => el.id === 2 );
console.log(item);

/*
Destructuring
The destructuring assignment is a special syntax which
enable unpacking(assigning) value from arrays or object
properties directly into variables.
*/

const name = [ 'Luke' , 'Skywalker' ];

const [ firstName, lastName ] = name;

console.log( firstName, lastName );

const jedi = {
	id: 1,
	name:'Luke Skywalker',
	lightsaber: true,
	species:'Human'
};

const { name:jediName, species, ...rest } = jedi;
console.log(jediName);
console.group(species);
console.log(rest);

/*
Rest & Spread Operator
Rest parameter enables us to pass unspecified
number of parameters to a function wich will be
placed into array, while the spread operator enables
us to spread the content of a iterable (i.e.array) into
individual elements
*/

//SPREAD

const introduccion = [ 'my', 'name', 'is', 'Luke', 'Skywalker' ];
const copyArr = [ ...introduccion ];
console.log(copyArr);
console.log(...copyArr);

//REST

const getSize = (...args) => {
	return args.length;
};

console.log(getSize( 1, 5, 10 ));
console.log(getSize( 10, 20, 30, 40, 50, 60 ));

/*
Promises
In Simple terms promises are used to  handle asynchronous
operations. Each promises can ends as a success or a failure
having 3 possibles statuses: 
Pending,
Fullfiled or
Rejected.
In the example below we handle promises with the async await
syntax while fetching data from API.
*/

const fetchData = async() => {
	try{
		const response = await fetch('https://swapi.dev/api/people/');

		if(!response.ok) throw new Error(response.status);

		const result = await response.json();

		return result;
	}

	catch(e){
		console.log(e);
	}
}
