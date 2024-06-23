import { information, socialMedia } from '@/assets/data';
import ButtonSocialMedia from "@/components/ui/button-social-media";
import Image from "next/image";


export default function Home() {


    

  return (
  <div className="space-y-10">
    <div className="relative w-24 h-24">
        <Image
        src={information.photo}
        alt='Imagen'
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
        {information.socialMedia.map((social) => (
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