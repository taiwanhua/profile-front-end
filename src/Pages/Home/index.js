import React, { useContext, useReducer, useEffect, useState } from 'react';
import { P } from '../../Components/Contents';
import { SubContainer, Container } from '../../Components/FlexContainers/Containers';
import { Context } from '../../Store/store'
import { LineButton } from '../../Components/Buttons'
import { Link } from 'react-router-dom';
import mainbg from '../../Img/mainbg.svg'
import mainbgscroll from '../../Img/mainbgscroll.svg';
import { AboutMeCard } from '../../Components/Cards';
import Codinglife from '../../Img/Codinglife.png'
import CL from '../../Img/CL.svg'
import SP from '../../Img/SP.svg'
import KS from '../../Img/KS.svg'
import MV from '../../Img/MV.svg'
import MW from '../../Img/MW.svg'
import Ball from '../../Img/Ball.png'
import SKL from '../../Img/SKL.png'
import MVL from '../../Img/MVL.png'
import MWL from '../../Img/MWL.png'
import CF from '../../Img/CF.svg'
import CFL from '../../Img/CFL.png'
import AboutMe from '../../Img/AboutMe.svg'
import ME from '../../Img/ME.svg'
import WCID from '../../Img/WCID.svg'
import WhatCanIdobg from '../../Img/WhatCanIdobg.svg'

export default (props) => {

    const { Theme, setTheme, ScrollY, ScreenW, Orientation } = useContext(Context);
    const { FlexContainers: { subContainer, container }, buttons: { lineButton }, contents: { p }, themeColors } = Theme;

    useEffect(() => {

        if (Orientation !== 90 && Orientation !== 270) {
            /* 
               Date   : 2020-05-21 01:16:39
               Author : Arhua Ho
               Content: 裝置直向且向下滾動超過1300時更換背景色，並適應移動端設備
            */
            if ((ScrollY > 1250 && ScrollY < 2061 && ScreenW > 425)) {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: "#e9967a" });
                //window.scrollTo(0, 0)
            }
            else if (ScrollY > 500 && ScrollY < 931 && ScreenW < 426) {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: "#e9967a" });
            }
            /* 
               Date   : 2020-05-21 14:20:04
               Author : Arhua Ho
               Content: 裝置直向且向下滾動超過1300時，(至What Can I do 區域時) 更換背景色，並適應移動端設備
            */
            else if (ScrollY > 2060 && ScreenW > 425) {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: "#c6c4b9" });
            }
            else if (ScrollY > 930 && ScreenW < 426) {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: "#c6c4b9" });
            }
            else {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: null });
            }
        }
        else {
            /* 
                Date   : 2020-05-21 14:20:04
                Author : Arhua Ho
                Content: 裝置橫向且向下滾動超過1300時更換背景色，並適應移動端設備
            */
            console.log("橫IN")
            if ((ScrollY > 900 && ScrollY < 1601)) {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: "#e9967a" });
                //window.scrollTo(0, 0)
            }
            /* 
                Date   : 2020-05-21 14:20:04
                Author : Arhua Ho
                Content: 裝置橫向且向下滾動超過1300時，(至What Can I do 區域時) 更換背景色，並適應移動端設備
            */
            else if (ScrollY > 1600) {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: "#c6c4b9" });
            }
            else {
                setTheme({ type: "AboutMeCardEnterChange", changeColor: null });
            }
        }
        console.log(ScrollY)
        console.log(Orientation)
    }, [ScreenW, ScrollY, Orientation, setTheme])

    useEffect(() => {
        /* 
           Date   : 2020-05-21 15:48:32
           Author : Arhua Ho
           Content: 滾動至頂部
        */
        window.scrollTo(0, 0)

        return () => {

        }

    }, [])

    return (
        <>
            <SubContainer
                theme={{ ...subContainer.main, ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null) }}>
                <Container theme={{
                    ...container.mainbg, img: mainbg
                    , ...(ScrollY > 50 ? { img: mainbgscroll } : null)
                }}>
                    <SubContainer theme={{ ...subContainer.fill }}>
                        <P theme={{ ...p.mainP, color: themeColors.navbarColor, ...(ScrollY > 50 ? { color: themeColors.navbarScrollColor } : null) }}>
                            My Passions &
                            <br />
                            Personality.
                        </P>
                    </SubContainer>
                </Container>
            </SubContainer>
            <SubContainer theme={{ ...subContainer.aboutMe, ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null) }} >
                <Container theme={{ ...container.aboutMe }}>
                    <AboutMeCard imgHover={(ScrollY > 50 ? Codinglife : null)} imgUnHover={(ScrollY > 50 ? CL : null)} onClick={() => window.open("https://github.com/taiwanhua", "_blank")} shadowColor={"#fee46d"} changeColor={"#fee46d"}></AboutMeCard>
                    <AboutMeCard imgHover={(ScrollY > 50 ? SKL : null)} imgUnHover={(ScrollY > 50 ? KS : null)} onClick={() => window.open("https://taiwanhua.github.io/ArhuaReactCourse", "_blank")} shadowColor={"#ff6347"} changeColor={"#ff6347"}></AboutMeCard>
                    <AboutMeCard imgHover={(ScrollY > 50 ? MVL : null)} imgUnHover={(ScrollY > 50 ? MV : null)} shadowColor={"#254128"} changeColor={"#254128"}></AboutMeCard>
                    <AboutMeCard imgHover={(ScrollY > 50 ? Ball : null)} imgUnHover={(ScrollY > 50 ? SP : null)} shadowColor={"#3ec7b2"} changeColor={"#3ec7b2"}></AboutMeCard>
                    <AboutMeCard imgHover={(ScrollY > 50 ? MWL : null)} imgUnHover={(ScrollY > 50 ? MW : null)} shadowColor={"#672d40"} changeColor={"#672d40"}></AboutMeCard>
                    <AboutMeCard imgHover={(ScrollY > 50 ? CFL : null)} imgUnHover={(ScrollY > 50 ? CF : null)} shadowColor={"#c6c4b9"} changeColor={"#c6c4b9"}></AboutMeCard>
                </Container>
            </SubContainer>
            <SubContainer theme={{
                ...subContainer.block,
                height: "15vw",
                ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null)
            }} />
            <SubContainer theme={{
                ...subContainer.meSays,
                img: AboutMe,
                ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null)
            }} />
            <SubContainer theme={{
                ...subContainer.aboutMeContent,
                ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null),
                ...(ScrollY > 1400 ? {
                    backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarBackgroundColor),
                } : null)
            }} >
                <P theme={{
                    ...p.aboutMeContentP,
                    color: themeColors.aboutMeCardEnterBackgroundColor ? "#ffffff" : themeColors.navbarScrollBackgroundColor,
                }}>
                    Hello，你好，我是Arhua，<br />
                    作為一名網頁開發工程師，<br />
                    相信Coding即是生活的一部分，<br />
                    秉持追求完美的態度，<br />
                    在每個當下堅持用最好的程式碼<br />
                    與開發方式。<br />
                    <br />
                    一方面我也樂於分享知識，<br />
                    並架設教學React的課程網站，<br />
                    與將其內容製成教學影片分享。<br />
                    <br />
                    而閒暇時，與一般人一樣會看電影、<br />
                    運動健身、追漫畫、與每天來一杯午後的咖啡。
                </P>

            </SubContainer >
            <SubContainer theme={{
                ...subContainer.meSays,
                img: WCID,
                ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null)
            }} />
            <SubContainer
                style={{}}
                theme={{
                    ...subContainer.whatCanIDo,

                    img: WhatCanIdobg,
                    ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null),
                    ...(ScrollY > 1400 ? {
                        backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarBackgroundColor),
                    } : null)
                }} >
                <P style={{ height: "6rem" }} theme={{
                    ...p.whatCanIDoP,
                    color: themeColors.aboutMeCardEnterBackgroundColor ? "#ffffff" : themeColors.navbarScrollBackgroundColor,
                }}>
                    前往深入了解，<br />
                    我的經歷、專業技術與能做的事情
                </P>
                <Container theme={{ ...container.whatCanIDo }}>
                    <SubContainer theme={{ ...subContainer.navbarButton }}>
                        <Link style={{ textDecoration: "none" }} to={"/Resume"}>
                            <LineButton
                                theme={{
                                    ...lineButton.whatCanIDoButton, ...(ScrollY > 50 ? {
                                        backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor),
                                        color: themeColors.navbarScrollColor,
                                        border: `${themeColors.navbarScrollColor} solid 0.05rem`,
                                        transBackgroundColor: themeColors.navbarScrollColor,
                                        transColor: themeColors.navbarScrollBackgroundColor
                                    } : null)
                                }}>View My Resume</LineButton>
                        </Link>
                    </SubContainer>
                </Container>
            </SubContainer >
        </>
    )
}



