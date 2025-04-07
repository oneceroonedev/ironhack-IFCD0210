# MÓDULO 1 - PROGRAMACIÓN WEB EN EL ENTORNO CLIENTE
Este repositorio contiene el proyecto final del Módulo 1, correspondiente a la programación web en el entorno cliente, del Certificado de Profesionalidad "IFCD0210 - Desarrollo de aplicaciones con tecnologías web". Dado un diseño en Figma el objetivo era construir la página web con código.

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript
- Git
- Netlify

No se ha utilizado ningún framework, pero si que, por ejemplo, tanto en CSS como en JS se ha realizado una estructura basada en componentes. La maquetación está basada en "mobile first" y es totalmente responsive tanto para mobile, tablet como desktop.

## Home (index.html)
Para la versión mobile se ha optado por ocultar ciertos elementos, como por ejemplo, las imágenes que acompañan al personaje principal en la versión desktop, y los memojis de la sección de reviews. También se ha optado por un menú habmburguesa con un ancho y una altura del 100% del dispositivo.

## Projects (project.html)
Está página es totalmente dinámica donde toda la información mostrada es cargada con JS a partir de un archivo JSon proporcionado.

## Contact (contact.html + received.html)
Aquí encontramos un formulario de contacto con la validación del navagador desactivada para poder incluir una validación totalmente personalizada y controlada por JS. Este formulario una vez completado correctamente te redirige a una página conforme el mensaje a sido recibido correctamente. En la URL, una vez redirigidos a la página de confirmación, se puede observar como el formulario a recogido correctamente todos los campos rellenados.

## 404 (404.html)
Se ha creado una página 404 que ha sido incluida en los enlaces de las tarjetas de servicios de la Home y en diferentes items del footer. Esta decisión se ha tomado basándome en que no se disponia de un diseño de las páginas específicas a las que se deberían de redrecciónar y de esta manera era la oportunidad para poder redirigir a la página de error.

## General
- Se han añadido unos efectos de hover a todas las tarjetas de la web.
- La imagen de la página 404, al no tener diseño, se ha utilizado la de la página principal, y con la ayuda de inteligencia artifical se ha creado una imagen nueva siguiendo la linea del contenido para una página de error.
- Se ha añadido un favicon a la web.
- Se ha implementado navegación entre los diferentes items del menú principal, es decir, del header. Indicar que al no haber un diseño de una página donde se encuentren todos los proyectos o servicios, se ha anclado a la secciones correspondientes de la home.
- Se ha incorporado un botón de "scroll up" para poder volver rápidamente a la parte superior de la página cuando el usuario lo requiera.
