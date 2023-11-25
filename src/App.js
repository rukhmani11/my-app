import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { type } from '@testing-library/user-event/dist/type';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const[mode, setMode] = useState('light');//whether dark mode is enable or not
  const[alert,setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
  }

  //  const toggleMode = ()=>{
  //   if(mode === 'light'){
  //   setMode ('dark');
  //   document.body.style.backgroundColor= '#042743';
  //   showAlert("Dark mode has been enabled","success");
  //   document.title = 'TextUtils - Dark Mode';
  //   setInterval(() =>{
  //     document.title = 'TextUtils is amazing mode';
  //   },2000);
  //    setInterval(() => {
  //     document.title = "install textutils now";

  //    },1500);
  //  }
  //  else{
  //   setMode ('light')
  //   document.body.style.backgroundColor = 'white';
  //   showAlert("Light mode has been enabled","success");

  //  }
  // }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-succes')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor= '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils - Dark Mode';
    setInterval(() =>{
      document.title = 'TextUtils is amazing mode';
    },2000);
     setInterval(() => {
      document.title = "install textutils now";

     },1500);
   }
   else{
    setMode ('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");

   }
  }
  return (
    
    <>  
    <Router>
{/* <Navbar/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
<div className="container my-3">
  <Switch>
    <Route path="/about">
      <About mode={mode}/>
    </Route>
    <Route path="/">
<TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/> 
    </Route>
  </Switch>
</div>
    </Router>
    </>
  );
}

export default App;
