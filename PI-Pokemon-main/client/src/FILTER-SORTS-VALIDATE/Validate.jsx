export default function validate(input) {
  let error = {};
  if (!input.name) {
    error.name = "Este campo es obligatorio";
  }
  if (input.height < 0 || input.height > 15) {
    error.height = "La altura debe ser un número entre 0 y 15 m";
  }
  if (!input.height) {
    error.height = "Este campo es obligatorio";
  }
  if (input.weight < 0 || input.weight > 2000) {
    error.weight = "El peso debe ser estar entre 0 y 2.000 kg";
  }
  if (!input.weight) {
    error.weight = "Este campo es obligatorio";
  }
  if (input.hp < 0 || input.hp > 100) {
    error.hp = "la vida debe ser entre 0 y 100 de HP";
  }
  if (!input.hp) {
    error.hp = "Este campo es obligatorio";
  }
  if (input.speed < 0 || input.speed > 200) {
    error.speed = "La velocidad debe ser entre 0 y 200";
  }
  if (!input.speed) {
    error.speed = "Este campo es obligatorio";
  }
  if (input.attack < 0 || input.attack > 100) {
    error.attack = "La fuerza debe ser entre 0 y 100";
  }
  if (!input.attack) {
    error.attack = "Este campo es obligatorio";
  }

  if (input.defense < 0 || input.defense > 100) {
    error.defense = "La defensa debe ser entre 0 y 100";
  }
  if (!input.defense) {
    error.defense = "Este campo es obligatorio";
  }
  if (input.types.length > 4) {
    error.types = "puedes seleccionar hasta 3";
  }
  return error;
}
