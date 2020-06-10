import React, { Component } from 'react';

// import OtherTabs from './tabs';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Hometabs from './hometabs';

class Homepage extends Component {
    state = { }

    mainNavMargin = null

    componentDidMount() {
        this.props.setTabsMargin();
        this.props.setCurrentPage("homepage");
        this.mainNavMargin = document.getElementById("mainNav").clientHeight;
    }

    render() {
        
        return ( 
            <div className="homepage" style={{marginTop: `${this.mainNavMargin}px`, zIndex: "-1"}}>
                <Hometabs tabsMargin={this.props.main.tabsMargin}/>
                {/* <Hometabs/>
                <OtherTabs/> */}
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state
}

Homepage = connect(mapStateToProps, actions)(Homepage)
 
export default Homepage;