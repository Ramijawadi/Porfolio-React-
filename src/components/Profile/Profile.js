
import React from 'react'
import './style.css' ;




   
const Profile = () => {
    return (

        <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title"><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        <li class="profile-item">
                            <span>Name</span>
                            Jawadi Rami 
                        </li>
                      
                        <li class="profile-item">
                            <span>Address</span>
                        Monastir 5000
                        </li>
                        <li class="profile-item">
                            <span>Phone</span>
                         +216 51 276 993
                        </li>
                        <li class="profile-item">
                            <span>Email</span>
                            rami@jawadi.com
                        </li>
                        <li class="profile-item">
                            <span>Website</span>
                            <span class="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                    Jawadi developpeur web ,  UI designer  ,frontend ,backend en plus que d'autres compètances </p>
                    <div class="bar">
                        <span class="title">Bootstrap</span>
                        <span class="perc">100%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">Photoshop</span>
                        <span class="perc">80%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                    <div class="bar">
                        <span class="title">Reacjs</span>
                        <span class="perc">70%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    <div class="bar">
                        <span class="title">Nodejs</span>
                        <span class="perc">60%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
};

export default Profile
