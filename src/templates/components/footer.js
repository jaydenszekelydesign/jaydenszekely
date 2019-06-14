import React from 'react'
import { graphql, Link } from 'gatsby'

const Footer = ({children, background, recommendedTitle, authorName, authorBio}) => (
    <section className="splitHeader">
        <div className="left">
            <div className="contents">
                <h1>Get in Touch</h1>
                <br />
                <p>
                    ph – <a href="tel: +64211222857" title="Call Jayden Szekely">(+64) 021 122 2857</a><br />
                    em – <a href="mailto: jaydenszekely@icloud.com" title="Email Jayden Szekely">jaydenszekely@icloud.com</a><br />
                    ig – <a href="https://www.instagram.com/jaydenszekely" title="Jayden Szekely on Instagram">@jaydenszekely</a>
                    <br /><br /><br />
                    © Jayden Szekely, 2019
                </p>
            </div>
            
        </div>
        <Link to="/work-with-me/cv">
        <div className="right">
            <div className="contents">
                    <center><h1>My CV</h1></center>
            </div>
        </div>
        </Link>
    </section>
)

export default Footer
