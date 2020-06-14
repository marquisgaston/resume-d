import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchPage extends Component {
    state = { 
        one: []
     }

    render() {
        console.log("props", this.props.search.youtubeItems)
        return ( 
            <div className="search-page" id="search-page">
                <div>
                    search term: {this.props.main.searchTerm}
                </div>
                {this.props.search.youtubeItems.map(item => {
                    return item.title 
                })}
                
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}

export default  connect(mapStateToProps, actions)(SearchPage)
;