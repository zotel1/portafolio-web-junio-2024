import Title from "@/components/ui/title"
import Container from "@/components/ui/container"
import { Information } from "@/assets/data";
import  Image  from "next/image";

const AboutPage = () => {
    return (<main className='border-b border-gray-500/30 pb-10'>
        <Container >
            <Title title='About Cristian Sigel'/>
            <div className='relative w-[600px] h-[400px] rounded-xl'>
                <Image
                    src={Information.photo}
                    alt='Imagen'
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl mt-10 space-y-10"
                />
                </div>
                <div className='mt-10 space-y-10'>
                    <p className='text-gray-500'>
                    With experience in website creation, I love creating digital products.
                    experiences that perfectly combine the aesthetics of the frontend side, 
                    and the functionality of the backend side, My journey in the world of development.
                    has provided me with a range of technologies, a deep understanding of
                    user behavior and the ability to transform complex concepts into
                    Intuitive and visually attractive products.
                    </p>
                    <p className='text-gray-500'>
                        What sets me apart is my expertise in no-code development. I believe
                        that technology should be accessible to all, regardless of technical
                        expertise. By harnessing the potential of no-code tools, I bridge
                        the gap between design and implementation, bringing concepts to life
                        without the need for traditional coding. My proficiency in various
                        no-code platforms empowers me to rapidly prototype, iterate, and
                        build functional applications that resonate with users.
                    </p>
                    <p className='text-gray-500'>
                        Whether its crafting captivating user interfaces, optimizing user
                        flows, or bringing an app from concept to fruition, Im dedicated to
                        delivering high-quality design solutions that not only meet but
                        exceed expectations. My commitment to staying updated with the
                        latest design trends and no-code advancements ensures that my work
                        is always at the forefront of innovation.
                    </p>
                    <p className='text-gray-500'>
                        I invite you to explore my portfolio, where youll discover a
                        collection of projects that showcase my versatility as a product
                        designer and my mastery of no-code tools. From user-centered mobile
                        apps to visually striking web interfaces, each project reflects my
                        passion for creating meaningful experiences that leave a lasting
                        impact.
                    </p>
                    <p className='text-gray-500'>
                        Thank you for visiting my portfolio, and Im excited to connect with
                        you to discuss how my skills can contribute to your next design or
                        development endeavor. Lets collaborate to bring your ideas to life
                        in the most innovative and efficient ways possible.
                    </p>
                </div>
            
        </Container>

    </main>
)}

export default AboutPage;