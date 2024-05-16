import React from "react";
import '../Global.css'
import myimage from '../assets/my image.jpg'


function Bio(){
    return(
        <div id="Bio" className="Bio">
        
          <div className="biodiv1">
    <img src={myimage} alt="" />
          </div>
          <div className="biodiv2">
          <h1> About  </h1>
          <h2>Web Developer & Designer</h2>
          <p>
            I am passionate web developer and designer with a creative mind and love for building beautiful websites,
            and i built projects. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reiciendis, explicabo temporibus minima dignissimos doloribus, eligendi officiis consectetur ipsum aperiam autem consequuntur sequi vitae dolorem quaerat illo fuga asperiores sit!

            </p>
        </div>


        </div>
    )
}

export  default Bio;
