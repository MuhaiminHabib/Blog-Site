import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dateFormat from "dateformat";
import './App.css';

import AddBlog from './components/AddBlog';
import Header from './components/Header';
import ShowBlog from './components/ShowBlog';
import EditBlog from './components/EditBlog';
import Feeds from './components/Feeds';
import Footer from './components/Footer';

// feeds, showBlog, editBlog are <main>

function App() {
  const [blogs, setBlogs] = useState([
    {
      id:1,
      title: "My First Post",
      body: "This is the description of my post",
      dateTime: "Saturday, May 14, 2022"
    },
    {
      id:2,
      title: "My Second Post",
      body: "This is the description of my post",
      dateTime: "Saturday, May 14, 2022"
    },
    {
      id:6,
      title: "My Third Post",
      body: "Post Descripiton",
      dateTime: "Saturday, May 14, 2022"
    }
  ])

  const [matchedBlogs, setMatchedBlogs] = useState([])

  const handleAdd = (title, description) => {
    console.log("i was called");
    console.log(title);
    console.log(description);

    let id = (() => {
        return blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    })()

    console.log(`blogs length is: ${blogs.length}`)
    console.log(`id is ${id}`)

    let dateTime = dateFormat(new Date(), "fullDate");
    
    const newBlog = {
      id: id,
      title: title,
      body: description,
      dateTime: dateTime
    };
    setBlogs([...blogs, newBlog]);
  }

  const handleEdit = (id, editTitle, editDescription, editDateTime) => {

    console.log(id);
    console.log(editTitle);
    console.log(editDescription)
    console.log(editDateTime)

    setBlogs(blogs.map(blog => (blog.id === id ? {...blog, title: editTitle, body: editDescription, dateTime:editDateTime} : blog)))
  }

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Feeds 
            blogs={blogs} 
            matchedBlogs = {matchedBlogs}
            setMatchedBlogs = {setMatchedBlogs}
          />} />
          <Route path="/addBlog" element={<AddBlog handleAdd={handleAdd}/>} />
          <Route 
            path="/blogDetails/:id" 
            element={<ShowBlog 
              blogs={blogs}
              setBlogs={setBlogs}  
            />}  
          />
          <Route 
            path="/blogEdit/:id" 
            element={<EditBlog 
              blogs={blogs}
              setBlogs={setBlogs}  
              handleEdit={handleEdit}
            />}  
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
