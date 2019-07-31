import React from 'react'
import Helmet from 'react-helmet'
import Media from 'react-media'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../templates/components/footer'
import Banner from '../templates/components/banner'
import './all.sass'

const TemplateWrapper = ({ children, backgroundImg }) => (
  <div>
    <Helmet title="Jayden Szekely – Digital Media – Web Design, UI / UX, Graphic Design, Video, Photography – Whangarei, Northland" />
    <Media query={{ maxWidth: 699 }}>
          {matches =>
            matches ? (
              <Sidebar />
            ) : (
              <div className="navigation-links">
                
              </div>
            )
          }
    </Media>
    <Navbar />
    <div>{children}</div>
    <Footer />
    
  </div>
)

export default TemplateWrapper
