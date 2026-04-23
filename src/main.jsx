import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
const title ='React Course';
function getTitle(title) {
  return title;
};



function App(){
  const stories=[{
  
    objectID: "1",
    title: "React 19",
    url: "https://react.dev",
    author: "dan_abramov",
    points: 120,
    num_comments: 45,
  },
  {
    objectID: "2",
    title: "JavaScript Trends in 2026",
    url: "https://example.com/js-trends",

    author: "sarah_dev",
    points: 85,
    num_comments: 20,
  },];
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
  const handleChange=(event)=>{
    setSearchTerm(event.target.value);
  };
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (    <>
    <h1> CS220course </h1>
    <p> this course id {title} </p>
    <p>i am calling the function {getTitle("lecture1")}</p>    
    <Search searchTerm={searchTerm} onSearch={handleChange} />
    <h1>React List </h1>
    <List list={filteredStories} />

    </>
  )
}

const List = ({list}) => {
  return (
    <ul>
      {list.map((item)=> (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};
  const Item = ({ item }) => (
  <li>
    <a href={item.url}>{item.title}</a> by {item.author}
  </li>
);

const Search= ({ searchTerm, onSearch }) =>{

  return (
    <div>
      <label htmlFor="search" className='react' > Search: </label>
      <input type="text" id='search' value={searchTerm} onChange={onSearch} />
    </div>
  )
}


export default App