// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar transparente ao rolar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-item, .project-card, .about-content');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Adicionar projetos dinamicamente
const projectsData = [
    {
        title: "Projeto 1",
        description: "Descrição do projeto incrível que você desenvolveu.",
        image: "https://via.placeholder.com/300x200",
        github: "#",
        live: "#"
    },
    {
        title: "Projeto 2",
        description: "Outro projeto fantástico com tecnologias modernas.",
        image: "https://via.placeholder.com/300x200",
        github: "#",
        live: "#"
    },
    {
        title: "Projeto 3",
        description: "Mais um projeto que demonstra suas habilidades.",
        image: "https://via.placeholder.com/300x200",
        github: "#",
        live: "#"
    }
];

const skillsData = [
    {
        icon: "fab fa-html5",
        name: "HTML5",
        description: "Estruturação semântica"
    },
    {
        icon: "fab fa-css3-alt",
        name: "CSS3",
        description: "Estilização e responsividade"
    },
    {
        icon: "fab fa-js-square",
        name: "JavaScript",
        description: "Programação dinâmica"
    },
    {
        icon: "fab fa-react",
        name: "React",
        description: "Desenvolvimento de interfaces"
    },
    {
        icon: "fab fa-node-js",
        name: "Node.js",
        description: "Backend e APIs"
    },
    {
        icon: "fas fa-database",
        name: "Banco de Dados",
        description: "MySQL, MongoDB"
    }
];

// Renderizar projetos
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">GitHub</a>
                    <a href="${project.live}" target="_blank">Ver Projeto</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar habilidades
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = skillsData.map(skill => `
        <div class="skill-item">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        </div>
    `).join('');
}

// Inicializar conteúdo
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
});