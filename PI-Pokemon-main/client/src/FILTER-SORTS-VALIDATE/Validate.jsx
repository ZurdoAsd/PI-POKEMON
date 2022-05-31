

 export default function validate(input) {
    let error = {};
    if (!input.name) {
        error.name = "Este campo es obligatorio";
    }
    if (input.height < 0 || input.height >= 15) {
        error.height = "La altura debe ser un número entre 0 y 15 m";
    }
    if(input.weight < 0 || input.weight > 2000){
        error.weight = "El peso debe ser estar entre 0 y 2.000 kg";
    }
    if(input.hp < 0 || input.hp > 100 ){
        error.hp = "la vida debe ser entre 0 y 100 de HP";
    }
    if(input.speed < 0 || input.speed > 200){
        error.speed = "La velocidad debe ser entre 0 y 200";
    }
    if(input.attack < 0 || input.attack > 100 ){
        error.attack = "La fuerza debe ser entre 0 y 100";
    }
    if(input.defense < 0 || input.defense > 100 ){
        error.defense = "La defensa debe ser entre 0 y 100";
    }

    if(input.types.length>=3){
        error.types = "puedes seleccionar hasta 3";
    }
    return error;
}
    