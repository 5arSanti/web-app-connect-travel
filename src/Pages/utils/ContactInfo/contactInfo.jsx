import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone, FaEnvelope } from "react-icons/fa6";
import { handleWhatsAppClick } from "../../components/FloatingWhatsApp";

const contactInfo = {
    phone: {
        name: "Numero de celular",
        info: "313 836 3610",
        icon: <FaSquarePhone />
    },
    email: {
        name: "Correo Electrónico",
        info: "ventas@connecttravel.co",
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
            link: "https://www.facebook.com/profile.php?id=61577192944323",
            icon: <FaFacebookF className={white ? "white-color" : "lines-color"} />,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/connecttravels_/",
            icon: <FaInstagram className={white ? "white-color" : "lines-color"} />,
        },
        {
            name: "WhatsApp",
            link: "",
            icon: <FaWhatsapp className={white ? "white-color" : "lines-color"} />,
            callback: () => handleWhatsAppClick()
        },
    ]

    return socialMediaInfo;
}

export { contactInfo, getSocialMediaInfo };