import { Component } from '@angular/core';

interface Project {
  href: string;
  imgSrc: string;
  imgAlt: string;
  year: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string | null;
  hoverVar: string;
}

interface HoverState {
  [key: string]: boolean;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      href: 'https://molokai-ic.com/',
      imgSrc: '../../../../assets/img/molokai__SS.png',
      imgAlt: 'molokai',
      year: '2024',
      title: 'MOLOKAI: Custom WebSite Theme, CPT, ACF and Blocks ',
      description:
        'Custom website theme development with Custom Post Types (CPT), Advanced Custom Fields (ACF) and custom Gutenberg Blocks',
      technologies: [
        'FSE',
        'ACF',
        'CPT',
        'PHP',
        'CSS',
        'JS',
        'HTML',
        'MYSQL',
        'WP',
      ],
      githubLink: null,
      hoverVar: 'molokai',
    },
    {
      href: 'https://flexupverse.com/',
      imgSrc: '../../../../assets/img/flexup__SS.png',
      imgAlt: 'flex up',
      year: '2024',
      title: 'FLEX UP: Custom WebSite, E-commerce and Circuly integration',
      description:
        'Tailored website design, custom e-commerce functionalities and UX, and seamless integration with Circuly.',
      technologies: [
        'FSE',
        'PHP',
        'CSS',
        'JS',
        'HTML',
        'WP',
        'API'
      ],
      githubLink: null,
      hoverVar: 'flexup',
    },
    {
      href: 'https://funseam.com/',
      imgSrc: '../../../../assets/img/funseam__SS.png',
      imgAlt: 'funseam',
      year: '2024',
      title: 'FUNSEAM: New Backend Functionalities',
      description:
        'Implemantation of a new backend functionality enabling the management of mysql database data through Excel sheets',
      technologies: [
        'EXCEL',
        'PHP',
        'MYSQL',
        'CSS',
        'HTML',
        'JS',
      ],
      githubLink: null,
      hoverVar: 'funseam',
    },
    {
      href: 'https://mallorcatransferspellicer.com/',
      imgSrc: '../../../../assets/img/mallorcaTransfer__SS.jpg',
      imgAlt: 'TRANSFER PELLICER',
      year: '2024',
      title: 'TRANSFER PELLLICER: Custom TPV Development',
      description:
        'Development of a custom TPV Redsys Payment solution, including its integration and implementation.',
      technologies: [
        'API',
        'PHP',
        'MYSQL',
        'CSS',
        'HTML',
        'JS',
        'WP',
      ],
      githubLink: null,
      hoverVar: 'transferPellicer',
    },
    {
      href: 'https://lineupfuerteventura.com/',
      imgSrc: '../../../../assets/img/lineup__SS.webp',
      imgAlt: 'line up fuerteventura',
      year: '2024',
      title: 'LINE UP: SEO Audit & Web Optimization',
      description:
        'Comprehensive SEO web audit followed by corrective measures and enhancements for optimized performance.',
      technologies: [
        'WPBAKERY',
        'PHP',
        'CSS',
        'HTML',
        'JS',
        'WP',
      ],
      githubLink: null,
      hoverVar: 'lineup',
    },
    {
      href: 'https://romu.es/',
      imgSrc: '../../../../assets/img/romu__SS.png',
      imgAlt: 'romu',
      year: '2024',
      title: 'ROMU: Web Restyling',
      description:
        'Fully redesigned website with integrated e-commerce and custom functionalities.',
      technologies: [
        'DIVI',
        'PHP',
        'CSS',
        'JS',
        'HTML',
        'WP',
      ],
      githubLink: null,
      hoverVar: 'romu',
    },
    {
      href: 'https://www.autocareslevante.com/',
      imgSrc: '../../../../assets/img/autocaresLevante__SS.png',
      imgAlt: 'autocares levante',
      year: '2024',
      title: 'AUTOCARES LEVANTE: Code auditing and debugging services.',
      description:
        'Code auditing and debugging services for a transfer booking platform and their custom whiteframe',
      technologies: [
        'JS',
        'PHP',
        'MYSQL',
        'CSS',
        'HTML',
        'WP',
      ],
      githubLink: null,
      hoverVar: 'autocaresLevante',
    },
    {
      href: 'https://gopaddlesurf.vercel.app/',
      imgSrc: '../../../../assets/img/gopaddlesurf_headless__SS.jpeg',
      imgAlt: 'go paddle surf',
      year: '2024',
      title: 'IN-PROGRESS! Nextjs Headless WP',
      description:
        'This project is a Next.js and TypeScript web app using a headless WordPress CMS. It integrates with the Brevo API for email marketing, employs React Hook Form for form handling, and ensures code quality with ESLint, Prettier, and Husky. The stack provides a scalable and maintainable solution for a high-performance web application.',
      technologies: [
        'TypeScript',
        'NEXTJS',
        'REACT HOOKS',
        'SCSS',
        'HTML',
        'HEADLESS',
        'WP',
      ],
      githubLink: null,
      hoverVar: 'goPaddleNext',
    },
    {
      href: 'https://restoldev.github.io/multi-step-form-ng-app',
      imgSrc: '../../../../assets/img/MultiStepForm_SS.png',
      imgAlt: 'multi step form',
      year: '2023',
      title: 'Multi Step Form',
      description:
        'Multi-step form project using Angular Material and Reactive Forms. Rewarding experience managing the complexity of the form across multiple steps, ensuring smooth navigation between steps and maintaining form state.',
      technologies: [
        'TypeScript',
        'ANGULAR',
        'SPA',
        'NG MATERIAL',
        'SCSS',
        'HTML',
        'ReactiveForms',
      ],
      githubLink: 'https://github.com/restoldev/multi-step-form-ng-app',
      hoverVar: 'multiStepForm',
    },
    {
      href: 'https://restoldev.github.io/rest-countries-api/',
      imgSrc: '../../../../assets/img/RestCountriesApi_SS.png',
      imgAlt: 'rest country api app',
      year: '2023',
      title: 'Rest Countries Api',
      description:
        'App that provides comprehensive information about all countries. It was built following the BEM methodology for styling. Project that involved accessing a REST API to retrieve data at various levels of depth.',
      technologies: ['TypeScript', 'ANGULAR', 'SCSS', 'HTML', 'API', 'SPA'],
      githubLink: 'https://github.com/restoldev/rest-countries-api',
      hoverVar: 'RestCountriesApi',
    },
    {
      href: 'https://restoldev.github.io/ip-address-tracker-master/',
      imgSrc: '../../../../assets/img/IpAddressTrack_SS.jpg',
      imgAlt: 'ip address tracking',
      year: '2023',
      title: 'Ip Address Tracker',
      description:
        'IP Address Tracking app that use four different APIs working together to track an IP address or domain.',
      technologies: ['JavaScript', 'SCSS', 'HTML', 'API'],
      githubLink: 'https://github.com/restoldev/ip-address-tracker-master',
      hoverVar: 'IpAddressTracker',
    },
    {
      href: 'https://restoldev.github.io/advice-generator-app-main/',
      imgSrc: '../../../../assets/img/AdviceGenerator_SS.jpg',
      imgAlt: 'advice generator app',
      year: '2023',
      title: 'Advice Generator',
      description:
        'App that generate a new piece of advice by clicking the dice icon. The app interact with 3rd-party APIs (Advice Slip API) to generate random quotes of advice.',
      technologies: ['JavaScript', 'SCSS', 'HTML', 'API'],
      githubLink: 'https://github.com/restoldev/advice-generator-app-main',
      hoverVar: 'AdviceGenerator',
    },
    {
      href: 'https://www.timetrackng.ramonestol.com/',
      imgSrc: '../../../../assets/img/timetrackng_SS.jpg',
      imgAlt: 'timetrackng.ramonestol.com',
      year: '2023',
      title: 'TIMETRACK - ANGULAR',
      description: 'The Ng version of my TimeTrack stands as a significantly more robust project, making the development process even more rewarding and enriching. It features custom pipes, services, and some testing.',
      technologies: ['TypeScript', 'SCSS', 'HTML', 'Karma', 'SPA', 'Jasmin'],
      githubLink: 'https://github.com/restoldev/time-track-ng-app',
      hoverVar: 'TimeTrackNg'
    },
    {
      href: 'https://www.timetrack.ramonestol.com/',
      imgSrc: '../../../../assets/img/timetrack__SS.jpg',
      imgAlt: 'timetrack.ramonestol.com',
      year: '2023',
      title: 'TIMETRACK - JS NATIVE',
      description:
        'Time Tracker build using JS native with JS Date Objects, JS Classes and Web Storage API.',
      technologies: ['JavaScript', 'SPA', 'SCSS', 'HTML'],
      githubLink: 'https://github.com/restoldev/TimeTrack-app',
      hoverVar: 'TimeTrack',
    },
    {
      href: 'https://www.ramonestol.com/',
      imgSrc: '../../../../assets/img/ramonestol_SS.jpg',
      imgAlt: 'ramonestol.com',
      year: '2023',
      title: 'PORTOFOLIO',
      description:
        'First version of my Personal Portfolio. Designed and build from scratch using Angular.',
      technologies: ['Angular', 'SCSS', 'HTML', 'Typescript'],
      githubLink: 'https://github.com/restoldev/myportofolio',
      hoverVar: 'Portofolio',
    },
    {
      href: 'https://github.com/restoldev/Netflix_app',
      imgSrc: '../../../../assets/img/netflixCloned_SS.jpg',
      imgAlt: 'netflix clone',
      year: '2023',
      title: 'NETFLIX CLONE',
      description:
        "Cloning Netflix's landing and login pages, implementing JavaScript for instant form validation.",
      technologies: ['HTML', 'JavaScript', 'SCSS'],
      githubLink: 'https://github.com/restoldev/Netflix_app',
      hoverVar: 'Netflix',
    },
    {
      href: 'https://www.bolocas.com/',
      imgSrc: '../../../../assets/img/bolocas_SS.jpg',
      imgAlt: 'bolocas.com',
      year: '2022',
      title: 'BOLOCAS',
      description: 'Adapted WordPress theme for a new sustainable swimwear brand. Created and maintained by me.',
      technologies: ['Wordpress', 'Elementor', 'PHP', 'WooCommerce', 'CSS'],
      githubLink: null,
      hoverVar: 'Bolocas'
    },
    {
      href: "https://www.anandasurf.com/",
      imgSrc: "../../../../assets/img/anandasurf_SS.png",
      imgAlt: "anandasurf.com",
      year: "2019",
      title: "ANANDA SURF",
      description: "Modified Wordpress theme for a Surf & Yoga travel recommendations and guides blog. Created and maintained by me.",
      technologies: ["Wordpress", "WPBakery", "CSS", "CaptureOne Pro"],
      githubLink: null,
      hoverVar: "Ananda"
    },
    {
      href: "https://www.gopaddlesurf.com/",
      imgSrc: "../../../../assets/img/gopaddlesurf_SS.jpg",
      imgAlt: "gopaddlesurf.com",
      year: "2017",
      title: "GO PADDLE SURF",
      description: "Modified Wordpress theme for a Stand Up Paddle equipment recommendations blog with affiliates program. Created and maintained by me.",
      technologies: ["Wordpress", "Thrive Architect", "CSS", "Photoshop"],
      githubLink: null,
      hoverVar: "GoPaddle"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100089945444196",
      imgSrc: "../../../../assets/img/reypatricio_SS.jpg",
      imgAlt: "hotel el rey patricio",
      year: "2012",
      title: "HOTEL EL REY PATRICIO",
      description: "Developed a website featuring a reservation system and an administration panel tailored for a beachfront hotel and restaurant. The project is currently in an inactive state.",
      technologies: ["DreamWeaver", "HTML", "CSS", "MYSQL", "JQUERY", "PHP"],
      githubLink: null,
      hoverVar: "ReyPatricio"
    }
  ];

  isHover: HoverState = {
    GitHub: false,
    Portofolio: false,
    Netflix: false,
    Bolocas: false,
    Ananda: false,
    GoPaddle: false,
    ReyPatricio: false,
    TimeTrack: false,
    TimeTrackNg: false,
    IpAddressTracker: false,
    AdviceGenerator: false,
    RestCountriesApi: false,
    multiStepForm: false,
    goPaddleNext: false,
    romu:false,
    lineup:false,
    molokai:false,
    flexup:false,
    funseam:false,
    autocaresLevante:false,
    transferPellicer:false
  };

  constructor() {}
}
