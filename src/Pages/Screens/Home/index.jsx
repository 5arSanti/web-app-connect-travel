import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionServices } from "../../components/ScreenHome/SectionServices";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css"
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";
import { SectionNews } from "../../components/SectionNews";
import { SectionUsersOpinions } from "../../components/SectionUserOpinions";
import { StyledSection } from "../../components/StyledSection";
import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";

const Home = () => {
    return (
        <>
            <FadeWrapper>
                <StyledSection id="home">
                    <InitialSectioninfo />
                </StyledSection>
            </FadeWrapper>

            <SectionServices />

            <SectionAboutUs />

            <SectionUsersOpinions />

            <SectionContact />

            <SectionNews />
        </>
    );
}

export { Home };