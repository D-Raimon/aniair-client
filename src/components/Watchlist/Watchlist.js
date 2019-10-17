import React, { useState, useEffect, Fragment } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
    <Col md="4" className="mb-5" key={watchlist._id}>
      <Link to={`/shows/${watchlist.showId}`}>
        <p>{watchlist.name}</p>
      </Link>
      <Button className="mt-1" size='sm' variant='danger'>Add To Watchlist</Button>
    </Col>
  ))

  if (!watchlist[0]) return <p>Add some shows to create a watchlist!</p>

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

export default Watchlist
// code to represent day of week on a bootstrap card
// <Card bg="danger" text="white" style={{ width: '18rem' }}>
//   <Card.Header>Header</Card.Header>
//   <Card.Body>
//     <Card.Title>Danger Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk
//       of the card's content.
//     </Card.Text>
//   </Card.Body>
// </Card>
// <br />
