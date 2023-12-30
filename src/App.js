import { useEffect, useState } from 'react';
import './App.css';
import PageLoad from './component/LoadingPage';
import NotePage from './component/notePage';


function App() {
  const[userInfo,setuserInfo] = useState({id:'',body:''});

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify({...userInfo}));
  },[userInfo.id])
  
  return (
    <div className="App">
     {localStorage.getItem("notes")==null ? <PageLoad info={{userInfo,setuserInfo}}/>:<NotePage info={{userInfo,setuserInfo}}/>}
    </div>
  );
}

export default App;
