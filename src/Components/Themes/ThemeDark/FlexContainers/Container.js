import { themeColors } from '../Colors'

export default {
    /* 
       Date   : 2020-05-17 23:54:33
       Author : Arhua Ho
       Content: 全部不設置，
                控制子組件排列方向: row、row-reverse、column、column-reverse
                控制子組件在水平方向上的對齊: flex-start、center、flex-end、space-between、space-around、space-evenly
                控制子組件在垂直方向上的對齊: flex-start、center、flex-end、stretch、baseline
    */
    unset: { direction: 'unset', justify: 'unset', alignItems: 'unset' },
    directionRow: { direction: 'row', justify: 'unset', alignItems: 'unset' },
    navbar: { direction: 'row', justify: 'space-between', alignItems: 'center', position: "fixed" },
    mainbg: { direction: 'row', justify: 'center', alignItems: 'unset', backgroundRepeat: "no-repeat", height: "100%" },
    aboutMe: { direction: 'row', justify: 'center', alignItems: 'unset' },
    meSays: { direction: 'row', justify: 'space-between', alignItems: 'unset' },
    whatCanIDo: { direction: 'row', justify: 'center', alignItems: 'center' },
    /* 
       Date   : 2020-05-22 11:14:40
       Author : Arhua Ho
       Content: Skills頁面
    */
    skillsmainbg: { direction: 'row', justify: 'center', alignItems: 'unset', backgroundRepeat: "no-repeat", backgroundSize: "cover", positionx: "center",height: "calc(100vh - 4rem)", },
    skillsCard: { direction: 'row', justify: 'center', alignItems: 'unset' },
};