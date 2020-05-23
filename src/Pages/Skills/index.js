import React, { useContext, useReducer, useEffect, useState } from 'react';
import { P } from '../../Components/Contents';
import { Link } from 'react-router-dom';
import { SubContainer, Container } from '../../Components/FlexContainers/Containers';
import { Context } from '../../Store/store'
import { LineButton } from '../../Components/Buttons'
import RSBG from '../../Img/RSBG.png'
import { SkillsCard, WorksCard, ExperienceCard, ContactCard } from '../../Components/Cards';
import ME from '../../Img/ME.svg'
import line from '../../Img/line.svg'
import mobile from '../../Img/mobile.svg'

export default (props) => {

    const { Theme, setTheme, ScrollY, ScreenW } = useContext(Context);
    const { FlexContainers: { subContainer, container }, buttons: { lineButton }, contents: { p }, themeColors } = Theme;


    // useEffect(() => {
    // /* 
    //    Date   : 2020-05-21 01:16:39
    //    Author : Arhua Ho
    //    Content: 向下滾動超過1300時更換背景色，並適應移動端設備
    // */
    // if ((ScrollY > 1250 && ScrollY < 2061 && ScreenW > 425)) {
    //     setTheme({ type: "AboutMeCardEnterChange", changeColor: "#e9967a" });
    //     //window.scrollTo(0, 0)
    // }
    // else if (ScrollY > 500 && ScrollY < 931 && ScreenW < 426) {
    //     setTheme({ type: "AboutMeCardEnterChange", changeColor: "#e9967a" });
    // }
    // /* 
    //    Date   : 2020-05-21 14:20:04
    //    Author : Arhua Ho
    //    Content: 向下滾動超過1300時，(至What Can I do 區域時) 更換背景色，並適應移動端設備
    // */
    // else if (ScrollY > 2060 && ScreenW > 425) {
    //     setTheme({ type: "AboutMeCardEnterChange", changeColor: "#c6c4b9" });
    // }
    // else if (ScrollY > 930 && ScreenW < 426) {
    //     setTheme({ type: "AboutMeCardEnterChange", changeColor: "#c6c4b9" });
    // }
    // else {
    //     setTheme({ type: "AboutMeCardEnterChange", changeColor: null });
    // }
    // console.log(ScrollY)
    // }, [ScreenW, ScrollY, setTheme])

    useEffect(() => {
        /* 
           Date   : 2020-05-21 15:48:32
           Author : Arhua Ho
           Content: 滾動至頂部
        */
        window.scrollTo(0, 0);
        setTheme({ type: "AboutMeCardEnterChange", changeColor: null });

        return () => {

        }

    }, [])

    return (
        <>
            <SubContainer
                theme={{ ...subContainer.skillsMain, ...(ScrollY > 50 ? { backgroundColor: (themeColors.aboutMeCardEnterBackgroundColor ?? themeColors.navbarScrollBackgroundColor) } : null) }}>
                <Container theme={{
                    ...container.skillsmainbg, img: RSBG, attachment: "fixed"
                    , ...(ScrollY > 50 ? { img: RSBG } : null),
                }}>
                    <SubContainer theme={{ ...subContainer.fill }}>
                        <P theme={{ ...p.skillsTopmainP, color: themeColors.navbarColor, ...(ScrollY > 50 ? { color: themeColors.navbarScrollColor } : null) }}>
                            Dig a little
                            <br />
                            deeper.
                            <br />

                        </P>
                        <Link to="/logo192.png" style={{ textDecoration: "none" }} target="_blank" download>
                            <LineButton
                                theme={{
                                    ...lineButton.SkillsButton, ...(ScrollY > 50 ? {
                                        color: themeColors.navbarScrollColor,
                                        border: `${themeColors.navbarScrollColor} solid 0.05rem`,
                                        transBackgroundColor: themeColors.navbarScrollColor,
                                        transColor: themeColors.navbarScrollBackgroundColor
                                    } : null),

                                }}>Download Resume</LineButton>
                        </Link>
                    </SubContainer>
                </Container>
            </SubContainer>
            {/* 
               Date   : 2020-05-22 17:26:01
               Author : Arhua Ho
               Content: 技術 / 專長
            */}
            <SubContainer theme={{ ...subContainer.skillsMain, ...(ScrollY > 50 ? { backgroundColor: themeColors.navbarScrollColor } : null) }}>
                <P theme={{ ...p.skillsMainP }} style={{ fontWeight: "bold" }}> 技術 / 專長</P>
                <div style={{ height: "1rem" }}></div>
                <Container theme={{ ...container.skillsCard }}>
                    <SkillsCard title={"前端 Front-End"} list={[
                        { "React & Hooks": ["使用套件 :", "styled-components", "Material-UI", "React Router", "GraphQL", "Apollo"] },
                        { "Flex (RWD、切版)": [] },
                        { "Javascript ES6+": [] },
                        { "HTML / CSS": [] },
                        { "Vue.js": [] }
                    ]}></SkillsCard>
                    <SkillsCard title={"後端 Back-End"} list={[
                        { "Prisma & graphql-yoga": ["資料庫 :", "MySQL", "PostgreSQL"] },
                        { ".NET Core Restful Web API": ["資料庫 :", "‎SQL Server (Entity Framework Code/DB first)"] },
                    ]}></SkillsCard>
                    <SkillsCard title={"MVC"} list={[
                        { "ASP.NET (.NET feamework)": [] },
                        { ".NET Core MVC (C#)": [] },
                        { "Java Spring-boot & Thymeleaf": [] },
                    ]}></SkillsCard>
                </Container>
                <Container theme={{ ...container.skillsCard }}>
                    <SkillsCard title={"佈署 Deploy"} list={[
                        { "雲端": [null, "Heroku (Docker)", "Prisma Cloud", "GitHub Pages"] },
                        { "自架伺服器": [null, "IIS", "Xampp (Apache)", "Git Server (以Apache搭配Git建立自己的Git Server)"] },
                    ]}></SkillsCard>
                    <SkillsCard title={"版控 / 其他技術"} list={[
                        { "版控": [null, "Git"] },
                        { "其他技術": [null, "Excel VBA", "R 語言", "android (Java)"] },
                    ]}></SkillsCard>

                </Container>
                <div style={{ height: "1rem" }} />
            </SubContainer>

            {/* 
               Date   : 2020-05-22 17:26:01
               Author : Arhua Ho
               Content: 個人作品
            */}
            <SubContainer theme={{ ...subContainer.skillsMain, ...(ScrollY > 50 ? { backgroundColor: themeColors.navbarScrollColor } : null) }}>
                <P theme={{ ...p.skillsMainP }} style={{ fontWeight: "bold" }}> 個人作品</P>
                <div style={{ height: "1rem" }} />
                <Container theme={{ ...container.skillsCard }}>
                    <WorksCard styles={{ height: "15rem" }} title={"店鋪形象網站"} href={"https://hairsalon-mam.herokuapp.com/"} text={"第一次替實體店鋪，建立形象網站，將所要的特色展現出來，是最具成就的事。"} />
                    <WorksCard styles={{ height: "15rem" }} title={"React教學網站"} href={"https://taiwanhua.github.io/ArhuaReactCourse"} text={"決定將自己的知識分享出去，豐富自己也幫助別人。"} />
                    <WorksCard styles={{ height: "15rem" }} title={"個人印象網站"} href={"https://yaunwangpersonweb.herokuapp.com/"} text={"快速地替有需求的他打造一個簡單好看的個人網頁。"} />
                </Container>
                <div style={{ height: "1rem" }} />
            </SubContainer>

            {/* 
               Date   : 2020-05-22 17:26:01
               Author : Arhua Ho
               Content: 工作學經歷
            */}
            <SubContainer theme={{ ...subContainer.skillsMain, ...(ScrollY > 50 ? { backgroundColor: themeColors.navbarScrollColor } : null) }}>
                <P theme={{ ...p.skillsMainP }} style={{ fontWeight: "bold" }}> 工作學經歷</P>
                <div style={{ height: "1rem" }}></div>
                <Container theme={{ ...container.skillsCard }}>
                    <ExperienceCard title={"學歷"} list={[
                        { "東吳大學數學系畢業": [] },
                        { "國立宜蘭高中": [] },
                    ]}></ExperienceCard>
                    <ExperienceCard title={"工作經歷"} list={[
                        { "花旗IISI報表系統": ["#期間", "2019/10-2020/03", "#工作內容", "畫面製作、串接後端資料庫、資料庫設計、系統維護"] },
                        { "富邦端末系統": ["#期間", "2018/11-2019/10", "#工作內容", "畫面製作、串接後端資料庫、系統維護"] },
                    ]}></ExperienceCard>
                </Container>
                <div style={{ height: "1rem" }}></div>
            </SubContainer>
            {/* 
               Date   : 2020-05-22 17:26:01
               Author : Arhua Ho
               Content: 聯絡我
            */}
            <SubContainer theme={{ ...subContainer.skillsMain, ...(ScrollY > 50 ? { backgroundColor: themeColors.navbarScrollColor } : null) }}>
                <P theme={{ ...p.skillsMainP }} style={{ fontWeight: "bold" }}> 今天就聯絡我</P>
                <div style={{ height: "1rem" }}></div>
                <Container theme={{ ...container.skillsCard, }} >
                    <ContactCard styles={{ height: "12rem" }} title={"聯絡方式"} href={"https://taiwanhua.github.io/ArhuaReactCourse"}>
                        <div style={{ height: "1rem" }}></div>
                        <li style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                            <img style={{
                                height: "2rem", width: "2rem",
                                position: "relative", top: "0.5rem", marginRight: "0.5rem"
                            }} src={line} alt={"line"} />
                                ID : fansofcheer</li>
                        <li style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                            <img style={{
                                height: "2rem", width: "2rem",
                                position: "relative", top: "0.5rem", marginRight: "0.5rem"
                            }} src={mobile} alt={"line"} />
                            手機 : 0987-837-233</li>
                    </ContactCard>
                </Container>
                <div style={{ height: "1rem" }}></div>
            </SubContainer>
        </>
    )
}