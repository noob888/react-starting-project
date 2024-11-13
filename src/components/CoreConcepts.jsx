import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
// named exports are exported with curly braces. defaults without

export function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {/* Props: Pass data via custom attributes(props) to components */}
                {/* {} required to pass value as number
           {{key:value}} extra curly braces to pass JS object as value */}

                {/* Using map method to simply passing multiple components */}
                {/* Map funciton automatically passes item as an argument */}
                {/* Use key to pass list as otherwise it gives a warning */}
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

                {/* Using basic index method to pass array objects to component */}
                {/* <CoreConcept
              title="Components"
              description={CORE_CONCEPTS[0].description}
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            // Automatically passing all object keys by spread operator
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </section>
    );
}