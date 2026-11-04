
/*
 * MI GIMNASIO
 * Service Worker - Versión 2
 * Funcionamiento sin conexión
 */

const CACHE = "mi-gimnasio-v2";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./FFB8CAB0-13CD-4DBB-96A6-D924C18F5F70.png"
];

// Instalar y guardar los archivos
self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
  );
});

// Eliminar versiones antiguas de caché
self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys().then(claves =>
      Promise.all(
        claves
          .filter(clave =>
            clave.startsWith("mi-gimnasio-") &&
            clave !== CACHE
          )
          .map(clave => caches.delete(clave))
      )
    ).then(() => self.clients.claim())
  );
});

// Servir archivos guardados sin conexión
self.addEventListener("fetch", evento => {
  if (evento.request.method !== "GET") return;

  if (
    new URL(evento.request.url).origin !==
    self.location.origin
  ) return;

  evento.respondWith(
    caches.match(evento.request)
      .then(respuesta =>
        respuesta || fetch(evento.request)
      )
  );
});
