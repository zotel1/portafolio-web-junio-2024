import SectionHeader from "./sections/section-header";
import SectionMyRole from "./sections/section-my-role";


export const metadata = {
    title: 'Ver aplicación',
    description: 'Ver aplicación',
}

const WorkDetails = () => {
    return (
    <main>
        <SectionHeader />
        <SectionMyRole />
    </main>
)};
export default WorkDetails;