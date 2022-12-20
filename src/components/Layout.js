function Layout(props) {
  return (
    <div className="app">
      <main className="main">{props.children}</main>
    </div>
  )
}

export default Layout
