import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
      <>
       <h1>Info page</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi harum id laudantium molestiae nostrum perferendis quia repellendus saepe sit velit?</p>
       <button className="btn" onClick={() => history.push('/')}>Back to the to-do list</button>
      </>
  )
}