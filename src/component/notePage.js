import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
// import { useEffect } from "react";

const NotePage=(props)=>{
    const[Markdown,setMarkdown]=useState("# Enter the text here...");


    function inputChange(e){
        const txt=e.target.value;
        setMarkdown(txt);
        props.info.setuserInfo(prevState => ({...prevState,body:txt}));
    }

    return(
        <div>
            <textarea value={Markdown} onChange={inputChange}/>
            <div>
                <ReactMarkdown>{Markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
export default NotePage;