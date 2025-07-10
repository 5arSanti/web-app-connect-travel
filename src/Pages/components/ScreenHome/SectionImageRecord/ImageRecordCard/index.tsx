import React from "react"
import { WrapperContainer2 } from "../../../WrapperContainers"
import { ImageRecord } from "../../../../../services/image-record/interfaces/image-record"
import { FadeWrapper } from "../../../FadeWrapper"

const ImageRecordCard = ({ currentTravelWeek }: { currentTravelWeek: ImageRecord }) => {
    return (
        <FadeWrapper delay={300}>
            <WrapperContainer2
                padding={0}
                justifyContent="center"
                alignItems="center"
            >
                <WrapperContainer2 padding={0} className="image-wrapper">
                    <img
                        src={currentTravelWeek?.image_url}
                        alt={currentTravelWeek?.name}
                        className="travel-week-image"
                    />
                </WrapperContainer2>
            </WrapperContainer2>

        </FadeWrapper>
    )
}

export { ImageRecordCard }