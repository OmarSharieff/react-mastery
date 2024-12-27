import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {/*In the following 'CoreCompenents', we have used an alternative syntax for passing props which also works as a shorthand notation */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreComponents {...CORE_CONCEPTS[0]}/> 
            <CoreComponents {...CORE_CONCEPTS[1]}/>
            <CoreComponents {...CORE_CONCEPTS[2]}/>
            <CoreComponents {...CORE_CONCEPTS[3]}/> */}
      </ul>
    </Section>
  );
}
