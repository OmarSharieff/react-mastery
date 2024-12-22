import { useState } from "react";
import CoreComponents from "./components/CoreComponents.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function selectHandler(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }
  
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/*In the following 'CoreCompenents', we have used an alternative syntax for passing props which also works as a shorthand notation */}
            {CORE_CONCEPTS.map(conceptItem=><CoreComponents key={conceptItem.title} {...conceptItem}/>)}
            {/* <CoreComponents {...CORE_CONCEPTS[0]}/> 
            <CoreComponents {...CORE_CONCEPTS[1]}/>
            <CoreComponents {...CORE_CONCEPTS[2]}/>
            <CoreComponents {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>selectHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>selectHandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
