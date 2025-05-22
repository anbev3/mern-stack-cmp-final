import { useDispatch, useSelector } from "react-redux";
import { deletetUserSuccess, deleteUserFailure, signOutUserStart } from "../redux/user/userSlice.js";
//import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/backend/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deletetUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
      
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center m-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile" className='rounded-full
        h-24 w-24 object-cover cursor-pointer self-center m-2'/>
        <input type="text" placeholder='username' defaultValue={currentUser.username} id= 'username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='email' defaultValue={currentUser.email} id='email' className='border p-3 rounded-lg' />
        <input type="text" placeholder='password' id='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 
        uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer'>Delete account</span>
      
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
};
