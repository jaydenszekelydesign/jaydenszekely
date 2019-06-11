import React from 'react'
import Style from 'styled-components'

const Quote = ({children, background, quoteContents}) => (
    <div className="full-portfolio">
        <center><h1 className="accent">"</h1>
          <h2 style={{color: 'black'}}>{quoteContents}
          </h2>
          <br /><br />
          <h1 className="accent">"</h1>

          </center>
        </div>
)

export default Quote
