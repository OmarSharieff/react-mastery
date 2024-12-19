import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const randomWords = ["Fundamental", "Crucial", "Core"];
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

export default function Header() {
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