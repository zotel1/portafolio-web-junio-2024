import Image from "next/image"

const CardCertificates = () => {
    return (
        <a href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
        target='_blank'
        className='block group'>
            <div className='relative w-20 h-20 rounded-xl mb-5'>
                <Image
                src='/curso-github-actions.png'
                alt='Image'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' 
                className='object-cover rounded-xl'
                />
            </div>
            <h3 className='text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>GITHUB ACTIONS</h3>
            <p className='text-gray-500'>Curso de github actions de la plataforma de Platzi</p>
        </a>
    )
}

export default CardCertificates;