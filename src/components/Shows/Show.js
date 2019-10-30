import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player'

import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const Show = (props) => {
  const [show, setShow] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/shows/${props.match.params.id}`)
      .then(res => setShow(res.data.show))
      .catch()
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/shows/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => props.alert({
        heading: 'Deleted Successfully',
        message: messages.onDeleteSuccess,
        variant: 'success'
      }))
      .catch()
  }

  // if no shows then display loading to the user, should change to a giphy eventually
  if (!show) {
    return <p>Loading...</p>
  }
  // if show is deleted then redirect to home
  if (deleted) {
    return <Redirect to={'/shows'} />
  }
  // if user is an admin give admin rights
  if (props.user.admin === 'true') {
    return (
      <Fragment>
        <div className="mt-3">
          <img style={{ float: 'left' }} className="mr-4" src={show.url}/>
          <h4>{show.name}</h4>
          <ul>
            <li>Air Day: {show.airDay}</li>
            <li>Episodes: {show.numOfEps}</li>
          </ul>
        </div>
        <p>{show.longDescription}</p>
        <Button className="mt-1 mr-1 mb-3" size='sm' variant='danger' onClick={destroy}>Delete Show</Button>
        <Link to={`/shows/${props.match.params.id}/edit`}>
          <Button className="mt-1 mr-1 mb-3" size='sm' variant='danger'>Edit</Button>
        </Link>
        {/* <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={addShow}>Add To Watchlist</Button> */}
        <Link to="/shows"><Button className="mt-1 mr-1 mb-3" size='sm' variant='danger'>Back to All Shows</Button></Link>
        <div style={{ alignContent: 'center' }}>
          <ReactPlayer url={show.trailer} controls="true" />
        </div>
      </Fragment>
    )
  }
  if (props.user._id === show.owner) {
    return (
      <Fragment>
        <div className="mt-3">
          <img style={{ float: 'left' }} className="mr-4" src={show.url}/>
          <h4>{show.name}</h4>
          <ul>
            <li>Air Day: {show.airDay}</li>
            <li>Episodes: {show.numOfEps}</li>
          </ul>
        </div>
        <p>{show.longDescription}</p>
        <Button className="mt-1 mr-1 mb-3" size='sm' variant='danger' onClick={destroy}>Delete Show</Button>
        <Link to={`/shows/${props.match.params.id}/edit`}>
          <Button className="mt-1 mr-1 mb-3" size='sm' variant='danger'>Edit</Button>
        </Link>
        {/* <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={addShow}>Add To Watchlist</Button> */}
        <Link to="/shows"><Button className="mt-1 mr-1 mb-3" size='sm' variant='danger'>Back to All Shows</Button></Link>
        <div style={{ alignContent: 'center' }}>
          <ReactPlayer url={show.trailer} controls="true" />
        </div>
      </Fragment>
    )
  }
  // else display shows
  return (
    <Fragment>
      <div className="mt-3">
        <img style={{ float: 'left' }} className="mr-4" src={show.url}/>
        <h4>{show.name}</h4>
        <ul>
          <li>Air Day: {show.airDay}</li>
          <li>Episodes: {show.numOfEps}</li>
        </ul>
      </div>
      <p>{show.longDescription}</p>
      {/* <Button className="mt-1 mr-1" size='sm' variant='danger'>Add To Watchlist</Button> */}
      <Link to="/shows"><Button className="mt-1 mr-1 mb-3" size='sm' variant='danger'>Back to All Shows</Button></Link>
      <br/>
      <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <ReactPlayer url={show.trailer} controls="true" />
      </div>
    </Fragment>
  )
}

export default Show
