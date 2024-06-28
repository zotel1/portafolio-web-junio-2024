import Title from "@/components/ui/title"
import Container from "@/components/ui/container"
import { Information } from "@/assets/data";
import  Image  from "next/image";

const AboutPage = () => {
    return (<main className='border-b border-gray-500/30 pb-10 '>
        <Container >
            <Title title='Cristian Sigel'/>
            <div className='relative w-[600px] h-[400px] rounded-xl'>
                <Image
                    src={Information.photo}
                    alt='Imagen'
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl mt-10 space-y-10 "
                />
                </div>
                <div className='mt-10 space-y-10'>
                    <p className='text-gray-500'>
                    Con experiencia en la creación de sitios web, me encanta crear productos digitales. 
                    Experiencias que combinan perfectamente la estética del lado del frontend y 
                    la funcionalidad del lado del backend. 
                    Mi viaje en el mundo del desarrollo me ha proporcionado una variedad de tecnologías, 
                    una comprensión profunda del comportamiento del usuario 
                    y la capacidad de transformar conceptos complejos en productos intuitivos y 
                    visualmente atractivos.
                    </p>
                    <p className='text-gray-500'>
                        Arranque mis estudios de manera autodidacta practicando con HTML, CSS y JavaScript en freecodebootcamp,
                        al poco tiempo tuve la suerte de acceder a la Beca de Argentina Programa 4.0 donde pude hacer 3 cursos:
                        <span>Programación web Backend</span> con NodeJS, Fundamentos de Python y ReactJs todas en distintas universidades. 
                    </p>
                    <p className='text-gray-500'>
                        Tuve la suerte de poder ingresar al Programa de Oracle-Next-Education con Alura-Latam, 
                        donde reforce conocimientos sobre el Frontend los primeros meses y donde aprendí 
                        no solo los fundamentos sino también como desarrollar aplicaciónes crear y consumir una API
                    con <span>Java</span> y su Framework <span>SpringBoot</span>.
                    </p>
                    
                    <p className='text-gray-500'>
                        En el camino aproveche las veces donde <span>codigofacilito</span> y <span>Platzi</span> abrian sus plataformas 
                        para aprender sobre TypeScript y tambien sobre NestJs. 
                        Actualmente me encuentro certificandome en Digital Nao y estudiando sobre metodologías DevOps.
                    </p>
                </div>
            
        </Container>

    </main>
)}

export default AboutPage;