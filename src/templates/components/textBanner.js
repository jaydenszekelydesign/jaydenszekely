import React from 'react'
import { Link } from 'gatsby'

const TextBanner = ({children, background, subCaption}) => (

    <section>
        <section className="textBanner">
            <center><h1>{children}</h1>
            <span className="header-link">
                {subCaption}
            </span>
            </center>
            
            
        </section>
    
</section>
)

export default TextBanner
