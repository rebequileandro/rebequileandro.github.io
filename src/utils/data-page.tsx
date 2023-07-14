import shooza from '@/assets/projects/shoozaLanding.png';
import pocketFit from '@/assets/projects/pocketFit.webp';
import chat from '@/assets/projects/chatRoom.png';
import bizarrap from '@/assets/projects/bizarrap.png';

const dataPage = {
  home: {
    title: (
      <>
        <span className="home__seg-2">Full Stack Developer:</span>
        <br />
        Creo experiencias, <br />
        Desarrollo tus ideas
      </>
    ),
    description: (
      <p>
        Mi nombre es Leandro Rebequi, soy <br />
        desarrollador Web | Mobile.
      </p>
    )
  },
  aboutMe: {
    description: (
      <p>
        ¡Hola! Mi nombre es Leandro Rebequi.
        <br />
        Mis inicios en el desarrollo web comenzaron a mediados del 2019, comencé
        haciendo simples maquetaciones en HTML y CSS, inspeccionando códigos de
        otras webs y viendo cursos en YouTube. <br />
        Luego por el 2021, comencé a capacitarme más en serio, tome un Bootcamp
        Full Stack, donde adquirí una buena base para crear webs y aplicaciones
        completas, a partir de ese punto comencé a capacitarme por mi cuenta a
        medida que los trabajos o proyectos lo iban requiriendo.
      </p>
    ),
    skills: [
      'JavaScript',
      'TypeScript',
      'React | React Native',
      'Redux',
      'Node',
      'Python'
    ]
  },
  projects: [
    {
      title: 'Bizarrap',
      description: `En la web de Bizarrap podrás encontrar toda la información sobre sus próximos shows, 
      también podrás encontrar un calendario con fotos y videos exclusivos de sus últimas presentaciones`,
      image: bizarrap,
      technologies: 'React, JavaScript',
      type: 'WEB',
      url: 'https://bizarrap.com/'
    },
    {
      title: 'Shooza',
      description: `Shooza es una aplicación que emplea las
      tecnologías de TWA (Trusted Web Activities)
      para ejecutar una aplicación web como
      aplicación móvil,
      la misma está construida principalmente con
      ReactJS, Redux y Socket.io entre otras.`,
      image: shooza,
      technologies: 'React, JavaScript, Lax, Redux, Socket.io, Sass',
      type: 'MOBILE',
      url: 'https://shooza.co/'
    },
    {
      title: 'PocketFit',
      description: `PocketFit es una aplicación creada para la administración de gimnasios desarrollada 
      en React.js y Redux por la parte del Frontend y Node.js, Express, y postgreSQL por la 
      parte del Backend también cuenta con una versión mobile para clientes desarrollada en 
      React Native.`,
      image: pocketFit,
      technologies: 'React, React Native, JavaScript, Firebase, Redux',
      type: 'WEB | MOBILE',
      url: 'https://pocketgym.vercel.app/'
    },
    {
      title: 'Chat',
      description: `Esta es una aplicación web creada con React y Firebase en la cual podrás chatear y 
      conocer gente aleatoria sin necesidad de registrarte, se pueden crear otras salas, cambiar el 
      color con el que apareces en el chat y enviar emojis`,
      image: chat,
      technologies: 'React, JavaScript, Firebase',
      type: 'WEB',
      url: 'https://chat-room-b3f57.web.app/'
    }
  ]
};
export default dataPage;
