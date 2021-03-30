import math
cateto_o = float (input('Qual é o tamanho do cateto oposto?'))
cateto_a = float (input('Qual é o tamanho do cateto adjacente?'))
hipotenusa = float (input('Qual é o tamanho da hipotenusa?'))
angulo = float (input('Qual é o valor de theta?'))
anguloa = angulo * math.pi/180
seno = math.sin(anguloa)
cosseno = math.cos(anguloa)
tangente = math.tan(anguloa)
if angulo == 0:
  if cateto_a and hipotenusa > 0:
    cateto_o = math.sqrt(hipotenusa**2 - cateto_a**2)
    angulo = math.acos(cateto_a/hipotenusa)
    anguloa = angulo/(math.pi/180)
    print ('O valor do cateto oposto é de aproximadamente', cateto_o, 'e o valor de theta é de aproximadamente', anguloa)
  elif cateto_o and hipotenusa > 0:
    cateto_a = math.sqrt(hipotenusa**2 - cateto_o**2)
    angulo = math.asin(cateto_o/hipotenusa)
    anguloa = angulo/(math.pi/180)
    print ('O valor do cateto adjacente é de aproximadamente', cateto_a, 'e o valor de theta é de aproximadamente', anguloa)
  elif cateto_o and cateto_a > 0:
    hipotenusa = math.sqrt(cateto_o**2 + cateto_a**2)
    angulo = math.atan(cateto_o/cateto_a)
    anguloa = angulo/(math.pi/180)
    print ('O valor da hipotenusa é de aproximadamente', hipotenusa, 'e o valor de theta é de aproximadamente', anguloa)
elif hipotenusa > 0:
  cateto_o = hipotenusa*seno + 0.000000000000001
  cateto_a = hipotenusa*cosseno + 0.000000000000001
  print ('O valor do cateto oposto é de aproximadamente', cateto_o, 'e o valor do cateto adjacente é de aproximadamente', cateto_a)
elif cateto_a > 0:
  cateto_o = cateto_a * tangente -0.000000000000001
  hipotenusa = cateto_a * (cosseno ** -1) -0.000000000000001
  print ('O valor do cateto oposto é de aproximadamente', cateto_o, 'e o valor da hipotenusa é de aproximadamente', hipotenusa)
elif cateto_o > 0:
  cateto_a = cateto_o * (tangente ** -1)
  hipotenusa = cateto_o * (seno ** -1) -0.000000000000001
  print ('O valor do cateto adjacente é de aproximadamente', cateto_a,'e o valor da hipotenusa é de aproximadamente', hipotenusa)