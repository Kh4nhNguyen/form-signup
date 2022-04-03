import SignUpForm from './component/signup/SignUpForm'
import Todolist from './component/todolist/Todolist'

import { useState } from 'react';
import './App.css';

function App() {
  const [check, setCheck] = useState(false)

  return (
    <div className="App">
      <header>
      {check && <SignUpForm />}
      <Todolist />
      </header>
    </div>
  );
}

export default App;
