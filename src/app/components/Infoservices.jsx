import Image from 'next/image'
import cell from 'public/images/cell.png'

export const Infoservices = () => {
    return (
        <div className="flex items-center justify-center flex-col bg-blue-300 border border-gray-200 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full m-5 mb-4 pb-10">
            <div className=" grid grid-col-2 grid-flow-col gap-4 mt-8">
                {/* esto es del mobil info  */}
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-xs relative ">
                        <div className='flex bg-white'>

                            <Image src={cell} alt="image description" className="max-w-full rounded-lg" height={400} />
                        </div>
                    </div>
                </div>
                {/* Esto sobre las informaciones  */}
                <div className='flex'>
                    <div className='grid grid-cols-2'>

                        <div className='flex flex-row'>

                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    aqui el icono
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step-by-Step Assistance</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Receive Chargeback Assistance from Our Team!</p>
                            </div>
                        </div>

                        <div className='flex flex-row'>

                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    aqui el icono
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">State-of-the-Art Technology</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Investment advisory service that combines other financial services</p>
                            </div>
                        </div>

                        <div className='flex flex-row'>

                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    aqui el icono
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Risk Management</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>

                        <div className='flex flex-row'>

                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    aqui el icono
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Venture Capitals</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">We pool investment funds to manage the money of investors.</p>
                            </div>
                        </div>

                        <div className='flex flex-row m-1'>

                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    aqui el icono
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Litigation Advice</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">We also give out litigation advicer We also give out litigation advicer.</p>
                            </div>
                        </div>

                        <div className='flex flex-row'>

                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    aqui el icono
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Business Campaign</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">We promote products through different types of media and online.</p>
                            </div>
                        </div>



                    </div>
                </div>


            </div>
        </div>
    )
}
