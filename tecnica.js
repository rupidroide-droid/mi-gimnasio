
/* MI GIMNASIO · Fichas de técnica · v1
   Módulo independiente. No modifica datos guardados. */

const FICHAS_TECNICA = {
  "Sentadilla o prensa": {
    musculos: "Cuádriceps, glúteos y aductores",
    pasos: [
      "Sentadilla: pies aproximadamente al ancho de los hombros.",
      "Flexiona caderas y rodillas manteniendo el apoyo del pie.",
      "Prensa: ajusta el asiento y mantén la espalda apoyada.",
      "Empuja de forma controlada, sin despegar la pelvis del respaldo."
    ],
    errores: "Rodillas que colapsan hacia dentro, levantar los talones o perder el control del descenso.",
    nota: "La sentadilla y la prensa son alternativas diferentes. Sigue la técnica de la que hayas elegido."
  },
  "Press de banca": {
    musculos: "Pectoral mayor, tríceps y deltoides anterior",
    pasos: [
      "Túmbate con los pies firmes y los glúteos apoyados.",
      "Sujeta la barra con un agarre cómodo, normalmente algo más ancho que los hombros.",
      "Desciende de forma controlada hacia la zona media o inferior del pecho.",
      "Empuja hasta extender los brazos sin perder estabilidad."
    ],
    errores: "Rebotar la barra, despegar los glúteos o perder el control de la trayectoria.",
    nota: "Utiliza soportes de seguridad o ayuda de otra persona cuando corresponda."
  },
  "Jalón al pecho": {
    musculos: "Dorsal ancho, parte superior de la espalda y bíceps",
    pasos: [
      "Ajusta el apoyo de los muslos.",
      "Inicia el movimiento bajando los hombros y llevando los codos hacia abajo.",
      "Acerca la barra a la parte superior del pecho sin inclinarte excesivamente.",
      "Regresa lentamente a la posición inicial."
    ],
    errores: "Tirar detrás de la nuca, balancearse o utilizar demasiado impulso."
  },
  "Peso muerto rumano": {
    musculos: "Isquiotibiales, glúteos y musculatura estabilizadora",
    pasos: [
      "Colócate de pie con una ligera flexión de rodillas.",
      "Lleva la cadera hacia atrás mientras mantienes la carga cerca del cuerpo.",
      "Desciende hasta donde puedas conservar una espalda estable.",
      "Extiende la cadera para volver a levantarte."
    ],
    errores: "Redondear la espalda, alejar la carga o convertirlo en una sentadilla."
  },
  "Plancha abdominal": {
    musculos: "Abdominales y estabilizadores del tronco",
    pasos: [
      "Apoya los antebrazos debajo de los hombros.",
      "Mantén cabeza, tronco y piernas alineados.",
      "Activa abdomen y glúteos mientras respiras normalmente.",
      "Termina la serie cuando no puedas mantener la postura."
    ],
    errores: "Hundir la zona lumbar, elevar demasiado la cadera o contener la respiración."
  },
  "Cinta o bicicleta": {
    musculos: "Sistema cardiovascular y musculatura de las piernas",
    pasos: [
      "Comienza con intensidad suave.",
      "Mantén un ritmo que te permita hablar.",
      "Ajusta la velocidad o resistencia según tus sensaciones.",
      "Reduce progresivamente el ritmo al finalizar."
    ],
    errores: "Comenzar demasiado rápido o mantener una postura incómoda."
  },
  "Press de hombros": {
    musculos: "Deltoides y tríceps",
    pasos: [
      "Coloca las manos aproximadamente a la anchura de los hombros.",
      "Mantén el abdomen activo y el tronco estable.",
      "Empuja la carga hacia arriba con un recorrido cómodo.",
      "Desciende lentamente."
    ],
    errores: "Arquear excesivamente la zona lumbar o utilizar impulso con el tronco."
  },
  "Remo sentado": {
    musculos: "Dorsales, romboides, trapecio y bíceps",
    pasos: [
      "Siéntate con los pies apoyados y el tronco estable.",
      "Lleva el agarre hacia el abdomen acercando los codos al cuerpo.",
      "Controla el movimiento de los omóplatos.",
      "Extiende los brazos sin perder el control."
    ],
    errores: "Balancear excesivamente el tronco o encoger los hombros."
  },
  "Zancadas": {
    musculos: "Cuádriceps, glúteos y estabilizadores",
    pasos: [
      "Da un paso con una separación que permita mantener el equilibrio.",
      "Flexiona ambas rodillas de forma controlada.",
      "Mantén el tronco estable y el pie delantero apoyado.",
      "Empuja con la pierna delantera para regresar."
    ],
    errores: "Perder el equilibrio, desplazar la rodilla hacia dentro o apresurar las repeticiones."
  },
  "Curl de bíceps": {
    musculos: "Bíceps braquial y braquial",
    pasos: [
      "Mantén los codos próximos al tronco.",
      "Flexiona los codos sin balancear el cuerpo.",
      "Sube la carga de manera controlada.",
      "Desciende lentamente."
    ],
    errores: "Impulsar el peso con la espalda o mover demasiado los hombros."
  },
  "Extensión de tríceps": {
    musculos: "Tríceps braquial",
    pasos: [
      "Colócate estable frente a la polea.",
      "Mantén los codos próximos al cuerpo.",
      "Extiende los codos de forma controlada.",
      "Regresa sin perder la postura."
    ],
    errores: "Balancear el tronco o mover los hombros para impulsar la carga.",
    nota: "Esta ficha corresponde a la extensión de tríceps en polea."
  },
  "Prensa o sentadilla goblet": {
    musculos: "Cuádriceps y glúteos",
    pasos: [
      "Prensa: ajusta el asiento y apoya toda la planta de los pies.",
      "Flexiona las rodillas dentro de un recorrido controlado.",
      "Goblet: sujeta una mancuerna cerca del pecho.",
      "Desciende en sentadilla manteniendo el tronco estable y vuelve a subir."
    ],
    errores: "Perder el apoyo de los pies, redondear la espalda o forzar la profundidad.",
    nota: "Selecciona las instrucciones correspondientes a la variante que realices."
  },
  "Press inclinado con mancuernas": {
    musculos: "Pectoral mayor, deltoides anterior y tríceps",
    pasos: [
      "Ajusta el banco con una inclinación moderada.",
      "Apoya espalda, glúteos y pies.",
      "Desciende las mancuernas de forma controlada.",
      "Empuja hacia arriba manteniendo las muñecas estables."
    ],
    errores: "Utilizar una inclinación excesiva o perder el control de las mancuernas."
  },
  "Remo con apoyo de pecho": {
    musculos: "Dorsales, romboides, trapecio y bíceps",
    pasos: [
      "Apoya el pecho en el banco o soporte.",
      "Tira de los agarres llevando los codos hacia atrás.",
      "Mantén el pecho apoyado durante el recorrido.",
      "Regresa lentamente."
    ],
    errores: "Despegar el pecho o elevar los hombros excesivamente."
  },
  "Hip thrust": {
    musculos: "Glúteo mayor",
    pasos: [
      "Apoya la parte superior de la espalda en un banco estable.",
      "Coloca los pies de forma que puedas empujar con seguridad.",
      "Eleva la cadera contrayendo los glúteos.",
      "Desciende de forma controlada."
    ],
    errores: "Hiperextender la zona lumbar o empujar con una posición inestable."
  },
  "Elevaciones laterales": {
    musculos: "Deltoides lateral",
    pasos: [
      "Sujeta las mancuernas a los lados.",
      "Eleva los brazos lateralmente con una ligera flexión de codos.",
      "Llega aproximadamente hasta la altura de los hombros si resulta cómodo.",
      "Desciende lentamente."
    ],
    errores: "Balancear el tronco o encoger los hombros."
  },
  "Dead bug": {
    musculos: "Abdominales y estabilizadores del tronco",
    pasos: [
      "Túmbate boca arriba con brazos elevados y caderas y rodillas flexionadas.",
      "Activa el abdomen y mantén estable la zona lumbar.",
      "Extiende lentamente un brazo y la pierna contraria.",
      "Regresa y alterna los lados."
    ],
    errores: "Arquear la espalda o mover las extremidades demasiado rápido."
  }
};

function abrirTecnica(nombre) {
  const ficha = FICHAS_TECNICA[nombre];
  if (!ficha) return;

  cerrarTecnica();

  const fondo = document.createElement("div");
  fondo.id = "fondo-tecnica";
  fondo.setAttribute("role", "presentation");
  fondo.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    background:rgba(0,0,0,.78);
    display:flex;align-items:flex-end;
    justify-content:center;
  `;

  const panel = document.createElement("section");
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-label", "Técnica de " + nombre);
  panel.style.cssText = `
    width:100%;max-width:720px;max-height:90dvh;
    overflow:auto;background:#101b18;color:white;
    border-radius:22px 22px 0 0;
    padding:22px 18px calc(25px + env(safe-area-inset-bottom));
  `;

  const titulo = document.createElement("h2");
  titulo.textContent = nombre;
  titulo.style.color = "#80ff32";
  panel.appendChild(titulo);

  const musculos = document.createElement("p");
  musculos.textContent = "Músculos: " + ficha.musculos;
  panel.appendChild(musculos);

  const subtitulo = document.createElement("h3");
  subtitulo.textContent = "Ejecución paso a paso";
  panel.appendChild(subtitulo);

  const lista = document.createElement("ol");
  lista.style.lineHeight = "1.7";
  ficha.pasos.forEach(paso => {
    const li = document.createElement("li");
    li.textContent = paso;
    lista.appendChild(li);
  });
  panel.appendChild(lista);

  const errores = document.createElement("p");
  const negrita = document.createElement("strong");
  negrita.textContent = "Evita: ";
  errores.appendChild(negrita);
  errores.appendChild(document.createTextNode(ficha.errores));
  panel.appendChild(errores);

  if (ficha.nota) {
    const nota = document.createElement("p");
    nota.textContent = ficha.nota;
    nota.style.cssText = "color:#cbd5e1;font-size:14px";
    panel.appendChild(nota);
  }

  const aviso = document.createElement("p");
  aviso.textContent =
    "Guía orientativa. Detén el ejercicio si aparece dolor o mareo.";
  aviso.style.cssText = "color:#a8b6ad;font-size:13px";
  panel.appendChild(aviso);

  const cerrar = document.createElement("button");
  cerrar.textContent = "Cerrar ficha y volver al entrenamiento";
  cerrar.style.cssText = `
    display:block;width:100%;margin-top:20px;
    background:#72db29;color:#102015;
  `;
  cerrar.onclick = cerrarTecnica;
  panel.appendChild(cerrar);

  fondo.appendChild(panel);
  fondo.addEventListener("click", e => {
    if (e.target === fondo) cerrarTecnica();
  });
  document.body.appendChild(fondo);
  cerrar.focus();
}

function cerrarTecnica() {
  document.getElementById("fondo-tecnica")?.remove();
}

document.addEventListener("click", e => {
  const boton = e.target.closest("[data-tecnica]");
  if (boton) abrirTecnica(boton.dataset.tecnica);
});
