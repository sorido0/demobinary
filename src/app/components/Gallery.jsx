import Image from "next/image"
import slider3 from "public/images/slide-3.jpg"



export const Gallery = () => {
    return (

        <div className="flex m-2 w-full justify-center items-center">

            <Image src={slider3} alt="" placeholder='empty' />
        </div>

    )
}
