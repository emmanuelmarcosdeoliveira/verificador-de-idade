function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.valeu) > ano) {
    window.alert("[ERRO] - Verifique os dados e tente Novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = " ";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 02) {
        // bebe
        img.setAttribute("src", "imagem/bebe-homem.png");
      } else if (idade >= 03 && idade <= 9) {
        // criança
        img.setAttribute("src", "imagem/criança-homem.png");
      } else if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "imagem/jovem-homem.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "imagem/adulto-homem.png");
      } else {
        //Idoso
        img.setAttribute("src", "imagem/idoso-homem.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 02) {
        // bebe
        img.setAttribute("src", "imagem/bebe-mulher.png");
      } else if (idade >= 03 && idade <= 9) {
        // criança
        img.setAttribute("src", "imagem/criança-mulher.png");
      } else if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "imagem/jovem-mulher.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "imagem/adulto-mulher.png");
      } else {
        //Idoso
        img.setAttribute("src", "imagem/idoso-mulher.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
