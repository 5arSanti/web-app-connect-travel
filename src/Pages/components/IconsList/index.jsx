import { getSocialMediaInfo } from "../../utils/ContactInfo/contactInfo";

import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const IconsList = ({ white = false, flexDirection = "row", padding = 20, justifyContent = "center", size = 30 }) => {
    const icons = getSocialMediaInfo(white);

    return (
        <WrapperContainer2 flexDirection={flexDirection} justifyContent={justifyContent} gap={20} className={`icons`} padding={padding}>
            {icons?.map((item, index) => (
                <a
                    style={{ width: size, height: size }}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item?.callback ? undefined : item?.link}
                    title={item?.name}
                    onClick={item?.callback}
                >
                    {item?.icon}
                </a>
            ))}
        </WrapperContainer2>
    );
}
export { IconsList };