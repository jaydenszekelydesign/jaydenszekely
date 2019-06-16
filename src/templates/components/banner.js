import React from 'react'

const Banner = ({children, background, subCaption}) => (


<section className="splitHeader">
<div className="left">
    <div className="contents">
        <h1>{children}</h1>
        <br />
        <p>
            {subCaption}
        </p>
    </div>
    
</div>
<div className="right" style={{backgroundImage: 'url("'+background+'")'}}>
    
</div>

</section>
)

export default Banner
