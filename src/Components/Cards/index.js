import React, { useContext, useReducer, useEffect, useState } from 'react';
import { Context } from '../../Store/store';
import { SubContainer, Container } from '../../Components/FlexContainers/Containers';
import styled from 'styled-components'
import { P } from '../Contents';
import { LineButton } from '../Buttons';

/* 
   Date   : 2020-05-20 16:57:53
   Author : Arhua Ho
   Content: AboutMeCard組件
*/
export const AboutMeCard = (props) => {
    const { Theme, setTheme } = useContext(Context);
    const { FlexContainers: { subContainer, container }, contents: { p }, themeColors } = Theme;

    return (
        <SubContainer onClick={props?.onClick ?? null} theme={{ ...subContainer.aboutMeCard, }}
            onMouseEnter={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: props?.changeColor }); }}
            onMouseLeave={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: null }); }}>
            <CardContainer cursor={props?.onClick ? 1 : null} shadowColor={props.shadowColor} imgHover={props.imgHover} imgUnHover={props.imgUnHover} style={{ width: "100%", height: "100%" }}></CardContainer>

        </SubContainer>
    )
}

const CardContainer = styled.div.attrs((props) => ({}))`
    background-image: url(${(props) => (props?.imgUnHover ?? 'unset')});
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0.125rem 0.125rem 0.5rem 0.375rem ${(props) => (props?.shadowColor ?? 'unset')}3d;
    cursor: ${(props) => (props?.cursor ? 'pointer' : 'unset')};

    &:hover {
        background-image: url(${(props) => (props?.imgHover ?? 'unset')});
        background-size: cover;
        background-repeat: no-repeat;
    }
`

/* 
   Date   : 2020-05-20 16:58:11
   Author : Arhua Ho
   Content: 放我的大頭照的Card，
            注意高度吃 1.34倍 vw
*/

export const HeadCard = styled.div.attrs((props) => ({}))`
    background-image: url(${(props) => (props?.imgUnHover ?? 'unset')});
    width: ${(props) => (props?.width ?? 'unset')};
    height: ${(props) => (props?.width ? `${parseFloat(props.width) * 1.34}vw` : 'unset')};
    background-color: ${ (props) => (props?.backgroundColor ?? 'unset')};
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0.125rem 0.125rem 0.5rem 0.375rem ${ (props) => (props?.shadowColor ?? 'unset')} 3d;
    cursor: ${ (props) => (props?.cursor ? 'pointer' : 'unset')};

    &: hover {
        background-image: url(${(props) => (props?.imgHover ?? 'unset')});
        background-size: cover;
        background-repeat: no-repeat;
    }
`

/* 
   Date   : 2020-05-22 12:34:31
   Author : Arhua Ho
   Content: 技術卡片
*/

export const SkillsCard = (props) => {
    const { Theme, setTheme } = useContext(Context);
    const { FlexContainers: { subContainer, container }, contents: { p }, themeColors } = Theme;

    return (
        <SubContainer onClick={props?.onClick ?? null} theme={{ ...subContainer.skillsCard, }}
        // onMouseEnter={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: props?.changeColor }); }}
        // onMouseLeave={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: null }); }}
        >
            <P theme={{ ...p.skillsCardTitleP }}>{props.title}</P>

            <ul style={{ fontFamily: "Microsoft JhengHei" }}>
                {props.list && props.list.map((item, index) => (
                    <li key={`one${index}`}> {Object.keys(item)[0]}
                        <ul>
                            {item[Object.keys(item)[0]].map((item, index) =>
                                (((item ?? true) && index > 0) ? <li key={`two${index}`}>{item}</li> : <li key={`two${index}`} style={{ listStyleType: 'none' }}>{item}</li>)
                            )}
                        </ul>
                    </li>
                )
                )}
            </ul>
        </SubContainer>
    )
}

/* 
   Date   : 2020-05-22 12:34:31
   Author : Arhua Ho
   Content: 作品卡片
*/

export const WorksCard = (props) => {
    const { Theme, setTheme } = useContext(Context);
    const { FlexContainers: { subContainer, container }, contents: { p }, themeColors } = Theme;
    return (
        <SubContainer style={{ ...props.styles }} onClick={props?.onClick ?? null}
            theme={{ ...subContainer.skillsCard }}
            onMouseEnter={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: props?.changeColor }); }}
            onMouseLeave={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: null }); }}
        >
            <P theme={{ ...p.skillsCardTitleP }}>{props.title}</P>
            <ul style={{ fontFamily: "Microsoft JhengHei" }}>
                <li style={{ listStyleType: 'none' }}>{props.text}</li>
            </ul>
            <div onClick={props.href ? (() => window.open(props.href, "_blank")) : null}>
                <LineButton style={{ position: "bottom", margin: "0.3rem auto" }}>link</LineButton>
            </div>
        </SubContainer>
    )
}

/* 
   Date   : 2020-05-22 12:34:31
   Author : Arhua Ho
   Content: 學經歷卡片
*/
export const ExperienceCard = (props) => {
    const { Theme, setTheme } = useContext(Context);
    const { FlexContainers: { subContainer, container }, contents: { p }, themeColors } = Theme;
    return (
        <SubContainer style={{ ...props.styles }} onClick={props?.onClick ?? null}
            theme={{ ...subContainer.skillsCard }}
            onMouseEnter={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: props?.changeColor }); }}
            onMouseLeave={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: null }); }}
        >
            <P theme={{ ...p.skillsCardTitleP }}>{props.title}</P>
            <ul style={{ fontFamily: "Microsoft JhengHei" }}>
                {props.list && props.list.map((item, index) => (
                    <li key={`one${index}`}> {Object.keys(item)[0]}
                        <ul>
                            {item[Object.keys(item)[0]].map((item, index) =>
                                (item.includes('#') ? <li key={`two${index}`}>{item.replace('#', '')}</li> : <li key={`two${index}`} style={{ listStyleType: 'none' }}>{item}</li>)
                            )}
                        </ul>
                    </li>
                )
                )}
            </ul>
        </SubContainer>
    )
}

/* 
   Date   : 2020-05-22 12:34:31
   Author : Arhua Ho
   Content: 聯絡我卡片
*/
export const ContactCard = (props) => {
    const { Theme, setTheme } = useContext(Context);
    const { FlexContainers: { subContainer, container }, contents: { p }, themeColors } = Theme;
    return (
        <SubContainer style={{ ...props.styles }} onClick={props?.onClick ?? null}
            theme={{ ...subContainer.skillsCard }}
            onMouseEnter={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: props?.changeColor }); }}
            onMouseLeave={(e) => { setTheme({ type: "AboutMeCardEnterChange", changeColor: null }); }}
        >
            <P theme={{ ...p.skillsCardTitleP }}>{props.title}</P>
            <ul style={{ fontFamily: "Microsoft JhengHei", listStyleType: 'none', display: "table", margin: "0 auto" }}>
                {props.children}
            </ul>
        </SubContainer>
    )
}