import { MdBusinessCenter, MdExplore, MdFlight, MdGpsFixed, MdHandshake, MdPeople, MdSecurity, MdStar, MdTrendingUp, MdVisibility } from "react-icons/md";

const aboutData = [
    {
        icon: <MdBusinessCenter />,
        title: "MISIÓN",
        description: "Brindar experiencias de viajes personalizadas y memorables creando recuerdos inolvidables en nuestros clientes."
    },
    {
        icon: <MdVisibility />,
        title: "VISIÓN",
        description: "Ser la agencia de confianza ofreciendo atención personalizada y brindando respaldo a nuestros clintes en momentos oportunos."
    },
    {
        icon: <MdGpsFixed />,
        title: "OBJETIVOS",
        description: [
            'Brindar experiencias personalizadas.',
            'Fidelización de clientes.',
            'Garantizar la satisfacción del cliente.',
            'Estar actualizados con las tendencias del mercado.',
            'Brindar confianza a nuestros clientes asegurando cumplimiento, transparencia, honestidad y acompañamiento constante.'
        ]
    },
    {
        icon: <MdHandshake />,
        title: "CONFIANZA",
        description: [
            'Cumplimiento.',
            'Honestidad.',
            'Transparencia.',
            'Empatía.',
            'Excelencia en el servicio.'
        ]
    },
];

const statsData = [
    { number: "24+", label: "Años de Experiencia", icon: <MdFlight /> },
    { number: "1K+", label: "Clientes Satisfechos", icon: <MdPeople /> },
    { number: "500+", label: "Destinos Disponibles", icon: <MdExplore /> },
    { number: "4.9", label: "Calificación Promedio", icon: <MdStar /> }
];

export { aboutData, statsData };