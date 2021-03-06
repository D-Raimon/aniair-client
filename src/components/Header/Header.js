import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    {/* temporarily remove watchlist and grant admin access to all users */}
    {/* <Nav.Link href="#watchlist">Watchlist</Nav.Link> */}
    <Nav.Link href="#create-show">Create A Show</Nav.Link>
    <Nav.Link href="#shows">Shows</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const adminOptions = (
  <Fragment>
    <Nav.Link href="#watchlist">Watchlist</Nav.Link>
    <Nav.Link href="#shows">Shows</Nav.Link>
    <Nav.Link href="#create-show">Create A Show</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar bg="danger" variant="dark" expand="md">
    <Navbar.Brand href="#">
      AniAir
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome {user.email}</span>}
        { user ? (user.admin === 'true' ? adminOptions : authenticatedOptions) : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
