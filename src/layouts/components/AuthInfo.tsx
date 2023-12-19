import React from 'react'
import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

let color: string = "blue";
const userId: string = ""
const AuthInfo = () => {

  return (
    <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href='profile' className='text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
      )
    }

export default AuthInfo