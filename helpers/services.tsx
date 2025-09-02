const SERVICES = {
    ADMIN: "admin",
    CONTABLE: "contable",
    JURIDICA: "juridica"
}

export const getServiceInfo = {
    [SERVICES.ADMIN]: {
        title: "Área Administrativa",
        image: "/images/admin.jpg",
        description: "La administración eficiente de copropiedades y empresas requiere confianza, responsabilidad y soluciones prácticas. Nuestro equipo ofrece una gestión integral que asegura la sostenibilidad, el crecimiento y la convivencia armónica en cada proyecto.",
        subdescription: "Gestión administrativa transparente y eficiente para su tranquilidad:",
        asesoria: [
            {
                title: "Servicios administrativos",
                items: [
                    "Administración integral de bienes y servicios.",
                    "Elaboración de planes de trabajo para optimizar recursos.",
                    "Planeación y control financiero, contable y administrativo.",
                    "Coordinación de servicios de seguridad, aseo y mantenimiento.",
                    "Supervisión, dirección y control de proveedores de servicios.",
                    "Asesoramiento en asuntos de propiedad horizontal, seguridad y convivencia."
                ]
            },
            {
                title: "Optimización de recursos",
                items: [
                    "Reducción de residuos en los asociados, humanos, financieros y jurídicos para mayor eficiencia."
                ]
            },
            {
                title: "Equipo multidisciplinario",
                items: [
                    "Especialistas técnicos, legales, contables y financieros, experiencia en el mercado."
                ]
            },
            {
                title: "Acompañamiento permanente",
                items: [
                    "Seguimiento continuo para un funcionamiento confiable, transparente y responsable."
                ]
            }
        ],
        principios: "Trabajamos bajo valores que garantizan confianza y transparencia en la administración, promoviendo la función social y ecológica de la propiedad, la sostenibilidad económica y la responsabilidad social al respecto por los dignos derechos humanos. Siempre buscamos soluciones responsables y transparentes para cada caso."
    },
    [SERVICES.CONTABLE]: {
        title: "Área Contable",
        image: "/images/contable.jpg",
        description: "Gestión contable, soluciones y revisoría fiscal para garantizar transparencia, cumplimiento normativo y objetivos financieros organizacionales.",
        subdescription: "De acuerdo con la normatividad colombiana y las necesidades de cada cliente, nuestras labores abarcan:",
        gestion: [
            "Auditoría",
            "Revisoría fiscal",
            "Contabilidad"
        ],
        asesoria: [
            {
                title: "Alcance de nuestros servicios",
                items: [
                    "Cumplimiento de la legislación, estatutaria y de normas vigentes en Colombia.",
                    "Preparación y expedición de presupuestos anuales y estados financieros.",
                    "Auditoría de los informes.",
                    "Verificación de declaraciones tributarias (suplementarias y conexas).",
                    "Revisión de libros contables conforme a normas legales y estatutarias.",
                    "Supervisión e impulso adecuado de cobros de cartera.",
                    "Análisis de estados financieros y elaboración presupuestal."
                ]
            },
            {
                title: "Requerimientos de información",
                items: [
                    "Elaboración de la contabilidad y soportes internos.",
                    "Declaraciones de impuestos a cargo.",
                    "Estados financieros de los 2 años anteriores.",
                    "Determinación de mover Fiscal para la prestación de servicios.",
                    "Información sobre los activos y últimas declaraciones tributarias."
                ]
            },
            {
                title: "Informes que entregamos",
                items: [
                    "Informe periódico de gestión.",
                    "Informe anual de estados financieros.",
                    "Informe dirigido a los asociados y entidades oficiales."
                ]
            }
        ],
        principios: "Trabajamos bajo valores que garantizan confianza y transparencia en la administración, promoviendo la función social y ecológica de la propiedad, la sostenibilidad económica y la responsabilidad social al respecto por los dignos derechos humanos. Siempre buscamos soluciones responsables y transparentes para cada caso."
    },
    [SERVICES.JURIDICA]: {
        title: "Área Jurídica",
        image: "/images/juridica.jpg",
        description: "Nuestra experiencia abarca distintas ramas del derecho, ofreciendo soluciones integrales y confiables.",
        gestion: [
            "Derecho civil",
            "Derecho comercial",
            "Derecho inmobiliario",
            "Derecho laboral",
            "Seguridad social"
        ],
        subdescription: "En cada una de estas áreas brindamos un portafolio completo de servicios legales, ajustados a tus necesidades.",
        asesoria: [
            {
                title: "Servicios Jurídicos",
                items: [
                    "Asesorías y conceptos jurídicos.",
                    "Asesorías jurídicas integrales.",
                    "Charlas y capacitaciones."
                ]
            },
            {
                title: "Acciones y procesos legales",
                items: [
                    "Elaboración de derechos de petición frente a entidades oficiales y privadas.",
                    "Interposición de acciones de cumplimiento, tutela, populares, de grupo.",
                    "Elaboración de demandas de pago.",
                    "Recuperación de cartera morosa."
                ]
            },
            {
                title: "Contratos y reglamentos",
                items: [
                    "Estudio de títulos y contratos (certificados de tradición, escrituras, etc).",
                    "Elaboración de contratos civiles, comerciales y/o laborales.",
                    "Estudio, revisión, reforma y elaboración de reglamentos internos y de seguridad.",
                    "Estudio, revisión, reforma y elaboración de reglamentos de propiedad horizontal."
                ]
            },
            {
                title: "Gestión y representación legal",
                items: [
                    "Representación legal en instancias judiciales y administrativas.",
                    "Acompañamiento en trámites administrativos y judiciales.",
                    "Análisis de conflictos de convivencia."
                ]
            }
        ],
        principios: "Trabajamos con base en la dignidad humana, la legalidad y el respeto en cada gestión. Nuestro equipo jurídico se guía por la actualización constante, la lealtad, la honestidad y la independencia profesional. Siempre buscando soluciones responsables y transparentes para cada caso."
    }
}