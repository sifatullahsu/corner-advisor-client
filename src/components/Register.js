import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import GoogleSignIn from './GoogleSignIn';
import Loading from './Loading';

const Register = () => {
  const { userRegister, updateUserProfile, getUserJwt } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/my-reviews';

  const handleUserRegister = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    userRegister(email, password)
      .then(result => {
        form.reset();
        getUserJwt(result.user.email)
          .then(data => {
            localStorage.setItem('corner-token', data.token);
            updateUserProfile({ displayName: name, photoURL: image })
              .then(res => {
                setLoading(false);
                toast.success('Successfully logged in!!');
                navigate(from);
              })
          })
      })
      .catch(error => {
        setLoading(false);
        toast.error('Something is wrong!!');
      })
  }

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div>
      <div className='bg-gray py-10 px-6 md:p-10 border border-border'>
        <h4 className='text-xl mb-3'>Register</h4>
        <form onSubmit={handleUserRegister}>
          <div className='grid grid-cols-1 gap-4'>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input name="name" type="text" placeholder="name" className="input input-bordered rounded" required />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Image URL</span></label>
              <input name="image" type="url" placeholder="image url" className="input input-bordered rounded" required />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Email Address</span></label>
              <input name="email" type="email" placeholder="email" className="input input-bordered rounded" required />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Password</span></label>
              <input name="password" type="password" placeholder="password" className="input input-bordered rounded" required />
            </div>

          </div>
          <input className='btn btn-primary rounded mt-4' type="submit" value="Register" />
        </form>

        <p className='pt-8 pb-2'>Want social login?</p>
        <GoogleSignIn from={from} setLoading={setLoading}></GoogleSignIn>

        <div className='mt-8'>
          Allready have an accout? <Link
            to='/login' className='font-medium'>Please Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;