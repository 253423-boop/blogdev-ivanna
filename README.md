# BlogDev de Ivanna

Sitio estático creado con HTML, CSS y JavaScript vanilla. Para verlo, abre `index.html` en un navegador o usa una extensión de servidor estático en VS Code, como Live Server.

## Imágenes

Las imágenes están en `img/`. Sustituye `ivanna.jpeg` y `jetpack-compose.webp` por archivos con las mismas rutas. Conserva los atributos `width`, `height` y actualiza el texto `alt` para que describa cada nueva imagen.

## Publicar un vlog nuevo

1. Duplica `blog/jetpack-compose.html` y renómbralo con una URL descriptiva, por ejemplo `blog/nombre-del-vlog.html`.
2. Actualiza su título, metadatos, fecha, contenido e imagen.
3. En `index.html`, actualiza la sección `#vlog` para enlazar al nuevo archivo. Los vlogs anteriores deben conservarse.
4. Añade la URL del nuevo artículo a `sitemap.xml`.

## Dominio

Antes de publicar, sustituye `https://tu-dominio.com/` en `sitemap.xml` y descomenta/completa las etiquetas canonical y `og:url` indicadas en cada HTML. Actualiza también el comentario `Sitemap` de `robots.txt` con la URL final.
