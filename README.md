# Instalaciones

## Conversor de vídeo => ffmepg

- Instalar ffmepg desde Homebrew con ``brew install ffmpeg --build-from-source``
- Después, indicar los encoders que se desean instalar con: 

```
brew install libvpx libvorbis x264
```

- Podemos verificar que la instalación ha ido bien con este comando:

```
   ffmpeg -encoders | grep libvpx
```

Nos aparecerá una lista como esta:

```
  libavutil      59. 39.100 / 59. 39.100
  libavcodec     61. 19.101 / 61. 19.101
  libavformat    61.  7.100 / 61.  7.100
  libavdevice    61.  3.100 / 61.  3.100
  libavfilter    10.  4.100 / 10.  4.100
  libswscale      8.  3.100 /  8.  3.100
  libswresample   5.  3.100 /  5.  3.100
  libpostproc    58.  3.100 / 58.  3.100
 V....D libvpx               libvpx VP8 (codec vp8)
 V....D libvpx-vp9           libvpx VP9 (codec vp9)
```

Si te aparecen estas líneas:

```
 V....D libvpx               libvpx VP8 (codec vp8)
 V....D libvpx-vp9           libvpx VP9 (codec vp9)
```

Significa que habrás instalado satisfactoriamente el encoder que permite
cambiar el formato de vídeo a .webm

Esa ``V`` que precede significa que tiene formato **Vídeo**


# Desarrollo

## ¿Cómo no perjudicar la performance de tu aplicación web al añadir vídeos?

```Documentación
    https://web.dev/learn/performance/video-performance?hl=es-419
```
