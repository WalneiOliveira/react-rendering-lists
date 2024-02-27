export default function List(){

  const fruits = [
    {id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105}, 
    {id: 4, name: "cononut", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}];

  // sort before
  fruits.sort();

  //method .map() return a new array receives a callback, a function expression or an arrow function
  // if it's an array of objects it needs a unique key for object
  const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);

  return (
    <ul>{listItems}</ul>
  );
}