import {
} from '../actions/types';

// import bottega1 from '../images/bottega1.png';

const INITIAL_STATE = {
    resumeItems: [
        {
            title: "Github",
            subTitle: "My Github Page",
            url: "https://www.github.com/marquisgaston",
            imageUrl: "http://markmiyashita.com/assets/images/github_pages/github_homepage.jpg",
            keyWords: ["github", "projects","code", "coding"],
            class: "link",
            icon: "fab fa-github"
        },
        {
            title: "LinkedIn",
            subTitle: "My Linkedin Profile",
            url: "https://www.linkedin.com/in/marquisgaston",
            imageUrl: "https://static-wix-blog.wix.com/blog/wp-content/uploads/2018/07/How-to-Create-an-Award-Winning-Company-Page-on-LinkedIn_Featured.png",
            keyWords: ["linkedin", "linked","in", "linked-in"],
            class: "link",
            icon: "fab fa-linkedin"
        },
        {
            title: "The New! MinnMax.com",
            subTitle: "My Capstone Project",
            url: "https://minnmax.netlify.com",
            imageUrl: "https://i.ytimg.com/vi/-iOSHoAyo00/maxresdefault.jpg",
            keyWords: ["projects","code", "coding", "capstone", "my capstone", "project"],
            class: "link"
        },
        {
            title: "The New! MinnMax.com",
            subTitle: "My Capstone Project github link",
            url: "https://github.com/marquisgaston/minnmax-main",
            imageUrl: "https://i.ytimg.com/vi/-iOSHoAyo00/maxresdefault.jpg",
            keyWords: ["projects","code", "coding", "capstone", "my capstone", "project"],
            class: "link",
            icon: "fab fa-github"
        },
        {
            title: "Portfolio Project",
            subTitle: "My Bottega Portfolio Project ",
            url: "https://mjg-bottega-react-portfolio.herokuapp.com/",
            // imageUrl: bottega1,
            keyWords: ["github", "projects","code", "coding"],
            class: "link",
            icon: "fab fa-github"
        },
        {
            title: "The New! MinnMax.com",
            subTitle: "My Capstone Project info",
            localUrl: "/capstone",
            imageUrl: "https://i.ytimg.com/vi/-iOSHoAyo00/maxresdefault.jpg",
            keyWords: ["project", "projects","code", "coding", "capstone", "minnnmax", "bottega", "react", "javascript", "node", "nodejs", "node.js"],
            class: "project"
        },
        {
            title: "Resume",
            subTitle: "My Resume",
            imageUrl: "https://docs.google.com/document/d/1mWRqgDd30Er4ZvEvIrX7WlwzHiVGRfxAjRn5PNY99FY/edit",
            keyWords: ["resume"],
            class: "resume"
        },
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
    
        default: return state
    }
}

