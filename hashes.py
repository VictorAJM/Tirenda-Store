emails = ["jaramillovictorarmando@gmail.com","0243471@up.edu.mx","stephany.cazares@oracle.com","allison.rebaza@oracle.com","0246323@up.edu.mx","cmrodriguez@up.edu.mx","torvananos@up.edu.mx","0254460@up.edu.mx","sevalenzuela@up.edu.mx","jvelascoa@up.edu.mx","florencia.sanchez@oracle.com","efrenFlores@gmail.com"]
import hashlib
for email in emails:
  #Email del usuario
  # Eliminamos los espacios en blanco
  email = email.strip()
  # Forzamos todos los caracteres en minúscula
  email = email.lower()

  # Obtenemos el hash md5

  hash = hashlib.md5(email.encode())

  print(hash.hexdigest()) # bfcb1d6a22d7098499771d3bcec5a8c4