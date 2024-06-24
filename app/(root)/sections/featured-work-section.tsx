import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"

const FeaturedWorkSection = () => {
    return (
    <section id="featuredWork">
        <Container>
        <Title title="Featured Work"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            <CardFeaturedWork />
            <CardFeaturedWork />
            <CardFeaturedWork />
        </div>
        </Container>
    </section>
)
}

export default FeaturedWorkSection;