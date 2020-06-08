import React, { Component } from 'react';

class NoMatch extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginTop: "10em", display: "flex", justifyContent: "center", alignItems: "center"}}>
                This page doesn't exist
            </div>
         );
    }
}
 
export default NoMatch;