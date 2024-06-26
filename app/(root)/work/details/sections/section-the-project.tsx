import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

const SectionTheProject = () => {
    return (
    <section 
    id='sectionTheProject' 
    className='border-b border-gray-500/30 py-10'>
        <Container>
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-5'>
                <Subtitle subtitle='The Project' className='my-0' />
                <ul className='space-y-8'>
                    <li className='max-w-2xl'>
                        <h4 className='text-xl text-white font-medium mb-2'>
                            Challenge
                        </h4>
                        <p className='text-sm text-gray-500'>
                            One of the significant challenges was to strike a balance
                            between presenting a vast variety of content and maintaining a 
                            clean, uncluttered interface. The challenge was to enhance 
                            content discoverability while ensuring that users were not 
                            overwhelmed by choices.
                        </p>
                    </li>
                    <li className='max-w-2xl'>
                        <h4 className='text-xl text-white font-medium mb-2'>
                            Outcome
                        </h4>
                        <p className='text-sm text-gray-500 '>
                            The collaborative efforts  
                        </p>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10'>
            <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
                <Image
                    src='/conversor-java.png'
                    alt='Image'
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover rounded-xl'
                />
            </div>
    
                <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
                    <Image
                        src='/conversor-java.png'
                        alt='Image'
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover rounded-xl'
                    />
                </div>
            </div>
        </Container>
    </section>
    )
};

export default SectionTheProject;