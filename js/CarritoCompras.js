
let carritobtprint=document.getElementById("idprintcarr");
let carridwhatsapp=document.getElementById("idWhatsApp");
let Carritoitemspri = document.getElementById("idcarritoComlist");
let Carrittotalcomp = document.getElementById("idtotal");
let urlParams = new URLSearchParams(window.location.search);
let datosCodificadosDeURL = urlParams.get('datos');
let datosDecodificados = decodeURIComponent(datosCodificadosDeURL);
const shotsarray = JSON.parse(datosDecodificados);
let datosJSON;
let sumtotal=0;



function fmsgpedido(){//Mensaje de Pedido
let msg=" -";
let mlink=" ";
let SubTotal=0;
let sumtotal=0;
  for(let i=0;i<shotsarray.length;i++){
    mlink=shotsarray[i].Imagen;
   
    SubTotal=parseInt(shotsarray[i].Precio)*parseInt(shotsarray[i].Cantidad);
   
      msg=`[  Codigo: ${shotsarray[i].Codigo}, Producto: ${shotsarray[i].Descripcion}, Precio Unidad: C\$${shotsarray[i].Precio}, Cantidad ${shotsarray[i].Cantidad}, SubTotal: C\$${SubTotal} ]`+" - Link: "+mlink+" - "+msg;
       sumtotal=SubTotal+sumtotal;

  }
  msg=" Bella Store Pedido de Moda "+msg+" [ Total: C$"+sumtotal+" ]";
 
    return msg;
}

function fenviamsg( ){
  let numertel=+50581776694;
 window.location.href = "https://wa.me/"+numertel+"/?text='"+ fmsgpedido() +"'";

}



function creacarritobtnwhatsapp(){//crea boton de Whatsapp
let newcarrimsg=document.createElement("a");
let newcarriimg=document.createElement("img");
let envio;


newcarrimsg.setAttribute("aria-label","Chat on WhatsApp");
newcarriimg.setAttribute("class","Whatsapp");
newcarriimg.setAttribute("id","idWhatsapp");
newcarriimg.setAttribute("alt","Chat on WhatsApp");
newcarriimg.setAttribute("src","./ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png");
envio=document.getElementById("idWhatsapp");
newcarriimg.setAttribute("onclick", "fenviamsg()");
//newcarrimsg.setAttribute("href", "https://wa.me/"+numertel+"/?text='"+ fmsgpedido() +"'");//.Whatsapp

carridwhatsapp.appendChild(newcarrimsg);
newcarrimsg.appendChild(newcarriimg);



}




function creacarritocomex(){//crea boton Imprimir carrito
let newcarritocomex=document.createElement("button");
let newetique=document.createElement("i");
newcarritocomex.setAttribute("id","btvercar");
newcarritocomex.setAttribute("class","btn-carrito");

newcarritocomex.setAttribute("onclick", "print( );");

newetique.setAttribute("class","fa-solid fa-print");
newetique.textContent="Imprimir";

carritobtprint.appendChild(newcarritocomex);
newcarritocomex.appendChild(newetique);


}





function Btngeneral(classnt,padre,posibt) {
    let newbtngeneral=document.createElement("button");
    newbtngeneral.setAttribute("class",classnt);//"btn btn-danger"
    newbtngeneral.setAttribute("value",posibt);//"btn btn-danger"
    newbtngeneral.textContent = "Borrar";
    newbtngeneral.setAttribute("onclick","borrarcompra('"+posibt+"');");
    //newbtngeneral.setAttribute("height","70%");
    padre.appendChild(newbtngeneral);
    
    return newbtngeneral;
}



function borrarcompra(posibt){
      shotsarray.splice(posibt,1);
      datosJSON = JSON.stringify(shotsarray);
      datosCodificados = encodeURIComponent(datosJSON);
      window.location.href =`CarritoCompras.html?datos=${datosCodificados}`;
     
     
}

function creatrcarritoc(classetr) {//Crea los <tr></tr> para agrupar los datos
  let newtrgenelist = document.createElement("tr");
  newtrgenelist.setAttribute("class", classetr);
  Carritoitemspri.appendChild(newtrgenelist);

  return newtrgenelist;
}

function Fimgdb(img ){

event.preventDefault();
window.open(img, '_blank'); 

}


function valorbtnumeroprod(idbtcompra, i) {//Cambia el valor del procducto
  let elemento = event.target;
  let idproducto="idsubtotalpro"+i
  let valuetdtotalsubtotal=document.getElementById(idproducto);
  let sumtotafin=document.getElementById("idtotal");
  let totalsumfin=0;
   

  if (window.cordova && window.cordova.plugins.keyboard) {//Cancela teclado en pantalla del number
     
      window.cordova.plugins.keyboard.hide();
    }else{

       const inputElement = elemento;
    if (inputElement) {
      inputElement.blur(); // Elimina el foco del elemento
    }
    }
  
shotsarray[i].Cantidad=event.target.value;
valuetdtotalsubtotal.textContent="C$"+(parseInt(shotsarray[i].Cantidad)*parseInt(shotsarray[i].Precio));//Carga el subtotal de nuevo

for(let m=0;m<shotsarray.length;m++){
        totalsumfin=totalsumfin+(parseInt(shotsarray[m].Cantidad)*parseInt(shotsarray[m].Precio)); //carga el total

}
    sumtotafin.textContent="C$"+totalsumfin;

  
}

function Numprod(newDiv, idbtcompra, i) {
  //Cantidad de producto a comprar
  let newDivnumprod = document.createElement("div");
  let newInputcant = document.createElement("input");

  newDivnumprod.setAttribute("class", "divconta");

  newInputcant.setAttribute("type", "number");
  newInputcant.setAttribute("name", "cantmeses");
  newInputcant.setAttribute("value", shotsarray[i].Cantidad);
  newInputcant.setAttribute("class", "inputonumber");
  newInputcant.setAttribute("min", "1");
  newInputcant.setAttribute("placeholder", "1");
  newInputcant.style = "width:50px";
  newInputcant.setAttribute(
    "onclick",
    "valorbtnumeroprod('" + idbtcompra + "','" + i + "');"
  );

  newDiv.appendChild(newDivnumprod);
  newDivnumprod.appendChild(newInputcant);
  return newInputcant;
}


function objearrcarlist(arrarticulo) {//Desplega datos de pedido carrito de compras los <tds></tds>
  let sumtotal=0;

  creacarritocomex();
  creacarritobtnwhatsapp(); 
 
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
          let newimgdes= document.createElement("img");

          //newtdgenelist.textContent = shotsarray[i].nombre;
          newimgdes.setAttribute("src",shotsarray[i].Imagen);
          newimgdes.setAttribute("ondblclick", "Fimgdb('"+shotsarray[i].Imagen+"');");
          
          

          trgen.appendChild(newtdgenelist);
          newtdgenelist.appendChild(newimgdes);
            
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

          newtdgenelist.textContent = "C$"+(shotsarray[i].Precio);
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 4: {
          let newtdgenelist = document.createElement("td"); //Crea td Cantidad

        
          Numprod(newtdgenelist, "CantidadMese", i);
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 5: {
          let newtdgenelist = document.createElement("td"); //Crea td Cantidad
          let idsubtotal="idsubtotalpro"+i;
          newtdgenelist.setAttribute("id",idsubtotal);
          newtdgenelist.textContent ="C$"+(parseInt(shotsarray[i].Precio) * shotsarray[i].Cantidad);
          sumtotal=sumtotal+(parseInt(shotsarray[i].Precio) * shotsarray[i].Cantidad);
          trgen.appendChild(newtdgenelist);
          break;
        }

        case 6: {

            let newtdgenelist = document.createElement("td"); //Crea td
              trgen.appendChild(newtdgenelist);
              Btngeneral("btn btn-danger",newtdgenelist,i);//(classnt,padre,array,posibt)
              
             
            break;
        }
      }

    }
         
       

  }
   Carrittotalcomp.textContent="C$"+sumtotal;
}

objearrcarlist(shotsarray);
