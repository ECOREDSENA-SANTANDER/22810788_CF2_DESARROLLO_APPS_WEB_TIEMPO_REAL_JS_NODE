<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Flujo lógico del desarrollador
      
      .row.justify-content-center.mb-5.p-0.align-items-center.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.p-0
          img(src='@/assets/curso/temas/t4/1.png')
        .col-sm-12.col-lg-8.p-0
          .p-4
            p.mb-3 Construir una aplicación web en tiempo real no es únicamente escribir código correcto, es tomar decisiones técnicas en el orden adecuado. Un desarrollador que salta etapas o que no comprende la secuencia lógica del proceso inevitablemente enfrenta errores difíciles de rastrear, entornos inestables y código difícil de mantener.
            p.mb-0 El flujo que se describe a continuación sintetiza el recorrido completo abordado en este componente: desde la configuración del entorno hasta la integración de la capa de #[i sockets]. No es una secuencia rígida ni definitiva; en la práctica profesional, el desarrollo es iterativo, pero representa el orden lógico recomendado para proyectos de esta naturaleza.   


      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 3.] Flujo lógico del desarrollador para aplicaciones web en tiempo real con Node.js
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr
                  th.w-cus-3 #[b Etapa]
                  th #[b Acción]
                  th #[b Error frecuente si se omite]
              tbody
                tr
                  td.text-center 1
                  td Verificar versiones de Node.js y npm
                  td Incompatibilidad de dependencias sin origen claro
                tr
                  td.text-center 2
                  td Crear directorio e inicializar con #[b.text-cus-7 npm init -y]
                  td Proyecto sin #[b.text-cus-7 package.json] - dependencias no registradas
                tr
                  td.text-center 3
                  td Instalar Express y socket.io
                  td Módulos no encontrados al ejecutar el servidor
                tr
                  td.text-center 4
                  td Construir el servidor HTTP con Express
                  td Sin base de red no es posible integrar WebSockets
                tr
                  td.text-center 5
                  td Integrar socket.io al servidor
                  td El servidor no puede mantener conexiones persistentes
                tr
                  td.text-center 6
                  td Definir eventos de emisión y escucha
                  td Mensajes que no llegan o se duplican entre clientes
                tr
                  td.text-center 7
                  td Construir el cliente HTML con #[b.text-cus-7 canvas]
                  td Sin interfaz no hay forma de probar la comunicación
                tr
                  td.text-center 8
                  td Verificar flujo completo cliente ↔ servidor
                  td Errores silenciosos que solo aparecen con múltiples clientes
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.png')
      
      p.mb-0(data-aos='fade-right') Cada etapa depende de la anterior. Intentar integrar #[i sockets] sin un servidor HTTP funcional, o construir el cliente antes de definir los eventos del servidor, produce errores de conexión que no indican claramente su origen; el mensaje de error apunta al síntoma, no a la causa.









  </template>

<script>
export default {
  name: 'Tema4',
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
