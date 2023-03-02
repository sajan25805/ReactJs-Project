import React from 'react'
import { useState,useEffect } from 'react';
import "./Navbar.scss";


const Navbar = () => {
const[active, setActive]=useState(false)
const[open,setOpen]=useState(false)

useEffect(() => {
    /**
     * Here we write the function we want to be rendered
     */

    window.addEventListener("scroll",(()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }))
  return () => {
    /**
     * Here we write the clean up code
     */
    window.addEventListener("scroll",(()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }))
  }
}, [/**Here we write the dependencies: upon the changes in mentioned dependencies whole application rendered. */])


/**
 * if the user is of role seller then they will se following:
 */

const current_user={
    id:1,
    username:"Sajan Mainali",
    isSeller:true,
}


  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">

            <div className="logo">
                <span className='text'>Fiver</span>
                <span className='dot'>.</span>
            </div>

            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>

                {/* If current_user is not seller then only it shows */}
               {!current_user?.isSeller && <span>Become a Seller</span>}

               {/* If user is not created then Join Button is shown.*/}
               {!current_user &&<button>Join</button>}


               {current_user &&(
                <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" />
                    <span >{current_user?.username}</span>

                    { open && 
                    <div className="options">
                    {current_user?.isSeller &&(
                        <>
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                        </>
                    )}
                        <span>Orders</span>
                        <span>Messages</span>
                        <span>LogOut</span>

                    </div>}
                </div>
               )}
                 
            </div>
        </div>
        
        { active && (
            <>
             <hr/>
        
        <div className='menu'>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
        </div>
            </>
        )
        }
 
    </div>
  )
}

export default Navbar