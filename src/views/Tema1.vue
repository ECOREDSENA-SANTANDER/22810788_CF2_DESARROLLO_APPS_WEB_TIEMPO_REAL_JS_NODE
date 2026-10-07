<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Preparación del entorno de desarrollo
      
      .bloque-texto-g.bloque-texto-g--inverso.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-2(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-3.ml-cus-2
          p.mb-3 La construcción de #[i software] no es un acto mecánico: es un proceso intelectual e iterativo. En el desarrollo web en tiempo real, los datos no llegan en orden predecible; programar para este escenario exige un pensamiento sistémico y reactivo, capaz de anticipar errores, leer mensajes de la consola y trazar la ruta del dato desde el navegador hasta el servidor.

          p.mb-0 El primer paso para lograrlo es configurar un entorno de desarrollo profesional. Un entorno mal configurado es la principal fuente de errores difíciles de rastrear y la causa más común de frustración en etapas tempranas del desarrollo.
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Requerimientos de #[i hardware] y #[i software]
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Requerimientos mínimos del entorno de desarrollo profesional
      p.mb-5(data-aos='fade-right') Para garantizar un entorno de desarrollo estable, se deben considerar dos dimensiones: los componentes físicos (#[i hardware]) y el #[i software] base del sistema.

      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Requerimientos de #[i hardware]
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")(data-aos='fade-right')
        .row.align-items-center(titulo="Memoria de Acceso Aleatorio (RAM)")
          .col-sm-12.col-lg-7.p-5
            p.mb-0 Aunque Node.js consume pocos #[i megabytes] por sí solo, el entorno completo de desarrollo demanda considerablemente más recursos. Al tener activo simultáneamente el editor de código, el navegador web con varias pestañas, la consola ejecutando el servidor y un cliente de base de datos, el consumo de RAM se incrementa de forma significativa. El estándar mínimo recomendado es de 8 GB, siendo 16 GB la configuración ideal para trabajar sin latencia. Un equipo con menos de 4 GB de RAM producirá cierres inesperados del servidor y tiempos de respuesta inaceptables durante el desarrollo.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/2.png')
        .row.align-items-center(titulo="Procesador (Unidad Central de Procesamiento, CPU)")
          .col-sm-12.col-lg-7.p-5
            p.mb-0 Se recomienda un procesador multinúcleo moderno, por ejemplo, Intel Core i5/i7 o AMD Ryzen 5 o superior. La indexación de archivos del proyecto y la transpilación de código requieren una capacidad de procesamiento adecuada. Un procesador de generación anterior ralentizará la detección de errores en tiempo real y afectará la fluidez del entorno de desarrollo integrado.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.png')
      
        .row.align-items-center(titulo="Almacenamiento (Unidad de Estado Sólido, SSD)")
            .col-sm-12.col-lg-7.p-5
              p.mb-0 La carpeta #[b.text-cus-7 node_modules] de un proyecto Node.js puede contener miles de microarchivos. La diferencia de velocidad entre una Unidad de Estado Sólido (SSD) y un disco duro tradicional (HDD) para leer y escribir estos archivos es determinante: un HDD puede tardar varios minutos en instalar dependencias que un SSD resuelve en segundos. Trabajar con HDD en proyectos Node.js de mediana escala genera tiempos de instalación prolongados y errores intermitentes de lectura.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/4.png')
      
      
      .row.align-items-center.my-5.titulo-icono-2(data-aos='fade-right')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Requerimientos de #[i software]
      
      TabsC.color-acento-contenido(data-aos='fade-right')
        .py-3.py-md-4(titulo="Sistema operativo")
          .row.justify-content-center.px-5.pt-5.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/5.png')
            .col-sm-12.col-lg-8
                p.mb-0 Node.js es multiplataforma y funciona en Windows, macOS y Linux. Sin embargo, en la industria de servidores, Linux es el estándar de facto. Para quienes trabajan en Windows, instalar Windows Subsystem for Linux (WSL) permite acceder a una terminal Bash real sin abandonar el sistema operativo principal, una práctica ampliamente adoptada en equipos de desarrollo profesional. Familiarizarse con la terminal desde etapas tempranas reduce significativamente la curva de aprendizaje al momento de desplegar aplicaciones en servidores de producción.
        .py-3.py-md-4(titulo="Node.js y el gestor de paquetes de Node (<em>Node Package Manager</em>, npm) ")
          .row.justify-content-center.px-5.pt-5.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.png')
            .col-sm-12.col-lg-8
                p.mb-0 Deben estar correctamente instalados y verificados antes de iniciar cualquier proyecto. La instalación se cubre en detalle en la sección 1.2. Intentar construir una aplicación sin verificar previamente el entorno produce errores de compatibilidad que son difíciles de diagnosticar si no se conoce el estado exacto de las herramientas instaladas.

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Entorno de desarrollo integrado y configuración inicial
      
      .row.justify-content-center.mb-5.p-0.align-items-center.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.p-0
          img(src='@/assets/curso/temas/t1/7.png')
        .col-sm-12.col-lg-8.p-0
          .p-4
            p.mb-3 Un entorno de desarrollo integrado (#[i Integrated Development Environment], IDE) no es un simple editor de texto: es una plataforma que centraliza la escritura, ejecución y depuración del código en una sola interfaz. En el ecosistema Node.js, el IDE de referencia en la industria es Visual Studio Code (VS Code).
            p.mb-0 VS Code está construido sobre Electron, un #[i framework] que permite ejecutar aplicaciones web dentro de una instancia incrustada del navegador Chromium. Esto explica por qué funciona de forma idéntica en cualquier sistema operativo y por qué consume una cantidad de memoria RAM considerable. A cambio, ofrece tres funcionalidades críticas para el desarrollo profesional:
        

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.hcard-1
            .row.justify-content-center.mb-3.d-none.d-md-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t1/8.svg')
            h3.text-center Resaltado de sintaxis
            p.mb-0 Diferencia visualmente palabras clave, variables y funciones mediante color, reduciendo la carga cognitiva al leer el código.
        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.hcard-1
            .row.justify-content-center.mb-3.d-none.d-md-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t1/9.svg')
            h3.text-center #[i IntelliSense]
            p.mb-0 Muestra en tiempo real la documentación de las funciones de Node.js disponibles, acelerando la escritura y reduciendo errores tipográficos.
        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.hcard-1
            .row.justify-content-center.mb-3.d-none.d-md-block
              .col-5.m-auto
                  img(src='@/assets/curso/temas/t1/10.svg')
            h3.text-center Terminal integrada
            p.mb-0 Permite ejecutar comandos sin salir del editor, unificando la escritura y la ejecución en una sola pantalla.
      
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Configuración inicial del proyecto
      p.mb-5(data-aos='fade-right') Una vez instalado el IDE, se configura el entorno siguiendo estos pasos:
      .bg-color-3.ml-cus-3(data-aos='fade-right')
        .tarjeta.bg-color-4.ml-cus-3
          PasosB.color-acento-botones
            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Verificación del entorno 
                p.mb-5 Antes de construir, se verifica que las herramientas estén disponibles en el sistema. En la terminal integrada de VS Code se ejecutan los siguientes comandos:
                .row.justify-content-center.mb-5
                  .col-sm-12.col-lg-4.mb-cus
                    .cajon.color-acento-contenido.p-4
                      p.mb-1 bash
                      .mb-1.d-flex #[.text-cus-3 node] &nbsp; --version
                      .mb-0.d-flex #[.text-cus-3 npm]&nbsp;–version
                  .col-sm-12.col-lg-8
                      p.mb-0 Si ambos comandos retornan un número de versión, el entorno está operativo. Si alguno produce un error, la instalación de Node.js debe revisarse antes de continuar; intentar avanzar sin esta verificación generará errores de módulo no encontrado imposibles de rastrear en etapas posteriores.

            .row.ml-cus-4.justify-content-center.mb-0.align-items-center(titulo="")
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/12.svg')
              .col-sm-12.col-lg-8.d-flex.flex-column
                h3 Creación del directorio del proyecto 
                p.mb-0 Se crea una carpeta vacía que actuará como el entorno aislado del proyecto. Toda la lógica, las dependencias y los archivos de configuración residirán dentro de este directorio. Mezclar proyectos en una misma carpeta sin estructura genera conflictos de versiones y dificulta el trabajo en equipo.
            
            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Inicialización del proyecto  
                p.mb-3 Desde la terminal, con la ruta apuntando a la carpeta del proyecto, se ejecuta:
                .row.justify-content-center.mb-3
                  .col-sm-12.col-lg-4.mb-cus
                    .cajon.color-acento-contenido.p-4
                      p.mb-1 bash
                      .mb-0.d-flex #[.text-cus-3 npm]&nbsp;init -y
                  .col-sm-12.col-lg-8
                      p.mb-0 Este comando genera automáticamente el archivo #[b.text-cus-7 package.json], el documento de identidad del proyecto. Registra el nombre del sistema, la versión, el archivo principal de entrada (#[b.text-cus-7 index.js]) y el inventario de todas las dependencias de terceros que se instalarán. La #[i flag] #[b.text-cus-7 -y] confirma automáticamente todos los valores por defecto, agilizando la inicialización.
                p.mb-0 Si el #[b.text-cus-7 package.json] se elimina accidentalmente de un proyecto avanzado, se pierde el registro exacto de las dependencias instaladas. Otro desarrollador que intente ejecutar el proyecto no podrá reconstruir el entorno correctamente, comprometiendo la portabilidad y el mantenimiento de la aplicación.

            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Instalación de dependencias 
                p.mb-3 Con el #[b package.json] generado, se instalan las bibliotecas necesarias para construir el servidor y la capa de #[i sockets]:
                .row.justify-content-center.mb-3
                  .col-sm-12.col-lg-4.mb-cus
                    .cajon.color-acento-contenido.p-4
                      p.mb-1 bash
                      .mb-0.d-flex #[.text-cus-3 npm install]&nbsp;express socket.io
                  .col-sm-12.col-lg-8
                      p.mb-0 Este comando descarga los paquetes en la carpeta #[b.text-cus-7 node_modules] y registra las versiones exactas en #[b.text-cus-7 package.json] y #[b.text-cus-7 package-lock.json]. La carpeta #[b.text-cus-7 node_modules] nunca se comparte ni se sube al repositorio de control de versiones, solo se comparte el #[b.text-cus-7 package.json], que contiene toda la información necesaria para reconstruirla con un solo comando.






  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
