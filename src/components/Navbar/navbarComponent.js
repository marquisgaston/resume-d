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

     renderSearchBar = () => {
          if(this.props.main.currentPage !== "homepage") {
               return (
                    <Form inline >
                         <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder={this.props.main.searchTerm ? this.props.main.searchTerm : "Search"} className="mr-sm-2" />
                         <Button variant="outline-success navbar-search" onClick={this.handleClick} style={{color: "white", borderColor: "white"}}>Search</Button>
                    </Form>
               )
          }
     }

     renderMainNav = () => {
          if(this.props.main.currentPage !== "homepage") {
               return (
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
               )
          } else 
          {
               return (
                    <Nav className="mr-auto">
                         {/* <Nav.Link href="#home">Home</Nav.Link> */}
                         <Nav.Link href="#link">Profile</Nav.Link>
                         <NavDropdown title="Contact" id="basic-nav-dropdown">
                              <NavDropdown.Item ><i class="fas fa-envelope"></i> MarquisGaston23@gmail.com</NavDropdown.Item>
                              <NavDropdown.Item ><i class="fas fa-phone-square-alt"></i> 5673433654</NavDropdown.Item>
                              <NavDropdown.Item href="https://www.linkedin.com/in/marquisgaston"><i class="fab fa-linkedin"></i> Linkedin</NavDropdown.Item>
                         <NavDropdown.Divider />
                         {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                         </NavDropdown>
                    </Nav>
               )
          }
     }

     renderName = () => {
          if (this.props.main.currentPage !== "homepage") {
               return (
                    <Navbar.Brand href="#home">Marquis J Gaston</Navbar.Brand>
               )
          }
     }

     render () {
          return ( 
               <div id="mainNavbar" style={{display: 'flex', justifyContent: "space-around", width: "100vw", fontSize: ".75em"}}>
                    <Navbar id="mainNav" variant="dark" fixed="top" expand="lg" width="100vw" style={{zIndex: "1", backgroundColor: "#282c36"}}>
                         {this.renderName()}
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                         {this.renderMainNav()}
                         {this.renderSearchBar()}
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