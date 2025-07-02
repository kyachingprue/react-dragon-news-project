import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // User Login in Firebase
    userLogin(email, password)
      .then(result => {
        console.log(result.user)
        // alert
        toast.success('🦄 Login Successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
        event.target.reset();
        navigate("/")
      })
      .catch(error => {
        console.log("ERROR", error.message);
        toast.error('🦄 Login failed!', {
          position: "top-right",
          autoClose: 2000,
        });
      })
  }
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto m-28 max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className='text-2xl font-bold py-5 border-b border-gray-400 text-center'>Login your account</h2>
          <form onSubmit={handleLoginUser} className="fieldset">
            <label className="label text-black font-bold">Email Address</label>
            <input type="email" name='email' className="input w-full" placeholder="Email" required />
            <label className="label text-black font-bold">Password</label>
            <input type="password" name='password' className="input w-full" placeholder="Password" required />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className='text-center'>Don't Have An Account ? <Link to="/auth/register" className='text-blue-600 underline'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;