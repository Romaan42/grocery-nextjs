import { logoutUser } from '@/actions/userAction';
import { checkLoginUser } from '@/store/checkLoginSlice';
import Link from 'next/link';
import { useEffect } from 'react'
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginRegisterBtn({ setIsOpen }) {

    const dispatch = useDispatch()
    const { user, loading } = useSelector(state => state.user)

    const handleLogout = async () => {
        await logoutUser()
        dispatch(checkLoginUser())
        setIsOpen(false)
    }

    useEffect(() => {
        dispatch(checkLoginUser())
    }, [])


    if (loading) {
        return <div className='md:block hidden'>Loading...</div>
    }
    return (
        <div className='md:block hidden'>
            {user ?
                <div className='flex items-center'>
                    <div className='ml-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-sm  '>
                        {user?.name}
                    </div>
                    <MdLogout className='ml-2 text-2xl cursor-pointer hover:translate-x-2 duration-300' onClick={handleLogout} />
                </div>
                :
                <Link href={'/login'} className='ml-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-sm cursor-pointer'>
                    Login / Register
                </Link>}
        </div>

    )
}
