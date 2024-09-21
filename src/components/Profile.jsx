import React, { useState } from 'react'
import './Profile.css'
import { MdHowToVote } from "react-icons/md";

function Profile({name, img}) {

  const [voteCount, setVoteCount] = useState(0);
  
  const handleVote = () =>{
    setVoteCount(voteCount + 1);
  }

  return (
    <div className='profilewrap'>
        <h2>{name}</h2>
        <img src={img} alt={`image of ${name}`} className='profileimage' />
        <button className='votepp' onClick={handleVote}><MdHowToVote />Vote - {voteCount}</button>
    </div>
  )
}

export default Profile