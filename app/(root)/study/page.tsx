import ListCertificates from "@/components/list-certificates";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const PageStudy = () => {
    return (
        <Container>
            <Title title='Certificates' />
            <ListCertificates/>
        </Container>
    )
};

export default PageStudy;