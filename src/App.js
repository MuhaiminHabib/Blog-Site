import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dateFormat from "dateformat";
import './App.css';
import AddBlog from './components/AddBlog';
import Header from './components/Header';
import ShowBlog from './components/ShowBlog';
import EditBlog from './components/EditBlog';
import Feeds from './components/Feeds';

// feeds, showBlog, editBlog are <main>

function App() {
  const [blogs, setBlogs] = useState([
    {
      id:1,
      title: "My First Post",
      body: "This is the description of my post",
      dateTime: "Saturday, June 9th, 2021, 5:46:21 PM"
    },
    {
      id:2,
      title: "My Second Post",
      body: "This is the description of my post",
      dateTime: "Saturday, June 10th, 2021, 5:46:21 PM"
    },
    {
      id:6,
      title: "My Third Post",
      body: "Post Descripiton",
      dateTime: "Saturday, June 11th, 2021, 5:46:21 PM"
    }
  ])

  

  const handleAdd = (title, description) => {
    console.log("i was called");
    console.log(title);
    console.log(description);

    let id = (() => {
        return blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    })()

    console.log(`blogs length is: ${blogs.length}`)
    console.log(`id is ${id}`)

    let dateTime = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
    
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
        {/* <Search blogs={blogs}/> */}
        <Routes>
          <Route path="/" element={<Feeds blogs={blogs} />} />
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
      </Router>
    </div>
  );
}

export default App;
