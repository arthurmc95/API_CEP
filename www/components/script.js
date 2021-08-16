$(document).on("click","#procurar",function(){
  $.ajax({
    type:"get",//como vou enviar
    url: "http://viacep.com.br/ws/"+$("#cep").val()+"/json/", //para onde enviar
    success: function(data){  //executar comando caso funcione
      var conteudo;
      conteudo = "<div class='center'><p><strong>Logradouro:</strong>"+data.logradouro+"</p></div>";
      conteudo += "<div class='center'><p><strong>Bairro:</strong>"+data.bairro+"</p></div>";
      conteudo += "<div class='center'><p><strong>Localidade:</strong>"+data.localidade+"</p></div>";
      conteudo += "<div class='center'><p><strong>Estado:</strong>"+data.uf+"</p></div>";

      $("#dados").html(conteudo);
    },
    error: function(){
      alert("Error!"); //executar comando caso não funcione
    }
    })
  
});

