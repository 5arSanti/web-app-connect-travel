import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone, FaEnvelope } from "react-icons/fa6";

const contactInfo = {
    phone: {
        name: "Numero de celular",
        info: "(+57) 000 000 0000",
        icon: <FaSquarePhone />
    },
    email: {
        name: "Correo Electrónico",
        info: "info@connecttravel.com",
        icon: <FaEnvelope />
    },
    hours: {
        name: "Horario de Atención",
        info: "24 horas, 7 días a la semana",
        icon: <FaLocationDot />
    }
}

const getSocialMediaInfo = (white = false) => {
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

    return socialMediaInfo;
}

export { contactInfo, getSocialMediaInfo };