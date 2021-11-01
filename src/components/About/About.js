import React from 'react'
import  {Creative , CrInfo ,Title , Span , InfoDir , InfoDesc , Anchor}  from  './style.js'

function About() {
    return (
        <Creative>
            <div class="container">
                <CrInfo  >
                    <Title><Span>This is</Span> Me</Title>
                    <InfoDir >Creative Director</InfoDir>
                    <InfoDesc >
                    Jawadi  web developper ,  UI designer  ,frontend ,backend in addition to other skills :  <Anchor href="#">explication</Anchor> improve: develop websites, fix bugs and analyze customer needs
                    </InfoDesc>
                    <InfoDesc >
                    Jawadi  web developper,  UI designer  ,frontend ,backend  in addition to other skills 
                    </InfoDesc>
                </CrInfo>
            </div>
    </Creative>
    )
}

export default About
