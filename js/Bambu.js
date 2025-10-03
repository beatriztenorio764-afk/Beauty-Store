let arrcarragrega = new Array(); //Carga Todas las compras
let objproducto;
let objetocantprodu;
let objetoagregaprodu;
let shotsarray = new Array();
let listproarray = new Array();
let carritocomex = document.getElementById("btcarcomver");
let Padretodocaru = document.getElementById("Padretodocaru");
const params = new URLSearchParams();
let datosJSON;
let datosCodificados;
let arrfiltraproduct;
const cantiingxarray=5;



objproducto = {
  nombre: "Gallopinto",
  imagen: "https://i.postimg.cc/sfBJvVZK/Gallo-Pintogrande.png",
  Descripcion: "Gallopinto",
  Codigo: "Codves01",
  Cantidad: 1,
  Precio: 38,
};
shotsarray[0] = objproducto; //Arreglo imagenes

objproducto = {
  nombre: "CafeNegro",
  imagen: "https://i.postimg.cc/4yNkQYkF/Cafeconlechegrande.png",
  Descripcion: "Cafe con Leche",
  Codigo: "Codves02",
  Cantidad: 4,
  Precio: 32,
};
shotsarray[1] = objproducto;

objproducto = {
  nombre: "CafeNegro",
  imagen: "https://i.postimg.cc/kgDMdhH6/Cafefindos.png",
  Descripcion: "Cafe Negro ",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 22,
};
shotsarray[2] = objproducto;


objproducto = {
  nombre: "Huevo",
  imagen: "https://i.postimg.cc/Gph5fZSm/Huevo-Fritogrande.png",
  Descripcion: "Huevo frito ",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 15,
};
shotsarray[3] = objproducto;


objproducto = {
  nombre: "Huevo",
  imagen: "https://i.postimg.cc/3JT96sdt/Huevojamongrande.png",
  Descripcion: "Huevo revuelto con Jamon",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 30,
};
shotsarray[4] = objproducto;

objproducto = {
  nombre: "Huevo",
  imagen: "https://i.postimg.cc/rm2tsk6n/Huevo-Rancherogrand.png",
  Descripcion: "Huevo Ranchero",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 30,
};
shotsarray[5] = objproducto;

objproducto = {
  nombre: "Huevo",
  imagen: "https://i.postimg.cc/zBG0dKvr/Huevo-Revueltogrande.png",
  Descripcion: "Huevo Revuelto",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 15,
};
shotsarray[6] = objproducto;


objproducto = {
  nombre: "Bastimentos",
  imagen: "https://i.postimg.cc/dVds1Tqh/Tortilla-Editgrande.png",
  Descripcion: "Tortillas Maiz",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 7,
};
shotsarray[7] = objproducto;


objproducto = {
  nombre: "Bastimentos",
  imagen: "https://i.postimg.cc/wxCTdVpr/Patano-Madurogrande.png",
  Descripcion: "Platano Maduro",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 12,
};
shotsarray[8] = objproducto;

objproducto = {
  nombre: "Crema",
  imagen: "https://i.postimg.cc/sxkFdwGP/Natillagrande.png",
  Descripcion: "Crema",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 23,
};
shotsarray[9] = objproducto;



objproducto = {
  nombre: "AlmuerzoBasico",
  imagen: "https://i.postimg.cc/jdk0cthD/Platillo-Basicgrand.png",
  Descripcion: "Platillo Basico",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[10] = objproducto;


objproducto = {
  nombre: "Carnes",
  imagen: "https://i.postimg.cc/fyLqSS1h/Filet-Resgrande.png",
  Descripcion: "Filet de res ",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[11] = objproducto;

objproducto = {
  nombre: "Carnes",
  imagen: "https://i.postimg.cc/G3V6TqhR/Filet-Res-Jalape-ogrande.png",
  Descripcion: "Filet de res Jalapeño",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[12] = objproducto;

objproducto = {
  nombre: "Carnes",
  imagen: "https://i.postimg.cc/MZMFwV0t/Bistecresgrande.png",
  Descripcion: "Bistec",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[13] = objproducto;



objproducto = {
  nombre: "Pollo",
  imagen: "https://i.postimg.cc/G3Xm00QC/Pollo-Planchagrande.png",
  Descripcion: "Pollo a la plancha",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[14] = objproducto;


objproducto = {
  nombre: "Pollo",
  imagen: "https://i.postimg.cc/cL0W6XTm/Filet-Pollo-Empanigrande.png",
  Descripcion: "Filet de Pollo Empanizado",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[15] = objproducto;


objproducto = {
  nombre: "Pollo",
  imagen: "https://i.postimg.cc/tTSfRzJc/Pollojalape-ogrande.png",
  Descripcion: "Pollo Jalapeño",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 70,
};
shotsarray[16] = objproducto;


objproducto = {
  nombre: "Antojos",
  imagen: "https://i.postimg.cc/FRVqfGJG/Enchilada-Nicaragrande.png",
  Descripcion: "Enchiladas",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 30,
};
shotsarray[17] = objproducto;


objproducto = {
  nombre: "Antojos",
  imagen: "https://i.postimg.cc/zBFMLpRt/Repochetasgrande-JPG.png",
  Descripcion: "Repochetas",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 30,
};
shotsarray[18] = objproducto;



objproducto = {
  nombre: "Antojos",
  imagen: "https://i.postimg.cc/d1jX7nTB/Tacogrande.png",
  Descripcion: "Taco de Res",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 40,
};
shotsarray[19] = objproducto;





objproducto = {
  nombre: "Helados",
  imagen: "https://i.postimg.cc/2yqKHYtR/Helados-Ron-Conpasasgrande.png",
  Descripcion: "Helado Ron Con Pasas",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 10,
};
shotsarray[20] = objproducto;


objproducto = {
  nombre: "Helados",
  imagen: "https://i.postimg.cc/fy3rHsP4/Helados-Pi-a-Lechegrande.png",
  Descripcion: "Helado Piña Con Leche",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 10,
};
shotsarray[21] = objproducto;

objproducto = {
  nombre: "Helados",
  imagen: "https://i.postimg.cc/ZRsQFnVH/Helado-Cocoagrande.png",
  Descripcion: "Helado Cocoa",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 10,
};
shotsarray[22] = objproducto;



objproducto = {
  nombre: "Fresco",
  imagen: "https://i.postimg.cc/Rhv4DXtR/Freso-Melongrande.png",
  Descripcion: "Fresco Melon",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 20,
};
shotsarray[23] = objproducto;

objproducto = {
  nombre: "Fresco",
  imagen: "https://i.postimg.cc/4yXsSBcS/Fresco-Calalagrande.png",
  Descripcion: "Fresco de Calala",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 20,
};
shotsarray[24] = objproducto;

objproducto = {
  nombre: "Fresco",
  imagen: "https://i.postimg.cc/cLPZSsYJ/Fresco-Pitayagrande.png",
  Descripcion: "Fresco de Pitaya",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 20,
};
shotsarray[25] = objproducto;


listproarray[0] = "Gallopinto"; //Arreglo imagenes
listproarray[1] = "CafeNegro";
listproarray[2] = "Huevo";
listproarray[3] = "Bastimentos";
listproarray[4] = "Crema";
listproarray[5] = "AlmuerzoBasico";
listproarray[6] = "Carnes";
listproarray[7] = "Pollo";
listproarray[8] = "Antojos";
listproarray[9] = "Helados";
listproarray[10] = "Fresco";
listproarray[11] = "Shorts";

arrfiltraproduct=cantidadarray();

function valorbtcompver() {
  //Funcion que trasnfiere las compras

  datosJSON = JSON.stringify(arrcarragrega);
  datosCodificados = encodeURIComponent(datosJSON);
  window.location.href = `CarritoComprasbambu.html?datos=${datosCodificados}`;
  //window.location.href = `CarritoCompras.html?nombre=${nombre}`;
  //alert("Ver compras: "+arrcarragrega.length);
}

function creacarritocomex() {
  //crea boton ver las compras
  let newcarritocomex = document.createElement("button");
  let newetique = document.createElement("i");
  newcarritocomex.setAttribute("id", "btvercar");
  newcarritocomex.setAttribute("class", "btn-carrito");
  newcarritocomex.setAttribute("onclick", "valorbtcompver( );");

  newetique.setAttribute("class", "fas fa-shopping-cart");
  newetique.textContent = "Ver Pedido";

  carritocomex.appendChild(newcarritocomex);
  newcarritocomex.appendChild(newetique);
}

function Fimgdb(img ){

event.preventDefault();
window.open(img, '_blank'); 

}


function creaimgcar(contenedor, arrimg, idbtcompra) {
  //carga las imagenes y botones de compra
  if (contenedor) {
    for (let i = 0; i < arrimg.length; i++) {
      let newDiv = document.createElement("div");
      let etiqueta=document.createElement("H5");
      let newImg = document.createElement("img");

      newDiv.setAttribute("class", "carousel-item");
      

      newImg.setAttribute("src", arrimg[i].imagen);
      newImg.setAttribute("class", "w-100 d-block");
      newImg.setAttribute("alt", "Slide " + i);
      newImg.setAttribute("ondblclick", "Fimgdb('"+arrimg[i].imagen+"');");
      newImg.setAttribute("alt", "Slide " + i);
     
     //etiqueta.setAttribute("class", "Titulo");
     
      etiqueta.textContent =
        arrimg[i].Descripcion +
        ", Precio: C$" +
        arrimg[i].Precio;
      if (i === 0) {
        newDiv.classList.add("active");
      }
        
      contenedor.appendChild(newDiv);

      Btcarritoc(idbtcompra, i, newDiv); //Funcion boton compras
      newDiv.appendChild(etiqueta);
      newDiv.appendChild(newImg);
    }
  }
}

function Btcarritoc(idbtcompra, i, newDiv) {
  //Crea botones de Compras
  let newDivbtn = document.createElement("div");
  let newbtn = document.createElement("button");

  newDivbtn.setAttribute("class", "divinputnum");
  newbtn.setAttribute("id", idbtcompra);
  newbtn.setAttribute("value", i);
  newbtn.setAttribute("class", "btn btn-success");
  newbtn.setAttribute("onclick", "valorbt('" + i + "','" + idbtcompra + "');"); //valorbt(btvalor,idvisorbt)
  
  newbtn.textContent = "Añadir";
  
  newbtn.type = "button";
  newbtn.value = i;

  newDiv.appendChild(newDivbtn);
  Numprod(newDivbtn, idbtcompra, i); //Cantidad de producto
  newDivbtn.appendChild(newbtn);
}

function Numprod(newDiv, idbtcompra, i) {
  //Cantidad de producto a comprar
  let newDivnumprod = document.createElement("div");
  let newInputcant = document.createElement("input");

  newDivnumprod.setAttribute("class", "divconta");

  newInputcant.setAttribute("type", "number");
  newInputcant.setAttribute("name", "cantmeses");
  newInputcant.setAttribute("value", "1");
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
}

function Btprevio(contenedor, classtarget, principalcontenedor) {
  //Boton previo flecha <

  if (contenedor) {
    let newbtprev = document.createElement("button");
    let newspanprev = document.createElement("span");
    let newspanprevdos = document.createElement("span");

    newbtprev.setAttribute("class", "carousel-control-prev");
    newbtprev.setAttribute("type", "button");
    newbtprev.setAttribute("data-bs-target", classtarget);
    newbtprev.setAttribute("data-bs-slide", "prev");

    newspanprev.setAttribute("class", "carousel-control-prev-icon");
    newspanprev.setAttribute("aria-hidden", "true");

    newspanprevdos.setAttribute("class", "visually-hidden");
    newspanprevdos.setAttribute("aria-hidden", "true");

    principalcontenedor.appendChild(newbtprev);
    newbtprev.appendChild(newspanprev);
    newbtprev.appendChild(newspanprevdos);
  }
}

function Btnext(contenedor, classtarget, principalcontenedor) {
  //Boton next flecha <

  if (contenedor) {
    let newbtnext = document.createElement("button");
    let newspannext = document.createElement("span");
    let newspannextdos = document.createElement("span");

    newbtnext.setAttribute("class", "carousel-control-next");
    newbtnext.setAttribute("type", "button");
    newbtnext.setAttribute("data-bs-target", classtarget);
    newbtnext.setAttribute("data-bs-slide", "next");

    newspannext.setAttribute("class", "carousel-control-next-icon");
    newspannext.setAttribute("aria-hidden", "true");

    newspannextdos.setAttribute("class", "visually-hidden");
    newspannextdos.setAttribute("aria-hidden", "true");

    principalcontenedor.appendChild(newbtnext);
    newbtnext.appendChild(newspannext);
    newbtnext.appendChild(newspannextdos);
  }
}

function crealistimg(contenedor, arrimg, classtarget, principalcontenedor) {
  //Crea control inferios, flechas nex y previo

  if (contenedor) {
    for (let i = 0; i < arrimg.length; i++) {
      let newli = document.createElement("li");

      let labelslide = "Slide " + i;

      newli.setAttribute("data-bs-target", classtarget);
      newli.setAttribute("data-bs-slide-to", i);
      newli.setAttribute("aria-label", labelslide);
      newli.setAttribute("aria-current", "true");

      if (i === 0) {
        newli.classList.add("active");
      }
      contenedor.appendChild(newli);
    }

    Btprevio(contenedor, classtarget, principalcontenedor);
    Btnext(contenedor, classtarget, principalcontenedor);
  }
}

function valorbt(btvalor, idvisorbt) {
  //Funcion que toma pedidos
  let cantisoli = 1;
  let visor;
  let arrcadenasplit;
  let indicecadena=0;

  
  if (objetocantprodu === undefined) {
    visor = idvisorbt;
     
  } else {
    if(objetocantprodu.nombrevisor !== idvisorbt){
            visor = idvisorbt;
           

    }else{

      visor = objetocantprodu.nombrevisor;
      cantisoli = objetocantprodu.eventnum.value;

    }
    
  }

  if (visor === idvisorbt) {
     
    
     arrcadenasplit=idvisorbt.split("-") //"idbtcompra"0-nombre1-Cantidadarreglos2-numero arreglo3-Residuo del ultimo arreglo4
     
      for(let i=0;i<shotsarray.length;i++){
        
         
         if(arrcadenasplit[1]===shotsarray[i].nombre){
                 indicecadena=i; //indice del nombre arreblo principal
                 
                
                 break;
         }

      }  
      
      btvalor=parseInt(btvalor)+indicecadena+((parseInt(arrcadenasplit[3])-1)*cantiingxarray);//Ajusta las apuntadores de las imagens a hotsarray
                                               // alert("La btvalor: "+btvalor); 
                                                                                                                                                                                                                                                                                                

      
    objetoagregaprodu = {
      nombre: shotsarray[btvalor].nombre,
      Descripcion: shotsarray[btvalor].Descripcion,
      Codigo: shotsarray[btvalor].Codigo,
      Cantidad: cantisoli,
      Precio: shotsarray[btvalor].Precio,
      Imagen: shotsarray[btvalor].imagen,
    };

    arrcarragrega[arrcarragrega.length] = objetoagregaprodu;

    //alert("Valor: " + btvalor+" Idboton: "+idvisorbt);
    //alert("El producto es: "+shotsarray[btvalor].nombre);
    //alert("El producto es: "+shotsarray[btvalor].Precio);
    objetocantprodu.eventnum.value=1;
  }

}

  //alert("Visor de imagen: "+ objetocantprodu.nombrevisor);


function valorbtnumeroprod(idbtcompra, i) {
  let elemento = event.target;
  let visorimg = idbtcompra + "Numero de imagen: " + i;
  //alert("El valor onclick "+event.target.value); //da el valor del control
  // alert("El nombre onclick "+elemento.name); // da el nombre del control
  //  alert("El Visor se llama "+visorimg); // da el nombre del control
  // alert("La descripcion es: "+principal.textContent); // da el nombre del control

  if (window.cordova && window.cordova.plugins.keyboard) {
     
      window.cordova.plugins.keyboard.hide();
    }else{

       const inputElement = elemento;
    if (inputElement) {
      inputElement.blur(); // Elimina el foco del elemento
    }
    }

  objetocantprodu = {
    eventnum: elemento,
    nombrevisor: idbtcompra,
  };

  objetocantprodu = {
    eventnum: elemento,
    nombrevisor: idbtcompra,
  };
}

function creaconteprinci(nameiddivprin, principalraiz) {
  //Div principal contenedor del carousel
  let newdivprincipal = document.createElement("div");
  newdivprincipal.setAttribute("id", nameiddivprin);
  newdivprincipal.setAttribute("class", "carousel slide");
  newdivprincipal.setAttribute("data-bs-ride", "carousel");

  principalraiz.appendChild(newdivprincipal);

  return newdivprincipal;
}

function creaindicadorcantimg(nameidol, divraiz) {
  //ol principal contenedor Indicadores inferiores cantidad de imagenes
  let newol = document.createElement("ol");
  newol.setAttribute("class", "carousel-indicators");
  newol.setAttribute("id", "caruindicaa");
  divraiz.appendChild(newol);

  return newol;
}

function creacargaimg(nameiddiv, divraiz) {
  //Div principal de cargado de imagenes
  let newdivimg = document.createElement("div");
  newdivimg.setAttribute("class", "carousel-inner");
  newdivimg.setAttribute("role", "listbox");
  newdivimg.setAttribute("id", nameiddiv);
  divraiz.appendChild(newdivimg);

  return newdivimg;
}

function creatdgeneral(padre) {
  //Creas td general
  let newtd = document.createElement("td");
  padre.appendChild(newtd);
  return newtd;
}

function creaencabezageneral(padre) {
  //Creas H1 general
  let newhuno = document.createElement("h1");
  padre.appendChild(newhuno);
  return newhuno;
}

function Creatrgeneral(padre) {
  //Crea tr general
  let newdivgeneral = document.createElement("tr"); //tr
  padre.appendChild(newdivgeneral);
  return newdivgeneral;
}



function cantidadarray() { //Cantidad de productos por tipo
  //Funcion que cuenta la cantidad de productos por tipo
  let arrayproddescrip = new Array();
  let objetposicion;
  let badenderainicio = 0;
  let iniciopos = 0;
  let finpos = 0;
  let tamtotalprod = 0;
  let dirarray=0;
  let arrayimgproduc=0;
  let cocienteimg=0;
  let residuoimg=0;

  for (let i = 0; i < listproarray.length; i++) {
    iniciopos = 0;
    finpos = 0;
    badenderainicio = 0;
    tamtotalprod = 0;

    for (let j = 0; j < shotsarray.length; j++) {
      if (listproarray[i] === shotsarray[j].nombre) {
        //son iguales los productos

        if (badenderainicio === 0) {
          iniciopos = j;
          //alert("El producto es: " + listproarray[i]);
          //alert("Inicia en: " + iniciopos);
          badenderainicio = 1;
        }
        finpos = j;
      } else {
        if (badenderainicio === 1) {
          break;
        }
      }
    }

    if (badenderainicio === 1) {
      tamtotalprod = finpos - iniciopos + 1;
      cocienteimg=Math.floor(tamtotalprod/cantiingxarray);
      residuoimg=(tamtotalprod%cantiingxarray);
     

      if(cocienteimg===0 && residuoimg>0 ){//Cantidad de arreglos de imagenes por producto
          arrayimgproduc=1;
      }else{
        if(cocienteimg>0 && residuoimg===0){
          arrayimgproduc=cocienteimg; 
        }else{
          if(cocienteimg>0 && residuoimg>0){
            arrayimgproduc=cocienteimg+1; 
            } 
          
      }
    }
      //alert("Total de arreglos de imagenes por producto: " + arrayimgproduc);

      objetposicion = {
        Nombre: listproarray[i],
        Desde: iniciopos,
        Hasta: finpos,
        Tamaño: tamtotalprod,
        Cosiente: cocienteimg,
        Residuo: residuoimg,
        Totalarrayimg: arrayimgproduc,

      };
 
      arrayproddescrip[dirarray] = objetposicion;
      dirarray++;
    }
  }

        
  return arrayproddescrip;
}





function maincarucel() {//Principal Codigo Main
let  arraycantprod=arrfiltraproduct;
      creacarritocomex();


for (let k = 0; k < arraycantprod.length; k++) {
 let subarrayimg=new Array();
 let posinicio=0;
 let posfin=0;



  for (let i = 0; i < arraycantprod[k].Totalarrayimg; i++) {
    //Crea carruseles
    subarrayimg=new Array();

     if(arraycantprod[k].Totalarrayimg===1){//Si el arreglo es solo uno o solo un visor
      posinicio=arraycantprod[k].Desde;
      posfin=parseInt(arraycantprod[k].Hasta)+1;

     }else{
             if(arraycantprod[k].Totalarrayimg===1){
                  posinicio=arraycantprod[k].Desde;
                  posfin=parseInt(arraycantprod[k].Hasta)+1;
                  
             }else{

                  if(arraycantprod[k].Totalarrayimg===(i+1)){//Si llega al final del arreglo
                    posinicio=posfin;
                    posfin=parseInt(arraycantprod[k].Hasta)+1;
                    


                  }else{
                          
                           posfin=parseInt(arraycantprod[k].Desde)+((i+1)*cantiingxarray);
                           posinicio=posfin-cantiingxarray;

                  }
             }


     }

        subarrayimg=shotsarray.slice(posinicio,posfin);//Saca imagenes de un arreglo y hace otro nuevo
         
        

    let namecarusel = arraycantprod[k].Nombre + i; //td id principal del carousel
    let caruseldivname = arraycantprod[k].Nombre+"carouselI" + i; //Div principal contenedor del carousel
    let caruselidolname = arraycantprod[k].Nombre+"caruindica" + i; //ol principal contenedor Indicadores inferiores cantidad de imagenes
    let caruseldivimgname = arraycantprod[k].Nombre+"carucelida" + i; //Div principal de cargado de imagenes
    let getimgid = ("idbtcompra"+"-"+arraycantprod[k].Nombre+"-"+arraycantprod[k].Totalarrayimg+ "-"+ (i+1)+"-"+arraycantprod[k].Residuo);//----------------------
       //"idbtcompra"-nombre-Cantidadarreglos-numero arreglo-Residuo del ultimo arreglo
    let principalraiz = document.getElementById(namecarusel); //td id principal del carousel
    
    let divraiz = creaconteprinci(caruseldivname, principalraiz); //Div principal contenedor del carousel
    let olindicantimg = creaindicadorcantimg(caruselidolname, divraiz); //ol principal contenedor Indicadores inferiores cantidad de imagenes
    let divcargaimg = creacargaimg(caruseldivimgname, divraiz); //Div principal de cargado de imagenes

    creaimgcar(divcargaimg, subarrayimg, getimgid); //Para tener las imagenes

    crealistimg(olindicantimg, subarrayimg, ("#" + divraiz.id), divraiz);
  }

  }
}

maincarucel();

//window.location.href = `CarritoCompras.html?nombre=${arrcarragrega}`
