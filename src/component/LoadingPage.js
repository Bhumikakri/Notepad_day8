import React from "react";
import './Loading.css';

const PageLoad = (props) => {
  function handleCreateNote() {
    const newId = Math.random() * 20; // Generate a random ID (you might want a better way to generate unique IDs)
    // props.info.setuserInfo((prevState) => {
    //   let newArray = [
    //     ...prevState,
    //     { id: newId.toString(), body: "# Enter Your title here" },
    //   ];
      localStorage.setItem("notes", JSON.stringify([{ id: newId.toString(), body: "# Enter Your title here" }]));
      props.info.setuserInfo({ id: newId.toString(), body: "# Enter Your title here" });
    //   console.log(newArray);

    //   return newArray;
    // });
  }
  return (
    <>
    <div className="Loadingpage">
      <h1>You have no notes</h1>
      <button onClick={handleCreateNote}>Create one now</button>
    </div>
    </>
  );
};

export default PageLoad;
