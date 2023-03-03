export const MODES = [
  {
    name: 'light',
    color: 'black',
    background: 'whitesmoke'
  },
  {
    name: 'dark',
    color: 'white',
    background: '#222'
  }
]

export const LANGUAGES = [
  {
    name: 'es',
    list: [
      'Español',
      'Ingles'
    ]
  },
  {
    name: 'en',
    list: [
      'English',
      'Spanish'
    ]
  }
]

export const MENU = [
  [
    'Acerca de Mí',
    'Certificaciones',
    'Proyectos',
    'Contacto'
  ],
  [
    'About Me',
    'Certificacions',
    'Projects',
    'Contact'
  ],
]

export const ADITIONAL = [
  {
    greeting: '¡Hola!, Mi nombre es Gino Llano',
    charge: 'Soy un estudiante de Ingeniería Informática y un front end developer',
    aboutMe: 'Soy un estudiante de Ingeniería Informática en la Pontificia Universidad Católica del Perú (PUCP). Debido a esto poseo sólidos fundamentos en temas como algoritmos y estructuras de datos. Además, soy un estudiante autodidacta e interesado en aprender nuevas cosas. Es por esto que me dediqué a aprender programación web de forma independiente. Esto lo hice mediante academias por internet como Platzi y FreeCodeCamp. Adicionalmente realizé varios proyectos en los que puse en práctica mis conocimientos y que demuestran mis habilidades. Estos proyectos van desde páginas CRUD, consultas a API y aplicaciones multimedia. Dentro del desarrollo front end trabajo con el framework React y la extensión SASS. Además estoy familiarizado con el sistema de control de versiones Git. Por otro lado, cuento con más de medio año de experiencia dando clases particulares de programación en C++, Python y Javascipt mediante la página tusclases.pe, lo cual me permitió mejorar mis habilidades de comunicación. Actualmente trabajo de forma independiente como programador front end en páginas como Fiverr y estoy buscando mi primer trabajo como desarrollador junior en une empresa.',
    liveProject: 'Ir al proyecto en vivo',
    letsTalk: '¡Hablemos!'
  },
  {
    greeting: 'Hi!, My name is Gino Llano',
    charge: 'I\'m a Computer Engineering student and a front end developer',
    aboutMe: 'I\'m a Computer Engineering student at the Pontifical Catholic University of Peru (PUCP). Due to this I have solid foundations in topics such as algorithms and data structures. Also, I am a self-taught student and interested in learning new things. This is why I dedicated myself to learning web programming independently. I did this through online academies such as Platzi and FreeCodeCamp. Additionally, I carried out several projects in which I put my knowledge into practice and that demonstrate my skills. These projects range from CRUD pages, API queries, and multimedia applications. Within the front end development I work with the React framework and the SASS extension. I am also familiar with the Git version control system. On the other hand, I have more than half a year of experience giving private programming classes in C++, Python and Javascript through the tusclases.pe page, which allowed me to improve my communication skills. I am currently freelancing as a front end programmer on sites like Fiverr and looking for my first job as a junior developer in a company.',
    liveProject: 'Go to live project',
    letsTalk: '¡Let\'s talk!'
  }
]

export const PROJECTS = [
  {
    content: [
      {
        title: 'Generador de frases aleatorias',
        description: 'Está página muestra frases aleatorias.Al hacer click en el botón de Twitter, abre otra pestaña de donde puedes twittear la frase. Al hacer click en "New Quote" muestra una nueva frase.'
      },
      {
        title: 'Random Quote Generator',
        description: 'This page displays random quotes. Clicking on the Twitter button opens another tab where you can tweet the quote. Clicking on "New Quote" displays a new quote.'
      }
    ],
    image: 'random-quote-machine.jpg',
    link: 'https://gino-llano.github.io/Random-Quote-Machine/'
  },
  {
    content: [
      {
        title: 'Editor de Markdown',
        description: 'Esta página muestra un editor que convierte el texto ingresado en texto markdown.Los cambios hechos en "Editor" se verán reflejados automáticamente en "Preview". La página viene con un contenido por defecto que muestra las capacidades del editor. Además se puede cambiar la vista de las dos secciones.',
      },
      {
        title: 'Markdown Editor',
        description: 'This page shows an editor that converts the entered text into markdown text. Changes made in "Editor" will automatically be reflected in "Preview". The page comes with default content that shows the capabilities of the editor. You can also change the view of the two sections.',
      }
    ],
    image: 'markdown.jpg',
    link: 'https://gino-llano.github.io/Markdown-Previewer-React/'
  },
  {
    content: [
      {
        title: 'Reloj 25 + 5',
        description: 'Está página muestra un temporizador que permite mejorar la productividad del usuario. El temporizador toma dos estados que se intercalan: "Session" y "Break". El tiempo en minutos de estos estados se puede cambiar con las flechas. Al pasar de un estado al otro suena una alarma que indica al usuario que es hora de descansar o de volver a trabajar.'
      },
      {
        title: '25 + 5 Clock',
        description: 'This page shows a timer that allows to improve the user\'s productivity. The timer takes two interleaved states: "Session" and "Break". The time in minutes of these states can be changed with the arrows. When going from one state to the other, an alarm sounds that tells the user that it is time to rest or return to work.'
      }
    ],
    image: '25-5-clock.jpg',
    link: 'https://gino-llano.github.io/25-5-Clock/'
  },
  {
    content: [
      {
        title: 'Calculadora de propinas',
        description: 'Esta página permite al usuario calcular la propina que debe pagar en base al porcentaje ingresado. En la sección "Bill" se ingresa el pago sin propinas. En la sección "Select Tip" se selecciona el botón con el porcentaje deseado o se ingresa un porcentaje específico. En la sección "Number of people" se ingresa la cantidad de personas que deben realizar el pago. En "Tip Amount" se muestra la propina por persona y en "Total" se muestra el total por persona.',
      },
      {
        title: 'Tip Calculator',
        description: 'This page allows the user to calculate the tip to be paid based on the percentage entered. Payment without tips is entered in the "Bill" section. In the "Select Tip" section, the button with the desired percentage is selected or a specific percentage is entered. In the "Number of people" section, enter the number of people who must make the payment. "Tip Amount" shows the tip per person and "Total" shows the total per person.',
      }
    ],
    image: 'tip-calculator.jpg',
    link: 'https://gino-llano.github.io/Tip-Calculator/'
  },
  {
    content: [
      {
        title: 'Tres en raya',
        description: 'Esta página permite jugar tres en raya contra la PC o en modo multijugador contra otra persona. Se cuentan las victorias de cada jugador así como los empates. Algo interesante es que si eliges jugar contra la PC, este jugará de forma perfecta por lo que no se le puede ganar nunca.',
      },
      {
        title: 'Tic Tac Toe',
        description: 'This page allows you to play tic tac toe against the PC or in multiplayer mode against another person. The victories of each player are counted as well as the ties. Something interesting is that if you choose to play against the PC, it will play perfectly so you can never beat it.',
      }
    ],
    image: 'tic-tac-toe.jpg',
    link: 'https://gino-llano.github.io/Tic-Tac-Toe/'
  },
  {
    content: [
      {
        title: 'Aplicación del clima',
        description: 'Esta página permite ver el clima de tu ciudad así como el cualquier ciudad en el mundo. Solo tienes que ingresar el nombre de la ciudad y hacer click en "Submit". Además puedes ordenar las ciudades por temperatura de forma ascendente o descendente al hacer click en los botones debajo del buscador. En esta página se extrae informacion de un API.',
      },
      {
        title: 'Weather App',
        description: 'This page allows you to see the weather in your city as well as any city in the world. You only have to enter the name of the city and click on "Submit". You can also sort the cities by temperature in ascending or descending order by clicking on the buttons below the search engine. This page extracts information from an API.',
      }
    ],
    image: 'weather-app.jpg',
    link: 'https://gino-llano.github.io/Weather-App/'
  },
  {
    content: [
      {
        title: 'Filtro de imágenes',
        description: 'Esta página permite cargar una imagen, filtrarla y descargar la versión filtrada de la imagen. Al cargar la imagen aparecen tres botones: rojo, verde y azul. Por cada color hay tres botones: "Custom", "Grayscale" y "Inverted". Si haces click en "Custom" aparecen tres cuadros de texto en donde puedes ingresar numeros entre 0 y 1. Manipulando estos valores puedes cambiar el color de la imagen de forma muy personalizada.',
      },
      {
        title: 'Image Filter',
        description: 'This page allows you to upload an image, filter it, and download the filtered version of the image. When loading the image, three buttons appear: red, green and blue. For each color there are three buttons: "Custom", "Grayscale" and "Inverted". If you click on "Custom" three text boxes appear where you can enter numbers between 0 and 1. By manipulating these values you can change the color of the image in a very personalized way.',
      }
    ],
    image: 'image-filter.jpg',
    link: 'https://gino-llano.github.io/Image-Filter/'
  },
  {
    content: [
      {
        title: 'Clon de Paint',
        description: 'Esta página es una versión simplificada de Paint. Puedes dibujar y pintar con el color que desees. Al dibujar puedes elegir el grosor del pincel. Además puedes retroceder y avanzar en el tiempo. Por último, puedes descargar el dibujo que has creado.',
      },
      {
        title: 'Paint Clone',
        description: 'This page is a simplified version of Paint. You can draw and paint with the color you want. When drawing you can choose the thickness of the brush. You can also go back and forward in time. Finally, you can download the drawing you have created.',
      }
    ],
    image: 'paint.jpg',
    link: 'https://gino-llano.github.io/paint/'
  },
  {
    content: [
      {
        title: 'Aplicación para crear beats de música',
        description: 'Esta página permite crear beats de música a partir de una librería de sonidos y descargar el audio creado en formato .WAV. Posee muchas operaciones de la forma CRUD (Create-Read-Update-Delete) pues tiene mucha funcionalidad que ofrece al usuario. Aquí hago uso de la Web Audio API de Javascript. Cuenta con un simple tutorial que explica cómo usar la aplicación.',
      },
      {
        title: 'Music Beats App',
        description: 'This page allows you to create music beats from a sound library and download the created audio in .WAV format. It has many CRUD (Create-Read-Update-Delete) operations as it has a lot of functionality that it offers to the user. Here I make use of the Javascript Web Audio API. It has a simple tutorial that explains how to use the application.',
      }
    ],
    image: 'beat-box.jpg',
    link: 'https://gino-llano.github.io/beat-box/'
  },
]

export const CERTIFICATIONS = [
  {
    title: 'Curso Profesional de Git y GitHub',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/1557-git-github/diploma/detalle/'
  },
  {
    title: 'Curso Definitivo de HTML y CSS',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/2008-html-css/diploma/detalle/'
  },
  {
    title: 'Curso Práctico de HTML y CSS',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/1758-html-practico/diploma/detalle/'
  },
  {
    title: 'Curso de Responsive Design: Maquetación Mobile First',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/2030-mobile-first/diploma/detalle/'
  },
  {
    title: 'Curso de CSS Grid Básico',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/2474-css-grid/diploma/detalle/'
  },
  {
    title: 'Curso Básico de JavaScript',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/1814-basico-javascript/diploma/detalle/'
  },
  {
    title: 'Curso Práctico de JavaScript',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/3271-javascript-practico/diploma/detalle/'
  },
  {
    title: 'Curso de Closures y Scope en JavaScript',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/3213-javascript-closures-scope/diploma/detalle/'
  },
  {
    title: 'Curso Básico de Programación Orientada a Objetos con JavaScript',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/2332-javascript-poo/diploma/detalle/'
  },
  {
    title: 'Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!',
    from: 'Platzi',
    link: 'https://platzi.com/p/gino-llano/curso/3573-javascript-practico-videojuegos/diploma/detalle/'
  },
  {
    title: 'Responsive Web Design',
    from: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/espanol/certification/Gino_Llano/responsive-web-design'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    from: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/espanol/certification/Gino_Llano/javascript-algorithms-and-data-structures'
  },
  {
    title: 'Front End Development Libraries',
    from: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/espanol/certification/Gino_Llano/front-end-development-libraries'
  }
]