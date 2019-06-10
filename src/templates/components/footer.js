import React from 'react'
import { graphql, Link } from 'gatsby'

const Footer = ({children, background, recommendedTitle, authorName, authorBio}) => (
    <footer className="split">
        <div className="full white-bg">
            <center>
            <h4 className="menuContents">
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/jayden">About</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/portfolio">Portfolio</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/blog">Blog</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/listen">Listen</Link>
            </h4>
            </center>
            <p>
                
                <center>© Jayden Szekely – 2019</center>
            </p>
        </div>
        
    </footer>
)

export default Footer
