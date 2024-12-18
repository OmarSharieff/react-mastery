import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const randomWords = ["Fundamental", "Crucial", "Core"];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function CoreComponents({title, image, description}) {
  return (
    <li>
      <img src={image} alt="logo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  let randomWord = randomWords[getRandomIndex(randomWords.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

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
