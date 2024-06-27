import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";

interface CardCertificatesProps {
    href: string;
    image: string;
    title: string;
    description: string;
}

const CardCertificates = ({href, image, title, description} : CardCertificatesProps) => {
    return (
        <Link href={href}
        //target="_blank"
        className='block group'>
            <h3 className='text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>
                {title}</h3>
            <div className='relative w-20 h-20 rounded-xl mb-5'>
                <Image
                src={image}
                alt='Image'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' 
                className='object-cover rounded-xl group-hover:scale-110 transition-all duration-300'
                />
            </div>
            <Badge label={description}/>
        </Link>
    )
}

export default CardCertificates;