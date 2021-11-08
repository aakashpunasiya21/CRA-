import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import User from './User/User';
import Home from './User/Home';
import Todo from './User/Todo';
import Post from './User/Post';
import Comments from './User/Comments';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
  
     

     
           <Router>
          
             <Link to ="/home">Home  </Link>
             <Link to="/user">User </Link>
             <Link to="/todo">Todo </Link>
             <Link to="/post">Post </Link>
             <Link to="/comment">Comment </Link>
    


               <Routes>
               <Route path="/home" element={<Home />}/>
               <Route path="/user" element={<User/>} />
               <Route path="/todo" element={<Todo/>} />
               <Route path="/post" element={<Post/>} />
               <Route path="/comment" element={<Comments />}/>
               </Routes>

           </Router> 

  );
}

export default App;
