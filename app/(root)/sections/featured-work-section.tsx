'use client'

import ListFeaturedWork from "@/components/list-featured-work";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"
import { useRouter } from "next/navigation";

const FeaturedWorkSection = () => {

const router = useRouter();

    return (
    <section id="featuredWork" className='border-b  border-gray-500/30 py-10'>
        <Container>
        <Title title="Algunos Proyectos"/>
        <ListFeaturedWork />
        <Button label='Ver todos los proyectos' onClick={() => router.push('/work')}/>
        </Container>
    </section>
)
}

export default FeaturedWorkSection;