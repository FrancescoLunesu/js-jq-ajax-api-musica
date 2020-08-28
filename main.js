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
                // compilo il template utilizzando Handlebars.compile
                var source = $('#entry-template').html();
                var template = Handlebars.compile(source);
                // il template compilato va nell'HTML, in questo caso ho specificato di prendere il primo elemento di response (contenuno nell'API)
                var html = template(risposta.response[0]);

                // lo appendo al div con class "cd" nel mio DOC
                $('.cd').append(html);
            }
        }
    );
});
