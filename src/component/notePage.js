import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import './notePage.css';
// import { useEffect } from "react";

const NotePage=(props)=>{
    const[Markdown,setMarkdown]=useState("# Enter the text here...");
    const [addNotes, setAddNotes] = useState([JSON.parse(localStorage.getItem("notes"))]);

    useEffect(() => {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            setAddNotes(JSON.parse(storedNotes));
            console.log("new");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(addNotes));
    }, [addNotes]);


    function addNewNote() {
        const newNote = {
            id: generateUniqueId(),
            body: Markdown
        };
        setAddNotes(prevNotes => {
            if (!Array.isArray(prevNotes)) {
                return [newNote]; // Initialize as an array if it's not already
            }
            return [...prevNotes, newNote];
        });
    }

    function inputChange(e) {
        const txt = e.target.value;
        setMarkdown(txt);
        props.info.setuserInfo(prevState => ({...prevState, body: txt }));
        console.log();
    }

    function generateUniqueId() {
        // Replace this with your actual logic to generate a unique ID
        return Math.random()*20;
    }


    function showtextPage(){
       let show = document.querySelector('.Previewpage') ;
       let hide = document.querySelector('.writeconatiner') ;
       hide.style.display="none";
       show.style.display="block";

    }
    function hidetextPage(){
        let show = document.querySelector('.Previewpage') ;
        let hide = document.querySelector('.writeconatiner') ;
        hide.style.display="block";
        show.style.display="none";
 
    }

    return(
        <div className="notepage">
            <div className="sidebar">
                <div className="upperhead"><h1>NOTES</h1><button onClick={addNewNote}>+</button>
                </div>
                <div className="lowerhead">
                    {
                      addNotes.map((items,index)=>(
                        <div>{items.body}</div>
                      ))  
                    }1234567890
                </div>
            </div>
            <div className="mainContainer">
                <div className="writeconatiner">
                <div className="Allbuttons">
                    <button>Write</button>
                    <button onClick={showtextPage}>Preview</button>
                    <button className="icons"><i class="fa-solid fa-heading"></i></button>
                    <button className="icons"><i class="fa-solid fa-bold"></i></button>
                    <button className="icons"><i class="fa-solid fa-italic"></i></button>
                    <button className="icons"><i class="fa-solid fa-strikethrough"></i></button>
                    <button className="icons"><i class="fa-solid fa-link"></i></button>
                    <button className="icons"><i class="fa-solid fa-quote-right"></i></button>
                    <button className="icons"><i class="fa-solid fa-code"></i></button>
                    <button className="icons"><i class="fa-solid fa-image"></i></button>
                    <button className="icons"><i class="fa-solid fa-list-ul"></i></button>
                    <button className="icons"><i class="fa-solid fa-list-ol"></i></button>
                    <button className="icons"><i class="fa-solid fa-list-check"></i></button>
                </div>
                <textarea value={Markdown} onChange={inputChange}/>
                </div>
                <div className="Previewpage">
                <div className="Allbuttons">
                    <button onClick={hidetextPage}>Write</button>
                    <button>Preview</button>
                </div>
            <div>
                <ReactMarkdown>{Markdown}</ReactMarkdown>
            </div>
                </div>
            </div>
        </div>
    );
}
export default NotePage;