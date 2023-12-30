import React from 'react';

const PageLoad=(props)=>{

    function handleCreateNote() {
        const newId = Math.random() * 20; // Generate a random ID (you might want a better way to generate unique IDs)
        props.info.setuserInfo(prevState => ({...prevState,id: newId.toString()}));
    }
    return(
        <>
        <h1>You have no notes</h1>
        <button onClick={handleCreateNote}>Create one now</button>
        </>
    );
}

export default PageLoad;