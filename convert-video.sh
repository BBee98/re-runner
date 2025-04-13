bold_green() {
    echo "\033[1;32m$1\033[0m"
}

bold_pink() {
    echo "\033[1;35m$1\033[0m"
}

bold_blue(){
      echo "\033[1;36m$1\033[0m"
}

bold_yellow(){
  echo "\033[1;33m$1\033[0m"

}

bold_red() {
    echo "\033[1;[31m$1\033[0m"
}



echo "\n"
echo "👋🏻 $(bold_green '¡Hola!') Te ayudaré a convertir el video que quieras a formato $(bold_pink '.webm')"
echo "\n"
read -p "Indica el $(bold_blue 'directorio') donde se encuentra el video (Por ejemplo: $(bold_blue 'src/assets/videos')). Presiona $(bold_pink 'enter') si el video se encuentra en el $(bold_blue 'directorio') en el que te encuentras: " video_directory

if [ -z "$video_directory" ]; then
  $video_directory=$(pwd)
fi

echo "\n"
read -p "Introduce el $(bold_green 'nombre') del video que deseas convertir. Por favor, añade también el formato que tiene (Por ejemplo: $(bold_yellow 'mivideo.mp4')): " video_name

while [ -z "$video_name" ]; do
  read -p "🙇 Lo siento pero no puede ser un valor vacío. Introduce el $(bold_blue 'nombre') del video que deseas convertir. Por favor, añade también el formato que tiene (Por ejemplo: $(bold_yellow 'mivideo.mp4')): " video_name
done

video_file="${video_directory}/${video_name}"

echo "\n"
echo "🕵🏻‍♂️ $(bold_yellow 'Buscando el fichero') $video_file ..."

while [ ! -f "$video_file" ]; do
  echo "\n"
  echo " ❌ No he encontrado $video_file."
  echo "\n"
  read -p "¿Quieres actualizar algún valor? \ Escribe "1" para cambiar el $(bold_blue 'directorio') (Actualmente $video_directory. \ Escribe "2" para cambiar el $(bold_green 'nombre') del video $video_name \ Escribe "3" para cambiar ambos valores (Actualmente $video_file): " answer

  while [ "$answer" != "1" ] && [ "$answer" != "2" ] && [ "$answer" != "3" ]; do
      echo "\n"
      read -p " 🙇Introduce un valor que pueda entender. \ Escribe "1" para cambiar el $(bold_blue 'directorio') (Actualmente $video_directory. \ Escribe "2" para cambiar el $(bold_green 'nombre') del video $video_name \ Escribe "3" para cambiar $(bold_green 'ambos valores') (Actualmente $video_file): " answer
  done

  if [ "$answer" == "1" ]; then
    echo "\n"
    read -p "Indica el $(bold_blue 'directorio') donde se encuentra el video (Por ejemplo: $(bold_blue 'src/assets/videos')). Presiona $(bold_pink 'enter') si el video se encuentra en el $(bold_blue 'directorio') en el que te encuentras: " video_directory

    if [ -z "$video_directory" ]; then
      $video_directory=$(pwd)
    fi

  fi

  if [ "$answer" == "2" ]; then
    echo "\n"
    read -p "Introduce el $(bold_green 'nombre') del video que deseas convertir. Por favor, añade también el formato que tiene (Por ejemplo: $(bold_yellow 'mivideo.mp4')): " video_name
  fi

  if [ "$answer" == "3" ]; then
    echo "\n"
    read -p "Indica el $(bold_blue 'directorio') donde se encuentra el video (Por ejemplo: $(bold_blue 'src/assets/videos')). Presiona $(bold_pink 'enter') si el video se encuentra en el $(bold_blue 'directorio') en el que te encuentras: " video_directory
    if [ -z "$video_directory" ]; then
      $video_directory=$(pwd)
    fi
    echo "\n"
    read -p "Introduce el $(bold_green 'nombre') del video que deseas convertir. Por favor, añade también el formato que tiene (Por ejemplo: $(bold_yellow 'mivideo.mp4')): " video_name
  fi

video_file = "${video_directory}/${video_name}"

echo "\n"
echo "🕵🏻‍♂️ $(bold_yellow 'Buscando el fichero') $video_file ..."

done

echo "\n"
echo " ✅ El video se ha encontrado."

echo "\n"
read -p " 🧑‍💻Escribe el $(bold_blue 'directorio') donde quieres que se genere el vídeo (Por ejemplo: $(bold_blue 'src/assets/videos')): " video_output_directory

while [ -z "$video_output_directory" ]; do
    echo "🙇 Lo siento pero no puede ser un valor vacío."
    read -p " 🧑‍💻Escribe el $(bold_blue 'directorio') donde quieres que se genere el vídeo (Por ejemplo: $(bold_blue 'src/assets/videos')): " video_output_directory
done

if [ ! -d "$video_output_directory" ]; then
  echo " Al parecer $video_output_directory no existe. 🚧 Voy a crearlo por ti ."
  mkdir -p "$video_output_directory"
  echo "¡$video_output_directory creado!."
fi

read -p "🎥 Escribe cuál es el $(bold_green 'nombre') de salida que deseas que tenga el vídeo. No te preocupes por añadir la extensión $(bold_pink '.webm'), la añadiré yo automáticamente: " video_output_name

while [ -z "$video_output_name" ]; do
    echo "🙇 Lo siento pero no puede ser un valor vacío."
    read -p "🎥 Escribe cuál es el $(bold_green 'nombre') de salida que deseas que tenga el vídeo. No te preocupes por añadir la extensión $(bold_pink '.webm'), la añadiré yo automáticamente: " video_output_name
done;

video_output_name_with_extension="${video_output_directory}/${video_output_name}.webm"

echo "⚙️ Convirtiendo a $(bold_pink '.webm') ..."

ffmpeg -i "$video_file" -c:v libvpx -c:a libvorbis "$video_output_name_with_extension"

if [ ! -f "$video_output_name_with_extension" ]; then
  " ❌ $(bold_red '¡Vaya! Al parecer ha ocurrido un error y el vídeo no ha podido generarse')"

  else

    echo "🥳 ¡Hecho! En el $(bold_blue 'directorio') $video_output_directory encontrarás el vídeo $video_output_name.";
    echo "👋🏻 ¡Hasta otra!"

fi