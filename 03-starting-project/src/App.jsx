import CoreComponents from "./components/CoreComponents.jsx";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
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
      </main>
    </div>
  );
}

export default App;
