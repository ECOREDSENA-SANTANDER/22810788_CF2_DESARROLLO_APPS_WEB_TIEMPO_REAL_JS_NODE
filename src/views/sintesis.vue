<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La construcción de aplicaciones web en tiempo real con Node.js parte de un entorno de desarrollo bien configurado: los componentes físicos (#[i hardware]) y el #[i software] base (sistema operativo, Node.js, npm y VS Code) son la base sobre la que se inicializa el proyecto mediante #[b.text-cus-7 npm init -y] y se instalan las dependencias con #[b.text-cus-7 npm install]. Sobre ese entorno se levanta un servidor HTTP con Express, cuyo comportamiento #[i stateless] se supera al integrar Socket.IO: una capa que establece un canal #[i full-duplex] persistente mediante un #[i handshake] inicial, permitiendo que cliente y servidor intercambien eventos en tiempo real con #[b.text-cus-7 socket.emit], #[b.text-cus-7 socket.broadcast.emit] e #[b.text-cus-7 io.emit]. Estos conceptos convergen en la pizarra virtual colaborativa, donde la API #[b.text-cus-7 canvas] del navegador captura los trazos del usuario, los envía al servidor y este los redistribuye instantáneamente a todos los participantes conectados. El recorrido completo sigue un flujo lógico de ocho etapas: desde la verificación del entorno hasta la prueba de concurrencia con múltiples clientes.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Construcción de aplicaciones web en tiempo real con Node.js”. En la parte superior se ubica el tema central dentro de un recuadro horizontal. Desde este título salen cuatro flechas hacia abajo que conectan con cuatro bloques principales: “Entorno”, “Servidor”, “Pizarra virtual” y “Flujo lógico”.El bloque “Entorno” incluye los elementos: hardware, software, VS Code y configuración. El bloque “Servidor” contiene: Node.js, Express, HTTP, WebSockets y Socket.io. El bloque “Pizarra virtual” agrupa: estructura del proyecto, servidor, cliente, canvas y eventos de dibujo. El bloque “Flujo lógico” presenta la secuencia: verificar, crear, inicializar, instalar, construir, integrar y probar.El mapa organiza de forma jerárquica los componentes esenciales para desarrollar aplicaciones web en tiempo real, desde la preparación del entorno y la construcción del servidor hasta la aplicación práctica y el proceso lógico de desarrollo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
