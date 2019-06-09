import React from 'react'

const Banner = ({children, background}) => (
    <header style={{backgroundImage: 'url("'+background+'")'}}>
        
        <div className="glaze-smaller">
            <h1 className="bannerTitle">{children}</h1>
        </div>
        
    </header>
)

export default Banner
