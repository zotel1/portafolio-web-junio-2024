import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import  Image  from "next/image";

const SectionMyRole = () => {
    return (<section id='sectionHeader' className='border-b border-gray-500/30 py-10'>
        <Container>
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between'>
            <Subtitle subtitle='My role' />
            <ul className='space-y-8'>
                <li className='max-w-3xl'>
                    <h4 className='text-xl text-white font-medium mb-2'>
                        Responsabilities
                    </h4>
                    <p className='text-sm text-gray-500'>
                        As a lead web developer on both the backend and frontend sides, my responsibilities spanned 
                        the entire program lifecycle, from user research to visual design 
                        and user experience.
                    </p>
                </li>
                <li className='max-w-3xl'>
                    <h4 className='text-xl text-white font-medium mb-2'>
                        Collaboration
                    </h4>
                    <p className='text-sm text-gray-400 '>
                        ACollaboration was vital in creating a cohesive and succeful product. I worked closely 
                        with developers, product managers, and content creators.
                    </p>
                </li>
            </ul>
            </div>
            <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
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
    )
};

export default SectionMyRole;