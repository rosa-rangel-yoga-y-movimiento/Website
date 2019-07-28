var sessionIndex = localStorage.getItem("index");

function plusSession(n) {
  showSession(sessionIndex += n);
}

window.onload = function() {
  showSession(sessionIndex);
}

function showSession(n) {
  var i;
  var session = document.getElementById('headerImg');
  var sessionTitle = document.getElementById('sessionTitle');
  var sessionDescription = document.getElementById('sessionDescription');
  var sessionsBenefits = document.getElementById('benefitsList');
  if (n > 3) {sessionIndex = 1}
  if (n < 1) {sessionIndex = 3}
  if (sessionIndex == 1) {
    console.log("1 p");
    document.title = "Sesiones - Yoga Restaurativa";
    session.style.backgroundImage = "url('Images/YogaResta.jpg')";
    sessionTitle.innerHTML = "Sesión Personalizada de Yoga Restaurativa";
    sessionDescription.innerHTML = "Sesiones de una hora de  yoga para restaurar los sistemas del cuerpo. Se liberan contracturas, tensión y se maneja el dolor crónico. A través de las posturas de yoga con apoyo y asistencia permites al cuerpo descansar, soltar y fluir. <br>Para personas con lesiones o con algún problema de salud crónico que les impiden tomar una clase de yoga convencional o que han atravesado por un proceso quirúrgico.";
    sessionsBenefits.innerHTML = "";
    var benefitsList = ["Generar claridad mental", "Elimina la tensión muscular", "Apoya en la recuperación  de salud", "Recupera Movilidad", "Desarrolla conciencia corporal", "Equilibra sistema nervioso", "Desarrolla conciencia somática", "Mayor contacto con las emociones", "Genera tranquilidad y descanso", "Apoya el buen funcionamiento del sistema inmunológico"];
    benefitsList.forEach((text)=>{
      var li = document.createElement('li');
      li.innerHTML = text;
      sessionsBenefits.append(li);
    });
  } else if (sessionIndex == 2) {
    console.log("2 p");
    document.title = "Sesiones - Yoga Grupal";
    session.style.backgroundImage = "url('Images/YogaGroup.jpg')";
    sessionTitle.innerHTML = "Sesión de Yoga Restaurativa en Grupo";
    sessionDescription.innerHTML = "El conocimiento de la estructura de sostén del cuerpo en 6 sesiones restaurativas, una mensual, para sentir sin dolor  y  liberar articulaciones.<br>Las articulaciones son las estructuras anatómicas en las que se unen dos huesos, cada articulación del cuerpo tiene un determinado grado de movimiento. Las articulaciones son como estaciones por donde fluye , o no, la energía del cuerpo. Entre más manteniemiento les proporciones,  moviéndolas en  forma consciente, más duración tendrán y mejor funcionarán.<br>Durante la sesión exploramos los espacios articulares despertando la consciencia corporal a través del movimiento y la respiración";
    sessionsBenefits.innerHTML = "";
    var benefitsList = ["Mayor libertad de movimiento", "Comodidad y ligereza  al desplazarse", "Mayor libertad de expresión", "Libera tensión", "Mejora la capacidad de arraigo a la tierra"];
    benefitsList.forEach((text)=>{
      var li = document.createElement('li');
      li.innerHTML = text;
      sessionsBenefits.append(li);
    });
  } else {
    console.log("3 p");
    document.title = "Sesiones - Taller de Respiración";
    session.style.backgroundImage = "url('Images/Respirar.jpg')";
    sessionTitle.innerHTML = "Taller de Respiración";
    sessionDescription.innerHTML = "Sesión de una hora para desarrollar la consciencia respiratoria. Entras en contacto con tu respiración para descubrir y transformar  los hábitos respiratorios que no son funcionales y que te alejan de la salud física y mental. Explorarás  tu territorio corporal para conectar con el flujo energético de tu respiración.<br>Genera estado de tranquilidad, apoya el manejo de la ansiedad y permite que tu cuerpo descanse a través de la consciencia respiratoria.<br>Cuando atiendes tu respiración, la mente y el cuerpo se calman liberando la tensión.<br>Ideal para personas que llevan algún tratamiento médico, están en terapia psicológica o están en ansiedad. Esta sesión es una forma de acompañarse para conocerse mejor y lograr procesos de salud exitosos.";
    sessionsBenefits.innerHTML = "";
    var benefitsList = ["Autoconocimiento", "Generar tranquilidad", "Mejora la circulación y el flujo energético", "Libera el estrés", "Apoya a regular la presión arterial", "Mejor manejo emocional"];
    benefitsList.forEach((text)=>{
      var li = document.createElement('li');
      li.innerHTML = text;
      sessionsBenefits.append(li);
    });
  }
}
