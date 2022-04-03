import React, { createContext } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import SignUpForm from './component/signup/SignUpForm'
import Todolist from './component/todolist/Todolist'
import SignInForm from './component/signin/SignInForm'
import './App.css';

function App() {


  return (
    <>
      <header>
        <Routes>
          <Route path='/' element={<SignInForm />} />
          <Route path='/register' element={<SignUpForm />} />
          <Route path='/todolist' element={<Todolist />} />
        </Routes>
      </header>
    </>
  );
}

export default App;
