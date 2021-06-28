export default {
  global: {
    componenteFormativo:
      'Diseño del modelo conceptual bajo el paradigma orientado a objetos',
    descripcionCurso:
      'Durante el transcurso de este componente formativo podrá abordar saberes relacionados con el Lenguaje de Modelado Unificado, diagramas de clase y el uso de Herramientas Case que le servirán para crear modelos que son fundamentales para visualizar, especificar y construir <b>software.</b>',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a UML',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagramas de Clase',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Control de acceso',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Asociaciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herencia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Agregación',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Composición',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas CASE',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cuevas,1991, Cuevas Agustín, Gonzalo,” Ingenieria del Software.Práctica de la programación”, Editorial RA-MA, 1 impresión,1991',
    },
    {
      referencia:
        'Flores Cueto, J. J., & Bertolotti Zuñiga, C. (2013). Diagrama de clases en uml. 6.',
      link: 'https://www.usmp.edu.pe/publicaciones/boletin/fia/info67/UML.pdf',
    },
    {
      referencia:
        'Introduction to UML: Unified Modeling Language Ric Holt U Waterloo, March 2009 CS246. (2021, May 20). Retrieved from',
      link:
        'https://cupdf.com/document/introduction-to-uml-unified-modeling-language-ric-holt-u-waterloo-march-2009.html',
    },
    {
      referencia:
        'Rumbaugh, J., Jacobson, I., & Booch, G. (2004). El Lenguaje Unificado de Modelado. Elements, 30.',
      link: 'http://portal.acm.org/citation.cfm?id=993859&dl=',
    },
    {
      referencia:
        'S. Pressman,1998 S. Pressman, Roger, “Ingeniería del Software.” Un enfoque práctico”, Editorial Mc. Grraw-Hill, 4ta edición,1998',
    },
    {
      referencia:
        'Schmuller, J. (2001). Aprendiendo UML en 24 horas. Pearson Educación.',
    },
  ],
  glosario: [
    {
      termino: 'CASE',
      significado: 'Ingeniería de Software asistida por computación.',
    },
    {
      termino: 'Herramienta CASE',
      significado:
        'una herramienta software que automatiza una parte de las fases del ciclo del desarrollo de sw.',
    },
    {
      termino: 'Tecnología CASE',
      significado:
        'conjunto de instrumentos y técnicas software para automatizar una disciplina de la ingeniería, incluyendo metodologías estructuradas y herramientas.',
    },
  ],
  complementario: [
    {
      texto: 'Creación Diagramas de Clase StarUML',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7WRYH2ei5Rw&t=106s',
    },
    {
      texto:
        'Español, L. (2019, February 04). Tutorial - Diagrama de Clases UML. Youtube. Retrieved from https://www.youtube.com/watch?v=Z0yLerU0g-Q',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z0yLerU0g-Q',
    },
    {
      texto:
        'SENA, 2021. Ejemplo completo de la realización de un diagrama de clase.',
      tipo: 'Documento',
      descarga: '/downloads/ANEXO_DIAGRAMA_CLASES_EJERCICIOS.pdf',
    },
    {
      texto:
        '[PDF] HERRAMIENTAS Y ENTORNOS DE PROGRAMACIÓN - Free Download PDF. (2021, May 21). Retrieved from https://silo.tips/download/herramientas-y-entornos-de-programacion',
      tipo: 'Página web',
      link:
        'https://silo.tips/download/herramientas-y-entornos-de-programacion',
    },
    {
      texto:
        'Herramientas CASE. (2021, May 16). Retrieved from http://marcochicaiza72.blogspot.com/p/herramientas-case.html',
      tipo: 'Video',
      link: 'http://marcochicaiza72.blogspot.com/p/herramientas-case.html',
    },
    {
      texto:
        'Herramienta CASE - EcuRed. (2021, May 21). Retrieved from https://www.ecured.cu/Herramienta_CASE#Ejemplos_de_Herramientas_Case_m',
      tipo: 'Blog',
      link:
        'https://www.ecured.cu/Herramienta_CASE#Ejemplos_de_Herramientas_Case_m.C3.A1s_utilizadas.',
    },
    {
      texto:
        'Lista de Herramientas CASE - Herramientas CASE. (2021, May 13). Retrieved from https://sites.google.com/site/herramientascaseudelp/lista-de-herramientas',
      tipo: 'Página web',
      link:
        'https://sites.google.com/site/herramientascaseudelp/lista-de-herramientas',
    },
    {
      texto:
        'Las más utilizadas. (2008, July 11). Retrieved from https://herramientascase.wordpress.com/las-mas-utilizadas',
      tipo: 'Página web',
      link: 'https://herramientascase.wordpress.com/las-mas-utilizadas/',
    },
    {
      texto: 'StarUML. (2021, May 21). Retrieved from https://staruml.io',
      tipo: 'Página web',
      link: 'https://staruml.io/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Zulema León Escobar',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología Regional distrito capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
