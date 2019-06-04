import React from 'react'
import { graphql, Link } from 'gatsby'

const Footer = ({children, background, recommendedTitle, authorName, authorBio}) => (
    <footer className="split">
        <div className="full white-bg">
            <p>
                <a href="https://www.whatthecancer.com" title="Home - What The Cancer">Home</a><br></br>
                <a href="https://www.whatthecancer.com/about" title="About - What The Cancer">About Us</a><br></br>
                <a href="https://www.whatthecancer.com/lisa" title="Dr Lisa Dawson - What The Cancer">Dr Lisa Dawson</a><br></br>
                <a href="https://www.whatthecancer.com/resources" title="Resources - What The Cancer">Our Resources</a><br></br>
                <a href="https://www.whatthecancer.com/listen" title="Listen to our Podcast - What The Cancer">Listen to our Podcast</a><br></br>
                <a href="https://www.whatthecancer.com/jargon" title="Understand what the Medical Jargon surrounding your cancer journey means in plain English - What The Cancer">Jargon Dictionary</a><br></br>
                <br></br>
                <br></br>
                <span className="left-fifty">© Jayden Szekely, 2019</span>
                <a title="A Jayden Szekely Production">A Jayden Szekely Production</a>
            </p>
        </div>
        
    </footer>
)

export default Footer
