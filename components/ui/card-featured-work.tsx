import Image from "next/image";
import Link from "next/link";

interface CardFeaturedWorProps{
    href: string;
    image: string;
    category: string;
    title: string;
}

const CardFeaturedWork = ({
    href, 
    image, 
    category, 
    title,
}: CardFeaturedWorProps) => {
    return (
        <Link href={href} className='group'>
            <h3 className='text-xl text-white group-hover:text-primary transition-colors duration-300'>
                {title}
            </h3>
            <div className='relative w-full h-80 mb-5 overflow-hidden rounded-xl'>
                
                <Image 
                src={image} 
                alt='Image' 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-xl group-hover:scale-110 transition-all duration-300'
                />
            </div>
            <h5 className='text-gray-500 uppercase tracking-widest font-medium'>
                {category}
                </h5>
        </Link>
    )
}
export default CardFeaturedWork;