let baseEstudiantes = [{
    nombre: "Javier Cómbita Téllez",
    edad: 25,
    familia: "Malfoy",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: undefined,
    cualidades: casas.Slytherin[0]
},
{
    nombre: "Luna Lovegood",
    edad: 16,
    familia: "Lovegood",
    linaje: casas.Ravenclaw[1],
    casa: "Ravenclaw",
    animalPatronus: "Liebre",
    cualidades: casas.Ravenclaw[0],
},
{
    nombre: "Cedric Diggory",
    edad: 17,
    familia: "Diggory",
    linaje: casas.Hufflepuff[1],
    casa: "Hufflepuff",
    animalPatronus: "Tejón",
    cualidades: casas.Hufflepuff[0],
},
{
    nombre: "Hermione Granger",
    edad: 16,
    familia: "Granger",
    linaje: casas.Gryffindor[1],
    casa: "Gryffindor",
    animalPatronus: "Nutria",
    cualidades: casas.Gryffindor[0],
},
{
    nombre: "Draco Malfoy",
    edad: 17,
    familia: "Malfoy",
    linaje: casas.Slytherin[1],
    casa: "Slytherin",
    animalPatronus: "Serpiente",
    cualidades: casas.Slytherin[0],
},
{
    nombre: "Ginny Weasley",
    edad: 15,
    familia: "Weasley",
    linaje: casas.Gryffindor[1],
    casa: "Gryffindor",
    animalPatronus: "Caballo",
    cualidades: casas.Gryffindor[0],
},
{
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
    let tbody=document.querySelector("#tbody")
    tbody.innerHTML=""

    baseEstudiantes.forEach(element => {
        const {nombre,familia,casa,edad}=element
        tbody.innerHTML+=`
        <tr>
            <th scope="row">1</th>
            <td>${nombre}</td>
            <td>${familia}</td>
            <td>${casa}</td>
            <td>${edad}</td>
            <td>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        `
    });
}


cargarEstudiantes()
