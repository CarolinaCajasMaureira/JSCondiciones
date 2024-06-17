
const contenedorImagen = document.getElementById('contenedorImagen');

contenedorImagen.addEventListener('click', function() {
  contenedorImagen.classList.toggle('bordeImagen') 
});

const numero1 = document.querySelector('#numero1');

const numero2 = document.querySelector('#numero2');

const numero3 = document.querySelector('#numero3');

const botonCalculador = document.querySelector('.botonCalculador');

botonCalculador.addEventListener('click', function() {
  const total = parseInt(numero1.value) + parseInt(numero2.value) + parseInt(numero3.value);
  console.log(total)  
    if(total < 1) {
        alert("No llevas productos ¡Que miedo!")
    }
    else if(total > 10) {
        alert("Pecado capital Avaricia, eccede el límite de productos")
    }
    else {
        alert("Gracias por su brujicompra")
    }
  });

  const seleccionar1 = document.querySelector('#seleccionar1');

  const seleccionar2 = document.querySelector('#seleccionar2');
  
  const seleccionar3 = document.querySelector('#seleccionar3');

  const botonValidador = document.querySelector('.botonValidador');

  botonValidador.addEventListener('click', function() {
    const contraseña = seleccionar1.value + seleccionar2.value + seleccionar3.value;
      if(contraseña === '911') {
        alert('Justo nos faltaba un zombie en la colección ¡Adelante!');
      }
      else if (contraseña === '714') {
        alert('¡Bienvenido al más allá, puedes pasar!');
      } else {
        alert ('Acceso denegado al más allá, permanece en la tierra muajaja')
      }

      }); 