// import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import GardenPlotForm from './GardenPlotForm'
// // import messages from '../AutoDismissAlert/messages'
//
// const CreateWatchlist = ({ user, alert }) => {
//   const [watchlist, setWatchlist] = useState({})
//   const [createdWatchlistId, setCreatedWatchlistId] = useState(null)
//
//   const handleChange = (event) => {
//     event.persist()
//
//     setGardenPlot(gardenPlot => ({ ...gardenPlot, [event.target.name]: event.target.value }))
//   }
//
//   const handleSubmit = event => {
//     event.preventDefault()
//
//     axios({
//       method: 'POST',
//       url: `${apiUrl}/gardenPlots`,
//       data: { gardenPlot },
//       headers: {
//         'Authorization': `Token token=${user.token}`
//       }
//     })
//       .then(res => setCreatedGardenPlotId(res.data.gardenPlot._id))
//       .then(() => alert({
//         heading: 'success',
//         variant: 'success'
//       }))
//       .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
//   }
//
//   if (createdGardenPlotId) {
//     return <Redirect to={`/garden-plots/${createdGardenPlotId}`} />
//   }
//
//   return (
//     <div>
//       <GardenPlotForm
//         gardenPlot={gardenPlot}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   )
// }
//
// export default CreateWatchlist
