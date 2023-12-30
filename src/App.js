import { useState } from 'react';
import './App.css';
import PageLoad from './component/LoadingPage';
import NotePage from './component/notePage';


function App() {
  const[userInfo,setuserInfo] = useState([{id:"",body:""}]);
  
console.log(userInfo,"in app.js");
  // useEffect(()=>{
   
  //   if(localStorage.getItem("notes")===null){
  //      localStorage.setItem("notes",JSON.stringify([...userInfo]));
  //   }
  // },[userInfo])

  
  return (
    <div className="App">
     {localStorage.getItem("notes")==null ? <PageLoad info={{userInfo,setuserInfo}}/>:<NotePage info={{userInfo,setuserInfo}}/>}
    </div>
  );
}

export default App;
