import React from "react";
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
import { imageRecordService } from "../../../services/image-record/image-record.service";
import { ImageRecordType } from "../../../services/image-record/enum/image-record.enum";
import { ImageRecord } from "../../../services/image-record/interfaces/image-record";
import { MdOutlineBlock, MdOutlineTravelExplore } from "react-icons/md";
import { SectionImageRecord } from "../../components/ScreenHome/SectionImageRecord";
import { GiCommercialAirplane } from "react-icons/gi";

const Home = () => {
    const [travelWeeks, setTravelWeeks] = React.useState<ImageRecord[]>([]);
    const [blocks, setBlocks] = React.useState<ImageRecord[]>([]);

    React.useEffect(() => {
        const fetchTravelWeeks = async () => {
            const image_records = await imageRecordService.getActiveImageRecords();
            setTravelWeeks(image_records.filter(item => item.image_type === ImageRecordType.TRAVEL_WEEK));
            setBlocks(image_records.filter(item => item.image_type === ImageRecordType.BLOCK));
        };
        fetchTravelWeeks();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', margin: 0, padding: 0 }}>
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

            <SectionImageRecord
                title="¡Te presentamos los Travel Weeks!"
                description="¡Descubre las mejores semanas de viajes como lo hacen los mejores!"
                icon={<GiCommercialAirplane />}
                layout="text-left"
                travelWeeks={travelWeeks}
            />

            <SectionImageRecord
                title="¡Pero no solo viajes, tambien bloqueos!"
                description="¡Tienes la disponibilidad de elegir viajar en cualquier momento!"
                icon={<MdOutlineTravelExplore />}
                layout="text-right"
                travelWeeks={blocks}
            />

            <SectionAboutUs />


            <SectionUsersOpinions />

            <SectionContact />

            <SectionNews />

            <Footer />
        </div>
    );
}

export { Home };