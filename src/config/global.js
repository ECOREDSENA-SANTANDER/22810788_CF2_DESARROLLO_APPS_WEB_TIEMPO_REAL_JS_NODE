export default {
  global: {
    Name: 'Construcción de aplicaciones web en tiempo real con Node.js',
    Description:
      'Configurar un entorno profesional, levantar un servidor con Node.js y establecer canales de comunicación bidireccional mediante WebSockets son los pasos que separan el conocimiento teórico de una aplicación funcional. Este componente aborda la construcción práctica de soluciones web en tiempo real, desde la infraestructura hasta la integración de <em>sockets</em>, con criterio técnico y código estructurado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Preparación del entorno de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos de <em>hardware</em> y <em>software</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Entorno de desarrollo integrado y configuración inicial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Construcción del servidor con Node.js',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Arquitectura del servidor básico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'WebSockets: comunicación bidireccional en tiempo real',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aplicación práctica: pizarra virtual colaborativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura del proyecto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Código del servidor',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Código del cliente',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Flujo lógico del desarrollador',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22810788_CF2_DU.pdf',
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
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'API (Interfaz de Programación de Aplicaciones)',
      significado:
        'conjunto de reglas y protocolos que permite la comunicación entre distintas aplicaciones de <em>software</em>. En el contexto del desarrollo web con Node.js, Express facilita la construcción de la API del servidor definiendo las rutas y respuestas disponibles para los clientes.',
    },
    {
      termino: '<em>Broadcast</em>',
      significado:
        'método de transmisión en socket.io mediante el cual el servidor envía un evento a todos los clientes conectados simultáneamente, con excepción del emisor original. Se implementa con socket.broadcast.emit().',
    },
    {
      termino: 'Dependencia',
      significado:
        'librería de código desarrollada por terceros que un proyecto Node.js necesita para funcionar. Se instala con npm install y queda registrada en el archivo package.json, lo que permite reconstruir el entorno en cualquier equipo.',
    },
    {
      termino: 'Electron',
      significado:
        'marco de trabajo de código abierto que permite desarrollar aplicaciones de escritorio multiplataforma usando tecnologías web (html, css y javascript). Visual Studio Code está construido sobre Electron, lo que explica su comportamiento idéntico en Windows, MacOS y Linux.',
    },
    {
      termino: '<em>Event loop</em> (Bucle de Eventos)',
      significado:
        'mecanismo interno de Node.js que permite ejecutar operaciones de entrada/salida de forma no bloqueante. En lugar de esperar a que una tarea pesada termine, delega su ejecución al sistema operativo y continúa procesando otras solicitudes, lo que posibilita alta concurrencia en un solo hilo.',
    },
    {
      termino: 'Express',
      significado:
        'marco de trabajo minimalista para Node.js que simplifica la creación de servidores HTTP, la definición de rutas y el manejo de peticiones y respuestas. Es el estándar de la industria para construir el servidor base sobre el que se integran capas adicionales como socket.io.',
    },
    {
      termino: '<em>Full-duplex</em>',
      significado:
        'característica de un canal de comunicación que permite enviar y recibir datos simultáneamente en ambas direcciones sin interrupciones. Es la propiedad fundamental de los websockets que los distingue del protocolo HTTP tradicional, donde solo el cliente puede iniciar la comunicación.',
    },
    {
      termino: '<em>Handshake</em> (Negociación Inicial)',
      significado:
        'proceso automatizado entre cliente y servidor para establecer los parámetros de una conexión WebSocket. El cliente envía una petición HTTP con cabecera de <em>upgrade</em> y, si el servidor la acepta, la conexión HTTP se transforma en un canal TCP persistente y bidireccional.',
    },
    {
      termino: 'IDE (Entorno de Desarrollo Integrado)',
      significado:
        'plataforma de <em>software</em> que centraliza en una sola interfaz las herramientas esenciales del desarrollo: editor de código, terminal integrada y depurador. En el ecosistema Node.js, visual studio code es el ide de referencia en la industria.',
    },
    {
      termino: '<em>Localhost</em>',
      significado:
        'nombre de <em>host</em> que hace referencia a la propia máquina donde se ejecuta el servidor (dirección ip 127.0.0.1). Se utiliza para probar aplicaciones web en el entorno local antes de desplegarlas en un servidor de producción accesible desde internet.',
    },
    {
      termino: 'Node.js',
      significado:
        'entorno de ejecución de javascript de código abierto y multiplataforma, construido sobre el motor v8 de Chrome. Permite ejecutar JavaScript en el servidor, fuera del navegador, y está diseñado para construir aplicaciones de red escalables gracias a su modelo de I/O no bloqueante.',
    },
    {
      termino: 'NPM (<em>Node Package Manager</em>)',
      significado:
        'gestor de paquetes oficial de Node.js que permite instalar, actualizar y administrar dependencias de terceros. Incluye acceso al repositorio público de paquetes de código abierto más grande del mundo y se instala automáticamente junto con Node.js.',
    },
    {
      termino: 'Package.json',
      significado:
        'archivo manifiesto ubicado en la raíz de todo proyecto Node.js. Registra el nombre del proyecto, el archivo de entrada principal y el inventario exacto de dependencias instaladas. Permite que cualquier desarrollador reconstruya el entorno completo con un solo comando npm install.',
    },
    {
      termino: 'Servidor HTTP',
      significado:
        '<em>software</em> que implementa el protocolo HTTP y es responsable de recibir peticiones de navegadores web y entregar la respuesta correspondiente. En el contexto de Node.js, el servidor HTTP se construye con el módulo nativo HTTP y se organiza mediante el <em>framework</em> express.',
    },
    {
      termino: 'WebSockets',
      significado:
        'protocolo de comunicación estandarizado (RFC 6455) que establece un canal persistente, bidireccional y <em>full-duplex</em> sobre una única conexión TCP. A diferencia del protocolo HTTP, permite que el servidor envíe datos al cliente en cualquier momento sin esperar una petición previa, lo que lo hace ideal para chats, tableros y aplicaciones colaborativas en tiempo real.',
    },
  ],
  referencias: [
    {
      referencia:
        "Brown, E. (2020). Web development with Node and Express: Leveraging the JavaScript stack (2.ª ed.). O'Reilly Media.",
    },
    {
      referencia: 'MDN Web Docs. (2023). Canvas API. Mozilla Foundation.',
    },
    {
      referencia: 'MDN Web Docs. (2023). WebSockets API. Mozilla Foundation.',
    },
    {
      referencia:
        'Microsoft. (2024). Node.js tutorial in Visual Studio Code. Microsoft.',
    },
    {
      referencia:
        'Node.js Foundation. (2024). Introduction to Node.js. OpenJS Foundation.',
    },
    {
      referencia: 'Npm. (2024). About npm. npm, Inc.',
    },
    {
      referencia: 'Socket.IO. (2024). Introduction to Socket.IO. Socket.IO.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
