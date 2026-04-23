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
  const initialStories=[{
  
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
  const [stories, setStories] = React.useState(initialStories);
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
  const handleChange=(event)=>{
    setSearchTerm(event.target.value);
  };
  const handleRemoveStory = (item) => {
     const newStories = stories.filter(
       (story) => story.objectID !== item.objectID
      );
      setStories(newStories);
    };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
  return (    <>
    <h1> CS220course </h1>
    <p> this course id {title} </p>
    <p>i am calling the function {getTitle("lecture1")}</p>  
      
    <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleChange}
    >
     <strong>Search:</strong>
    </InputWithLabel>
    <h1>React List </h1>
    <List list={filteredStories} onRemoveItem={handleRemoveStory} />

    </>
  )

}

const List = ({list, onRemoveItem}) => {
  return (
    <ul>
      {list.map((item)=> (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};
  const Item = ({ item, onRemoveItem }) => (
  <li>
    <a href={item.url}>{item.title}</a> by {item.author}
    <button onClick={() => onRemoveItem(item)}>Delete</button>
  </li>
);

const InputWithLabel= ({ id, value, onInputChange, children, type="text" }) =>{

  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input type={type} id={id} value={value} onChange={onInputChange} />
    </>
  )
}


export default App