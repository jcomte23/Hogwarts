let tbody = document.querySelector("#tbody")
tbody.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-student")) {
        const id = event.target.getAttribute("data-id")
        eliminarEstudiante(id)
    }
})

const casas = {
    Gryffindor: ["Valor, fuerza, audacia", "Mestizo, muggle, Sangre pura"],
    Hufflepuff: ["Justicia, Lealtad, Paciencia", "Mestizo, muggle"],
    Ravenclaw: ["Creatividad, Erudición, Inteligencia", "Mestizo, muggle, Sangre pura"],
    Slytherin: ["Ambición, Determinación, Astucia", "Sangre Pura"]
}

let baseEstudiantes = [{
    id: 1,
    nombre: "Javier Cómbita Téllez",
    edad: 25,
    familia: "Malfoy",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: undefined,
    cualidades: casas.Slytherin[0]
},
{
    id: 2,
    nombre: "Luna Lovegood",
    edad: 16,
    familia: "Lovegood",
    linaje: casas.Ravenclaw[1],
    casa: "Ravenclaw",
    animalPatronus: "Liebre",
    cualidades: casas.Ravenclaw[0],
},
{
    id: 3,
    nombre: "Cedric Diggory",
    edad: 17,
    familia: "Diggory",
    linaje: casas.Hufflepuff[1],
    casa: "Hufflepuff",
    animalPatronus: "Tejón",
    cualidades: casas.Hufflepuff[0],
},
{
    id: 4,
    nombre: "Hermione Granger",
    edad: 16,
    familia: "Granger",
    linaje: casas.Gryffindor[1],
    casa: "Gryffindor",
    animalPatronus: "Nutria",
    cualidades: casas.Gryffindor[0],
},
{
    id: 5,
    nombre: "Draco Malfoy",
    edad: 17,
    familia: "Malfoy",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: "Serpiente",
    cualidades: casas.Slytherin[0],
},
{
    id: 6,
    nombre: "Ginny Weasley",
    edad: 15,
    familia: "Weasley",
    linaje: casas.Gryffindor[1],
    casa: "Gryffindor",
    animalPatronus: "Caballo",
    cualidades: casas.Gryffindor[0],
},
{
    id: 7,
    nombre: "Nymphadora Tonks",
    edad: 22,
    familia: "Tonks",
    linaje: casas.Hufflepuff[1],
    casa: "Hufflepuff",
    animalPatronus: "Lobo",
    cualidades: casas.Hufflepuff[0],
}
]

function registrarEstudiante() {
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    const familia = document.getElementById("familia")
    const casa = document.getElementById("casa")
    let linaje
    let cualidades

    switch (casa.value) {
        case "Slytherin":
            linaje = casas.Slytherin[1]
            cualidades = casas.Slytherin[0]
            break;
        case "Gryffindor":
            linaje = casas.Gryffindor[1]
            cualidades = casas.Gryffindor[0]
            break;
        case "Hufflepuff":
            linaje = casas.Hufflepuff[1]
            cualidades = casas.Hufflepuff[0]
            break;
        case "Ravenclaw":
            linaje = casas.Ravenclaw[1]
            cualidades = casas.Ravenclaw[0]
            break;
        default:
            break;
    }

    const max=(baseEstudiantes.length+1)
    let newEstudent = {
        id: max,
        nombre: nombre.value,
        edad: edad.value,
        familia: familia.value,
        linaje: linaje,
        casa: casa.value,
        animalPatronus: undefined,
        cualidades: cualidades,
    }

    baseEstudiantes.push(newEstudent)
    cargarEstudiantes()
}

function cargarEstudiantes() {

    tbody.innerHTML = ""
    let cont = 0
    baseEstudiantes.forEach(element => {
        const { id, nombre, familia, casa, edad, linaje } = element
        cont++
        tbody.innerHTML += `
        <tr>
            <th scope="row">${cont}</th>
            <td>${nombre} (${edad} años)</td>
            <td>${familia}</td>
            <td>${casa}</td>
            <td>${linaje}</td>
            <td>
                <button type="button" class="btn btn-danger delete-student" data-id="${id}">Eliminar</button>
            </td>
        </tr>
        `
    });
}


function eliminarEstudiante(id) {
    baseEstudiantes = baseEstudiantes.filter(estudiante => estudiante.id != id);

    cargarEstudiantes()
}

cargarEstudiantes()
