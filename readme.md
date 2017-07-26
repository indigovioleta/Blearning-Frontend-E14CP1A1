<section>

# Actividad Presencial 1 de Jquery.

https://github.com/DesafioLatam/Blearning-Frontend-E14CP1A1

## Ejercicios de repaso de javascript y jquery

Para realizar estos ejercicios escribir dentro de un archivo .md

- ¿Cuál es el error?

	~~~js
	var calcularIMC = function(peso, estatura){
			return peso / (estatura * estatura);
		};

		var interpretarIMC = function(peso, estatura){
			var imc = calcularIMC(peso, estatura);
			if (imc > 24){
				return "sobrepeso";
			} else if (imc > 19) {
				return "ok";
			} else {
				return "bajo peso";
			}

		};

	resultado = interpretarIMC(95, 1.60);// nombre función invocada mal escrito y faltaba agregar el parámetro de "estatura" (en metros)
	console.log(resultado);
	~~~


## Ejercicios de desarrollo

Para realizar estos ejercicios entra a: https://jsfiddle.net/1fk5fyLc/7/
Recuerda documentar todos los pasos en un archivo llamado tunombre.md para que puedas subir tus respuestas a la plataforma.

- Pon tu nombre al atributo value del campo first name
- Pon el valor a la pregunta Favorite Day of Week a Monday
- Cambia la etiqueta de First name a 'Tu nombre'
- Obtén el valor del atributo 'name' del campo Favorite Day of The Week
- Escoge la opción Female de la pregunta de género.
- Encuentra la primera form del documento y pon el atributo name = personal_info
- Encuentra la primera form del documento y pon el atributo name = job_info
- Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
- Agrega un título a la pregunta Male/Female 'Gender'
- Agrega una pregunta Email: con un input de tipo texto después de last name
- Agrega la clase form a ambas for- </section>
