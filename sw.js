const CACHE_NAME = "portfolio-cache-v1";


const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/manifest.json",
  "/sw.js", 
  "/multimedia/Screenshot 2024-11-17 094327.png",
  "/multimedia/ajedrez-peon-alt.png",
  "/multimedia/arbol-2-pixilart.png",
  "/multimedia/arbol.png",
  "/multimedia/auditorio video0001-0440 - copia.mp4",
  "/multimedia/blender.png",
  "/multimedia/cabana.png",
  "/multimedia/calendario-reloj.png",
  "/multimedia/camara.png",
  "/multimedia/captura auditorio 2.png",
  "/multimedia/captura auditorio.png",
  "/multimedia/Captura de Pantalla 2023-02-13 a la(s) 13.50.08.png",
  "/multimedia/Captura de Pantalla 2023-03-23 a la(s) 8.35.54.png",
  "/multimedia/Captura de Pantalla 2023-04-05 a la(s) 8.54.27.png",
  "/multimedia/Captura de Pantalla 2023-04-13 a la(s) 13.14.28.png",
  "/multimedia/casa.png",
  "/multimedia/Certificado game on.pdf.png",
  "/multimedia/codigo-de-visualizacion.png",
  "/multimedia/Darkswordman attack 2.png",
  "/multimedia/darkswordman.png",
  "/multimedia/darksworman charge.png",
  "/multimedia/fantasma.gif",
  "/multimedia/fondo blanco.png",
  "/multimedia/fondo.png",
  "/multimedia/Glass and land.png",
  "/multimedia/Glass capa.png",
  "/multimedia/gmail.png",
  "/multimedia/gorro-de-graduacion.png",
  "/multimedia/imagen MA.png",
  "/multimedia/imagen MTAUT.png",
  "/multimedia/imagen MTSMF.png",
  "/multimedia/imagen TIDMS.png",
  "/multimedia/imagen TIENVD.png",
  "/multimedia/imagen0001.jpg",
  "/multimedia/imagen0002.png",
  "/multimedia/imagen0003.png",
  "/multimedia/imagen0004.png",
  "/multimedia/imagen0005.png",
  "/multimedia/imagen0006.png",
  "/multimedia/imagen0009.png",
  "/multimedia/imagen0010.png",
  "/multimedia/interfaz-de-usuario-del-navegador.png",
  "/multimedia/LinkedIn_logo_initials.png",
  "/multimedia/llamada-telefonica.png",
  "/multimedia/maletin-en-blanco.png",
  "/multimedia/mando.png",
  "/multimedia/marcador-de-mapa.png",
  "/multimedia/maya.png",
  "/multimedia/montana.png",
  "/multimedia/montañas con cielo.png",
  "/multimedia/montañas.png",
  "/multimedia/musica-alternativa.png",
  "/multimedia/personalizar-computadora (1).png",
  "/multimedia/personalizar-computadora (2).png",
  "/multimedia/personalizar-computadora.png",
  "/multimedia/pixil-gif-drawing.gif",
  "/multimedia/play-alternativo.png",
  "/multimedia/Potafolio.png",
  "/multimedia/sala de radio video0001-0350 - copia.mp4",
  "/multimedia/slime dagame.png",
  "/multimedia/slime run.png",
  "/multimedia/slime.gif",
  "/multimedia/unity.png",
  "/multimedia/20241121_010002.JPG",
  "/multimedia/unreal-engine.png",
  "/multimedia/visual-studio-code.png"
];


self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos cacheados");
      return cache.addAll(urlsToCache);  
    })
  );
});


self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Cache antiguo eliminado:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
