import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

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
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/shows/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .then(() => props.alert({
        heading: 'Deleted Successfully',
        message: messages.onDeleteSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  // const addShow = () => {
  //   event.preventDefault()
  //   console.log(show)
  //   axios({
  //     url: `${apiUrl}/watchlist`,
  //     method: 'POST',
  //     data: {
  //       name: `{ show.name }`,
  //       "airDay": "Saturday",
  //       "showId": "5da5d7c1d7400239669c76f1",
  //       "owner":
  //     }
  //   })
  // }

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
        <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={destroy}>Delete Show</Button>
        <Link to={`/shows/${props.match.params.id}/edit`}>
          <Button className="mt-1 mr-1" size='sm' variant='danger'>Edit</Button>
        </Link>
        {/* <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={addShow}>Add To Watchlist</Button> */}
        <Link to="/shows"><Button className="mt-1 mr-1" size='sm' variant='danger'>Back to All Shows</Button></Link>
      </Fragment>
    )
  }
  // else display shows
  return (
    // temporarily give admin privelages to all users
    // <Fragment>
    //   <div>
    //     <img style={{ float: 'left' }} src={show.url}/>
    //     <h4>{show.name}</h4>
    //     <ul>
    //       <li>Air Day: {show.airDay}</li>
    //       <li>Episodes: {show.numOfEps}</li>
    //     </ul>
    //   </div>
    //   <p>{show.longDescription}</p>
    //   <Button className="mt-1 mr-1" size='sm' variant='danger'>Add To Watchlist</Button>
    //   <Link to="/shows"><Button className="mt-1 mr-1" size='sm' variant='danger'>Back to All Shows</Button></Link>
    // </Fragment>
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
      <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={destroy}>Delete Show</Button>
      <Link to={`/shows/${props.match.params.id}/edit`}>
        <Button className="mt-1 mr-1" size='sm' variant='danger'>Edit</Button>
      </Link>
      {/* <Button className="mt-1 mr-1" size='sm' variant='danger' onClick={addShow}>Add To Watchlist</Button> */}
      <Link to="/shows"><Button className="mt-1 mr-1" size='sm' variant='danger'>Back to All Shows</Button></Link>
    </Fragment>
  )
}

export default Show
