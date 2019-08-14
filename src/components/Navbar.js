import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/jayden-outline.svg'
import Media from 'react-media'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Jayden Szekely" className="logo" style={{ width: '20px' }} />
          </figure>
        </Link>
        <Media query={{ maxWidth: 699 }}>
          {matches =>
            matches ? (
              <div className="navigation-links">
                
              </div>
            ) : (
              <div className="navigation-links">
                <Link className="navigation-item" to="/blog">Blog</Link><Link className="navigation-item" to="/comingsoon">Gallery</Link><Link className="navigation-item" to="/comingsoon">Contact</Link>
              </div>
            )
          }
        </Media>

      </div>
      
    </div>
  </nav>
)

export default Navbar
