import React, { useContext, useReducer, useEffect, useState } from 'react';
import me from './Img/me.png'
import './App.css';
import { Context } from './Store/store'
import Themes from './Components/Themes';
import { Container, SubContainer } from './Components/FlexContainers/Containers';
import { Navbar } from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Skills from './Pages/Skills';
import { Switch, Route } from 'react-router-dom';




const reducer = (state, action) => {

  switch (action.type) {
    case "ThemeDark":
      return Themes.ThemeDark;
    case "ThemeLight":
      return Themes.ThemeLight;
    case "AboutMeCardEnterChange":
      return { ...state, themeColors: { ...state.themeColors, aboutMeCardEnterBackgroundColor: action.changeColor } }
    case "AboutMeCardLeaveChange":
      return { ...state, themeColors: { ...state.themeColors, aboutMeCardEnterBackgroundColor: null } }
    case "ThemeCustom":
      return 0;
    default:
      return "處理Theme失敗";
  }
}

const App = () => {

  const [Theme, setTheme] = useReducer(reducer, Themes.ThemeDark);
  const [ScrollY, setScrollY] = useState(0);
  const [ScreenW, setScreenW] = useState(0);
  const [Orientation, setOrientation] = useState(0);
  const { FlexContainers: { container, subContainer } } = Theme;

  useEffect(() => {
    const Scroll = () => {
      window.addEventListener("scroll", () => { setScrollY(window.pageYOffset); setScreenW(window.screen.width); setOrientation(window.orientation); });
    }
    Scroll();

    return () => {
      window.removeEventListener("scroll", () => { setScrollY(window.pageYOffset); setScreenW(window.screen.width); setOrientation(window.orientation); });
    }

  }, [])


  return (
    < Context.Provider value={{ Theme, setTheme, ScrollY, setScrollY, ScreenW, setScreenW, Orientation, setOrientation }}>
      <Container theme={container.directionRow}>
        <Navbar />
        <Switch>
          <Route exact path={"/"} children={<Home />} />
          <Route exact path={"/Resume"} children={<Skills />} />
        </Switch>

        <SubContainer style={{ lineHeight: "6vh", textAlign: "center", color: "#ffffff", transition: "background-color 1s ease" }} theme={{ ...subContainer.unset, occupy: 12, height: "6vh", ...(ScrollY > 50 ? { backgroundColor: "#191919" } : null) }}>

          <span style={{ fontFamily: "Microsoft JhengHei" }}> Copyright © 2020 Arhua's project,保留一切權利.</span>
        </SubContainer>
      </Container>
    </Context.Provider >

  );
}

export default App;
