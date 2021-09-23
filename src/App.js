import './App.css';

// ================ Screens  ===============
import LoginScreen from './auth/LoginScreen';
import SignUpScreen from './auth/SignUpScreen';
import HomeScreen from './app/HomeScreen';
import OnGoingTasks from './app/OnGoingTasks';
import CompletedTasks from './app/CompletedTasks';
// ================= End Of Screens =========

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import React, { useState, useEffect } from 'react';


export const MyContext = React.createContext('');

function App() {

  const [user, setUser] = useState(false);
  const [tasks, setTasks] = useState([]);


  const [task, setTask] = useState('');
  const [refresh, setRefresh] = useState(true);
  console.log(tasks)


  //========= Hooks  ====================

  useEffect(() => {
    getListFromLocalStorage();
  }, []);


  useEffect(() => {
    addListToLocalStorage()
  },[tasks, refresh])



  //========= End of hook ==============




  //================= Functions ===================

  //==========  localstorage ===============

  const addListToLocalStorage = () => {

    localStorage.setItem('list', JSON.stringify(tasks));
  }

  const getListFromLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem('list'));
    setTasks(list)



  }

  // =========  end of localstorage  =======

  const authUser = () => {
    setUser(!user);
  }

  function enterTask(task) {

    setTask(task)
  }

  function addTask() {

    if (task === '') {
      // reference.current.focus()
      alert("empty");
      return null 
    }
    let id = Date.now();
    let task1 = {
      id: id,
      task: task,
      isCompleted: false
    }
    setTasks([...tasks, task1]);
    setTask('');
  }


  function handleClick(index) {

    tasks[index].isCompleted = !tasks[index].isCompleted;
    setRefresh(!refresh);

  }

  function deleteTask(index) {
    console.log(tasks[0]);
    let res = window.confirm("Are you Sure to delete",tasks[0].name);
    if(res)
    {
      let deletingTask = tasks[index];
      let newTasks = tasks.filter(function (item) {
        return item !== deletingTask;
      });
      setTasks(newTasks);
    }
    else{
      alert("canceled operation");
    }
   
  }


  // ================  End of Functions  ===========



  let contextValues = { tasks, addTask, handleClick, deleteTask, enterTask, task, authUser, user };





  if (user) {
    return (

      <MyContext.Provider value={contextValues} >
        <Router >
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/home" exact component={HomeScreen} />
            <Route path="/ongoingtasks" component={OnGoingTasks} />
            <Route path="/completedtasks" component={CompletedTasks} />

            <Route path="*" exact component={LoginScreen} />
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
  else {
    return (

      <MyContext.Provider value={contextValues} >
        <Router >
          <Switch>
            <Route path="/" exact component={LoginScreen} />
            <Route path="/signup" exact component={SignUpScreen} />
            <Route path="*" exact component={LoginScreen} />
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }




}

export default App;
