

import React from 'react'

const ProfilePageParams = ({ params }: any) => {
    return (
        <div
            className=' w-full h-screen flex flex-col justify-center items-center'
        >
            <p>User</p>
            <p>ProfilePage <span className=' rounded px-2 bg-orange-500 text-black mx-2 font-semibold'>{params.id}</span></p>
        </div>
    )
}

export default ProfilePageParams
