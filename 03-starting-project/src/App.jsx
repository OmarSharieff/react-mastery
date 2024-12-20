import { Children } from "react";
import CoreComponents from "./components/CoreComponents.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  function selectHandler(selectedButton) {
    console.log(`${selectedButton} is selected`);
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/*In the following 'CoreCompenents', we have used an alternative syntax for passing props which also works as a shorthand notation */}
            <CoreComponents {...CORE_CONCEPTS[0]}/> 
            <CoreComponents {...CORE_CONCEPTS[1]}/>
            <CoreComponents {...CORE_CONCEPTS[2]}/>
            <CoreComponents {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>selectHandler('components')}>Components</TabButton>
            <TabButton onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>selectHandler('props')}>Props</TabButton>
            <TabButton onSelect={()=>selectHandler('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
