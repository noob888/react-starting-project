// better way to import images
// Components
import Header from "./components/Header/Header.jsx"
import TabButton from "./components/TabButton.jsx";

// Section components
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Examples } from "./components/Examples.jsx";

// Images
import componentsImg from "./assets/components.png"

// Utility tag
import {Fragment } from "react";


function App() {

  return (
    // Must have a usual HTML div before adding jsx component
    // <div>
    <Fragment>
      {/* Alternatively, we can use Fragment tag to optimize the code */}
      <Header />
      {/* or <Header /> can be used as well (self closing tag similar to img tag) */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
    // </div>
  );
}

export default App;

// in component functions, only accepts one param called props
// using props object
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// You could group the received props into a single object like this:

// export default function CoreConcept({ ...concept }) { 
//   // ...concept groups multiple values into a single object
//   // Use concept.title, concept.description etc.
//   // Or destructure the concept object: const { title, description, image } = concept;
// }

// Providing default values to props
/* <Button caption="My Button" />
To make this component work, you might want to set a default value for the type prop - in case it's not passed.

This can easily be achieved since JavaScript supports default values when using object destructuring:

export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
} */
