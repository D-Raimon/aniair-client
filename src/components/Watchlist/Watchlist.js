import React, { useState, useEffect, Fragment } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Watchlist = (props) => {
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/watchlist`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setWatchlist(res.data.watchlist))
      .catch(console.error)
  }, [])

  const showsJsx = watchlist.map(watchlist => (
    <Fragment key={watchlist._id}>
      <Link to={`/shows/${watchlist.showId}`}>
        <li>{watchlist.name}</li>
      </Link>
      <Button className="mt-1" size='sm' variant='dark'>Remove Watchlist</Button>
    </Fragment>
  ))

  if (!watchlist[0]) return <p>Add some shows to create a watchlist!</p>

  return (
    <Fragment>
      <Container className="mt-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link variant="danger" eventKey="sunday">Sunday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="monday">Monday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tuesday">Tuesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="wednesday">Wednesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="thursday">Thursday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="friday">Friday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="saturday">Saturday</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="sunday">
                  {showsJsx}
                </Tab.Pane>
                <Tab.Pane eventKey="monday">
                  {showsJsx}
                </Tab.Pane>
                <Tab.Pane eventKey="tuesday">
                  {showsJsx}
                </Tab.Pane>
                <Tab.Pane eventKey="wednesday">
                  {showsJsx}
                </Tab.Pane>
                <Tab.Pane eventKey="thursday">
                  {showsJsx}
                </Tab.Pane>
                <Tab.Pane eventKey="friday">
                  {showsJsx}
                </Tab.Pane>
                <Tab.Pane eventKey="saturday">
                  {showsJsx}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Fragment>
  )
}

export default Watchlist
