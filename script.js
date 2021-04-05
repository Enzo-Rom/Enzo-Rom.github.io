function processar() {
  var cateto_o = Number(document.querySelector('#cateto_o').value);
  var cateto_a = Number(document.querySelector('#cateto_a').value);
  var hipotenusa = Number(document.querySelector('#hipotenusa').value);
  var angulo = Number(document.querySelector('#angulo').value);
  var anguloa = angulo * (Math.PI/180)
  var seno = Math.sin(anguloa)
  var cosseno = Math.cos(anguloa)
  var tangente = Math.tan(anguloa)
  if (angulo == 0){
    if (cateto_a && hipotenusa > 0){
      cateto_o = Math.sqrt(hipotenusa**2 - cateto_a**2)
      cateto_o = cateto_o.toFixed(3)
      angulo = Math.acos(cateto_a/hipotenusa)
      anguloa = angulo/(Math.PI/180)
      anguloa = anguloa.toFixed(3)
      alert ('O valor do cateto oposto é de aproximadamente ' + cateto_o + ' e o valor de theta é de aproximadamente ' + anguloa)
    }
    else if (cateto_o && hipotenusa > 0){
      cateto_a = Math.sqrt(hipotenusa**2 - cateto_o**2)
      cateto_a = cateto_a.toFixed(3)
      angulo = Math.asin(cateto_o/hipotenusa)
      anguloa = angulo/(Math.PI/180)
      anguloa = anguloa.toFixed(3)
      alert ('O valor do cateto adjacente é de aproximadamente ' + cateto_a + ' e o valor de theta é de aproximadamente ' + anguloa)
    }
    else if (cateto_o && cateto_a > 0){
      hipotenusa = Math.sqrt(cateto_o**2 + cateto_a**2)
      hipotenusa = hipotenusa.toFixed(3)
      angulo = Math.atan(cateto_o/cateto_a)
      anguloa = angulo/(Math.PI/180)
      anguloa = anguloa.toFixed(3)
      alert ('O valor da hipotenusa é de aproximadamente ' + hipotenusa + ' e o valor de theta é de aproximadamente ' + anguloa)
    }
  }
  else if (hipotenusa > 0){
    cateto_o = hipotenusa*seno + 0.000000000000001
    cateto_o = cateto_o.toFixed(3)
    cateto_a = hipotenusa*cosseno + 0.000000000000001
    cateto_a = cateto_a.toFixed(3)
    alert ('O valor do cateto oposto é de aproximadamente ' + cateto_o + ' e o valor do cateto adjacente é de aproximadamente ' + cateto_a)
  }
  else if (cateto_a > 0){
    cateto_o = cateto_a * tangente -0.000000000000001
    cateto_o = cateto_o.toFixed(3)
    hipotenusa = cateto_a * (cosseno ** -1) -0.000000000000001
    hipotenusa = hipotenusa.toFixed(3)
    alert ('O valor do cateto oposto é de aproximadamente ' + cateto_o + ' e o valor da hipotenusa é de aproximadamente ' + hipotenusa)
  }
  else if (cateto_o > 0){
    cateto_a = cateto_o * (tangente ** -1)
    cateto_a = cateto_a.toFixed(3)
    hipotenusa = cateto_o * (seno ** -1) -0.000000000000001
    hipotenusa = hipotenusa.toFixed(3)
    alert ('O valor do cateto adjacente é de aproximadamente ' + cateto_a + ' e o valor da hipotenusa é de aproximadamente ' + hipotenusa)
  }
}
converterBotton = document.querySelector('button');
converterBotton.onclick = processar;
