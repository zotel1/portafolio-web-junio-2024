import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import Form from "./components/form";
const ContactPage = () => {
    return (
        <main>
            <Container>
                <Title title='Lets Chat'></Title>
                <p className='text-gray-500'>
                    If youd like to talk about a potential project or say hi, send me a message or email me at{' '}
                    <span className='text-white'>cristiansigelwebdevelopment@gmail.com</span>
                </p>
                
            </Container>
            <Form />
        </main>
    )
}

export default ContactPage;