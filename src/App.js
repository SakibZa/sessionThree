import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { useState } from 'react';
function App() {
  const [info , setInfo] = useState('Zaidi Bhai')
  return (
    <div className="App">
       <Header/>
       <TaskList info = {info}/>
       <Footer/>
    </div>
  );
}

export default App;
