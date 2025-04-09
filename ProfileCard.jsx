import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const ProfileCard=({profilelist})=>{
    return(
        <div>
    <div 
    style={{
        border:"2px solid black",
        margin:"300px auto",
        justifyConten:"center",
        alignItems:"center",
        textAlign:"center",
        border:"2px solid blue",
        borderRadius:"10px",
        width:"400px",
        height:"500px",
        maxHeight:"300px",
        backgroundColor:"white",
    
    }}
    >
        <div>
         <img
            style={{
                width:"30%",
                justifyContent:"center",
                alignItems:"center",
                border:"2px solid black",
                borderRadius:"50%"

                
            }}
        
        
            
            src={viteLogo}
            
            />
            </div>
            
            <div 
            style={{
                fontSize:"large",
                fontFamily:"cursive",
                textAlign:"center",
            
                flexDirection:"column",
                alignItems:"center",
            
                justifyContent:"center"
            }}>
                    <span>Name :</span>
                    <span>{profilelist.name}</span>
                    <br/>
                    <span>Department:</span>
                    <span>{profilelist.Department}</span>
                    <br/>
                    <span>year :</span>
                    <span>{profilelist.Year}</span>
                    <br/>
                    <span>Mobile :</span>
                    <span>{profilelist.mobile}</span>
                    <br/>
                    <span>address :</span>
                    <span>{profilelist.adress}</span>
                    </div>
                    

            <a href="https://in.linkedin.com/" target="_blank">
                <i>linkedln profile</i>
            </a>
            </div>
        </div>
    
        


)    
}
export default ProfileCard