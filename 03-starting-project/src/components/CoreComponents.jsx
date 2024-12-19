export default function CoreComponents({title, image, description}) {
  return (
    <li>
      <img src={image} alt="logo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}