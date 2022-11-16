import * as React from 'react';

const Item = (props) => (
  <li>
    <span>
      <h2>
        <a href={props.item.url}>{props.item.title}</a>
      </h2>
      <h3> Author: {props.item.author}</h3>
      <p> Comments: {props.item.num_comments}</p>
      <p> Points: {props.item.points}</p>
    </span>
  </li>
);

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
  ))}
  </ul>
);

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value)
  };

  const handleBlur = (event) => {
    console.log(event);
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />
    </div>
  );
}

const App = () => {
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

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={ruby} />

     <List list={javascript} />
    </div>
  );
};
 
export default App;