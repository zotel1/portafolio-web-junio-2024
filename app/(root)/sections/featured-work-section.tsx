'use client'

import Button from "@/components/ui/button";
import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"
import { useRouter } from "next/navigation";

const FeaturedWorkSection = () => {

const router = useRouter();

    return (
    <section id="featuredWork" className='border-b  border-gray-500/30 py-10'>
        <Container>
        <Title title="Featured Work"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
        <CardFeaturedWork 
        href='https://zotel1.github.io/landing-page-v1.1/' 
        image='/landing-page.jpeg' 
        category='Landing Page' 
        title='Landing Page Digital Nao'/>
        <CardFeaturedWork 
        href='https://peppy-alpaca-377053.netlify.app/' 
        image='/club-empanadas.png' 
        category='Single Page' 
        title='Club de empanadas' />
        </div>
        <Button label='View All Work' onClick={() => router.push('/work')}/>
        </Container>
    </section>
)
}

export default FeaturedWorkSection;