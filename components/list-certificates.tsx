import { cn } from "@/libs/utils";
import CardCertificates from "./ui/card-certificates";

interface ListCertificateProps {
    className?: string;
}

const ListCertificates = ({ className } : ListCertificateProps) => {
    return (
        <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10', className)}>
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
            image='/curso-github-actions.png'
            description="Curso DevOps sobre GitHub Actions de Platzi."
            title='GitHub Actions' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java-Spring' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de programacion orientada a objetos con Python de IT Master Academy.'
            title='Programador Python' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/2427492e-7282-47f8-b129-637e7b662b52?lang'
            image='/git-github.png'
            description="Curso de Git y GitHub."
            title='Git-GitHub' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java-Spring' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de programacion orientada a objetos con Python de IT Master Academy.'
            title='Programador Python' />
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
            image='/curso-github-actions.png'
            description="Curso DevOps sobre GitHub Actions de Platzi."
            title='GitHub Actions' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java-Spring' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de programacion orientada a objetos con Python de IT Master Academy.'
            title='Programador Python' />

        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
            image='/curso-github-actions.png'
            description="Curso DevOps sobre GitHub Actions de Platzi."
            title='GitHub Actions' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java-Spring' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de programacion orientada a objetos con Python de IT Master Academy.'
            title='Programador Python' />
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
            image='/curso-github-actions.png'
            description="Curso DevOps sobre GitHub Actions de Platzi."
            title='GitHub Actions' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java-Spring' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de programacion orientada a objetos con Python de IT Master Academy.'
            title='Programador Python' />
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
            image='/curso-github-actions.png'
            description="Curso DevOps sobre GitHub Actions de Platzi."
            title='GitHub Actions' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java-Spring' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de programacion orientada a objetos con Python de IT Master Academy.'
            title='Programador Python' />


    </div>

    )
};

export default ListCertificates;