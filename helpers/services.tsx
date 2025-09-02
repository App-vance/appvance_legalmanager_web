const SERVICES = {
    ADMIN: "admin",
    CONTABLE: "contable",
    JURIDICA: "juridica"
}

export const getServiceInfo = {
    [SERVICES.ADMIN]: {
        title: "Área Administrativa",
        image: "/img/admin.webp",
        description: "La administración eficiente de copropiedades y empresas requiere confianza, responsabilidad y soluciones prácticas. Nuestro equipo ofrece una gestión integral que asegura la sostenibilidad, el crecimiento y la convivencia armónica en cada proyecto.",
        subdescription: "Gestión administrativa transparente y eficiente para su tranquilidad:",
        gestion: [
            {
                id: "item1",
                title: "Área operativa",
                description: "Encargada de la coordinación diaria de las actividades de la copropiedad, asegurando el cumplimiento de procesos, la eficiencia en la prestación de servicios y el adecuado funcionamiento general.",
            },
            {
                id: "item2",
                title: "Área de mantenimientos",
                description: "Responsable de planear, ejecutar y supervisar el mantenimiento preventivo y correctivo de las instalaciones, equipos y zonas comunes, garantizando la seguridad y conservación de los bienes.",
            },
            {
                id: "item3",
                title: "Área de talento humano",
                description: "Se enfoca en la gestión del personal, contratación, capacitación y bienestar laboral, promoviendo un ambiente de trabajo armónico y productivo.",
            },
            {
                id: "item4",
                title: "Área jurídica",
                description: "Asesora en la aplicación de la normatividad vigente, representación legal y gestión de trámites, asegurando el cumplimiento de las disposiciones legales y estatutarias.",
            },
            {
                id: "item5",
                title: "Área financiera",
                description: "Se ocupa de la planeación, control y análisis de los recursos financieros, elaboración de presupuestos y optimización del manejo económico de la entidad.",
            },
            {
                id: "item6",
                title: "Área contable",
                description: "Lleva el registro de las operaciones económicas, elaboración de estados financieros, cumplimiento de obligaciones tributarias y control contable en línea con la normatividad legal.",
            },
            {
                id: "item7",
                title: "Área de dirección",
                description: "Concentra la toma de decisiones estratégicas, planificación de objetivos y la supervisión integral de las diferentes áreas de gestión.",
            },
            {
                id: "item8",
                title: "Área de control",
                description: "Realiza la evaluación y seguimiento del cumplimiento de los procesos internos, promoviendo la mejora continua y la transparencia en la administración.",
            },
        ],
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
        image: "/img/juridica.webp",
        description: "Gestión contable, soluciones y revisoría fiscal para garantizar transparencia, cumplimiento normativo y objetivos financieros organizacionales.",
        subdescription: "De acuerdo con la normatividad colombiana y las necesidades de cada cliente, nuestras labores abarcan:",
        gestion: [
            {
                id: "item1",
                title: "Auditoría",
                description: "Consiste en la revisión independiente y sistemática de la información financiera y administrativa de la entidad. Busca garantizar la transparencia en la gestión, detectar posibles riesgos y proponer mejoras en los procesos internos.",
            },
            {
                id: "item2",
                title: "Revisoría fiscal",
                description: "Vela por el cumplimiento de la normatividad legal, estatutaria y de los órganos de administración. Comprende la vigilancia de los estados financieros, la adecuada ejecución presupuestal, la verificación tributaria y la rendición de informes a la Asamblea.",
            },
            {
                id: "item3",
                title: "Contabilidad",
                description: "Se enfoca en el registro, análisis y control de las operaciones económicas de la entidad. Incluye la preparación de estados financieros, la presentación de declaraciones tributarias y la implementación de sistemas contables acordes a la normatividad vigente.",
            },
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
        image: "/img/juridica.webp",
        description: "Nuestra experiencia abarca distintas ramas del derecho, ofreciendo soluciones integrales y confiables.",
        gestion: [
            {
                id: "item1",
                title: "Derecho civil",
                description: "Comprende la elaboración y revisión de contratos civiles, toda actuación referente al derecho notarial, sucesiones, registro civil, derecho inmobiliario y elaboración de estudios de títulos, entre otros aspectos. Así mismo, incluye la asesoría y representación judicial ante casos de responsabilidad civil y extracontractual.",
            },
            {
                id: "item2",
                title: "Derecho comercial",
                description: "Se centra en la asesoría y representación en actos de comercio, constitución de sociedades, elaboración de estatutos, procesos de liquidación, fusiones y adquisiciones, así como en la redacción y análisis de contratos mercantiles.",
            },
            {
                id: "item3",
                title: "Derecho inmobiliario",
                description: "Abarca la estructuración, revisión y legalización de contratos de arrendamiento, compraventa y administración de bienes inmuebles; la validación de títulos de propiedad y la gestión de trámites ante entidades públicas y notariales.",
            },
            {
                id: "item4",
                title: "Derecho laboral",
                description: "Enfocado en la relación empleador-trabajador: elaboración de contratos laborales, procesos de desvinculación, manejo de demandas laborales, conciliaciones y asesoría en políticas de seguridad industrial y salud en el trabajo.",
            },
            {
                id: "item5",
                title: "Seguridad social",
                description: "Cobija la asesoría en afiliaciones, cotizaciones, pensiones, incapacidades, riesgos laborales y demás trámites relacionados con el Sistema General de Seguridad Social en Colombia, garantizando el cumplimiento normativo y la defensa de los derechos de los afiliados.",
            },
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