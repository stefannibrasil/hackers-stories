import * as React from 'react';

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => (
  <>
    <label htmlFor={id}>{label}:</label>
    &nbsp;
    <input id={id} type={type} value={value} onChange={onInputChange}/>
  </>
)

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const javascript = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 2,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 3,
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    'PODR'
  )

  const stories = ruby.concat(javascript)

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};
 
export default App;