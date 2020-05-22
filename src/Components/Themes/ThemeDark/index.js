/* 
   Date   : 2020-05-17 23:41:01
   Author : Arhua Ho
   Content: 所有 ThemeDark 主題客製樣式、與主要配色
*/
import container from './FlexContainers/Container';
import subContainer from './FlexContainers/SubContainer';
import { themeColors } from './Colors';
import lineButton from './Buttons/LineButton';
import p from './Contents/P';

export default {
    FlexContainers: {
        container,
        subContainer,

    },
    buttons: {
        lineButton
    },
    contents:{
        p
    },
    themeColors
};