import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import CreateExercise from './Component/create-exercise';
import CreateUser from './Component/create-user';
import EditExercise from './Component/edit-exercise';
import ExerciseList from './Component/Exercises-list';
import './App.css'

function App() {
  return (
    <Router>
       <Navbar />
      <br/>
       <Route path= "/" exact component ={ExerciseList}/> 
      <Route path= "/edit/:id" exact component ={EditExercise}/>
      <Route path= "/create" exact component ={CreateExercise}/>
      <Route path= "/user" exact component ={CreateUser}/> 
    </Router>
    
  );
}

export default App;
