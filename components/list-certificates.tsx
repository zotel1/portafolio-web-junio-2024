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
            href='https://app.aluracursos.com/certificate/2427492e-7282-47f8-b129-637e7b662b52?lang'
            image='/git-github.png'
            description="Curso de Git y GitHub."
            title='Git-GitHub' />
        <CardCertificates
            href='#'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
                title='Lógica de programación: sumérgete en la programación con JavaScript' />
        
        <CardCertificates
            href='-'
            image='-'
            description='-'
                title='Curso de TypeScript: Tipos Avanzados y Funciones' />
        <CardCertificates
            href='-'
            image='-'
            description='-.'
                title='Curso de TypeScript: Programación Orientada a Objetos y Asincronismo' />
        <CardCertificates
            href='-'
            image='-'
            description="-"
            title='Curso de fundamentos de TypeScript' />
        <CardCertificates
            href='https://www.itmaster.app/certificates?id=ITMAP402023OJBKPZSLWPIBASQ'
            image='/programacion-orientada-a-objetos-python.png'
                description='Curso de programacion orientada a objetos con Python de IT Master Academy, en el marco de Argentina Programa 4.0.'
            title='Programación orientada a objetos con Python' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/programacion-orientada-a-objetos-python.png'
            description='Curso de algoritmos en Python en IT Master Academy, en el marco de Argentina Programa 4.0'
            title='Fundamentos de Python' />
        <CardCertificates
            href='#'
            image='/programacion-web-backend.png'
                description='Curso de Programación web Backend , en la Universidad Nacional Tres de Febrero, en el marco de Argentina Programa 4.0'
            title='Programación web Backend' />


    </div>

    )
};

export default ListCertificates;