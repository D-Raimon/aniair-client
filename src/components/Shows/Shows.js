import React, { useState, useEffect, Fragment } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

const Shows = (props) => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/shows`)
      .then(res => setShows(res.data.shows))
      .catch(console.error)
  }, [])

  const showsJsx = shows.map(show => (
    <Col md="4" className="mb-5" key={show._id}>
      <h6>{show.name.length > 24 ? show.name.substring(0, 24) + '..' : show.name}</h6>
      <Link to={`/shows/${show._id}`}>
        <img style={{ height: '300px', width: '210px' }} src={show.url} />
      </Link>
      {/* <Button className="mt-1" size='sm' variant='danger'>Add To Watchlist</Button> */}
    </Col>
  ))

  if (!shows[0]) return <p>Loading...</p>

  return (
    <Fragment>
      <Container className="mt-4">
        <Row>
          {showsJsx}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Shows
