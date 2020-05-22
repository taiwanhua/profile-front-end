import React, { useContext, useReducer, useEffect, useState } from 'react';
import { Context } from '../../Store/store'
import { Container, SubContainer } from '../FlexContainers/Containers'
import logo from '../../Img/logo3.svg'
import logo1 from '../../Img/logo4.svg'
import { LineButton } from '../Buttons'
import { Link } from 'react-router-dom';

export const Navbar = (props) => {

    const { Theme, ScrollY } = useContext(Context);
    const { FlexContainers: { subContainer, container }, buttons: { lineButton }, themeColors } = Theme;

    return (
        <SubContainer theme={{ ...subContainer.navbar }}>

            <Container style={{ transition: "background-color 1s ease" }}
                theme={{ ...container.navbar, ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null) }}>

                <SubContainer theme={{ ...subContainer.logo }}>
                    <Link style={{ textDecoration: "none" }} to={"/"}>
                        <img src={(ScrollY > 50 ? logo : logo1)} alt="logo" onClick={() => { window.scrollTo(0, 0) }} />
                    </Link>
                </SubContainer>
                <SubContainer theme={{ ...subContainer.navbarButton }}>
                    <Link style={{ textDecoration: "none" }} to={"/Resume"}>
                        <LineButton
                            theme={{
                                ...lineButton.navbarButton, ...(ScrollY > 50 ? {
                                    backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor),
                                    color: themeColors.navbarScrollColor,
                                    border: `${themeColors.navbarScrollColor} solid 0.05rem`,
                                    transBackgroundColor: themeColors.navbarScrollColor,
                                    transColor: themeColors.navbarScrollBackgroundColor
                                } : null)
                            }}>Resume</LineButton>
                    </Link>
                </SubContainer>

            </Container>
            {/* 
               Date   : 2020-05-18 13:33:14
               Author : Arhua Ho
               Content: 保留做主題切換
            */}
            {/* <button onClick={() => { setTheme({ type: "ThemeDark" }) }}>d</button>
            <button onClick={() => { setTheme({ type: "ThemeLight" }) }}>l</button> */}
        </SubContainer >
    )
}