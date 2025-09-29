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
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/MpP7JVH4/Fondo.png",
  Descripcion: "TWS-W13",
  Codigo: "Codaudi01",
  Cantidad: 1,
  Precio: 1000,
};
shotsarray[0] = objproducto; //Arreglo imagenes

objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/44Y2n4Vj/Fondo.png",
  Descripcion: "TSW-W27",
  Codigo: "Codaudi02",
  Cantidad: 1,
  Precio: 920,
};
shotsarray[1] = objproducto;

objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/qqddjtdD/TSW-W27.png",
  Descripcion: "TSW-W27N",
  Codigo: "Codaudi03",
  Cantidad: 1,
  Precio: 930,
};
shotsarray[2] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/MKWCHJZB/TWS-W22-II.png",
  Descripcion: "TWS-W22",
  Codigo: "Codaudi04",
  Cantidad: 1,
  Precio: 850,
};
shotsarray[3] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/hthPJd4V/TWS-W26-II.png",
  Descripcion: "TWS-W26",
  Codigo: "Codaudi05",
  Cantidad: 1,
  Precio: 1000,
};
shotsarray[4] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/s24hmWS1/TWS-W32-II.png",
  Descripcion: "TWS-W32",
  Codigo: "Codaudi06",
  Cantidad: 1,
  Precio: 850,
};
shotsarray[5] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/9fDMkND4/TWS-W36I.png",
  Descripcion: "TWS-W36",
  Codigo: "Codaudi07",
  Cantidad: 1,
  Precio: 1050,
};
shotsarray[6] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/J7SzyQdm/XY07II.png",
  Descripcion: "XY07",
  Codigo: "Codaudi08",
  Cantidad: 1,
  Precio: 1000,
};
shotsarray[7] = objproducto;



objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/t4WdXRmS/u70.png",
  Descripcion: "U70",
  Codigo: "Codaudi09",
  Cantidad: 1,
  Precio: 1050,
};
shotsarray[8] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "	https://sc04.alicdn.com/kf/H07ccb9a7deb54f8194d94b30f3a76a6b6.jpg_350x350.jpg",
  Descripcion: "Yison B5",
  Codigo: "Codaudi10",
  Cantidad: 1,
  Precio: 750,
};
shotsarray[9] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "https://i.postimg.cc/7hRMV0Mm/Celebra-A-23.png",
  Descripcion: "Celebra A23",
  Codigo: "Codaudi11",
  Cantidad: 1,
  Precio: 1000,
};
shotsarray[10] = objproducto;

objproducto = {
  nombre: "Audifonos",
  imagen: "	https://i.postimg.cc/TP2t3mG1/Celebra-A18-F.jpg",
  Descripcion: "Celebra A18",
  Codigo: "Codaudi12",
  Cantidad: 1,
  Precio: 1000,
};
shotsarray[11] = objproducto;


objproducto = {
  nombre: "Audifonos",
  imagen: "	https://i.postimg.cc/KzgCCt7r/Y60I.png",
  Descripcion: "Y60",
  Codigo: "Codaudi13",
  Cantidad: 1,
  Precio: 750,
};
shotsarray[11] = objproducto;




listproarray[0] = "Audifonos"; //Arreglo imagenes
listproarray[1] = "Blusas";
listproarray[2] = "Pantalones";
listproarray[3] = "Enterizos";
listproarray[4] = "Conjuntos";
listproarray[5] = "Faldas";
listproarray[6] = "BodySuit";
listproarray[7] = "CropTop";
listproarray[8] = "Zapatos";
listproarray[9] = "Licras";
listproarray[10] = "Palazos";
listproarray[11] = "Shorts";

arrfiltraproduct=cantidadarray();

function valorbtcompver() {
  //Funcion que trasnfiere las compras

  datosJSON = JSON.stringify(arrcarragrega);
  datosCodificados = encodeURIComponent(datosJSON);
  window.location.href = `CarritoComprasTiendaTecno.html?datos=${datosCodificados}`;
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
  newetique.textContent = "Ver Compra";

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
      let newImg = document.createElement("img");

      newDiv.setAttribute("class", "carousel-item");

      newImg.setAttribute("src", arrimg[i].imagen);
      newImg.setAttribute("class", "w-100 d-block");
      newImg.setAttribute("alt", "Slide " + i);
      newImg.setAttribute("ondblclick", "Fimgdb('"+arrimg[i].imagen+"');");


      newDiv.textContent =
        "Codigo: " +
        arrimg[i].Codigo +
        "," +
        " Articulo: " +
        arrimg[i].Descripcion +
        ", Precio: C$" +
        arrimg[i].Precio;
      if (i === 0) {
        newDiv.classList.add("active");
      }

      contenedor.appendChild(newDiv);

      Btcarritoc(idbtcompra, i, newDiv); //Funcion boton compras

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

    //Btprevio(contenedor, classtarget, principalcontenedor);
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
