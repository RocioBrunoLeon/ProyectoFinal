
                                   Pagina Web Trulala

   
    Descripcion:

        El Proyecto está organizado en archivos separados para mantener el codigo ordenado y con facilidad para editar algo.

    Archivos:
    

#INDEX: 

    Lo primero es un index.html que contiene la estructura principal del sitio:

    Un <header> (encabezado) que incluye el logo, barra de navegación con los botones de "HOME", "MI CUENTA", "CONTACTO", y un boton para el carrito de compras.

    Despues esta la Seccion de Productos que muestra las tarjetas con la imagen, el nombre, el precio y un boton para agregar el producto al carrito.

    También tiene un Boton de "VER MAS" que permite mostrar mas productos.

    Por ultimo tiene un <footer> (pie de pagina) que contiene enlaces, a las distintas categorias de productos (en este caso, velas, jabones y difusores) y a medios de contacto como "WHATSAPP", "INSTAGRAM", "TELEFONO", y horarios de atencion.-->


#CSS:

    Este archivo esta dividido en otros 3

       Style.css define el estilo general de la pagina, como la tipografia, los botones, el footer, etc.

       El header.css contiene los estilos especificos para el menú de navegación

       y el Productos.css define como se ven las tarjetas de productos, como la imagen , la descripcion, el precio y los botones, tambien como se comportan en pantallas de distintos tamaños.

       La pagina utiliza Flexbox y Grid para distribuir los elementos de forma flexible y responsiva. 


#JavaScript

     Lo que hace el script.js es agregar interactividad a la pagina, de esa forma pude agregar:

     Un carrito de compras que permite agregar productos, cambiar la cantidad, ver el total, vaciar el carrito y finalizar la compra. Todo esto se guarda en el "localStorage" para que no se pierdan los datos al recargar la pagina.

     Un login/Registro que permite que los usuarios se registren y guarden sus datos en el localstorage.

