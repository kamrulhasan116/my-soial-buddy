import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import { Container } from '@material-ui/core';
import PostDetail from './PostDetail/PostDetail';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
       <Header></Header>
       <Container maxWidth = "sm">
         <Router>
           <Switch>
             <Route path = '/postDetail/:id'>
               <PostDetail></PostDetail>
             </Route>

             <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
           </Switch>
         </Router>

       </Container>
       <Home></Home>  
    </div>

    
  );
}

export default App;
