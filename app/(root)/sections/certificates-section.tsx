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
                        href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
                        image='/programacion-orientada-a-objetos-python.png'
                        description='Curso de programacion orientada a objetos con Python de IT Master Academy, en el marco de Argentina Programa 4.0.'
                        title='Programación orientada a objetos con Python' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <CardCertificates
                        href='https://platzi.com/p/zotelsigel/curso/2878-typescript/diploma/detalle/'
                        image='/fundamentos-de-typescript.png'
                        description="Curso de fundamentos de TypeScript, en Platzi"
                        title='Curso de fundamentos de TypeScript' /></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <CardCertificates
                        href='https://app.aluracursos.com/certificate/003d1f75-190e-4229-97b8-29addab2e74c?lang'
                        image='/java-lambdas.png'
                        description='En este curso aprendemos el uso de lambdas, streams y Spring Framework de Oracle Next Education- Alura Latam. '
                        title='Java: trabajando con lambdas, streams y Spring Framework' />
                </div>
                <Button label='Ver todos los certicicados' onClick={() => router.push('/study')} />
            </Container>

        </section>
    )
}

export default CertificatesSection;