<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.br-2
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.d-flex.flex-column.br-3.ml-cus-2
        p.mb-3 Un usuario escribe un mensaje y, en cuestión de instantes, este puede aparecer en la pantalla de otra persona al otro lado del país. Detrás de esa experiencia existe una arquitectura técnica precisa: un servidor activo, un canal de comunicación persistente y código que responde en tiempo real. Construir esa arquitectura es exactamente el propósito de este recorrido.
        p.mb-0 El camino avanza desde la configuración profesional del entorno de desarrollo hasta la construcción de un servidor funcional con Node.js y la integración de #[i sockets] para establecer canales de comunicación bidireccional. Cada concepto se aborda desde su funcionamiento interno para poder anticipar fallos y tomar decisiones técnicas argumentadas frente a escenarios reales.
    p.mb-5 El punto de llegada es una aplicación web funcional donde múltiples clientes se comunican de forma simultánea a través del servidor, no como ejercicio académico aislado, sino como demostración concreta de las mismas tecnologías que impulsan los sistemas de chat corporativos, tableros financieros en vivo y plataformas de colaboración más exigentes del mercado actual.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GPLhvQK-q2I?si=2soTgehUcv6Zm043" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Construcción de aplicaciones web en tiempo real con Node js


</template>

<script>
export default {
  name: 'Introduccion',
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
