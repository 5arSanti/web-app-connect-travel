const date = new Date();

const news = [
    {
        title: "Nuevos Destinos en Europa para 2024",
        description: "Connect Travel's anuncia la incorporación de nuevos destinos europeos para el próximo año. Incluimos rutas por la Toscana italiana, la costa vasca española y los fiordos noruegos. Reservas anticipadas con 20% de descuento hasta diciembre.",
        publicationDate: new Date('2024-11-15'),
        image: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "Destinos",
        category: "Europa"
    },
    {
        title: "Promoción Especial: Caribe Todo Incluido",
        description: "¡Aprovecha nuestra promoción especial para el Caribe! Paquetes todo incluido en República Dominicana, Jamaica y México con descuentos de hasta 30%. Incluye vuelos directos, hoteles 4 estrellas y actividades acuáticas.",
        publicationDate: new Date('2024-11-10'),
        image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "Promociones",
        category: "Caribe"
    },
    {
        title: "Nuevo Servicio: Viajes Corporativos",
        description: "Lanzamos nuestro nuevo servicio de viajes corporativos. Facilitamos la logística de viajes de negocios para empresas con tarifas preferenciales, hoteles ejecutivos y soporte 24/7. Ideal para reuniones, conferencias y eventos corporativos.",
        publicationDate: new Date('2024-11-05'),
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "Servicios",
        category: "Corporativo"
    },
    {
        title: "Destinos Nacionales: Temporada de Montaña",
        description: "Descubre la belleza de nuestras montañas nacionales. Paquetes especiales para Bariloche, Mendoza y Salta con actividades de aventura, gastronomía local y alojamiento en hoteles boutique. Experiencias únicas en el corazón de Argentina.",
        publicationDate: new Date('2024-10-28'),
        image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "Destinos",
        category: "Nacional"
    },
    {
        title: "Cruceros por el Mediterráneo 2024",
        description: "Navega por las aguas más azules del Mediterráneo con nuestros cruceros premium. Visita Grecia, Italia, Croacia y España en un viaje inolvidable. Incluye excursiones guiadas, gastronomía local y entretenimiento a bordo.",
        publicationDate: new Date('2024-10-20'),
        image: "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "Cruceros",
        category: "Mediterráneo"
    },
    {
        title: "Alianza con Aerolíneas Internacionales",
        description: "Connect Travel's firma alianzas estratégicas con las principales aerolíneas internacionales. Esto nos permite ofrecer mejores tarifas, más frecuencias de vuelo y beneficios exclusivos para nuestros clientes en destinos de todo el mundo.",
        publicationDate: new Date('2024-10-15'),
        image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "Alianzas",
        category: "Internacional"
    }
]

export { news };