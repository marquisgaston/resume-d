import React, { Component } from 'react';

class SearchPagination extends Component {
    state = { 
        currentPaginationPageStart: 0  
     }

    componentDidMount(){

    }

    render() { 
        const currentPaginationNumber = this.props.currentPaginationNumber;
        var i = 0;
        const end = Math.ceil(this.props.list.length / this.props.itemsPerPage);
        const pagesList = [];

        while ( i < end){            
            i++;
            pagesList.push(i);
          }
        const pagesToRender = pagesList.slice(currentPaginationNumber * 10, currentPaginationNumber * 10 + 10)

        const renderPagination = () => {
            if ( this.props.list[0] === "no search term was entered") {
                return null
            } else 
            if (pagesList.length > 1){
                return (
                    <div className="search-pagination" style={{border: "1px solid white"}}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            {pagesToRender.map(item => {
                                return (
                                    <div key={item.index}>
                                        <div onClick={() => {this.props.searchPageLink(item)}}>{item}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
            else {
                return null
            }
        }
        
        return ( 
            renderPagination()
         );
    }
}
 
export default SearchPagination;