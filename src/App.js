import { useState } from "react";
import "./App.css";
import PageLoad from "./component/LoadingPage";
import NotePage from "./component/notePage";

function App() {
  // State to manage user information
  const [userInfo, setuserInfo] = useState([{ id: "", body: "" }]);
  const [value, setValue] = useState(true);

  
  return (
    <div className="App">
      {value === true ? (
        <PageLoad set={{ value, setValue }} info={{ userInfo, setuserInfo }} />
      ) : (
        <NotePage set={{ value, setValue }} info={{ userInfo, setuserInfo }} />
      )}
    </div>
  );
}

export default App;
