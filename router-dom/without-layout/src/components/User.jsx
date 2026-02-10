import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {id} = useParams()
  return (
    <div className='text-3xl text-center my-10 text-bold'>
      This is User {id}
    </div>
  );
}

export default User;
