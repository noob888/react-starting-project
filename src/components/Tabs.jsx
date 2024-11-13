// We can also set default args

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    //  If we accept buttonsContainer with menu as a prop, then
    // <buttonsContainer>{buttons}</buttonsContainer/> won't work
    // because functions that start with smaller case is treated as
    // built-in function/component, therefore we need to to store it like below
    //   const ButtonsContainer = buttonsContainer;

    // In case you want to add variable inside string
    // <button className={`button ${mode}-button`}>
    return (
        // Fragment tag
        <>
            {/* With buttonsContainer prop in case we want to pass tags from the parent */}
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>

            {/* Usual way of rendering menu */}
            {/* <menu>
            {buttons}
        </menu> */}
            {children}
        </>
    );
}

