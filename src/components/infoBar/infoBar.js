import React, { Component } from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import history from '../../history';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class NavbarComponent extends Component {
     constructor(){
          super()
          this.handleChange = this.handleChange.bind(this);
      }
     state = { 
          searchText: ""
       }

     handleChange(event) {
          this.setState ({
              [event.target.name]: event.target.value
          });
      }

      handleClick = () => {
          if (this.state.searchText !== null && this.state.searchText.length > 0){
              this.props.setSearchTerm(this.state.searchText);
              history.push('/search')
          } else {
              return
          }
      }

     render () {
          return ( 
               <div id="titleBar" style={{display: 'none', justifyContent: "space-around", width: "100vw", fontSize: ".75em", zIndex: "2"}}>
                    <Navbar variant="dark" fixed="top" expand="lg" width="100vw" style={{backgroundColor: "black"}}>
                        <Navbar.Brand href="#home">Marquis J Gaston</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="mr-auto">
                            <Nav.Link onClick={() => {history.push('/')}}>Home</Nav.Link>
                            <Nav.Link href="#link">Profile</Nav.Link>
                            <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <NavDropdown.Item ><i class="fas fa-envelope"></i> MarquisGaston23@gmail.com</NavDropdown.Item>
                                <NavDropdown.Item ><i class="fas fa-phone-square-alt"></i> 5673433654</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/marquisgaston"><i class="fab fa-linkedin"></i> Linkedin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                        <Form inline >
                              <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder={this.props.main.searchTerm ? this.props.main.searchTerm : "Search"} className="mr-sm-2" />
                              <Button variant="outline-success navbar-search" onClick={this.handleClick} style={{color: "white", borderColor: "white"}}>Search</Button>
                         </Form>
                         </Navbar.Collapse>
                    </Navbar>
               </div>
          )
     }
}
function mapStateToProps (state) {
     return state
}

NavbarComponent = connect(mapStateToProps, actions)(NavbarComponent)

export default NavbarComponent;