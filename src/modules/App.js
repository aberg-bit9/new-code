import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="app-container">
        <nav className="nav-container">
          <ul role="nav" className="nav-items">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/processes">Processes</Link></li>
            <li><Link to="/binaries">Binaries</Link></li>
            <li><a href="/v1/#/page2">Page 2</a></li>
          </ul>
        </nav>
        <main className="main-container">
          {this.props.children}
        </main>
      </div>
    )
  }
})