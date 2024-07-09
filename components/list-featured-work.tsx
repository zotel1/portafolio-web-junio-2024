import CardFeaturedWork from "./ui/card-featured-work"

const ListFeaturedWork = () => {
    return (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
        <CardFeaturedWork
            href='https://zotel1.github.io/landing-page-v1.1/'
            image='/landing-page.jpeg'
            category='Landing Page'
            title='Landing Page Digital Nao' />
        <CardFeaturedWork
            href='https://peppy-alpaca-377053.netlify.app/templates/menu'
            image='/empanada-martina.jpeg'
            category='Single Page'
            title='Club de empanadas' />
        <CardFeaturedWork
            href='https://zotel1.github.io/encriptador-challenge/'
            image='/carpi-pc.png'
            category='Challenge Alura-latam'
            title='Encriptador depalabras' />
        <CardFeaturedWork
            href='/work/details'
            image='/conversor-java.png'
            category='API Rest Full'
            title='Conversor de monedas'
        />
    </div>

    )
};

export default ListFeaturedWork;