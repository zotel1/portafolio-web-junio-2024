import { Information } from '@/assets/data';
import ButtonSocialMedia from "@/components/ui/button-social-media";
import Container from '@/components/ui/container';
import Image from "next/image";


export const HeroSection = () => {
    return (
        <section id='home' className='border-b border-gray-500/30 py-10'>
            <Container>
            <div className="space-y-10">
                <div className="relative w-24 h-24">
                    <Image
                        src={Information.photo}
                        alt='Imagen'
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-xl grayscale"
                    />
                </div>
                <div className="max-w-3xl">
                    <h1 className="text-4xl  text-white mb-5">
                        {`Buuuenas, me llamo Cristian`}
                    </h1>
                        <h1 className="text-4xl  text-white mb-5">
                            {`Soy un desarrollador web en Full Stack `}
                        </h1>
                    <p className="text-gray-500">
                        Back-end: Java-Spring boot | Java Script/TypeScript: NodeJS | Python: Flask
                    </p>
                        <p className="text-gray-500">
                            Front-end: ReactJS | NextJS
                        </p>
                </div>
                <div className='flex items-center gap-4'>
                    {Information.socialMedia.map((social) => (
                        <ButtonSocialMedia
                            key={social.href}
                            href={social.href}
                            icon={social.icon}
                        />
                    ))}
                </div>
            </div>
            </Container>
        </section>
    )
}