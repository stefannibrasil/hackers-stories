import * as React from 'react';

const javascript = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const ruby = [
  {
    title: 'Bottles of OOP',
    url: 'https://sandimetz.com/99bottles',
    author: 'Sandi Metz',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'PODR',
    url: 'https://www.informit.com/store/practical-object-oriented-design-an-agile-primer-using-9780134456478?ranMID=24808',
    author: 'Sandi Metz',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function Item({item}) {
  return (
    <div>
      <h2>
        <a href={item.url}>{item.title}</a>
      </h2>
      <h3> Author: {item.author}</h3>
      <p> Comments: {item.num_comments}</p>
      <p> Points: {item.points}</p>
    </div>
  );
}

function List ({list}) {
  return (
    <ul>
      {list.map(function (item) {
      return (
        <li key={item.objectID}>
          <Item item={item} />
        </li>
      )
    })}
    </ul>
  );
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value)
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list = {ruby} />

      <List list = {javascript} />
    </div>
  );
}
 
export default App;