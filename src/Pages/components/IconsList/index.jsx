import { socialMediaInfo } from "../../utils/ContactInfo/contactInfo";

import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const IconsList = ({white=false, flexDirection="row", padding=20, justifyContent="center", size=30}) => {
    const icons = socialMediaInfo;

    return(
        <WrapperContainer2 flexDirection={flexDirection} justifyContent={justifyContent} gap={20} className={`icons`} padding={padding}>
            {icons?.map((item, index) => (
                <a 
                    style={{width: size, height: size}} 
                    key={index} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={item?.link} 
                    title={item?.name}
                >
                    {item?.icon}
                </a>
            ))}
        </WrapperContainer2>
    );
}
export { IconsList };