import { useState } from "react";
import Expansion from "../../../Components/Expansion";

function NcGamesBackend() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
        <h3>Nc Games</h3>        
        { expanded?
            <>
                <p>This is the backend for my NC Games project. During this project I was learning about RESTful apis, SQL and TDD development using unit testing. The objective of this project was to create an api that would be used in the future by my frontend project.</p>
                <p>Tech stack: Jest, expressJs, axios, JavaScript, PostgreSQL </p>
            </>
            : null
        }
        
        <Expansion
            state={expanded}
            setState={setExpanded}
            Github={
                "https://stackoverflow.com/questions/48131100/react-render-array-of-components"
            }
            Hosted={
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
            }
        />
    </div>
  );
}
export default NcGamesBackend;
