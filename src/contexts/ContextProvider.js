import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const initialState = {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState("Light");

    const [themeSettings, setThemeSettings] = useState(false)
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false);
    }
 
    const setColor = (e) => {
        setCurrentColor(e);

        localStorage.setItem("colorMode", e);
        setThemeSettings(false);
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize, setScreenSize,
            currentColor,
            currentMode, 
            themeSettings, setThemeSettings,
            setMode,
            setColor,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
