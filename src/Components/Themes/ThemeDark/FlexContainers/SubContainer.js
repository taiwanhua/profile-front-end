import { themeColors } from '../Colors'

export default {
    /* 
       Date   : 2020-05-17 23:54:33
       Author : Arhua Ho
       Content: occupy為0-12之間的的數字
                選用斷點:
                    mobileL: '大於425px'
                    laptop: '大於1024px'
                
    */
    unset: { occupy: "unset", },
    fill: { occupy: 12 },

    /* 
       Date   : 2020-05-19 01:44:37
       Author : Arhua Ho
       Content: navbar部分
    */
    navbar: {
        occupy: 12,
        height: "4rem",
        backgroundColor: themeColors.navbarBackgroundColor,
        mobileL: { padding: "0px" },
        laptop: { padding: "0px" },
    },
    logo: {
        padding: "0.1rem",
        width: "3.8rem",
        mobileL: { width: "3.8rem", },
        laptop: { width: "3.8rem", },
        cursor: "pointer"
    },
    navbarButton: {
        padding: "0.1rem 0.5rem",
    },

    /* 
       Date   : 2020-05-19 01:44:52
       Author : Arhua Ho
       Content: Home頁面
    */
    main: {
        occupy: 12,
        height: "calc(95vh - 4rem)",
        backgroundColor: themeColors.navbarBackgroundColor,
        transition: "background-color 1s ease"
    },
    aboutMe: {
        occupy: 12,
        padding: "0% 10vw",
        backgroundColor: themeColors.navbarBackgroundColor,
        transition: "background-color 1s ease"
    },
    aboutMeCard: {
        occupy: "unset",
        width: "30vw",
        height: "30vw",
        margin: "0.7rem",
        backgroundColor: themeColors.aboutMeCardBackgroundColor,
        mobileL: { width: "30vw", height: "30vw", },
        laptop: { width: "23vw", height: "23vw", },

    },
    meSays: {
        occupy: 12,
        transition: "background-color 1s ease",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "15vw",
    },
    block: {
        occupy: 12,
        padding: "10vh 10vw",
        transition: "background-color 1s ease"
    },
    aboutMeContent: {
        occupy: 12,
        height: "32rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        borderTop: "#ffffff solid",
        transition: "background-color 1s ease",
        mobileL: { height: "52rem" },
        laptop: { height: "60.5rem", },
    },
    whatCanIDo: {
        occupy: 12,
        //height: "calc(65vh - 4rem)",
        height: "26rem",
        //backgroundSize:"inherit",
        backgroundRepeat: "no-repeat",
        positiony: "bottom",
        borderTop: "#ffffff solid",
        transition: "background-color 1s ease",
        // mobileL: { height: "12rem" },
        laptop: { height: "36rem", },
    },
    /* 
       Date   : 2020-05-22 11:13:09
       Author : Arhua Ho
       Content: Skills頁面
    */
    skillsMain: {
        occupy: 12,
        backgroundColor: themeColors.navbarBackgroundColor,
        transition: "background-color 1s ease",
        padding: "0rem 0rem 0rem"
    },

    /* 
       Date   : 2020-05-22 12:40:32
       Author : Arhua Ho
       Content: Card的SunContainer樣式
    */
    skillsCard: {
        occupy: "unset",
        width: "15.5rem",
        padding: "0 0.5rem",
        //height: "30vw",
        margin: "0.7rem 1.2rem",
        backgroundColor: "#ffffff00",
        border:"solid #191919 0.1rem",
        borderTop:"asd",
        mobileL: { width: "20.5rem", height: "20rem", },
        laptop: { width: "18.5rem", height: "20rem", },

    },
};