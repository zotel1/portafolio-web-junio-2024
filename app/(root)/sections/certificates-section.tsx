import CardCertificates from "@/components/ui/card-certificates";
import Container from "@/components/ui/container"
import Title from "@/components/ui/title"


const CertificatesSection = () => {
    return (
        <section id='certificates' className='border-b border-gray-500/30 py10'>
            <Container>
                <Title title="Certificados"/>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <CardCertificates 
                    href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/' 
                    image='/curso-github-actions.png' 
                        title='GITHUB ACTIONS' description='Curso de github actions de la plataforma de Platzi'/>
                </div>
            </Container>

        </section>
    )
}

export default CertificatesSection;