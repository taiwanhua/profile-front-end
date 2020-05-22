import { themeColors } from '../Colors'

export default {
    /* 
       Date   : 2020-05-17 23:54:33
       Author : Arhua Ho
       Content: LineButton樣式
    */
    navbarButton: {
        border: `${themeColors.navbartransBackgroundColor} solid 0.05rem`,
        color: themeColors.navbartransBackgroundColor,
        backgroundColor: themeColors.navbarBackgroundColor,
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        transColor: themeColors.navbartransColor,
        height: "3.4rem",
    },
    whatCanIDoButton: {
        border: `${themeColors.navbartransBackgroundColor} solid 0.05rem`,
        color: themeColors.navbartransBackgroundColor,
        backgroundColor: themeColors.navbarBackgroundColor,
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        transColor: themeColors.navbartransColor,
        height: "3.4rem",
        width: "13rem",
        mobileL: { margin: "2rem 0rem 0rem", fontSize: "2rem", height: "4rem", width: "18rem" },
        laptop: { margin: "2rem 0rem 0rem", fontSize: "3rem", height: "5rem", width: "26rem" }
    },

    /* 
       Date   : 2020-05-22 11:40:31
       Author : Arhua Ho
       Content: Skills的按鈕
    */
    SkillsButton: {
        border: `${themeColors.navbartransBackgroundColor} solid 0.05rem`,
        color: themeColors.navbartransBackgroundColor,
        backgroundColor: "#ffffff00",
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        transColor: themeColors.navbartransColor,
        borderRadius:"0.5rem",
        height: "3.4rem",
        width: "13rem",
        margin: "2rem auto 0rem",
        mobileL: { margin: "2rem auto 0rem", fontSize: "2rem", height: "4rem", width: "18rem" },
        laptop: { margin: "0rem auto 0rem", fontSize: "3rem", height: "5rem", width: "26rem" }
    },


};