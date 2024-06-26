import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

const SectionTheStudy = () => {
    return (<section id='sectionTheStudy' className='border-b border-gray-500/30 py-10'>
        <Container>
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between'>
                <Subtitle subtitle='The Project' />
                <ul className='space-y-8'>
                    <li className='max-w-4xl'>
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
                    <li className='max-w-3xl'>
                        <h4 className='text-xl text-white font-medium mb-2'>
                            Outcome
                        </h4>
                        <p className='text-sm text-gray-400 '>
                            The collaborative efforts
                        </p>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-between gap-10'>
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

export default SectionTheStudy;