import { Fragment } from 'react'
import Footer from './Footer'

function Layout(props) {
  return (
    <Fragment>
      <div className="app">
        <main className="main">{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
