import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SearchPagination from './searchPagination';

class SearchPage extends Component {
    state = { 
        pageStart: 0,
        itemsPerPage: 10
     }

    componentDidMount(){
        this.props.setCurrentPage("search-page");
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

    searchPageLink = (linkNumber) => {
        this.setState({
            pageStart: (linkNumber -1) * this.state.itemsPerPage
        })
    }

    render() {
        
        const fullResults = [];
        
        const addToFullResults = (listToAddToResults) => {
            listToAddToResults.map(item => {
                if(!fullResults.includes(item)){
                    fullResults.push(item);
                }
            })
        }

        // SORT THROUGH RESUME ITEMS

        if (this.props.main.searchTerm === null){
            fullResults.push("no search term was entered");
        } else 
        if (this.props.main.searchTerm.toLowerCase() === "all"){
            this.props.resumeData.resumeItems.map(item => {
                fullResults.push(item);
                
            })
            this.props.search.youtubeItems.map(item => {
                fullResults.push(item)
            })
        } else {
            const list1 = this.props.resumeData.resumeItems.filter(item => 
                item.title.toLowerCase() === this.props.main.searchTerm.toLowerCase() 
            )
            const list2 = this.props.resumeData.resumeItems.filter(item => 
                item.title.toLowerCase().includes(this.props.main.searchTerm.toLowerCase()) === true
            )
            const list3 = [];
            this.props.resumeData.resumeItems.map(item => {
                item.keyWords.map(keyword => {
                    if(keyword === this.props.main.searchTerm.toLowerCase()){
                        list3.push(item)
                    }
                })
            })

            addToFullResults(list1);
            addToFullResults(list2);
            addToFullResults(list3);
            addToFullResults(this.props.search.youtubeItems);
        }

        // END RESUME SORT
        const pageLimit = Math.floor(fullResults.length / this.state.itemsPerPage);
        const currentResultsPage = Math.floor(this.state.pageStart/this.state.itemsPerPage);
        const currentPaginationNumber = Math.floor(currentResultsPage / 10);
        const listToRender = fullResults.slice(this.state.pageStart, this.state.pageStart + this.state.itemsPerPage);

        const renderResults = () => {
            return (
                listToRender.map(item => {
                    if(item.title){
                        return (
                            <div className="result">
                                {item.title}
                            </div>
                        )
                    } else
                    if (item.snippet){
                        return (
                            <div className="result">
                                {item.snippet.title}
                            </div>
                    )

                    } else {
                        return (
                            <div className="result">
                                {item}
                            </div>
                        )
                    }
                })
            )
        }
        return ( 
            <div className="search-page" id="search-page">
                <div>
                    search term: {this.props.main.searchTerm}
                </div>
                <div className="page-buttons">
                    {currentResultsPage < (pageLimit ) ? <button className="page-button" onClick={this.pageUp}>NEXT</button> : null}
                        <SearchPagination list={fullResults} currentResultsPage={currentResultsPage} itemsPerPage={this.state.itemsPerPage} currentPaginationNumber={currentPaginationNumber} searchPageLink={this.searchPageLink}/>
                    {currentResultsPage > 0 ? <button className="page-button" onClick={this.pageDown}>PREV</button> : null}
                </div>
                <div>
                    pS: {this.state.pageStart} | iPP: {this.state.itemsPerPage} | cRS: {currentResultsPage} | cP: {currentPaginationNumber}
                </div>
                <div>
                    {renderResults(listToRender)}
                </div>

                
                
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}

export default  connect(mapStateToProps, actions)(SearchPage)
;