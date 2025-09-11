let Carritoitemspri = document.getElementById("idcarritoComlist");
let Carrittotalcomp = document.getElementById("idtotal");


function Btngeneral(classnt,padre,array,posibt) {
    let newbtngeneral=document.createElement("button");
    newbtngeneral.setAttribute("class",classnt);//"btn btn-danger"
    newbtngeneral.setAttribute("value",posibt);//"btn btn-danger"
    newbtngeneral.textContent = "Borrar";
    newbtngeneral.setAttribute("onclick","borrarcompra('" + array + "','" + posibt+ "');");
    //newbtngeneral.setAttribute("height","70%");
    padre.appendChild(newbtngeneral);
    
    return newbtngeneral;
}



function borrarcompra(array,posibt){
   /* if(array.length>0){
      array.splice(posibt,1);
      
    }*/
   //array.splice(posibt,1);
    alert("Borro posicion: "+posibt);

}

function creatrcarritoc(classetr) {//Crea los <tr></tr> para agrupar los datos
  let newtrgenelist = document.createElement("tr");

  newtrgenelist.setAttribute("class", classetr);
  Carritoitemspri.appendChild(newtrgenelist);

  return newtrgenelist;
}

function objearrcarlist(arrarticulo) {//Desplega datos de pedido carrito de compras los <tds></tds>
  let sumtotal=0;
  for (let i = 0; i < arrarticulo.length; i++) {
    let trgen = creatrcarritoc("submenu"); //Crea el tr

    for (let f = 0; f < 7; f++) {
      switch (f) {
        case 0: {
          let newtdgenelist = document.createElement("td"); //Crea td

          newtdgenelist.textContent = i+1;
          trgen.appendChild(newtdgenelist);

          break;
        }

        case 1: {
          let newtdgenelist = document.createElement("td"); //Crea td

          newtdgenelist.textContent = shotsarray[i].nombre;
          trgen.appendChild(newtdgenelist);

          break;
        }

        case 2: {
          let newtdgenelist = document.createElement("td"); //Crea td Descripcion

          newtdgenelist.textContent = shotsarray[i].Descripcion;
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 3: {
          let newtdgenelist = document.createElement("td"); //Crea td Precio

          newtdgenelist.textContent = shotsarray[i].Precio;
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 4: {
          let newtdgenelist = document.createElement("td"); //Crea td Cantidad

          newtdgenelist.textContent = shotsarray[i].Cantidad;
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 5: {
          let newtdgenelist = document.createElement("td"); //Crea td Cantidad

          newtdgenelist.textContent ="C$"+(parseInt(shotsarray[i].Precio) * shotsarray[i].Cantidad);
          sumtotal=sumtotal+(parseInt(shotsarray[i].Precio) * shotsarray[i].Cantidad);
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 6: {

            let newtdgenelist = document.createElement("td"); //Crea td
             
              
            
              trgen.appendChild(newtdgenelist);
              Btngeneral("btn btn-danger",newtdgenelist,shotsarray,i);//(classnt,padre,array,posibt)

            break;
        }
      }

    }
         
       

  }
   Carrittotalcomp.textContent="C$"+sumtotal;
}

objearrcarlist(shotsarray);
