import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery';

/* 
   Date   : 2020-05-18 15:07:21
   Author : Arhua Ho
   Content: LineButton組件
*/
export const LineButton = styled.div.attrs((props) => ({

}))`

    //常用屬性
    border:  ${props => props?.theme?.border ?? '#191919 solid 0.05rem'}; 
    font-size: ${props => props?.theme?.fontSize ?? '1.7rem'};
    color: ${props => props?.theme?.color ?? '#191919'};
    border-radius: ${props => props?.theme?.borderRadius ?? '0.15rem'};
    background-color: ${props => props?.theme?.backgroundColor ?? '#ffffff'};
    line-height: ${props => props?.theme?.height ?? '2.2rem'};
    height:${props => props?.theme?.height ?? '2.2rem'};
    width:${props => props?.theme?.width ?? '6rem'};
    font-family: ${props => props?.theme?.fontFamily ?? 'Impact'};
    padding: ${props => props?.theme?.padding ?? 'unset'}; 
    margin: ${props => props?.theme?.margin ?? 'unset'}; 
    transition: background-color 1s ease, color 1s ease, border 1s ease;
    text-align: center;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props?.theme?.transBackgroundColor ?? '#191919'};
        color: ${props => props?.theme?.transColor ?? '#ffffff'};
    }

    &::selection {
        background: #ffffff00;
    }

    @media ${mediaQuery.mobileL} { 
        margin: ${props => props?.theme?.mobileL?.margin ? props.theme.mobileL.margin : (props?.theme?.margin ?? 'unset')};
        font-size: ${props => props?.theme?.mobileL?.fontSize ? props.theme.mobileL.fontSize : (props?.theme?.fontSize ?? '1.7rem')};
        width:${props => props?.theme?.mobileL?.width ? props.theme.mobileL.width : (props?.theme?.width ?? '6rem')};
        line-height: ${props => props?.theme?.mobileL?.height ? props.theme.mobileL.height : (props?.theme?.height ?? '2.2rem')};
        height: ${props => props?.theme?.mobileL?.height ? props.theme.mobileL.height : (props?.theme?.height ?? '2.2rem')};
    }

    @media ${mediaQuery.laptop} {
        margin: ${props => props?.theme?.laptop?.margin ? props.theme.laptop.margin : (props?.theme?.margin ?? 'unset')};
        font-size: ${props => props?.theme?.laptop?.fontSize ? props.theme.laptop.fontSize : (props?.theme?.fontSize ?? '1.7rem')};
        width:${props => props?.theme?.laptop?.width ? props.theme.laptop.width : (props?.theme?.width ?? '6rem')};
        line-height: ${props => props?.theme?.laptop?.height ? props.theme.laptop.height : (props?.theme?.height ?? '2.2rem')};
        height: ${props => props?.theme?.laptop?.height ? props.theme.laptop.height : (props?.theme?.height ?? '2.2rem')};
    }
`
