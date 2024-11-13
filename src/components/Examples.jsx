import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

import { EXAMPLES } from "../data";

import { useState } from "react";

export function Examples() {
    //  HOOKS/STATE
    // Need to call hooks directly on top level of the component
    // Can not call it inside a if condition as well
    // Can set default argument
    //  Returns an array of exactly two elements 
    // [Current state value, State updating function] = useState("Initial state value")
    // Current state value may change value if the component is executed again
    //  State updating function updates stored value and tells reace to re-exceute State 
    // The component to which the state belongs and its child and 
    // descendent components will be re-evaluated as state changes.

    const [selectedTopic, setSelectedTopic] = useState(); // to render conditionally
    // const [selectedTopic, setSelectedTopic] = useState('components'); // to render with default

    // Computed values are values that shouldn't be managed as a seperate state
    //  as they can be derived from the other state

    // Click event function added here to interact with the subsecquent text section
    function handleClick(selectedButton) {
        // button params to be received
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(setSelectedTopic);
    }

    // Using variables to store content and then applying if condition
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>);
    }

    return (<Section title="Examples" id="examples">
        {/* Component way of setting up tab menu to make it reusable */}
        {/*  Can also pass custom components to the Tabs component */}
        {/* < Tabs buttonContainer={Section} */}
        {/* Can also pass element wrapper to the Tabs component */}
        {/* <Tabs buttonContainer="menu" to avoid the fragment tag* built-in tags are passed as strings/}
        {/* Smaller case element wrapper problem can be avoided by using uppercase B */}
        <Tabs buttons= {
            // Fragment tag
            <>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick('state')}>State</TabButton>
            </>
            }>{tabContent}</Tabs>
        {/* Regular way of setting up tab menu */}
        {/* <menu> */}
            {/* Passing function as value when we don't return anything (params) */}
            {/* <TabButton onClick={handleClick}>Components</TabButton> */}
            {/* Passing arrow function to handleClick to pass button params */}
            {/* <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick('state')}>State</TabButton>
        </menu> */}
        {/* Use if not then else */}
        {/* {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>} */}

        {/* Without else */}
        {/* {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>} */}

        {/* Use if else */}
        {/* {selectedTopic ? <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div> : <p>Please select a topic.</p>} */}
    </Section>);
}