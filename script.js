const data = [
    {
      src: "/img/GLPI_Logo-color.png",
      title: "GLPI",
      description: "GLPI is a robust open-source IT asset management and service desk tool designed to help businesses streamline their IT infrastructure. With features like asset tracking, help desk ticketing, and powerful integrations, GLPI provides end-to-end IT management in a centralized platform."
    },
    {
      src: "/img/vaultwarden.png",
      title: "Vaultwarden",
      description: "Vaultwarden is a lightweight open-source alternative to Bitwarden for securely managing passwords. It provides full control over your data in a self-hosted environment without sacrificing performance."
    },
    {
      src: "/img/logo.svg",
      title: "Chatwoot",
      description: "Chatwoot is an open-source customer engagement platform that centralizes conversations from email, social media, and website chat into one dashboard."
    },
    {
      src: "/img/plausible-analytics.jpeg",
      title: "Plausible Analytics",
      description: "Plausible Analytics is a privacy-focused open-source alternative to Google Analytics. It offers essential web analytics insights while adhering to strict privacy regulations like GDPR."
    },
    {
      src: "/img/rocket.Chat.png",
      title: "Rocket.Chat",
      description: "Rocket.Chat is an open-source communication platform built for secure team collaboration across messaging, video calls, and file sharing."
    },
    {
      src: "/img/Dolibarr_logo.png",
      title: "Dolibarr",
      description: "Dolibarr is a versatile open-source ERP and CRM solution designed for small and medium-sized businesses. It helps manage various business functions such as accounting, inventory, customer relationships, and more."
    },
    {
      src: "/img/BigBlueButton_logo.svg.png",
      title: "BigBlueButton",
      description: "BigBlueButton is an open-source web conferencing tool tailored for online learning. It integrates seamlessly with learning management systems and offers features like real-time video, audio, screen sharing, and breakout rooms."
    },
    {
      src: "/img/nextcloudlogo.webp",
      title: "Nextcloud",
      description: "Nextcloud is an open-source platform that provides secure file sharing, collaboration, and storage services in a self-hosted environment."
    },
    {
      src: "/img/EasyAppointments.png",
      title: "EasyAppointments",
      description: "EasyAppointments is a flexible open-source scheduling solution that helps businesses manage appointments, staff availability, and client bookings."
    },
    {
      src: "/img/Snipe-IT.png",
      title: "Snipe-IT",
      description: "Snipe-IT is a powerful open-source asset management system designed to keep track of IT equipment, licenses, and warranties."
    },
    {
      src: "/img/Mautic_Logo.png",
      title: "Mautic",
      description: "Mautic is an open-source marketing automation platform that empowers businesses to streamline their digital marketing efforts including email marketing and social media."
    },
    {
      src: "/img/OpenProject.jpg",
      title: "OpenProject",
      description: "OpenProject is a leading open-source project management software designed to handle all aspects of project planning, tracking, and collaboration."
    },
    {
      src: "/img/ERPNext.png",
      title: "ERPNext",
      description: "ERPNext is an open-source ERP solution that covers all aspects of a business, including accounting, inventory, human resources, and manufacturing."
    },
    {
      src: "/img/moodlecover.jpg",
      title: "Moodle",
      description: "Moodle is a popular open-source learning management system (LMS) that provides educators with the tools to create dynamic, personalized online courses."
    },
    {
      src: "/img/jitsimeet.jpg",
      title: "Jitsi",
      description: "Jitsi is an open-source video conferencing platform that enables secure, high-quality virtual meetings."
    },
    {
      src: "/img/InvoiceNinja.png",
      title: "Invoice Ninja",
      description: "Invoice Ninja is an open-source invoicing and billing platform designed for freelancers and small businesses. It allows you to create and send professional invoices, track payments, and manage finances."
    },
    {
      src: "/img/liTop.svg",
      title: "iTop",
      description: "iTop is an open-source IT service management (ITSM) solution that helps organizations manage incidents, changes, and service requests."
    },
    {
      src: "/img/Trudesk.png",
      title: "Trudesk",
      description: "Trudesk is an open-source help desk and ticketing system that allows businesses to manage customer support tickets efficiently."
    },
    {
      src: "/img/Trilium.png",
      title: "Trilium",
      description: "Trilium is a hierarchical note-taking platform designed for structured information management, offering a robust set of features like tagging, linking, and full-text search."
    },
    {
      src: "/img/akaunting-logo-horizontal.png",
      title: "Akaunting",
      description: "Akaunting is an open-source accounting software built for small businesses and freelancers. It enables users to manage invoices, track expenses, and monitor finances effortlessly."
    },
    {
      src: "/img/listmonk.jpg",
      title: "Listmonk",
      description: "Listmonk is an open-source self-hosted newsletter and mailing list manager designed to handle mass mailing with high efficiency."
    },
    {
      src: "/img/Authentik.png",
      title: "Authentik",
      description: "Authentik is an open-source identity provider focused on making authentication and authorization simple and secure."
    },
    {
      src: "/img/Plex.jpg",
      title: "Plex",
      description: "Plex is an open-source media server that allows you to organize and stream your personal collection of movies, TV shows, music, and photos."
    },
    {
      src: "/img/SMTP-Server.png",
      title: "SMTP/E-Mail Server",
      description: "An open-source SMTP/E-Mail Server enables businesses to manage email communications securely and efficiently, whether for internal communications or email marketing."
    }
  ];
  


const cardContainer = document.querySelector(".card-container")
const wrapper1 = document.createElement('div');
wrapper1.classList.add('card-wrapper');
const wrapper2 = document.createElement('div');
wrapper2.classList.add('card-wrapper');
const wrapper3 = document.createElement('div');
wrapper3.classList.add('card-wrapper');

cardContainer.appendChild(wrapper1);
cardContainer.appendChild(wrapper2);
cardContainer.appendChild(wrapper3);


// Loop through data and append cards to appropriate wrapper
data.forEach((item, index) => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="card">
        <div class="icon">
          <img src=${item.src}>
        </div>
        <h2 class="name">${item.title}</h2>
        <p class="desc">${item.description}</p>
      </div>
    `;
    cardContainer.appendChild(card)
  
    if (index < 8) {
      wrapper1.appendChild(card); // First 8 cards
    } else if (index < 16) {
      wrapper2.appendChild(card); // Next 8 cards
    } else {
      wrapper3.appendChild(card); // Last 8 cards
    }
  });


// Carousel

const carousel = document.querySelector(".carousel")
const arrowBtn = document.querySelectorAll(".carousel-wrapper .slideBtn")
const firstCardWidth = carousel.querySelector(".card-wrapper").offsetWidth;
const carouselChildrens = [...carousel.children]

let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

carouselChildrens.slice(0 , cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

arrowBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
  })
})

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging")
  startX = e.pagex
  startScrollLeft = carousel.scrollLeft
}

const dragging = (e)=> {
  if(!isDragging) return;
  carousel.scrollLeft = e.pageX 
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging")
}

let infiniteScroll = () => {
    if(carousel.scrollLeft === 0){
      carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
      carousel.classList.remove("no-transition")
    }else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
      carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.offsetWidth
      carousel.classList.remove("no-transition")
    }
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
carousel.addEventListener("scroll", infiniteScroll)



//   var swiper = new Swiper('.card_slider', {
//     slidesPerView: 4,
//     loop: true,
//     centerSlide: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       480: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       }
//     }
// });