import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import axios from 'axios';

import SearchPagination from './searchPagination';
import SearchToggle from './searchToggle';



class SearchPage extends Component {
    state = {
        itemsPerPage: 10,
        pageStart: 0,
        listPageStart: 0
    }

    componentDidMount() {
        this.props.setCurrentPage("search");
    }

    pullYoutubeItems = () => {
        // axios
        // .get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.main.searchTerm}&part=snippet&maxResults=100&key=${process.env.REACT_APP_YT_API_KEY}`)
        //     .then(response => {
        //         console.log("response", response.data.items);
        //     })
    }

    pageUp = () => {
        this.setState({
            pageStart: this.state.pageStart + this.state.itemsPerPage
        })
    }

    pageDown = () => {
        this.setState({
            pageStart: this.state.pageStart - this.state.itemsPerPage
        })
    }

    searchPageLink = (item) => {
        this.setState({
            pageStart: ((item - 1) * (this.state.itemsPerPage))
        })
    }

    
    render () {
        this.pullYoutubeItems();
        var i = 0;
        const resultsList = [];
        while ( i < 110) {
            resultsList.push(
                "number " + i
            )
            i++;
        }

        const newList = [];
        const newList2 = [];
        const newList3 = [];
        const newList4 = [];
        const newList5 = [];

        this.props.resumeData.resumeItems.map(item => {
            if (this.props.main.searchTerm === null)
                 {
                    if (newList.includes("no search term was entered")){
                    } else {
                        newList.push("no search term was entered")
                    }
                } else
                if (this.props.main.searchTerm.toLowerCase() === "all") {
                    this.props.resumeData.resumeItems.map(item => {
                        if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                        } else {
                            newList2.push(item)
                        }
                        return null
                    }) 
                } else
                if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                } else
                if (this.props.main.searchTerm === item.title){
                    if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                    } else {
                        newList.push(item)
                    }
                } 
                else 
                if (this.props.main.searchTerm.toLowerCase() === item.title.toLowerCase()){
                    if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                    } else {
                        newList.push(item)
                    }
                } 
                else 
                if (item.title.toLowerCase().includes(this.props.main.searchTerm.toLowerCase())){
                    if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                    } else {
                        newList.push(item)
                    }
                }
                else
                {
                    item.keyWords.filter(keyWord => {
                         if (item.title === this.props.main.searchTerm && this.props.main.searchTerm === keyWord){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList2.push(item)
                            }
                        } 
                        if (item.title.includes(this.props.main.searchTerm) && this.props.main.searchTerm === keyWord){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList2.push(item)
                            }
                        }
                        if (this.props.main.searchTerm === keyWord){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList2.push(item)
                            }
                        }
                        if (item.title.includes(keyWord)){
                            if (newList.includes(item) | newList2.includes(item) | newList3.includes(item) | newList4.includes(item) | newList5.includes(item)){
                            } else {
                                newList3.push(item)
                            }
                        }

                        return newList
                    })
                }
        
            return null
        })
        
        const resumeResults = newList.concat(newList2, newList3, newList4, newList5);
        const fullResults = resumeResults;
        const listToRender = fullResults.slice(this.state.pageStart, this.state.pageStart + this.state.itemsPerPage);
        const currentResultPage = Math.floor(this.state.pageStart / this.state.itemsPerPage);
        const pageLimit = Math.floor(fullResults.length / this.state.itemsPerPage);

        const renderResults = (list) => {
            if (this.props.main.searchTerm === null){
                return (
                    "no search term was entered"
                )
            } else 
            if (list.length <=0 ){
                return (
                    "your search returned no results"
                )
            } else 
            if (this.props.main.searchTerm.toLowerCase() === "all") {
                return (
                    listToRender.map(item => {
                        if (item.title) {
                            return (
                                <a key={item.title + item.class} className={item.class} href={item.url} style={{color: "black", textDecoration: "none"}}>
                                    <Card >
                                        {item.imageUrl ? <img src={item.imageUrl} alt="no show" /> : null }
                                        <div className="card-content">
                                        <div className="title">
                                            <h3>{item.title}</h3>{item.icon ? <i class={item.icon}></i> : null}
                                        </div>
                                        {item.subTitle ? <div className="sub-title">
                                            {item.subTitle}
                                        </div>: null}
                                        {item.url ? <div className="url">
                                            {item.url}
                                        </div> : 
                                        <div className="url">
                                            {item.localUrl}
                                        </div>}
                                        </div>
                                    </Card>
                                </a>
                            )
                        }
                        return null
                    })
                )
            } else {
                return (
                    listToRender.map(item => {
                        if (item.title) {
                            return (
                                <a key={item.title + item.class} className={item.class} href={item.url} style={{color: "black", textDecoration: "none"}}>
                                    <Card >
                                        {item.imageUrl ? <img src={item.imageUrl} alt="no show" /> : null }
                                        <div className="card-content">
                                        <div className="title">
                                            <h3>{item.title}</h3>{item.icon ? <i class={item.icon}></i> : null}
                                        </div>
                                        {item.subTitle ? <div className="sub-title">
                                            {item.subTitle}
                                        </div>: null}
                                        {item.url ? <div className="url">
                                            {item.url}
                                        </div> : 
                                        <div className="url">
                                            {item.localUrl}
                                        </div>}
                                        </div>
                                    </Card>
                                </a>
                            )
                        }
                        return null
                    })
                )
            }
        }
    
        return (
            <div id="search-page" className="search-page">
                <div className="search-term-div">
                    Search Term: {this.props.main.searchTerm}
                </div>
                <SearchToggle/>
                <div className="page-buttons">

                    <div className = "page-button">
                        {currentResultPage < (pageLimit - 1) ? <button className="page-button" onClick={this.pageUp}>NEXT</button> : null}
                    </div>
                        <SearchPagination list={fullResults} itemsPerPage={this.state.itemsPerPage} currentResultPage={currentResultPage} searchPageLink={this.searchPageLink}/>
                    <div className = "page-button">
                        {currentResultPage > 0 ? <button className="page-button" onClick={this.pageDown}>PREV</button> : null}
                    </div>
                </div>
                <div className="search-results">
                    {renderResults(listToRender)}
                </div>
                <div className = "page-indicator">
                    page: {currentResultPage + 1}
                </div>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return state
}

SearchPage = connect(mapStateToProps, actions)(SearchPage);

export default SearchPage;