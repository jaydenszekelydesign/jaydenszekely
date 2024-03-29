import React from 'react'
import { Link } from 'gatsby'
import Media from 'react-media'

const Banner = ({children, background, subCaption}) => (


<section className="splitHeader">
    <div className="full" style={{backgroundImage: 'url("'+background+'")'}}>
        <div className="contents">
            <center><h1>{children}</h1>
            <span className="header-link">
                {subCaption}
            </span>
            </center>
        </div>
    </div>
</section>
)

export default Banner
