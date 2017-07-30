// 1. Pon tu nombre al atributo value del campo first name
$('input[name=firstname]').val("Eva");
// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
$('select[name=fav_day]').val("Monday");
// 3. Cambia la etiqueta de First name a 'Tu nombre'
$('label[name="first_name_label"]').text("Tu nombre:");
// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
$('select').attr('name');
// 5. Escoge la opción Female de la pregunta de género.
$('input:radio[name="sex"]').last().prop('checked', true);
// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
$('form').first().attr('name','personal_info');
// 7. Encuentra la primera form del documento y pon el atributo name = job_info
$('form').last().attr('name','job_info');
// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
$('form[name=personal_info]').prepend('<h1>Entrevista pesonal</h1>');
$('form[name=job_info]').prepend('<h1>Entrevista pesonal</h1>');
// 9. Agrega un título a la pregunta Male/Female 'Gender'
$('input:radio[value=male]').before('<p>Gender:</p>');
// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
$('input[name=lastname]').after('<br><p>Email:</p><input type="text" name="email">');
// 11. Agrega la clase form a ambas formas
$('form').addClass('form');
