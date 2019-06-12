import React from 'react'

const Split = ({children, background, recommendedTitle, authorName, authorBio, link, rightLink, rightImage}) => (
    <header className="split">
        <a href={link} title={recommendedTitle}>
            <div className="left" style={{backgroundImage: 'url("'+background+'")'}}>
                <p>
                    <h3>{recommendedTitle}</h3>
                </p>
            </div>
        </a>
        <a href={rightLink || "#"} title={authorName}>
            <div className="right green-bg" style={{backgroundImage: 'url("'+rightImage+'")'}}>
                <p>
                    <h3>{authorName}</h3>
                </p>
            </div>
        </a>
    </header>
)

export default Split
