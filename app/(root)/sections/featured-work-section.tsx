import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"

const FeaturedWorkSection = () => {
    return (
    <section id="featuredWork">
        <Container>
        <Title title="Featured Work"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
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
        </Container>
    </section>
)
}

export default FeaturedWorkSection;