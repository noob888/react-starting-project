export default function TabButton(props) {
    // Vanilla js listener
    // document.querySelector('button').addEventListener('click', () => {})

    // React listener way - can also add here or app.jsx based on use case
    // function handleClick() {
    //     console.log('hello world');
    // }

    return (
        // Children attribute is built-in by React so no need to pass it in the main tag
        // It will contain data which is between the component opening and closing tag
        // In this example: Component string

        // Onclick takes a function as value. Don't execute instantly by adding ()
        <li><button className={props.isSelected ? "active" : undefined} onClick={props.onClick}>{props.children}</button></li>
    );
}

// More complex way of handling buttons
// export default function Button({mode="filled", className, children, Icon, ...props}) {
//     // Todo: Build this component!
    
//     // !!! Important: 
//     // Wrap the icon with a <span className="button-icon"> to achieve the target look
//     // Also wrap the children prop with a <span>
//     let cssClasses = `button ${mode}-button`;
    
//     if (Icon) {
//         cssClasses += ' icon-button'
//     }
    
//     if (className) {
//        cssClasses += ' ' + className;
//      }
    
//     return (
//     <button className={cssClasses} {...props}>
//     {Icon && <span className="button-icon"><Icon /></span>}
//     <span>{children}</span>
//     </button>
//     );
//    }

// Another way of using children
// export default function TabButton({children}) {
//     return (
//         // Children attribute is built-in by React so no need to pass it in the main tag
//         // It will contain data which is between the component opening and closing tag
//         // In this example: Component string
//         <li><button>{children}</button></li>
//     );
// }

// Another way by desctructuring object to directly use keys
// export default function TabButton({children, onClick, onSelected}) {
//     return (
//         // Children attribute is built-in by React so no need to pass it in the main tag
//         // It will contain data which is between the component opening and closing tag
//         // In this example: Component string
//         <li><button>{children}</button></li>
//     );
// }