import { cn } from "@/libs/utils";
import CardCertificates from "./ui/card-certificates";

interface ListCertificateProps {
    className?: string;
}

const ListCertificates = ({ className } : ListCertificateProps) => {
    return (
        <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10', className)}>

<CardCertificates
            href='https://www.credly.com/badges/52cbf611-4513-4a5a-b534-b7addea36ea7/'
            image='/digital-nao.png'
                description='Profesional con habilidades de desarrollo web interdisciplinarias, 
                desarrollando en Front End (interfaces y sistemas de cara al usuario), 
                como de Back End (lógica, servidores, y bases de datos), 
                es el encargado de coordinar el desarrollo de ambas y cuenta con la capacidad de crear proyectos de principio a fin.'
            title='Full Stack Developer Core' />

        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/7992-github-actions/diploma/detalle/'
            image='/curso-github-actions.png'
            description="Curso DevOps sobre GitHub Actions de Platzi."
            title='GitHub Actions' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/1d6b2ec9-9f5d-414c-b55b-da840025fcc5?lang'
            image='/PERSISTENCIA-DE-DATOS-SPRING.png'
            description='Curso de Java, persistencia de datos con Spring Boot de Oracle Next Education- Alura Latam. '
            title='Java: persistencia de datos y consultas con Spring Data JPA' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/003d1f75-190e-4229-97b8-29addab2e74c?lang'
            image='/java-lambdas.png'
            description='En este curso aprendemos el uso de lambdas, streams y Spring Framework de Oracle Next Education- Alura Latam. '
            title='Java: trabajando con lambdas, streams y Spring Framework' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/cae00599-f404-4471-84d9-36bc7d4dc01f?lang'
            image='/java-poo.png'
            description='En este curso aplicamos la Orientación a Objetos en el lenguaje de Java de Oracle Next Education- Alura Latam. '
            title='Java: aplicando la Orientación a Objetos' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/9a23b70d-da36-491f-b86f-712a9708d614?lang'
            image='/java-consumir-api.png'
            description='En este curso aprendemos consumir API, escribir archivos y manejar errores en el lenguaje de Java de Oracle Next Education- Alura Latam. '
            title='Java: consumir API, escribir archivos y manejar errores' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/9d57f782-95a4-4629-9fab-47ab527aca2e?lang'
            image='/java-creando-tu-primer-aplicacion.png'
            description='En este curso creamos nuestra primera aplicación en Java de Oracle Next Education- Alura Latam. '
            title='Java: creando tu primera aplicación' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/5f7b44ba-fd0f-4735-95c2-65529896e142?lang'
            image='/java-trabajar-con-listas.png'                
            description='En este curso trabajar con listas y colecciones de datos con el lenguaje de Java de Oracle Next Education- Alura Latam. '
            title='Java: Trabajar con listas y colecciones de datos' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/37062b07-f41c-4a86-9920-03958bb70a2e?lang'
            image='/java-challenge-conversor.png'
            description='En este curso consumimos una API y creamos un codigo en Java que compara valores de distintas monedas extranjeras de Oracle Next Education- Alura Latam. '
            title='Java: Challenge conversor de monedas' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/5f7b44ba-fd0f-4735-95c2-65529896e142?lang'
            image='/git-github.png'
            description="Curso de Git y GitHub."
            title='Git-GitHub' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/000df9cd-0f5f-4e2f-b07e-47cdab285e02'
            image='/explorarfuncionesylistasjs.png'
            description='Curso de Java Script, explorar funciones y listas de Oracle Next Education- Alura Latam. '
            title='Lógica de programación: explorar funciones y listas' />
        <CardCertificates
            href='https://app.aluracursos.com/certificate/7080e0c9-41a4-42ba-8647-5173627e9f44'
            image='/programacionjs.png'
            description='Curso de Java script, dando los primeros pasos y aprendiendo fundamentos con Java Script- Alura Latam. '
            title='Lógica de programación: sumérgete en la programación con JavaScript' />
        
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/2879-typescript-tipos-avanzados/diploma/detalle/'
            image='/typescript-f-avanzadas.png'
            description='TypeScript: Tipos Avanzados y Funciones!'
            title='Curso de TypeScript: Tipos Avanzados y Funciones, en Platzi' />
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/2880-typescript-poo/diploma/detalle/'
            image='/typescript-poo.png'
            description='Curso de TypeScript, Programación Orientada a Objetos y Asincronismo, en Platzi!'
            title='Curso de TypeScript: Programación Orientada a Objetos y Asincronismo' />
        <CardCertificates
            href='https://platzi.com/p/zotelsigel/curso/2878-typescript/diploma/detalle/'
            image='/fundamentos-de-typescript.png'
            description="Curso de fundamentos de TypeScript, en Platzi"
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