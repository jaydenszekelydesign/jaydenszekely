import React from 'react'

const Banner = ({children, background}) => (


<section className="splitHeader">
<div className="left">
    <div className="contents">
        <h1>{children}</h1>
        <br />
        <p>
            Product / Visual Designer<br />
            Graphic Designer<br />
            Digital Unicorn<br />
        </p>
    </div>
    
</div>
<div className="right" style={{backgroundImage: 'url("'+background+'")'}}>
    
</div>

</section>
)

export default Banner
