import * as React from 'react';

const Item = ({
  item: {
    title,
    url,
    author,
    num_comments,
    points,
  },
}) => (
  <li>
    <span>
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <h3> Author: {author}</h3>
      <p> Comments: {num_comments}</p>
      <p> Points: {points}</p>
    </span>
  </li>
);

const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.title} item={item} />
  ))}
  </ul>
);

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch}/>
  </div>
)

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

  const [searchTerm, setSearchTerm] = React.useState('PODR');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const stories = ruby.concat(javascript)

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};
 
export default App;