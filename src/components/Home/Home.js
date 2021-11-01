import React from 'react';
import {MyHome, HomeInformation,HomeTilte,HomeInfo,HomeDesc,ParaSpan ,Btn} from './style.js';



function Home() {
    return (
        <MyHome>
        <div ClassName="container">
            <HomeInformation>
                <HomeTilte >Jawadi Rami</HomeTilte>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <ParaSpan>UX Designer</ParaSpan > and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <Btn>Let's Begin</Btn>
            </HomeInformation>
        </div>
    </MyHome>
    )
}

export default Home
