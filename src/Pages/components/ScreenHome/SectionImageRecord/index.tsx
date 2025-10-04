import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../../SectionWrapper";
import { ImageRecord } from "../../../../services/image-record/interfaces/image-record";
import { GridContainer } from "../../GridContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { Title } from "../../Title";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { TextCard } from "../../TextComponents";
import "./styles.css";
import { ImageRecordCard } from "./ImageRecordCard";
import { FadeWrapper } from "../../FadeWrapper";

interface SectionTravelWeekProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  travelWeeks: ImageRecord[];
  layout: "text-left" | "text-right";
}

const SectionImageRecord = ({
  title,
  description,
  icon,
  layout,
  travelWeeks,
}: SectionTravelWeekProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (travelWeeks.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % travelWeeks.length);
    }, 25000);
    return () => clearInterval(interval);
  }, [travelWeeks.length, isPaused]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomOpen(false);
        setIsPaused(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelWeeks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? travelWeeks.length - 1 : prevIndex - 1
    );
  };

  const currentTravelWeek = travelWeeks[currentIndex];

  if (!travelWeeks || travelWeeks.length === 0) {
    return null;
  }

  return (
    <SectionWrapper
      padding={50}
      innerPadding={0}
      id="semana-viajes"
      border={false}
      className="travel-week-section"
      margin="0"
    >
      <div className="travel-week-content">
        <GridContainer className={`grid-1-1`} padding={0} gap={20}>
          {layout === "text-right" && (
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => {
                setIsZoomOpen(true);
                setIsPaused(true);
              }}
              style={{ width: "100%" }}
            >
              <ImageRecordCard
                key={currentIndex}
                currentTravelWeek={currentTravelWeek}
              />
            </div>
          )}

          <WrapperContainer2
            flexDirection="column"
            gap={20}
            padding={0}
            className="travel-week-text-container"
            justifyContent="center"
            alignItems="center"
          >
            <FadeWrapper delay={200}>
              <Title
                innerWidth="100%"
                width="100%"
                padding={0}
                textAlign="center"
                fontSize={42}
                className="travel-week-title"
              >
                {title} {icon}
              </Title>
            </FadeWrapper>
            <FadeWrapper delay={300}>
              <TextCard textAlign="center">{description}</TextCard>
            </FadeWrapper>

            <FadeWrapper delay={400}>
              <WrapperContainer1
                padding={"30px 40px"}
                borderRadius={25}
                className="travel-week-description"
              >
                <TextCard>{currentTravelWeek?.description}</TextCard>
              </WrapperContainer1>
            </FadeWrapper>

            {travelWeeks.length > 1 && (
              <FadeWrapper delay={600}>
                <div className="travel-week-navigation">
                  <div className="nav-dots">
                    {travelWeeks.map((_, index) => (
                      <button
                        key={index}
                        className={`nav-dot ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>

                  <div className="nav-arrows">
                    <button className="nav-arrow prev" onClick={handlePrev}>
                      <MdNavigateBefore />
                    </button>
                    <button className="nav-arrow next" onClick={handleNext}>
                      <MdNavigateNext />
                    </button>
                  </div>
                </div>
              </FadeWrapper>
            )}
          </WrapperContainer2>

          {layout === "text-left" && (
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => {
                setIsZoomOpen(true);
                setIsPaused(true);
              }}
              style={{ width: "100%" }}
            >
              <ImageRecordCard
                key={currentIndex}
                currentTravelWeek={currentTravelWeek}
              />
            </div>
          )}
        </GridContainer>
      </div>
      {isZoomOpen && (
        <div
          className="zoom-overlay"
          onClick={() => {
            setIsZoomOpen(false);
            setIsPaused(false);
          }}
        >
          <img
            src={currentTravelWeek?.image_url}
            alt={currentTravelWeek?.name}
            className="zoom-image"
          />
        </div>
      )}
    </SectionWrapper>
  );
};

export { SectionImageRecord };
