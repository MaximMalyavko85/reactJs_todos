import React from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";

export const Home = () => {
  let notes = new Array(3)
  .fill("")
  .map((_, i)=>({id: i, title: `Note ${i}`}))
  

  return (
    <React.Fragment>
      <Form />
      <hr/>
      <Notes notes = {notes}/>
    </React.Fragment>
  );
};
