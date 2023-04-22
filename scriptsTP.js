function insertarString() {
    alert("Se uso la funcion");
    document.getElementById("myP").innerHTML = "Hello World!";
  }

  function insertarStringEnTest(){
    alert("Se uso la funcion del Ejercicio 2")
    document.getElementsByClassName("prueba")[0].innerHTML = "Hello World"
  }

  function insertarFila(){
    var tbody = document.getElementsByTagName("tbody")[0].insertRow(-1)
    let row1 = tbody.insertCell(0)
    row1.innerHTML= "Hello"
    let row2 = tbody.insertCell(1)
    row2.innerHTML = "World!"
  }

  function borrarFila(){
    var tbody = document.getElementsByTagName ("tbody")[0].deleteRow(-1)

  }