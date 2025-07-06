import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionServices } from "../../components/ScreenHome/SectionServices";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css"
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";
import { SectionNews } from "../../components/SectionNews";
import { SectionUsersOpinions } from "../../components/SectionUserOpinions";
import { StyledSection } from "../../components/StyledSection";
import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { Header } from "../../components/Header";
import { HeaderContact } from "../../components/HeaderContact";
import { FloatingNav } from "../../components/FloatingNav";
import { FloatingWhatsApp } from "../../components/FloatingWhatsApp";
import { Footer } from "../../components/Footer";

const Home = () => {
    return (
        <div style={{ width: '100%', height: '100%', boxSizing: 'border-box' }}>
            <Header />
            <HeaderContact />

            <FloatingNav />
            <FloatingWhatsApp />

            <FadeWrapper>
                <StyledSection id="home">
                    <InitialSectioninfo />
                </StyledSection>
            </FadeWrapper>

            <SectionServices />

            {/* <SectionAboutUs /> */}

            {/* <SectionUsersOpinions /> */}

            <SectionContact />

            <SectionNews />

            <Footer />
        </div>
    );
}

export { Home };