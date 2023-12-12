document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("hogwarts_video");
    let toggleAudioButton = document.getElementById("toggleAudio");

    toggleAudioButton.addEventListener("click", function () {
        video.muted = !video.muted;
        if (video.muted) {
            toggleAudioButton.classList.remove("bi-volume-up-fill");
            toggleAudioButton.classList.add("bi-volume-mute-fill");
        }else{
            toggleAudioButton.classList.remove("bi-volume-mute-fill");
            toggleAudioButton.classList.add("bi-volume-up-fill");
        }
    });
});

// PASO 3
const casas = {
    gryffindor: ["Valor, fuerza, audacia", "Mestizo, muggle, Sangre pura"],
    Hufflepuff: ["Justicia, Lealtad, Paciencia", "Mestizo, muggle"],
    Ravenclaw: ["Creatividad, Erudición, Inteligencia", "Mestizo, muggle, Sangre pura"],
    Slytherin: ["Ambición, Determinación, Astucia", "Sangre Pura"]
}

const patronusAnimals = [
    'Ciervo',
    'Liebre',
    'Nutria',
    'Zorro plateado',
    'Gato',
    'Lechuza',
    'Tejón',
    'Lince',
    'Tigre',
    'Halcón',
    'Lobo',
    'Mapache',
    'Golondrina',
    'León',
    'Cisne',
    'Delfín',
    'Águila',
    'Zorro',
    'Cervatillo',
    'Foca',
    'Caballo',
    'Conejo',
    'Murciélago',
    'Coyote',
    'Búho',
    'Orca',
    'Pájaro Carpintero',
    'Caballo Alado',
    'Pez',
    'Erizo',
    'Rata',
    'Jabalí',
    'Galgo',
    'Castor',
    'Chotacabras',
    'Gavilán',
    'Jaguar',
    'Gran Danés',
    'Cerdo',
    'Elefante',
    'Lirones',
    'Picaflor',
    'Pez Espada',
    'Sapo',
    'Serpiente',
    'Turón',
    'Leopardo',
    'Pegaso',
    'Potro',
    'Zarigüeya',
    'Oso',
    'Nightingale',
    'Hormiga',
    'Basset Hound',
    'Búho Nival',
    'Nutria de Mar',
    'Doe (cierva)',
    'Hare (liebre)',
    'Glow Worm (luciérnaga)',
];


// PASO 1
const estudiante = {
    nombre: "Javier Cómbita Téllez",
    edad: 25,
    familia: "Malfoy ",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: undefined,
    cualidades: casas.Slytherin[0]
}

// PASO 2
const clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
}


// PASO 4
const claseTransformaciones = {
    nombreProfesor: clases.transformaciones,
    horario: "8:00-10:00",
    enfrentarBoggart: function (boggart) {
        if (boggart !== null) {
            this.realizarTransformacionRiddikulus(boggart)
        }
    },
    realizarTransformacionRiddikulus: function (boggart) {
        console.log("bogart original =>", boggart)
        console.log("Riddikulus")
        console.log("bogart transformado =>", boggart.replace(/[aeou]/g, "i"))
    },

}

const clasePosiones = {
    nombreProfesor: clases.pociones,
    horario: "6:00-8:00",
    prepararPosion: function (nombre, ingredientes, tiempo) {
        if (tiempo === 5) {
            console.log("la posion se preparo correctamente");
        } else {
            console.log("la posion salio mal y se quemo las pestañas");
            let temp = clases.pociones
            clases.pociones = clases.animalesMagicos
            clases.animalesMagicos = temp
        }
    }
}

clasePosiones.prepararPosion("Feliz felicis",["2 crisopos","1 tallo de descurainia sophia"],5)



// PASO 5
const defensaContraLasArtesOscuras = {
    generalAnimalPatronus: function () {
        return patronusAnimals[Math.floor(Math.random() * patronusAnimals.length)]
    }
}

estudiante.animalPatronus = defensaContraLasArtesOscuras.generalAnimalPatronus()
const boggartEjemplo = {
    enfrentamiento: claseTransformaciones.enfrentarBoggart("dementor")
}
console.log(estudiante);
console.log(boggartEjemplo)














