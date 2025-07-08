import React from "react";
import { SectionWrapper } from "../../SectionWrapper";
import { ImageRecord } from "../../../../services/image-record/interfaces/image-record";
import { GridContainer } from "../../GridContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { Title } from "../../Title";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TextCard } from "../../TextComponents";

interface SectionTravelWeekProps {
    travelWeeks: ImageRecord[];
}

const SectionTravelWeek = ({ travelWeeks }: SectionTravelWeekProps) => {
    console.log(travelWeeks);

    const travelWeek = travelWeeks[0];

    return (
        <SectionWrapper
            padding={50}
            innerPadding={0}
            id="semana-viajes"
            border={false}
            backgroundColor={"var(--pallete-4)"}
        >
            <GridContainer className="grid-1-1" padding={0}>
                <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
                    <Title
                        innerWidth="100%"
                        width="100%"
                        padding={0}
                        textAlign="start"
                        fontSize={26}
                    >
                        ¡Te presentamos los Travel Weeks! <MdOutlineTravelExplore />
                    </Title>

                    <TextCard>{travelWeek?.description}</TextCard>

                </WrapperContainer2>

                <img src={travelWeek?.image_url} alt={travelWeek?.name} />
            </GridContainer>
        </SectionWrapper>
    )
}

export default SectionTravelWeek;