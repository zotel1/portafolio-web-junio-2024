import ButtonSocialMedia from "@/components/ui/button-social-media";
import Image from "next/image";
import { RiGithubFill, RiLinkedinBoxFill, RiMailAddLine } from "react-icons/ri";

export default function Home() {


    const socialMedia = [
        {
            socialMedia: 'LinkedIn',
            icon: RiLinkedinBoxFill,
            href: 'https://www.linkedin.com/in/cristian-sigel-3b9573211/'
        },
        {
            socialMedia: 'GitHub',
            icon: RiGithubFill,
            href: 'https://github.com/zotel1'
        },
        {
            socialMedia: 'Gmail',
            icon: RiMailAddLine,
            href: 'cristiansigelwebdevelopment@gmail.com'

        }
    ];

  return (
  <div className="space-y-10">
    <div className="relative w-24 h-24">
        <Image
        src="/perfil-portafolio-CristianSigel.jpeg"
        alt='Imagen'
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
    <div>
        {socialMedia.map((social) => (
            <ButtonSocialMedia 
            key={social.href}
            href={social.href}
            icon={social.icon}
            />
        ))}
    </div>
  </div>
  );
}