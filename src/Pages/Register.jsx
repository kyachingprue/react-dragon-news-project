import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';
import { toast } from 'react-toastify';

const Register = () => {
  const { userRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // Register in the firebase
    userRegister(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('🦄 Registration successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
        // Update profile
        const profile = {
          displayName: name,
          photoURL: photoURL,
        }
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("user profile update")
          })
          .catch(error => {
            console.log('user profile update error', error)
          })

        event.target.reset();
        navigate("/")
      })
      .catch(error => {
        console.log("ERROR", error);
        toast.error('🦄 Registration failed!', {
          position: "top-right",
          autoClose: 2000,
        });
      })
  }

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto m-12 max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className='text-2xl font-bold py-5 border-b border-gray-400 text-center'>Register your account</h2>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label text-black font-bold">Your Name</label>
            <input type="text" name='name' className="input w-full" placeholder="Your name" required />
            <label className="label text-black font-bold">Photo URL</label>
            <input type="url" name='photoURL' className="input w-full" placeholder="your photoURL" required />
            <label className="label text-black font-bold">Email</label>
            <input type="email" name='email' className="input w-full" placeholder="Email" required />
            <label className="label text-black font-bold">Password</label>
            <input type="password" name='password' className="input w-full" placeholder="Password" required />
            <input type="submit" className='w-full btn btn-neutral my-3' value="Register" />
          </form>
          <p className='text-center'>Already Have An Account ? <Link to="/auth/login" className='text-blue-600 underline'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;