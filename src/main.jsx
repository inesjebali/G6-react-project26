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
  const [searchTerm, setSearchTerm] = React.useState('');
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
    <Search onSearch={handleChange} />
    <h1>React List </h1>
    <List list={filteredStories} />

    </>
  )
}

const List = (props) => {
  return (
    <ul>
      {props.list.map(function(item){ return <li key={item.objectID}><a href={item.url}>{item.title}</a></li> })}
    </ul>
  )
}

const Search= (props) =>{

  return (
    <div>
      <label htmlFor="search" className='react' > Search: </label>
      <input type="text" id='search' onChange={props.onSearch} />
    </div>
  )
}


export default App