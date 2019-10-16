import React from 'react'
// import Header from '../Header/Header'
// import Footer from './Footer'

const layoutStyles = {
  grid: {
    display: 'grid',
    gridTemplateRows: 'max-content auto max-content',
    minHeight: '100vh'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 0'
  }
}

const Layout = props => (
  <div style={ layoutStyles.grid }>
    { /* <Header/> */ }
    <main className="container" style={ layoutStyles.main }>
      {props.children}
    </main>
    { /* <Footer/> */ }
  </div>
)

export default Layout
