import { information } from '@/assets/data';
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
                        src={information.photo}
                        alt='Imagen'
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-xl grayscale"
                    />
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-4xl  text-white mb-5">
                        {`Hey, me llamo Cristian - Soy un desarrollador web en formación`}
                    </h1>
                    <p className="text-gray-500">
                        Desarrollador web desde hace un año y medio
                    </p>
                </div>
                <div className='flex items-center gap-4'>
                    {information.socialMedia.map((social) => (
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