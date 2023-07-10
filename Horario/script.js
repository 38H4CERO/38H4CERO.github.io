document.addEventListener('DOMContentLoaded', function() {
    const horarioTable = document.getElementById('horario-table');
    const configForm = document.getElementById('config-form');
  
    // Actualizar el horario con los valores del formulario
    function actualizarHorario(event) {
      event.preventDefault();
  
      // Obtener los valores del formulario
      const inicio = parseInt(document.getElementById('inicio-input').value);
      const fin = parseInt(document.getElementById('fin-input').value);
      const duracion = parseInt(document.getElementById('duracion-input').value);
      const comida = document.getElementById('comida-input').value ? parseInt(document.getElementById('comida-input').value) : null;
      const duracionComida = document.getElementById('duracion-comida-input').value ? parseInt(document.getElementById('duracion-comida-input').value) : null;
  
      // Validar los valores
      if (inicio >= fin) {
        alert('La hora de inicio debe ser menor que la hora final.');
        return;
      }
  
      if (comida && (comida < inicio || comida >= fin)) {
        alert('La hora de la comida debe estar dentro del rango de inicio y fin.');
        return;
      }
  
      // Calcular el número de filas para las clases
      let numFilas = Math.ceil((fin - inicio) / duracion);
      if (comida && duracionComida) {
        numFilas++;
      }
  
      // Actualizar la tabla
      const tbody = horarioTable.querySelector('tbody');
      tbody.innerHTML = '';
  
      // Agregar las horas a la izquierda
      for (let i = 0; i <= numFilas; i++) {
        const row = document.createElement('tr');
        const thHora = document.createElement('th');
  

        const horaInicio = inicio + (i - 1) * duracion;
        const horaFin = horaInicio + duracion - 1;
        thHora.textContent = `${horaInicio}:00 - ${horaFin}:59`;

  
        row.appendChild(thHora);
        tbody.appendChild(row);
  
        // Agregar los días de la semana y las clases
       
        for (let j = 0; j < 5; j++) {
        const tdClase = document.createElement('td');
        if (j === 1 && comida && duracionComida && i === Math.ceil(numFilas / 2)) { // Columna central para la hora de la comida
            tdClase.classList.add('comida');
            tdClase.textContent = `Comida (${comida}:00 - ${comida + duracionComida - 1}:59)`;
        } else {
            tdClase.textContent = '---';
        }
        row.appendChild(tdClase);
        }
        
      }
    }
  
    // Escuchar el evento submit del formulario
    configForm.addEventListener('submit', actualizarHorario);
  });
  