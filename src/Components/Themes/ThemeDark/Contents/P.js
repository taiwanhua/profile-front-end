import { themeColors } from '../Colors'

export default {
    /* 
       Date   : 2020-05-17 23:54:33
       Author : Arhua Ho
       Content: LineButton樣式
                選用斷點:
                    mobileL: '大於425px'
                    laptop: '大於1024px'
    */
    mainP: {
        color: themeColors.navbartransBackgroundColor,
        transBackgroundColor: themeColors.navbartransBackgroundColor,

        height: "3rem",
        padding: "6rem 0rem",
        fontSize: "3rem",
        mobileL: { padding: "10rem 0rem", fontSize: "6rem", height: "5.5rem", },
        laptop: { padding: "15rem 0rem", fontSize: "9rem", height: "8.5rem", },
        mobileLSpin: {
            padding: "2rem 0rem", fontSize: "3rem", height: "3rem",
        }
    },
    aboutMeContentP: {
        color: themeColors.navbarScrollColor,
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        height: "1.2rem",
        padding: "2rem 20vw 0rem",
        fontSize: "1rem",
        fontFamily: "Microsoft JhengHei",
        mobileL: { padding: "3rem 20vw 0rem", fontSize: "1.6rem", height: "2rem", },
        laptop: { padding: "4rem 20vw 0rem", fontSize: "2.5rem", height: "3rem", },
        resetSE: true,
        textAlign: 'unset',

        mobileLSpin: {
            padding: "2rem 20vw 0rem", fontSize: "1.6rem", height: "1.8rem",
        }
    },
    whatCanIDoP: {
        color: themeColors.navbarScrollColor,
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        fontFamily: "Microsoft JhengHei",
        height: "1.2rem",
        padding: "2rem 20vw 0rem",
        fontSize: "1rem",
        mobileL: { padding: "3rem 20vw 0rem", fontSize: "1.6rem", height: "2rem", },
        laptop: { padding: "4rem 20vw 0rem", fontSize: "2.5rem", height: "3rem", },
        resetSE: true,
        textAlign: 'unset',

        mobileLSpin: {
            padding: "2rem 20vw 0rem", fontSize: "1.6rem", height: "1.8rem",
        }
    },
    /* 
       Date   : 2020-05-22 12:29:29
       Author : Arhua Ho
       Content: Skills頁面文字
    */
    skillsTopmainP: {
        color: themeColors.navbartransBackgroundColor,
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        resetSE: true,
        height: "3rem",
        padding: "6rem 0rem",
        fontSize: "3rem",
        mobileL: { padding: "10rem 0rem", fontSize: "6rem", height: "5.5rem", },
        laptop: { padding: "15rem 0rem ", fontSize: "9rem", height: "8.5rem", },
        mobileLSpin: {
            padding: "2rem 0rem", fontSize: "3rem", height: "3rem",
        }
    },
    skillsMainP: {
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        fontFamily: "Microsoft JhengHei",
        height: "2.2rem",
        padding: "2rem 20vw 0rem",
        fontSize: "2rem",
        textAlign: 'center',
        resetSE: true,
        mobileL: { padding: "3rem 20vw 0rem", fontSize: "2rem", height: "2rem", },
        laptop: { padding: "4rem 20vw 0rem", fontSize: "2.5rem", height: "3rem", },


    },
    skillsCardTitleP: {
        transBackgroundColor: themeColors.navbartransBackgroundColor,
        fontFamily: "Microsoft JhengHei",
        height: "1.2rem",
        padding: "1.5rem 0rem 0rem",
        fontSize: "1.5rem",
        textAlign: 'center',
        resetSE: true,

    },

};