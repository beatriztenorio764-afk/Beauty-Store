

let arrcarragrega = new Array();//Carga Todas las compras
let objproducto;
let objetocantprodu; 
let objetoagregaprodu; 
let shotsarray  = new Array();
let camisetasarray =new Array();
let carritocomex=document.getElementById('btcarcomver');
const params = new URLSearchParams();
let datosJSON;
let datosCodificados;
    

objproducto={
   nombre:"Short",
   imagen:"images/Fotos/IMG_20240319_080542.jpg",
   Descripcion:"Short Primavera",
   Codigo:"CodSh01",
   Cantidad:3,
   Precio:100,

}
shotsarray[0] = objproducto; //Arreglo imagenes



objproducto={
   nombre:"Short",
   imagen:"images/Fotos/IMG_20240319_080802.jpg",
   Descripcion:"Short Verano",
   Codigo:"CodSh02",
   Cantidad:4,
   Precio:150,
}
shotsarray[1] = objproducto;



objproducto={
   nombre:"Short",
   imagen:"images/Fotos/IMG_20240319_080832.jpg",
   Descripcion:"Short Casual",
   Codigo:"CodSh03",
   Cantidad:1,
   Precio:200,

}
shotsarray[2] = objproducto;



objproducto={
  nombre:"Short",
   imagen:"images/Fotos/IMG_20240504_201032.jpg",
   Descripcion:"Short Casual",
   Codigo:"CodSh04",
   Cantidad:6,
   Precio:250,
}
shotsarray[3] =objproducto ;



objproducto={
   nombre:"Short",
   imagen:"images/Fotos/IMG_20240724_144059.jpg",
   Descripcion:"Short Alicrado",
   Codigo:"CodSh05",
   Cantidad:2,
   Precio:300,

}
shotsarray[4] = objproducto;


camisetasarray[0] = shotsarray[0] //Arreglo imagenes
camisetasarray[1] = shotsarray[1];
camisetasarray[2] = shotsarray[2];
camisetasarray[3] = shotsarray[3];
camisetasarray[4] =shotsarray[4];



function valorbtcompver( ){//Funcion que trasnfiere las compras

   datosJSON = JSON.stringify(arrcarragrega);
   datosCodificados = encodeURIComponent(datosJSON);

window.location.href =`CarritoCompras.html?datos=${datosCodificados}`;
  //window.location.href = `CarritoCompras.html?nombre=${nombre}`;
    //alert("Ver compras: "+arrcarragrega.length);


}

function creacarritocomex(){//crea boton ver las compras
let newcarritocomex=document.createElement("button");
let newetique=document.createElement("i");
newcarritocomex.setAttribute("id","btvercar");
newcarritocomex.setAttribute("class","btn-carrito");
newcarritocomex.setAttribute("onclick", "valorbtcompver( );");

newetique.setAttribute("class","fas fa-shopping-cart");
newetique.textContent="Ver Compra";

carritocomex.appendChild(newcarritocomex);
newcarritocomex.appendChild(newetique);




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
      newImg.setAttribute("alt", "Slide " + i)
            
       newDiv.textContent="Codigo: "+arrimg[i].Codigo+","+" Articulo: "+arrimg[i].Descripcion+", Precio: C$"+arrimg[i].Precio;
      if (i === 0) {
        newDiv.classList.add("active");
      }

      contenedor.appendChild(newDiv);
      
      Btcarritoc(idbtcompra,i,newDiv);//Funcion boton compras
      
      newDiv.appendChild(newImg);
      
    }
  }
}





function Btcarritoc(idbtcompra,i,newDiv){ //Crea botones de Compras
      let newDivbtn = document.createElement("div");
      let newbtn = document.createElement("button");
      
      newDivbtn.setAttribute("class", "Titulo");
      newbtn.setAttribute("id", idbtcompra);
      newbtn.setAttribute("value", i);
      newbtn.setAttribute("class", "btn btn-outline-success");
      newbtn.setAttribute("onclick", "valorbt('" + i + "','" + idbtcompra + "');"); //valorbt(btvalor,idvisorbt) 
      newbtn.textContent = ("Añadir Pedido");
      newbtn.type = "button";
      newbtn.value = i;

      newDiv.appendChild(newDivbtn);
      Numprod(newDivbtn,idbtcompra,i);//Cantidad de producto
      newDivbtn.appendChild(newbtn);
      
      

}


function Numprod(newDiv,idbtcompra,i){ //Cantidad de producto a comprar
  let newDivnumprod = document.createElement("div");
  let newInputcant = document.createElement("input");
  
  newDivnumprod.setAttribute("class","divconta");
  
  newInputcant.setAttribute("type","number");
  newInputcant.setAttribute("name","cantmeses");
  newInputcant.setAttribute("value","1");
  newInputcant.setAttribute("class","inputonumber");
  newInputcant.setAttribute("min","1");
  newInputcant.setAttribute("placeholder","1");
  newInputcant.style="width:50px";
  newInputcant.setAttribute("onclick", "valorbtnumeroprod('" + idbtcompra + "','" + i + "');");

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



function valorbt(btvalor,idvisorbt) {//Funcion que toma pedidos 
let cantisoli=1;
let visor;


if(objetocantprodu===undefined){
   visor=idvisorbt;
     
     
     
}else{
       visor=objetocantprodu.nombrevisor;
       cantisoli = objetocantprodu.eventnum.value;
}
  

if(visor===idvisorbt){
      
      objetoagregaprodu={
       nombre:shotsarray[btvalor].nombre,
       Descripcion:shotsarray[btvalor].Descripcion,
       Codigo:shotsarray[btvalor].Codigo,
       Cantidad:cantisoli,
       Precio:shotsarray[btvalor].Precio,
      }

      arrcarragrega[arrcarragrega.length]=objetoagregaprodu;
      
      
      
      
      //alert("Valor: " + btvalor+" Idboton: "+idvisorbt);
      //alert("El producto es: "+shotsarray[btvalor].nombre);
      //alert("El producto es: "+shotsarray[btvalor].Precio);
       
}




 

  
  //alert("Visor de imagen: "+ objetocantprodu.nombrevisor);


}


function valorbtnumeroprod(idbtcompra,i){
let elemento=event.target;
let visorimg= idbtcompra + "Numero de imagen: "+i; 
 //alert("El valor onclick "+event.target.value); //da el valor del control
// alert("El nombre onclick "+elemento.name); // da el nombre del control
//  alert("El Visor se llama "+visorimg); // da el nombre del control
// alert("La descripcion es: "+principal.textContent); // da el nombre del control

  objetocantprodu= {
  eventnum:elemento,
  nombrevisor:idbtcompra

 };
   


}
  




function creaconteprinci(nameiddivprin,principalraiz){//Div principal contenedor del carousel 
let newdivprincipal=document.createElement("div"); 
newdivprincipal.setAttribute("id",nameiddivprin);
newdivprincipal.setAttribute("class","carousel slide");
newdivprincipal.setAttribute("data-bs-ride","carousel");

principalraiz.appendChild(newdivprincipal);

  return newdivprincipal;
}


function creaindicadorcantimg(nameidol,divraiz){//ol principal contenedor Indicadores inferiores cantidad de imagenes
let newol=document.createElement("ol");
newol.setAttribute("class","carousel-indicators");
newol.setAttribute("id","caruindicaa");
divraiz.appendChild(newol);
       
  return newol;
}


function creacargaimg(nameiddiv,divraiz){//Div principal de cargado de imagenes
  let newdivimg=document.createElement("div");
     newdivimg.setAttribute("class","carousel-inner");
     newdivimg.setAttribute("role","listbox");
     newdivimg.setAttribute("id",nameiddiv);
      divraiz.appendChild(newdivimg);


      return newdivimg;
}

function valorbtcarrritocomp( ){

  alert("Ayyy");
}


function maincarucel() {

creacarritocomex();

  for (let i = 0; i<4; i++) {//Crea carruseles
     let namecarusel="caruseltd"+i; //td id principal del carousel
     let caruseldivname="carouselI"+i; //Div principal contenedor del carousel 
     let caruselidolname="caruindica"+i; //ol principal contenedor Indicadores inferiores cantidad de imagenes
     let caruseldivimgname="carucelida"+i; //Div principal de cargado de imagenes 
     let getimgid=idbtcompra="idbtcompra"+i;

     let principalraiz =document.getElementById(namecarusel);//td id principal del carousel
     let divraiz=creaconteprinci(caruseldivname,principalraiz); //Div principal contenedor del carousel 
     let olindicantimg=creaindicadorcantimg(caruselidolname,divraiz); //ol principal contenedor Indicadores inferiores cantidad de imagenes
     let divcargaimg=creacargaimg(caruseldivimgname,divraiz); //Div principal de cargado de imagenes 
     creaimgcar(divcargaimg, shotsarray, getimgid); //Para tener las imagenes
     crealistimg(olindicantimg, shotsarray, ("#"+divraiz.id), divraiz);
    

  }



}



maincarucel();


  //window.location.href = `CarritoCompras.html?nombre=${arrcarragrega}`









   
    