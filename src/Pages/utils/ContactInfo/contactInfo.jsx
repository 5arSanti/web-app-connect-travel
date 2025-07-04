import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";

const contactInfo = {
    phone: {
        name: "Numero de celular",
        info: "(+57) 000 000 0000",
        icon: <FaSquarePhone />
    },
    address: {
        name: "Dirección",
        info: "Direccion",
        icon: <FaLocationDot />
    },
}

const socialMediaInfo = [
    {
        name: "Facebook",
        link: "",
        icon: <FaFacebookF className={white ? "white-color" : "lines-color"} />,
    },
    {
        name: "Instagram",
        link: "",
        icon: <FaInstagram className={white ? "white-color" : "lines-color"} />,
    },
    {
        name: "WhatsApp",
        link: "",
        icon: <FaWhatsapp className={white ? "white-color" : "lines-color"} />,
    },
]

export { contactInfo, socialMediaInfo };