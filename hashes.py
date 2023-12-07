emails = ["victor jaramillo","erwin lopez","juan perez","carlos sutti","adrian muro","kevin pacheco","gerardo zepeda","Ariel de la cruz","maria paredes","andres lomeli","jorge ochoa","efren flores"]
import hashlib
for email in emails:
  #Email del usuario
  # Eliminamos los espacios en blanco
  email = email.strip()
  # Forzamos todos los caracteres en minúscula
  email = email.lower()

  # Obtenemos el hash md5

  hash = hashlib.md5(email.encode())

  print("'"+hash.hexdigest()+"'",end=',') # bfcb1d6a22d7098499771d3bcec5a8c4