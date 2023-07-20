let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de Física-Matemáticas y principiante en el desarrollo web.')
  .pauseFor(200)
  .deleteChars(73)
  .typeString('<strong><span style="color: purple;"> ¡Bienvenidas y bienvenidos a mi portafolio web! </span></strong>')
  .start();

