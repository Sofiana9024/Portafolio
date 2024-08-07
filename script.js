let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Ana Sofía Rodríguez')
    .pauseFor(300)
    .deleteAll()
    .typeString('A Software Engineering Student')
    .pauseFor(300)
    .deleteAll()
    .typeString('Front-end Developer')
    .pauseFor(300)
    .deleteAll()
    .typeString('Coder in development')
    .pauseFor(1000)
    .start();

// Selecciona todas las tarjetas
const proyectos = document.querySelectorAll('.proyecto');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.2}s`; // retraso
            entry.target.classList.add('visible'); 
        }
    });
});

proyectos.forEach(proyecto => {
    observer.observe(proyecto);
});