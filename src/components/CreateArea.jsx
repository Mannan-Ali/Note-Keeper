/* eslint-disable react/prop-types */
import { useState } from "react";

function CreateArea(props) {
    const [buttonVal,buttonFunc] = useState({
        title:"",
        content:"",

    });

    function handleChange(event){

        const {name,value} = event.target;
        buttonFunc((prevNote)=>{
            if(name==="title"){
                return{
                    title:value,
                    content: prevNote.content,
                };

            }else if(name==="content"){
                return{
                    title:prevNote.title,
                    content: value,
                }
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        props.onAdd(buttonVal);
        buttonFunc({
            title: "",
            content: "",
        })
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={buttonVal.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={buttonVal.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
