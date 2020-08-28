// Attraverso una chiamata ajax all’Api di boolean
// avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

$(document).ready(function() {

// con ajax effettuo una chiamata all'API boolean
    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (risposta){
            // eseguo un ciclo for per per tante volte quante sono le nostre risposte (rispota.response.length) creando così tutti i template che mi servono e appendendoli nel mio DOC
                for (var i = 0; i < risposta.response.length; i++){
                    var source = $("#entry-template").html();
                        // compilo il template utilizzando Handlebars.compile
                    var template = Handlebars.compile(source);

                    var context = risposta.response[i];
                    var html = template(context);
                    // come ultimo passaggio all'interno del ciclo for appendo il template generato
                    $('.cds-container').append(html);
            }
        }
    });
});
