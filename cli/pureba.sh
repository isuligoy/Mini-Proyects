#!/bin/bash

# Nombre del archivo donde se guarda la información
archivo="informacion.txt"

# Función para solicitar información al usuario
solicitar_informacion() {
  echo "Por favor ingresa tu nombre:"
  read nombre
  echo "Ingresa tu edad:"
  read edad
  echo "Ingresa tu dirección:"
  read direccion
}

# Función para guardar la información en un archivo
guardar_informacion() {
  echo "Nombre: $nombre" >> "$archivo"
  echo "Edad: $edad" >> "$archivo"
  echo "Dirección: $direccion" >> "$archivo"
  echo "Información guardada en $archivo."
}

# Función para mostrar la información al usuario
mostrar_informacion() {
  echo "Información guardada:"
  cat "$archivo"
}

# Función principal
main() {
  solicitar_informacion
  guardar_informacion
  mostrar_informacion
}

# Llamar a la función principal
main
