import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

const Show = (props) => {
  const [show, setShow] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/shows/${props.match.params.id}`)
      .then(res => setShow(res.data.show))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/shows/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  // if no movie then display loading to the user
  if (!show) {
    return <p>Loading...</p>
  }
  // if show is deleted then redirect to home
  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Show succesfully deleted!' } }
    } />
  }
  // if user is an admin give admin rights
  if (props.user.admin === 'true') {
    return (
      <Fragment>
        <h4>{show.name}</h4>
        <p>Air Day: {show.airDay}</p>
        <p>Directed by: {show.director}</p>
        <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={destroy}>Delete Show</Button>
        <Link to={`/shows/${props.match.params.id}/edit`}>
          <Button className="mt-1 mr-1" size='sm' variant='danger'>Edit</Button>
        </Link>
        <Link to="/shows"><Button className="mt-1 mr-1" size='sm' variant='danger'>Back to All Shows</Button></Link>
      </Fragment>
    )
  }
  // else display shows
  return (
    <Fragment>
      <h4>{show.name}</h4>
      <p>Air Day: {show.airDay}</p>
      <p>Directed by: {show.director}</p>
      <Link to="/shows"><Button className="mt-1 mr-1" size='sm' variant='danger'>Back to All Shows</Button></Link>
    </Fragment>
  )
}

export default Show
