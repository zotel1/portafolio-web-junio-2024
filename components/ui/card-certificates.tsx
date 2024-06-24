import Image from "next/image";

interface CardCertificatesProps {
    href: string;
    image: string;
    title: string;
    description: string;
}

const CardCertificates = ({href, image, title, description} : CardCertificatesProps) => {
    return (
        <a href={href}
        target='_blank'
        className='block group'>
            <div className='relative w-20 h-20 rounded-xl mb-5'>
                <Image
                src={image}
                alt='Image'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' 
                className='object-cover rounded-xl'
                />
            </div>
            <h3 className='text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>
                {title}</h3>
            <p className='text-gray-500'>{description}</p>
        </a>
    )
}

export default CardCertificates;