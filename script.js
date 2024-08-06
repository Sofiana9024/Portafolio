let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('A Software Engineering Student')
    .pauseFor(300)
    .deleteAll()
    .typeString('Programming Prodigy in Progress')
    .pauseFor(300)
    .deleteChars(19)
    .typeString('Newbie in Progress')
    .pauseFor(1000)
    .start();