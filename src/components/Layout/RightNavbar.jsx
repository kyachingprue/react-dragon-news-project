import React, { useContext } from 'react';
import googleIcon from '../../assets/icons/google.png';
import githubIcon from '../../assets/icons/github.png';
import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instagramIcon from '../../assets/icons/instagram.png';
import swimming from '../../assets/images/swimming.png';
import classImg from '../../assets/images/class.png';
import playGround from '../../assets/images/playground.png';
import bgImg from '../../assets/images/bg.png';
import AuthContext from '../../Provider/AuthContext';
import { toast } from 'react-toastify';

const RightNavbar = () => {
  const { googleSignInUser, githubSignInUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSignInUser()
      .then(result => {
        console.log(result.user)
        toast.success('🦄 Google Login successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
      })
      .catch(error => {
        console.log("ERROR Message", error.message)
      })
  }

  const handleGithubLogin = () => {
    githubSignInUser()
      .then(result => {
        console.log(result.user)
        toast.success('🦄 Github Login successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
      })
      .catch(error => {
        console.log("ERROR Message", error.message)
      })
  }
  return (
    <div>
      <div>
        <h2 className='text-xl font-bold text-black pb-5'>
          Login With</h2>
        <div className='flex flex-col space-y-2'>
          <button onClick={handleGoogleLogin} className='btn gap-2'>
            <img className='w-5' src={googleIcon} alt="" />
            Login with Google</button>
          <button onClick={handleGithubLogin} className='btn gap-2'>
            <img className='w-5' src={githubIcon} alt="" />
            Login with Github</button>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='text-xl font-bold text-black pb-5'>Find Us On</h2>
        <div>
          <div className="join w-full join-vertical">
            <button className="btn join-item py-6 justify-start">
              <img className='w-5' src={facebookIcon} alt="" />
              Facebook</button>
            <button className="btn join-item py-6 justify-start">
              <img className='w-5' src={twitterIcon} alt="" />
              Twitter</button>
            <button className="btn join-item py-6 justify-start">
              <img className='w-5' src={instagramIcon} alt="" />
              Instagram</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-slate-300 px-4 mt-10 rounded-xl'>
        <h2 className='text-xl font-bold py-3'>Q-Zone</h2>
        <div>
          <img className='py-4' src={swimming} alt="" />
          <img className='py-4' src={classImg} alt="" />
          <img className='py-4' src={playGround} alt="" />
        </div>
      </div>
      <div className='pt-8'>
        <img className='w-full' src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default RightNavbar;