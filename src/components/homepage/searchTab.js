import React, { Component } from 'react';
import { FormControl, Button, Carousel } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import history from '../../history';

class SearchTab extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
    }
    state = { 
        searchText: "linkedin"
     }

    componentDidMount(){
        
    }

    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.searchText !== null && this.state.searchText.length > 0){
            if (this.state.searchText.toLowerCase() === "resume") {
                window.open('https://docs.google.com/document/d/1mWRqgDd30Er4ZvEvIrX7WlwzHiVGRfxAjRn5PNY99FY/edit');
            } else {
                this.props.setSearchTerm(this.state.searchText);
                axios
                    .get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.searchText}&part=snippet&maxResults=50&key=${process.env.REACT_APP_YT_API_KEY}`)
                        .then(res => {
                            this.props.pullYoutubeItems(res.data.items)
                            console.log("res", res.data.items)
                        })
                    history.push('/search')
            }
        } else {
            return
        }
    }

    renderQuickLinks = () => {
        const quickLinks = [
            {
                title: "Profile",
                url: "/profile",
                icon: "fas fa-portrait"
            },
            {
                title: "My Captone Project",
                url: "https://minnmax.netlify.com/",
                icon: "fab fa-napster"
            },
            {
                title: "My School",
                url: "https://www.bottega.tech",
                icon: "fas fa-graduation-cap"
            },
            {
                title: "My Resume",
                url: "https://docs.google.com/document/d/1mWRqgDd30Er4ZvEvIrX7WlwzHiVGRfxAjRn5PNY99FY",
                icon: "fab fa-google-drive"
            },
            {
                title: "My Projects",
                url: "/projects",
                icon: "fas fa-keyboard"
            },
        ]
        var counter = 0;
        return (
            quickLinks.map(item => {
                counter++
                return (
                    <a key={`${counter}`} className="quick-link-wrapper" href={item.url}>
                        <div className="quick-link" >
                        <i className={item.icon}></i>
                        <h5>{item.title}</h5>
                        </div>
                    </a>
                )
            })
        )
    }

    renderQuickSearch = () => {
        if (this.state.searchText.length > 0){
            const newList = []
            const newList2 = []
            const newList3 = []

            this.props.resumeData.resumeItems.map(item =>{
                if (newList.includes(item)){
                } else 
                if (this.state.searchText.toLowerCase() === "all"){
                    if (newList.includes(item)) {
                    } else {
                        newList.push(item)
                    }
                } else {
                    item.keyWords.filter(keyWord => {
                        if (this.state.searchText.toLowerCase() === keyWord && item.title.toLowerCase().includes(this.state.searchText.toLowerCase())){
                            if (newList.includes(item) | newList.includes(item) | newList3.includes(item)){
                            } else {
                                newList.push(item)
                            }
                        } else {
                        }
                        return newList
                    })

                    if (item.title.toLowerCase().includes(this.state.searchText.toLowerCase())){
                        if (newList.includes(item)) {
                        } else {
                            newList.push(item)
                        }
                    }

                    item.keyWords.filter(keyWord => {
                        if (this.state.searchText.toLowerCase() === keyWord){
                            if (newList2.includes(item) | newList.includes(item) | newList3.includes(item)){
                            } else {
                                newList2.push(item)
                            }
                        } else {
                        }
                        
                        return newList
                    })

                    //  one.filter(listItem => {
                    //     if (item.title.includes(listItem)){
                    //         if (newList3.includes(item) | newList.includes(item) | newList2.includes(item)){
                    //             return
                    //         } else {
                    //             newList3.push(item)
                    //         }
                    // }})

                }
                return newList
            })

            return (
                <div className="quick-search">
                    {newList.map(item => {
                        return (
                            <div key={`${item.index}`} className="quick-search-item">
                                <a className="quick-search-link" href={item.url ? item.url : item.localUrl}>
                                <div className="title">
                                    {item.title}
                                </div>
                                {item.subTitle ? <div className="sub-title">
                                    {item.subTitle}
                                </div> : null}
                                {item.url ? <div className="url">
                                    {item.url}
                                </div> : null}                                
                                </a>
                            </div>
                        )
                    })}
                    {newList2.map(item => {
                        return (
                            <div className="quick-search-item">
                                <a className="quick-search-link" href={`${item.url}`}>
                                <div className="title">
                                    {item.title}
                                </div>
                                {item.subTitle ? <div className="sub-title">
                                    {item.subTitle}
                                </div> : null}
                                {item.url ? <div className="url">
                                    {item.url}
                                </div> : null}                                
                                </a>
                            </div>
                        )
                    })}
                    {newList3.map(item => {
                        return (
                            <div key={`${item}${item.index}`} className="quick-search-item">
                                <a className="quick-search-link" href={`${item.url}`}>
                                <div className="title">
                                    {item.title}
                                </div>
                                {item.subTitle ? <div className="sub-title">
                                    {item.subTitle}
                                </div> : null}
                                {item.url ? <div className="url">
                                    {item.url}
                                </div> : null}                                
                                </a>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="quick-links">
                    <a className="quick-link-wrapper" href="https://www.github.com/marquisgaston">
                        <div className="quick-link" >
                        <i className="fab fa-github"></i>
                        <h5>My Github</h5>
                        </div>
                    </a>
                    <a className="quick-link-wrapper" href="https://www.linkedin.com/in/marquisgaston">
                        <div className="quick-link" >
                        <i className="fab fa-linkedin"></i>
                        <h5>My LinkedIn</h5>
                        </div>
                    </a>
                    {this.renderQuickLinks()}
                </div>
            )
        }
    }

    render() {
        const list = ["Github", "Linkedin", "Bottega", "Netlify", "React", "NodeJS", "Python", "Javascript"]
        
        var counter = 0;
        return ( 
           <div className="searchTab">
                <div className="content-wrapper">            
                    <div className="main-title" style={{marginBottom: ".5em"}}>Hi... I'm Marquis Gaston! </div>
                        {/* <p style={{marginBottom: "2em"}} class="lead">I'm your next Full-Stack/Front-End/Back-End Developer based out of NW Ohio/Toledo</p> */}
                
                    <div className="carousel-text" style={{margin: ".5em"}}>Try typing a keyword to see what I can do for you!</div>
                        <Carousel className="skill-carousel" style={{margin: ".5em 0"}}>
                        {list.map(item => {
                            counter++
                            return (
                                <Carousel.Item key={`${counter}`} style={{fontSize: "1.4em"}}>
                                    {item}
                                </Carousel.Item>
                                 )
                            })}
                        </Carousel>
                <form className="search-wrapper" onSubmit={this.handleClick} style={{display: "flex", justifyContent: "center", marginTop: ".7em"}}>
                <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder="Search" />
                <Button className="search-button" variant="outline-success" type="submit" style={{color: "white", borderColor: "white", backgroundColor: "#$main-blue"}}>Search</Button>
                </form>
                <div className="quick-search-wrapper">
                    {this.renderQuickSearch()}
                </div>
            </div>
           </div>
         );
    }
}
function mapStateToProps (state) {
    return state
}

SearchTab = connect(mapStateToProps, actions)(SearchTab)
 
export default SearchTab;