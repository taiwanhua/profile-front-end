import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery';

/* 
   Date   : 2020-05-18 15:07:21
   Author : Arhua Ho
   Content: P標籤組件
*/
export const P = styled.p.attrs((props) => ({

}))`

    //常用屬性
    font-size: ${props => props?.theme?.fontSize ?? '2rem'};
    color: ${props => props?.theme?.color ?? '#191919'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'unset'};
    line-height: ${props => props?.theme?.height ?? '2.2rem'};
    height: ${props => props?.theme?.height ?? '2.2rem'};
    width: ${props => props?.theme?.width ?? 'unset'};
    font-family: ${props => props?.theme?.fontFamily ?? 'fantasy'};
    padding: ${props => props?.theme?.padding ?? 'unset'}; 
    transition: background-color 1s ease, color 1s ease;
    text-align: ${props => props?.theme?.textAlign ?? 'center'}; 

    margin-block-start:${props => props?.theme?.resetSE ? '0rem' : '1em'}; 
    margin-block-end: ${props => props?.theme?.resetSE ? '0rem' : '1em'}; 

    @media ${mediaQuery.mobileL} { 
        
        font-size: ${props => props?.theme?.mobileL?.fontSize ? props.theme.mobileL.fontSize : (props?.theme?.fontSize ?? '2rem')};
        color: ${props => props?.theme?.mobileL?.color ? props.theme.mobileL.color : (props?.theme?.color ?? '#191919')};
        background-color: ${props => props?.theme?.mobileL?.backgroundColor ? props.theme.mobileL.backgroundColor : (props?.theme?.backgroundColor ?? 'unset')};
        line-height: ${props => props?.theme?.mobileL?.height ? props.theme.mobileL.height : (props?.theme?.height ?? '2.2rem')};
        height: ${props => props?.theme?.mobileL?.height ? props.theme.mobileL.height : (props?.theme?.height ?? '2.2rem')};
        width: ${props => props?.theme?.mobileL?.width ? props.theme.mobileL.width : (props?.theme?.width ?? 'unset')};
        font-family: ${props => props?.theme?.mobileL?.fontFamily ? props.theme.mobileL.fontFamily : (props?.theme?.fontFamily ?? 'fantasy')};
        padding: ${props => props?.theme?.mobileL?.padding ? props.theme.mobileL.padding : (props?.theme?.padding ?? 'unset')};
        transition: background-color 1s ease, color 1s ease;
        text-align: ${props => props?.theme?.mobileL?.textAlign ? props.theme.mobileL.textAlign : (props?.theme?.textAlign ?? 'center')};
    }

    @media ${mediaQuery.laptop} {
        font-size: ${props => props?.theme?.laptop?.fontSize ? props.theme.laptop.fontSize : (props?.theme?.fontSize ?? '2rem')};
        color: ${props => props?.theme?.laptop?.color ? props.theme.laptop.color : (props?.theme?.color ?? '#191919')};
        background-color: ${props => props?.theme?.laptop?.backgroundColor ? props.theme.laptop.backgroundColor : (props?.theme?.backgroundColor ?? 'unset')};
        line-height: ${props => props?.theme?.laptop?.height ? props.theme.laptop.height : (props?.theme?.height ?? '2.2rem')};
        height: ${props => props?.theme?.laptop?.height ? props.theme.laptop.height : (props?.theme?.height ?? '2.2rem')};
        width: ${props => props?.theme?.laptop?.width ? props.theme.laptop.width : (props?.theme?.width ?? 'unset')};
        font-family: ${props => props?.theme?.laptop?.fontFamily ? props.theme.laptop.fontFamily : (props?.theme?.fontFamily ?? 'fantasy')};
        padding: ${props => props?.theme?.laptop?.padding ? props.theme.laptop.padding : (props?.theme?.padding ?? 'unset')};
        transition: background-color 1s ease, color 1s ease;
        text-align: ${props => props?.theme?.laptop?.textAlign ? props.theme.laptop.textAlign : (props?.theme?.textAlign ?? 'center')};
    }

    @media  ${mediaQuery.mobileLSpin}{
        font-size: ${props => props?.theme?.mobileLSpin?.fontSize ? props.theme.mobileLSpin.fontSize : (props?.theme?.fontSize ?? '2rem')};
        color: ${props => props?.theme?.mobileLSpin?.color ? props.theme.mobileLSpin.color : (props?.theme?.color ?? '#191919')};
        background-color: ${props => props?.theme?.mobileLSpin?.backgroundColor ? props.theme.mobileLSpin.backgroundColor : (props?.theme?.backgroundColor ?? 'unset')};
        line-height: ${props => props?.theme?.mobileLSpin?.height ? props.theme.mobileLSpin.height : (props?.theme?.height ?? '2.2rem')};
        height: ${props => props?.theme?.mobileLSpin?.height ? props.theme.mobileLSpin.height : (props?.theme?.height ?? '2.2rem')};
        width: ${props => props?.theme?.mobileLSpin?.width ? props.theme.mobileLSpin.width : (props?.theme?.width ?? 'unset')};
        font-family: ${props => props?.theme?.mobileLSpin?.fontFamily ? props.theme.mobileLSpin.fontFamily : (props?.theme?.fontFamily ?? 'fantasy')};
        padding: ${props => props?.theme?.mobileLSpin?.padding ? props.theme.mobileLSpin.padding : (props?.theme?.padding ?? 'unset')};
        transition: background-color 1s ease, color 1s ease;
        text-align: ${props => props?.theme?.mobileLSpin?.textAlign ? props.theme.mobileLSpin.textAlign : (props?.theme?.textAlign ?? 'center')};
    }

`