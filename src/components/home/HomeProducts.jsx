import { Suspense } from 'react'
import AllProducts from './AllProducts'
import CountTiming from './CountTiming'
import Loading from '../loading'

const HomeProducts = async () => {

    return (
        <section className='py-10 p-10'>
            <div className='flex lg:flex-row flex-col justify-between items-center'>
                <div className='lg:pr-50'>
                    <h1 className='text-2xl font-bold'>DEAL OF THE DAY</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque praesentium incidunt perferendis nam alias quam rem at est.</p>
                </div>
                <CountTiming />
                <hr className="my-4 border-gray-300" />
            </div>
            <Suspense fallback={<Loading />}>
                <AllProducts />
            </Suspense>
        </section>
    )
}

export default HomeProducts