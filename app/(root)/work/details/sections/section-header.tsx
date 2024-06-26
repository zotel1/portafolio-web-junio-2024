'use client';
import Button from "@/components/ui/button"
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"
import Image from "next/image";

const SectionHeader = () => {

    return (
        <section id='sectionHeader' className='border-b border-gray-500/30 py-10'>
            <Container >
        <Title title="Conversor de monedas" className='mb-5' />
        <p>
            Este es un programa en Java que permite convertir valores entre diferentes tipos de monedas.
        </p>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-5 gap-5'>
            <Button 
            type='button' 
            label='View Live App' 
            className='w-auto' 
            onClick={() => {}} />
                <ul className='space-y-3 mb-10 ml-6'>
                    <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>Industria: Desarrollo web</li>
                    <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>Tiempo: 2 semanas</li>
                    <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>API Rest</li>
                </ul>
        </div>
        <div className='relative w-full h-96'>
                <Image 
                src='/conversor-java.png' 
                alt='Image'
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover'
                />
        </div>
        </Container>
    </section>
)};

export default SectionHeader;