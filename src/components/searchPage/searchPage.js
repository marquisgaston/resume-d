import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';

import SearchPagination from './searchPagination';
import SearchToggle from './searchToggle';



class SearchPage extends Component {
    state = {
        itemsPerPage: 10,
        pageStart: 0,
        listPageStart: 0,
        youtubeList: []
    }

    componentDidMount() {
        this.props.setCurrentPage("search");
        this.props.setSearchTerm("all");
        const youtubeList = [];
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {
                    res.data.map(item => youtubeList.push(item))
                    this.setState({
                        youtubeList: youtubeList
                    })
            })
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
        var i = 0;
        const list = [];
        while ( i < 110) {
            list.push(
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
                        return newList
                    })
                } 
        
            return item
        })
        
        const resumeResults = newList.concat(newList2, newList3, newList4, newList5, this.state.youtubeList);
        const fullResults = resumeResults.concat(this.state.youtubeList);
        const listToRender = fullResults.slice(this.state.pageStart, this.state.pageStart + this.state.itemsPerPage);
        const currentResultPage = Math.floor(this.state.pageStart / this.state.itemsPerPage);
        const pageLimit = Math.floor(fullResults.length / this.state.itemsPerPage);
        console.log("log", listToRender)

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
                    list.map(item => {
                        if (item.url){
                            return (
                                <a href={item.url}>
                                    <div className="search-result">
                                        <div className="result-img">
                                            {item.imageUrl ? <img src={item.imageUrl}></img> : null}
                                        </div>
                                        <div className="result-text">
                                            <div>
                                                {item.title}
                                            </div>
                                            {item.subTitle ? <div>
                                                {item.subTitle}
                                            </div> : null}
                                        </div>
                                    </div>
                                </a>
                            )
                        } else {
                            return (
                                <div className="search-result">
                                    <div className="result-img">
                                        {item.imageUrl ? <img src={item.imageUrl}></img> : null}
                                    </div>
                                    <div className="result-text">
                                        <div>
                                            {item.title}
                                        </div>
                                        {item.subTitle ? <div>
                                            {item.subTitle}
                                        </div> : null}
                                    </div>
                                </div>
                            )
                        }
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
                <div className="search-results-wrapper">
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