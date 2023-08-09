import Image from 'next/image'
import aboutChart from 'public/images/aboutChart.png'

export const Mision = () => {
    return (
        <div className='flex flex-col items-center justify-center m-1 mt-10 box-border h-96'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold text-center'>OUR MISSION </h1>
            </div>
            <div className='grid grid-cols-2'>

                <div className='flex flex-col ml-5 pr-2 shadow-xl' >
                    <div className='flex flex-col w-full m-2'>

                        <div className='flex flex-col m-1'>
                            <p className='text-justify p-5'> Our mission is to ensure that our investors have good advice when investing in the stock market, also for those who have already had a bad practice, to recover their investments plus
                                the profits generated with our groups of experts who will help you track and to return such poorly traded investments to you. </p>
                        </div>

                        <div className='flex flex-col m-1'>

                            <div className='flex flex-col justify-center items-center'>
                                <p className=''>Asset Recovery</p>

                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 100%</div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <p className=''>Asset Recovery</p>

                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 100%</div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <p className=''>Asset Recovery</p>

                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 100%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex shadow-lg items-center justify-center'>

                    <figure className="max-w-lg">
                        <Image src={aboutChart} alt="image description" className="h-auto max-w-full rounded-lg" width={400} />
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Result</figcaption>
                    </figure>

                </div>

            </div>
        </div>
    )
}
