import React, { Component } from 'react';

class SearchPagination extends Component {
    state = {  }
    render() { 
        var currentPaginationNumber = Math.floor((this.props.currentResultPage)/ 10);      
        var i = 0;
        var end = Math.ceil(this.props.list.length / this.props.itemsPerPage)
        var pagesList = [];
        
        while ( i < end ){            
          i++;
          pagesList.push(i);
        }

        const currentPaginationList = pagesList.slice((currentPaginationNumber * 10), (currentPaginationNumber * 10) + 10 );

        return ( 
            <div className="pagination">
                {currentPaginationList.map(item => {
                        return (
                        <div className="page-link-wrapper">
                            <div className = "page-link" onClick={() => {this.props.searchPageLink(item)}}>
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default SearchPagination;