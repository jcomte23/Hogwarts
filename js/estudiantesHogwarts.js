let tbody=document.querySelector("#tbody")
tbody.addEventListener("click",function (event) {
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
    id:1,
    nombre: "Javier Cómbita Téllez",
    edad: 25,
    familia: "Malfoy",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: undefined,
    cualidades: casas.Slytherin[0]
},
{
    id:2,
    nombre: "Luna Lovegood",
    edad: 16,
    familia: "Lovegood",
    linaje: casas.Ravenclaw[1],
    casa: "Ravenclaw",
    animalPatronus: "Liebre",
    cualidades: casas.Ravenclaw[0],
},
{
    id:3,
    nombre: "Cedric Diggory",
    edad: 17,
    familia: "Diggory",
    linaje: casas.Hufflepuff[1],
    casa: "Hufflepuff",
    animalPatronus: "Tejón",
    cualidades: casas.Hufflepuff[0],
},
{
    id:4,
    nombre: "Hermione Granger",
    edad: 16,
    familia: "Granger",
    linaje: casas.Gryffindor[1],
    casa: "Gryffindor",
    animalPatronus: "Nutria",
    cualidades: casas.Gryffindor[0],
},
{
    id:5,
    nombre: "Draco Malfoy",
    edad: 17,
    familia: "Malfoy",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: "Serpiente",
    cualidades: casas.Slytherin[0],
},
{
    id:6,
    nombre: "Ginny Weasley",
    edad: 15,
    familia: "Weasley",
    linaje: casas.Gryffindor[1],
    casa: "Gryffindor",
    animalPatronus: "Caballo",
    cualidades: casas.Gryffindor[0],
},
{
    id:7,
    nombre: "Nymphadora Tonks",
    edad: 22,
    familia: "Tonks",
    linaje: casas.Hufflepuff[1],
    casa: "Hufflepuff",
    animalPatronus: "Lobo",
    cualidades: casas.Hufflepuff[0],
}
]




function cargarEstudiantes() {
    
    tbody.innerHTML=""
    let cont=0
    baseEstudiantes.forEach(element => {
        const {id,nombre,familia,casa,linaje}=element
        cont++
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${cont}</th>
            <td>${nombre}</td>
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
