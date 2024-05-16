import React from "react";
import '../Global.css'
import myimage from '../assets/my image.jpg'


const NAME= "Mohamed Abdulkadir Ali"
function Banner(){

     return(
        <div className="body">
<div className="body1">
<h5>My name is</h5><h1><span>{NAME}</span> </h1>
<h2>and i am Web Developer & Designer</h2>

<button> Contact me</button>
</div>
<div className="body2">
    <img src={myimage} alt="" />
    </div> 

</div>
     )
}

export default Banner;
