//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
        const [mode, setmode] = useState('dark');//wheater dark mode is enabled
        const [alert, setAlert] = useState(null);

        const showAlert =(message,type)=>{
          setAlert({
            msg: message,
            type:type
          })
          setTimeout(() => {
            setAlert([null]);
          }, 1000);
        }
        const removeBodyClasses = ()=>{
          document.body.classList.remove('bg-light');
          document.body.classList.remove('bg-dark');
          document.body.classList.remove('bg-warning');
          document.body.classList.remove('bg-danger');
          document.body.classList.remove('bg-success');
          document.body.classList.remove('bg-primary');
          

        }
        const togglemode = (cls)=>{
          removeBodyClasses();
          console.log(cls);
          document.body.classList.add('bg-'+cls);
            if(mode === 'light'){
              setmode('dark');
              document.body.style.backgroundColor ="gray";
              showAlert('Dark mode is enable','success');
            }
            else{
              setmode('light');
              document.body.style.backgroundColor ="white";
              showAlert('light mode is enable','success');
            }
        }
        //or not
  return (
    <>
    {/*<Navbar title = "firstApp" aboutText="About FirstApp"/>*/}
     {/*<Navbar/>*/}
     <Router>
     <Navbar title="firstApp" mode={mode} togglemode={togglemode} />
     <Alert alert ={alert}/>
     <div className="container" my-3>
       <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      {/*<About />*/}
        <Textform showAlert ={showAlert} heading="Enter the text to analyse below"/>
     </div>
        </Router>
    </>
  );
}

export default App;
