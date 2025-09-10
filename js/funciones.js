$(document).ready(function(){



   $("tr #cant").click(function(){ //Cuenta Cantidad Articulos
        var idmgara=$(this).parent().find("#idga").val();   
        var cantidad=$(this).parent().find("#cant").val();
        var url="controlador?menu=NuevaVenta&accion=ActualizaCanpro";
        $.ajax({
            type : 'POST', 
            url: url, 
             data:"idga="+idmgara+"&cant="+cantidad,
            success:function(data,textSatatus,jqXHR){
              //  location.href="controlador?menu=Garantias";
                
            }
             
            
        });
       
   }); 
    
});