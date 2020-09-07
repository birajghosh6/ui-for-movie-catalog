import React from 'react'

export default function Home() {
    return (
        <div style={homePageStyle}>
            <h2 style={{color:"white", textShadow: '1px 1px 0px #000'}}>This is the homepage. This webpage allows you to add 
                movies and rate them according to your liking. You 
                may also update your previous ratings based on your 
                new interests. Hope you have a great time browsing 
                through our collection! <br />
                <span style={{color: '#2F3274'}}>
                    Click on the links above to get started!
                </span>
            </h2>
            
            
        </div>
    )
}

const homePageStyle = {
    backgroundColor: '#7FD1E8',
    textAlign: 'center',
    fontSize: '30',
    fontStyle: 'italic',
    lineHeight: '43px',
    fontWeight: 'bold',
    padding: '10%'
}