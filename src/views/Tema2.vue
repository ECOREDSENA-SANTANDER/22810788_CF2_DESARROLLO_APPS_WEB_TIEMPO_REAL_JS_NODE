<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Construcción del servidor con Node.js

      .row.justify-content-center.mb-5.p-0.align-items-center.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.p-0
          img(src='@/assets/curso/temas/t2/1.png')
        .col-sm-12.col-lg-8.p-0
          .p-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/2.svg')
              .col-sm-12.col-lg-8
                  p.mb-0 Con el entorno configurado y las dependencias instaladas, el siguiente paso es levantar el servidor, la columna estructural de toda aplicación web en tiempo real. El servidor es el ente que permanece activo, escucha las peticiones de los clientes y coordina el flujo de información entre ellos.

      Separador  
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Arquitectura del servidor básico
      
      p.mb-5(data-aos='fade-right') Node.js por sí solo no impone una estructura para gestionar rutas ni peticiones HTTP. En la industria, esa responsabilidad recae sobre el #[i framework] Express, una capa ligera que organiza la lógica del servidor sin agregar complejidad innecesaria al proyecto.

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Arquitectura básica de un servidor Node.js con Express

      p.mb-5(data-aos='fade-right') Para que una aplicación web exista, un servidor debe estar activo y disponible para recibir peticiones de clientes o navegadores. Aunque Node.js incluye un módulo nativo llamado #[b.text-cus-7 http], en la industria profesional se utiliza el #[i framework] Express, que simplifica la creación de rutas y la gestión del servidor sin agregar complejidad innecesaria.

      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.br-2(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-3.ml-cus-2
          p.mb-3 Un servidor HTTP tradicional funciona como el recepcionista de un hotel muy concurrido. Cuando llega un huésped (el cliente o navegador web), realiza una petición específica, por ejemplo, solicitar la llave de una habitación (petición HTTP GET). El recepcionista procesa la solicitud, entrega la llave (respuesta HTTP) y de inmediato olvida al huésped. Si este regresa cinco minutos después a pedir una toalla, debe identificarse desde cero. A esta ausencia de memoria se le denomina protocolo #[i stateless] (sin estado): eficiente para páginas estáticas, pero completamente inadecuado para aplicaciones en tiempo real donde el servidor debe recordar quién está conectado y qué está haciendo.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          p.mb-2 Antes de escribir el código, se instalan las herramientas necesarias desde la terminal:
          .cajon.color-acento-contenido.p-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-8
                p.mb-4 bash
                .mb-0.d-flex #[.text-cus-3 npm install]&nbsp;express socket.io
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/5.svg')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png')

      p.mb-5(data-aos='fade-right') A continuación, se crea el archivo #[b.text-cus-7 index.js], el punto de entrada de la aplicación:


      .bg-color-3.ml-cus-3(data-aos='fade-right')
        .tarjeta.bg-color-4.ml-cus-3
          PasosB.color-acento-botones
            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Importación de módulos
                p.mb-5 Se cargan los módulos #[b.text-cus-7 express] y #[b.text-cus-7 http] en la RAM del servidor. El módulo #[b.text-cus-7 http] nativo es necesario porque más adelante se le inyectará la capa de #[i sockets]; Express por sí solo no soporta WebSockets.
                .row.justify-content-center.mb-5
                  .col-sm-12.col-lg-7
                    .cajon.color-acento-contenido.p-4
                      p.mb-2 javascript
                      .mb-1.d-flex #[.text-cus-4 const] &nbsp; express =   &nbsp;#[.text-cus-3 require]('#[.text-cus-2  express]');
                      .mb-0.d-flex #[.text-cus-4 const] &nbsp; http =  &nbsp; #[.text-cus-3 require]('#[.text-cus-2  http]');
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/6.png')

            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Inicialización de la aplicación
                p.mb-5 Al ejecutar #[b.text-cus-7 express()] se crea una instancia de la aplicación. Luego, #[b.text-cus-7  http.createServer(app)] construye un servidor físico de red que delega la inteligencia de rutas a Express. Esta separación es deliberada: permite que el mismo servidor atienda tanto peticiones HTTP tradicionales como conexiones WebSocket persistentes.
                .row.justify-content-center.mb-5
                  .col-sm-12.col-lg-8
                    .cajon.color-acento-contenido.p-4
                      p.mb-2 javascript
                      .mb-0.d-flex #[.text-cus-4 const] &nbsp; app =   &nbsp;#[.text-cus-3 express]();
                      .mb-0.d-flex.no-wrap.text-cus-8  #[.text-cus-4 const]&nbsp;servidor = http.#[.text-cus-3 createServer](app);
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/7.png')

            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Definición de una ruta básica
                p.mb-5 Se define la respuesta a la ruta raíz usando #[b.text-cus-7 req] (#[i Request] - la petición entrante) y #[b.text-cus-7 res] (#[i Response] - la respuesta saliente). Si el servidor no tiene ninguna ruta definida, cualquier petición producirá un error 404.
                .row.justify-content-center.mb-5
                  .col-sm-12.col-lg-10.col-xl-7
                    .cajon.color-acento-contenido.p-4
                      p.mb-3.text-cus-8 javascript
                      .mb-1.d-flex.text-cus-8 app.#[.text-cus-3 get]('#[.text-cus-2 /]', (#[.text-cus-5 req], &nbsp;#[.text-cus-5 res]) => {
                      .mb-1.d-flex.ml-cus-5.no-wrap.text-cus-8    res.#[.text-cus-3 send]('#[.text-cus-2 Servidor en línea y esperando conexiones.]');
                      .mb-0.d-flex.text-cus-8  });
                  .col-sm-12.col-xl-5.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t2/8.png')


            .row.ml-cus-4(titulo="")
              .col-sm-12.col-lg-12
                h3 Puesta en marcha del servidor
                p.mb-5 #[b.text-cus-7 servidor.listen] bloquea el puerto 3000 y mantiene el proceso activo indefinidamente dentro del #[i event loop]. Si el puerto ya está en uso por otra aplicación, Node.js arrojará un error #[b.text-cus-7  EADDRINUSE] — en ese caso se debe detener el proceso que ocupa ese puerto o cambiar el número de puerto en la variable #[b.text-cus-7 PUERTO].
                .row.justify-content-center.mb-5
                  .col-sm-12.col-lg-9
                    .cajon.color-acento-contenido.p-4.overflow-auto.w-cus-4
                        pre(style="white-space: pre;").mb-0
                          code.language-JavaScript.d-flex.flex-column.mb-0.text-cus-9
                            | javascript
                            | #[.d-flex #[.text-cus-4 const]&nbsp;#[.text-cus-6 PUERTO] = #[.text-cus-6 3000];]
                            | #[.d-flex servidor.#[.text-cus-3 listen](`#[.text-cus-6 PUERTO]`, () => {]
                            | #[.d-flex.ml-cus-5 #[.text-cus-5 console].#[.text-cus-3 log](`#[.text-cus-2 Servidor ejecutándose en http://localhost]:${#[.text-cus-6 PUERTO]}`);]
                            | #[.d-flex }); ]
                  .col-sm-12.col-lg-3.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/9.png')














      Separador        
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 WebSockets: comunicación bidireccional en tiempo real
      
      p.mb-5(data-aos='fade-right') El servidor HTTP construido en la sección anterior resuelve eficientemente las peticiones tradicionales: un cliente pregunta, el servidor responde y la conexión se cierra. Sin embargo, este modelo tiene un límite estructural que lo hace inviable para aplicaciones en tiempo real: el servidor jamás puede iniciar una conversación; siempre espera a que el cliente dé el primer paso.  

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Comparación entre HTTP tradicional (#[i polling]) y WebSockets
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.text-start Característica
              th.text-start  HTTP tradicional #[i (polling)]
              th.text-start  WebSockets
          tbody
            tr
              td Tipo de conexión
              td Nueva conexión por petición
              td Conexión persistente
            tr
              td Quién inicia
              td Solo el cliente
              td Cliente o servidor
            tr
              td Dirección
              td Unidireccional
              td Bidireccional #[i (full-duplex)]
            tr
              td Consumo de red
              td Alto - peticiones repetitivas
              td Bajo - canal único abierto
            tr
              td Uso ideal
              td Páginas estáticas
              td Tiempo real: chat, tableros, GPS
      .cajon.color-acento-contenido.p-5.mb-5(data-aos='fade-right')
        p.mb-3 Para simular tiempo real sobre HTTP, en el pasado se usaba una técnica llamada #[i short polling] (sondeo corto): programar el navegador para enviar una petición automática cada pocos segundos preguntando: "¿hay mensajes nuevos?". El resultado es el equivalente informático a alguien preguntando repetidamente si ya llegó un correo; la mayoría de las veces la respuesta es negativa, pero el servidor igual debe procesar cada consulta, desperdiciando ancho de banda y saturando la red.
        p.mb-0 WebSockets resuelve este problema de raíz estableciendo un canal de comunicación persistente, bidireccional y #[i full-duplex]: tanto el cliente como el servidor pueden enviar y recibir información en cualquier momento, sin necesidad de nuevas peticiones.    

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t2/10.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-5.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-contenido.mb-4.p-4(
              texto="Del <em>polling</em> al tiempo real: cómo funcionan los WebSockets"
              :audio="require('@/assets/curso/temas/t2/Podcast_CF2-76130641.mp3')"
          )
              p.mb-0 Para comprender de forma conversacional cómo WebSockets supera las limitaciones del protocolo HTTP tradicional, se sugiere explorar el siguiente recurso de audio:  

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 El proceso de conexión                   
      
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          LineaTiempoE.color-acento-botones
            .row(titulo="Momento 1")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img.w-75(src='@/assets/curso/temas/t2/13.svg')
              .col-sm-12.col-lg-9
                h3 La petición inicial 
                p.mb-0 El navegador realiza una petición HTTP normal, pero incluye una cabecera especial solicitando un #[i upgrade] (mejora de conexión). Es como solicitar pasar de una carta postal a una llamada telefónica directa.
                                   
            .row(titulo="Momento 2")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img.w-75(src='@/assets/curso/temas/t2/14.svg')
              .col-sm-12.col-lg-9
                h3 La aceptación del servidor  
                p.mb-0 Si el servidor está configurado para WebSockets, acepta la solicitud y confirma el #[i upgrade]. A partir de este instante la conexión HTTP se transforma en un túnel TCP abierto de forma permanente.
            
            .row(titulo="Momento 3")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img.w-75(src='@/assets/curso/temas/t2/15.svg')
              .col-sm-12.col-lg-9
                h3 El canal activo 
                p.mb-0 El canal queda abierto indefinidamente. El servidor adquiere la capacidad de enviar (#[i push]) datos al cliente en el momento exacto en que ocurren, sin que el cliente tenga que preguntar. Este es el principio de la comunicación en tiempo real.







      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Integración de #[i sockets] al servidor                   
      p.mb-3(data-aos='fade-right') Se modifica el archivo #[b.text-cus-7 index.js] para agregar la capa de WebSockets mediante socket.io.
      p.mb-5(data-aos='fade-right') A continuación, se describe el análisis crítico de cada bloque:
      .cajon.color-primario.p-5.mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-8.col-xl-7
              pre(style="white-space: pre;").mb-0
                code.language-JavaScript.d-flex.flex-column.mb-0.text-cus-9
                  | #[.mb-3.d-flex javascript]
                  | #[.mb-1.d-flex #[.text-cus-4 const] &nbsp; express = &nbsp;#[.text-cus-3 require]('#[.text-cus-2 express]');]
                  | #[.mb-1.d-flex #[.text-cus-4 const] &nbsp; http = &nbsp;#[.text-cus-3 require]('#[.text-cus-2 http]');]
                  | #[.mb-1.d-flex #[.text-cus-4 const] &nbsp;{&nbsp; #[.text-cus-5 Server]&nbsp; } = &nbsp;#[.text-cus-3 require]('#[.text-cus-2 socket.io]');]

                  | #[.mb-1.d-flex #[.text-cus-4 const] &nbsp; app = &nbsp;#[.text-cus-3 express]();]
                  | #[.mb-1.d-flex #[.text-cus-4 const] &nbsp; servidor = http.&nbsp;#[.text-cus-3 createServer](app);]
                  | #[.mb-1.d-flex #[.text-cus-4 const] &nbsp; io = &nbsp;#[.text-cus-4 new]&nbsp; #[.text-cus-5 Server](servidor);]

                  | #[.mb-1.d-flex io.#[.text-cus-3 on]('#[.text-cus-2 connection]', (#[.text-cus-5 socket]) => {]
                  | #[.mb-3.d-flex.ml-cus-5 #[.text-cus-5 console].#[.text-cus-3 log](`#[.text-cus-2 Nueva conexión establecida. ID]: ${#[.text-cus-2 socket.id]}`);]

                  | #[.mb-1.d-flex.ml-cus-5 socket.#[.text-cus-3 on]('#[.text-cus-2 mensaje_chat]', (#[.text-cus-5 datos]) => {]
                  | #[.mb-1.d-flex.ml-cus-6 #[.text-cus-5 console].#[.text-cus-3 log]('#[.text-cus-2 Mensaje recibido:]', datos);]
                  | #[.mb-1.d-flex.ml-cus-6 io.#[.text-cus-3 emit]('#[.text-cus-2 mensaje_chat]', datos);]
                  | #[.mb-3.d-flex.ml-cus-5    });]

                  | #[.mb-1.d-flex.ml-cus-5 socket.#[.text-cus-3 on]('#[.text-cus-2 disconnect]', () => {]
                  | #[.mb-1.d-flex.ml-cus-6         #[.text-cus-5 console].#[.text-cus-3 log](`#[.text-cus-2 Conexión cerrada. ID:] ${#[.text-cus-2 socket.id]}`);]
                  | #[.mb-1.d-flex.ml-cus-5 });]
                  | #[.mb-1.d-flex });]

                  | #[.mb-1.d-flex servidor.#[.text-cus-3 listen](#[.text-cus-6 3000], () => {]
                  | #[.mb-1.d-flex.ml-cus-5    #[.text-cus-5 console].#[.text-cus-3 log](`#[.text-cus-2 Servidor con sockets ejecutándose en el puerto 3000.]`);]
                  | #[.mb-1.d-flex });]
           
          .col-sm-12.col-lg-4.col-xl-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/11.png')
      


      TabsA.color-secundario.mb-5(data-aos='fade-right')
        .tarjeta.bg-color-6.p-4(titulo="const io = new Server(servidor)")
          p.mb-0 Se crea el puente entre el mundo HTTP tradicional y el mundo de los WebSockets. La variable io representa el centro de control de todas las comunicaciones en tiempo real. Sin este paso, el servidor solo puede atender peticiones HTTP convencionales y no tiene capacidad de mantener conexiones persistentes.

        .tarjeta.bg-color-6.p-4(titulo="io.on('connection', (socket) => {...})")
          p.mb-0 Este es el vigilante de la puerta: cada vez que un navegador establece conexión, se dispara este evento. El objeto #[i socket] representa a ese usuario específico. Si se conectan 50 clientes simultáneamente, habrá 50 objetos #[i socket] distintos en memoria, cada uno identificado con un socket.id único. No gestionar correctamente la desconexión mediante el evento #[i disconnect] provoca que estos objetos permanezcan en memoria indefinidamente, generando una fuga de memoria (#[i memory leak]) que degrada el rendimiento del servidor con el tiempo.      

        .tarjeta.bg-color-6.p-4(titulo="socket.on() vs. io.emit()")
          p.mb-3  Esta distinción es fundamental en la arquitectura de aplicaciones en tiempo real:
          p.mb-0  • #[b.text-cus-7 socket.on():] escucha eventos de un usuario específico.
          p.mb-0  • #[b.text-cus-7 socket.emit():] envía un mensaje únicamente al emisor.
          p.mb-0  • #[b.text-cus-7 socket.broadcast.emit():] envía a todos los conectados excepto al emisor.
          p.mb-0  • #[b.text-cus-7 io.emit():] funciona como un megáfono: transmite el mensaje a todos los clientes conectados simultáneamente.       










      p.mb-5(data-aos='fade-right') Elegir incorrectamente entre estas cuatro opciones produce errores de lógica difíciles de detectar: mensajes que no llegan, mensajes duplicados o usuarios que reciben información que no les corresponde.    

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Métodos de emisión en socket.io y alcance por destinatario
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8
          .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.text-start Método
                    th.text-start ¿A quién llega?
                tbody
                  tr
                    td.text-cus-7.fw-bold socket.emit()
                    td Solo al emisor
                  tr
                    td.text-cus-7.fw-bold socket.on()
                    td Escucha eventos de un cliente específico
                  tr
                    td.text-cus-7.fw-bold socket.broadcast.emit()
                    td A todos los clientes conectados excepto al emisor
                  tr
                    td.text-cus-7.fw-bold io.emit()
                    td A todos los clientes conectados sin excepción
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/12.png')
      
           
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
