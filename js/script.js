
$(document).ready(function (){
    var id;

    $('#enviar').on('click', cliqueBtnEnviar);

    function cliqueBtnEnviar(event){
        event.preventDefault();

        id = $('#id_nota').val();

        /*b
        $('#retorno').html("Valor do Input: " + id);
        $('#id_nota').val('');
        */
        jQuery.ajax({
            type: "GET",
            dataType: "json",
            url: "http://www.deveup.com.br/notas/api/notes/" + id,
            success: exibeNota,
            beforeSend: carregaDados,
            error: exibeErroNota
        });

        function exibeNota(data){
            if($.isArray(data)){
                $('#retorno').html("");

                $.each(data, function(index, value){
                    $('#retorno').prepend(
                        "ID: " + value.id + "<br>" +
                        "Titulo: " + value.title + "<br>" + 
                        "Conteudo: " + value.body + "<br/><br/>");
                });
            }else{
                $('#retorno').html(
                    "ID: " + data.id + "<br>" +
                    "Titulo: " + data.title + "<br>" + 
                    "Conteudo: " + data.body + "<br/><br/>");
            };

            $('#loading').empty();
        }

        function exibeErroNota(){
            $('#retorno').html("Erro ao processar informações");
            $('#loading').empty();
        }

        function carregaDados(){
            $('#loading').html("<img style='width: 15px; margin-left: 10px;' src='http://devmedia.com.br/cursos/img/loading.gif' alt='loading'>");
        }
    }

    

});