import React, { Component } from 'react';
import {Router, Switch, Route } from 'react-router';
import history from '../history';

import NavbarComponent from './Navbar/navbarComponent';
import Homepage from './homepage/homepage';
import InfoBar from './infoBar/infoBar';
import noMatch from './noMatch';
import SearchPage from './searchPage/searchPage';

class Resume extends Component {
    state = {  }

    render() {
        return ( 
            <div style={{minHeight: "100vh"}}>
                <InfoBar/>
                <NavbarComponent/>
                    <Router history= {history}>
                        <Switch>
                            <Route path ='/' exact component={Homepage}/>
                            <Route path='/search' component={SearchPage}/>
                            <Route component={noMatch}/>
                        </Switch>
                    </Router>
            </div>
         );
    }
}
 
export default Resume;