'use client';
import Button from "@/components/ui/button";
import CardCertificates from "@/components/ui/card-certificates";
import Container from "@/components/ui/container"
import Title from "@/components/ui/title"
import { useRouter } from "next/navigation";


const CertificatesSection = () => {

const router = useRouter();

    return (
        <section id='certificates' className='border-b border-gray-500/30 py-10'>
            <Container>
                <Title title="Certificados"/>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
                    <CardCertificates 
                    href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/' 
                    image='/curso-github-actions.png' 
                        title='GITHUB ACTIONS' description='Curso de github actions de la plataforma de Platzi'/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <CardCertificates
                        href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
                        image='/PERSISTENCIA-DE-DATOS-SPRING.png'
                        title='JAVA' description='PERSISTENCIA DE DATOS Y CONSULTAS CON SPRING DATA JPA' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <CardCertificates
                        href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
                        image='/programacion-orientada-a-objetos-python.png'
                        title='PYTHON POO' description='Curso de programación orientada a objetos con Python' />
                </div>
                <Button label='Ver todos los certicicados' onClick={() => router.push('/estudios')} />
            </Container>

        </section>
    )
}

export default CertificatesSection;