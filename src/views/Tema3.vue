<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Aplicación práctica: pizarra virtual colaborativa
      
      .bloque-texto-g.bloque-texto-g--inverso.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-2(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-3.ml-cus-2
          p.mb-3  Los conceptos abordados hasta este punto (servidor HTTP, WebSockets y emisión de eventos) adquieren sentido real cuando se integran en una aplicación funcional. Una pizarra virtual colaborativa es el escenario ideal para ello: múltiples usuarios conectados simultáneamente pueden dibujar en tiempo real y cada trazo aparece de forma instantánea en las pantallas de todos los participantes.
          p.mb-0 Esta aplicación no es un ejercicio decorativo. Comparte la arquitectura central de herramientas profesionales como Google Docs, Figma o Miro: un servidor que coordina eventos entre clientes sin almacenar el estado de la sesión en disco.
      
      
      Separador        
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Estructura del proyecto
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          p.mb-3 Antes de escribir el código, se organiza el proyecto con la siguiente estructura de archivos:
          .cajon.color-acento-contenido.p-4.mb-0
            .row.justify-content-center.mb-0.p-0.m-0
              .col-sm-12.col-lg-5
                img(src='@/assets/curso/temas/t3/3.svg')
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/4.svg')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png')
      p.mb-5(data-aos='fade-right') La carpeta #[b.text-cus-7 public/] contendrá el archivo HTML que se entregará al navegador. El archivo #[b.text-cus-7 index.js] será el servidor. Esta separación entre código del servidor y archivos del cliente es una convención estándar en proyectos Node.js; mezclarlos en la misma carpeta raíz dificulta el mantenimiento y la escalabilidad del proyecto.




      Separador        
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Código del servidor
      p.mb-5(data-aos='fade-right') Con la estructura del proyecto definida, se construye el archivo #[b.text-cus-7 index.js]  que actuará como núcleo de la aplicación. Este servidor combina la entrega de archivos estáticos al navegador con la gestión de eventos de dibujo en tiempo real mediante #[i sockets].

      TabsC.color-acento-contenido(data-aos='fade-right')
        .py-3.py-md-4(titulo="Configuración del servidor con entrega de archivos estáticos")
          p.mb-5 #[b.text-cus-7 express.static] le indica al servidor que entregue automáticamente cualquier archivo dentro de la carpeta #[b.text-cus-7 public/] cuando un navegador lo solicite. Sin esta línea, el servidor respondería con error 404 a cualquier petición de archivos HTML, CSS o JavaScript del cliente. El módulo nativo #[b.text-cus-7 path] garantiza que la ruta funcione correctamente en cualquier sistema operativo, independientemente de si usa barras / o \ como separador.
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-5
                .cajon.color-acento-contenido.p-5.mb-0
                  img(src='@/assets/curso/temas/t3/6.svg')

            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/5.png')

        .py-3.py-md-4(titulo="Gestión de eventos de dibujo en tiempo real")
          p.mb-5 El evento #[b.text-cus-7 'dibujar'] recibe del cliente las coordenadas del trazo y las reenvía a todos los demás participantes usando #[b.text-cus-7 socket.broadcast.emit()]. Se usa #[b.text-cus-7 broadcast] en lugar de #[b.text-cus-7 io.emit()] deliberadamente: el cliente que dibuja ya ve su propio trazo en pantalla de forma local, por lo que enviárselo de vuelta generaría una duplicación visual. Este es un ejemplo concreto de por qué la distinción entre métodos de emisión tiene consecuencias directas en el comportamiento de la aplicación.
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-5
                .cajon.color-acento-contenido.p-5.mb-0
                  img(src='@/assets/curso/temas/t3/7.svg')

            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/8.png')

        .py-3.py-md-4(titulo="Inicio del servidor")
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-8.p-5
                .cajon.color-acento-contenido.p-5.mb-0
                  img(src='@/assets/curso/temas/t3/9.svg')

            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/10.png')

      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Código del cliente
      p.mb-5(data-aos='fade-right') El archivo #[b.text-cus-7 public/index.html] contiene toda la interfaz y la lógica del cliente en un solo archivo:



      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .cajon.color-primario.p-5.mb-0
            p.mb-2 html
            pre.mb-0
              code.language-html(v-html="highlightedClientHtml")
            //img(src='@/assets/curso/temas/t3/11.svg')
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-7")(data-aos='fade-right')
        .row.align-items-center(titulo="El elemento canvas y el contexto 2D")
          .col-sm-12.col-lg-7.p-5
            p.mb-0 El elemento HTML #[b.text-cus-7 canvas] es una superficie de dibujo en píxeles controlada completamente mediante JavaScript. El método #[b.text-cus-7 getContext('2d')] entrega el conjunto de herramientas de dibujo: trazos, figuras, colores y transformaciones. Sin obtener este contexto, el #[b.text-cus-7 canvas] es únicamente un rectángulo vacío sin capacidad de renderizar nada.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/12.png')
        .row.align-items-center(titulo="La función dibujarLinea y el parámetro emitir ")
          .col-sm-12.col-lg-7.p-5
            p.mb-0 Esta función cumple una doble responsabilidad: dibuja el trazo localmente en el #[b.text-cus-7 canvas] y, si el parámetro #[b.text-cus-7 emitir] es #[b.text-cus-7 true], envía las coordenadas al servidor mediante #[b.text-cus-7  socket.emit()]. Cuando el servidor reenvía el evento a los demás clientes y estos lo reciben por #[b.text-cus-7  socket.on('dibujar')], llaman a la misma función con #[b.text-cus-7 emitir] en #[b.text-cus-7 false], evitando así un ciclo infinito donde cada cliente reenviaría indefinidamente los trazos recibidos.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/13.png')
        .row.align-items-center(titulo="Los eventos del ratón y el control del estado de dibujo ")
          .col-sm-12.col-lg-7.p-5
            p.mb-0 La variable #[b.text-cus-7 dibujando] actúa como un interruptor: se activa con #[b.text-cus-7 mousedown] y se desactiva con #[b.text-cus-7 mouseup] o #[b.text-cus-7 mouseleave]. Sin el evento #[b.text-cus-7 mouseleave], al arrastrar el cursor fuera del #[b.text-cus-7 canvas] y volver a entrar, el servidor continuaría recibiendo coordenadas de dibujo, aunque el usuario no tuviera el botón presionado, generando trazos involuntarios que degradan la experiencia de todos los participantes conectados.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/14.png')
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // HTML del cliente (se resalta en runtime para que se vea coloreado)
    clientHtml: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Pizarra virtual colaborativa</title>
    <style>
        body { margin: 0; background: #1a1a2e; display: flex;
               justify-content: center; align-items: center;
               height: 100vh; }
        canvas { background: #ffffff; cursor: crosshair;
                 border-radius: 8px; }
    </style>
</head>
<body>
    <canvas id="pizarra" width="800" height="500"></canvas>

    <script src="/socket.io/socket.io.js">${'</scr'}${'ipt>'}
    <script>
        const socket = io();
        const canvas = document.getElementById('pizarra');
        const ctx = canvas.getContext('2d');

        let dibujando = false;
        let xAnterior = 0;
        let yAnterior = 0;

        function dibujarLinea(x0, y0, x1, y1, color, emitir) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.stroke();

            if (emitir) {
                socket.emit('dibujar', { x0, y0, x1, y1, color });
            }
        }

        canvas.addEventListener('mousedown', (e) => {
            dibujando = true;
            xAnterior = e.offsetX;
            yAnterior = e.offsetY;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!dibujando) return;
            dibujarLinea(xAnterior, yAnterior, e.offsetX, e.offsetY, '#e63946', true);
            xAnterior = e.offsetX;
            yAnterior = e.offsetY;
        });

        canvas.addEventListener('mouseup', () => { dibujando = false; });
        canvas.addEventListener('mouseleave', () => { dibujando = false; });

        socket.on('dibujar', (datos) => {
            dibujarLinea(datos.x0, datos.y0, datos.x1, datos.y1, datos.color, false);
        });
    ${'</scr'}${'ipt>'}
</body>
</html>`,
  }),
  computed: {
    highlightedClientHtml() {
      return this.highlightAsHtml(this.clientHtml)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    escapeHtml(str) {
      // Escapamos solo lo necesario para que se renderice como texto:
      // - '&' y '<' y '>' para evitar que el navegador lo interprete como tags
      // - '"' se escapa porque lo usamos en atributos dentro del HTML resaltado
      // - NO escapamos "'" para evitar que se renderice como &#39; visible
      return str.replace(/[&<>"']/g, (ch) => {
        switch (ch) {
          case '&':
            return '&amp;'
          case '<':
            return '&lt;'
          case '>':
            return '&gt;'
          case '"':
            return '&quot;'
          case "'":
            return "'"
          default:
            return ch
        }
      })
    },
    highlightAsHtml(raw) {
      // Resalta una versión escapada del HTML con spans (sin depender de plugins externos).
      let s = this.escapeHtml(raw)

      // Bloque CSS específico del ejemplo (solo estas líneas deben ir en rojo)
      // Nota: lo hacemos antes del resto de reemplazos para no afectar otros tokens.
      s = s.replace(
        /(\n\s*body\s*\{[\s\S]*?\}\s*\n\s*canvas\s*\{[\s\S]*?\})/g,
        (m) => `<span class="tok-css-block">${m}</span>`,
      )

      // DOCTYPE
      s = s.replace(/&lt;!DOCTYPE\s+([a-zA-Z0-9]+)\s*&gt;/g, (_m, v) => {
        return `&lt;!DOCTYPE <span class="tok-doctype">${v}</span>&gt;`
      })

      // Nombres de tags: &lt;tag ... o &lt;/tag ...
      s = s.replace(/&lt;(\/)?([a-zA-Z][\w:-]*)/g, (_m, slash, name) => {
        return `&lt;${slash ? '/' : ''}<span class="tok-tag">${name}</span>`
      })

      // Atributos estilo: attr=&quot;value&quot;
      s = s.replace(
        /([a-zA-Z_:][\w:.-]*)=&quot;([^&]*)&quot;/g,
        (_m, name, value) => {
          return `<span class="tok-attr">${name}</span>=&quot;<span class="tok-value">${value}</span>&quot;`
        },
      )

      // Strings JS con comillas simples: 'texto'
      s = s.replace(/'([^']*)'/g, (_m, value) => {
        return "'" + `<span class="tok-js-str">${value}</span>` + "'"
      })

      // Keywords JS (conservador: solo las más comunes del snippet)
      s = s.replace(
        /\b(const|let|var|function|return|if|else|new)\b/g,
        (m) => `<span class="tok-js-kw">${m}</span>`,
      )

      // booleanos JS (true/false)
      s = s.replace(
        /\b(true|false)\b/g,
        (m) => `<span class="tok-js-bool">${m}</span>`,
      )

      // números (enteros y decimales)
      s = s.replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        (_m, n) => `<span class="tok-js-num">${n}</span>`,
      )

      // Métodos/funciones específicas del snippet (para que se vean en azul)
      s = s.replace(
        /\b(getElementById|getContext|dibujarLinea|beginPath|moveTo|lineTo|on|stroke|emit|addEventListener)\b/g,
        (m) => `<span class="tok-js-blue">${m}</span>`,
      )

      // Solo io() (cuando se llama como función) en azul
      s = s.replace(
        /\bio(?=\s*\()/g,
        (m) => `<span class="tok-js-blue">${m}</span>`,
      )

      // Identificadores específicos del snippet (en naranja)
      s = s.replace(
        /\b(document|x0|y0|x1|y1|color|emitir|datos)\b/g,
        (m) => `<span class="tok-js-orange">${m}</span>`,
      )

      return s
    },
  },
}
</script>

<style lang="sass">
.tok-css-block
  color: #c90b0b
  font-weight: 700

.tok-doctype
  color: #c90b0b
  font-weight: 700

.tok-tag
  color: #c90b0b
  font-weight: 700

.tok-attr
  color: #c90b0b
  font-weight: 700

.tok-value
  color: #09a82e

.tok-js-kw
  color: #e119e8
  font-weight: 700

.tok-js-str
  color: #09a82e

.tok-js-bool
  color: #1597ab
  font-weight: 700

.tok-js-num
  color: #1597ab
  font-weight: 700

.tok-js-blue
  color: #2569df
  font-weight: 700

.tok-js-orange
  color: #d98356
  font-weight: 700
</style>
