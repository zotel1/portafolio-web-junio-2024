import Image from "next/image";
import Link from "next/link";
const CardFeaturedWork = () => {
    return (
        <Link href='/' className='p-5'>
            <div className='relative w-full h-80 mb-5'>
                <Image 
                src='/landing-page.jpeg' 
                alt='Image' 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-xl'
                />
            </div>
            <h5 className='text-gray-500 uppercase tracking-widest font-medium'>Landing Page</h5>
            <h3 className='text-xl text-white'>Landing Page Digital Nao</h3>
        </Link>
    )
}
export default CardFeaturedWork;