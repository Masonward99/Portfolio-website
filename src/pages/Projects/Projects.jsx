import { useState } from "react";
import SelectionButtons from "./Components/SelectionButtons";
import Test from "./Components/Test";
import List from "./Components/List";
import NcGamesBackend from "./IndividualProjects/Backend/NcGamesBackend/NcGamesBackend";

function Projects() {
  const [selectedButton, setSelectedButton] = useState(1);
  return (
    <section href="Projects">
      <h2>Projects</h2>
      <SelectionButtons
        title1="Backend"
        title2="Frontend"
        state={selectedButton}
        setState={setSelectedButton}
      />
      <List componentsList={[NcGamesBackend, Test, Test]} />
    </section>
  );
}
export default Projects;
