
/*
 * MI GIMNASIO
 * Service Worker - Versión 3
 *
 * Guarda los archivos de la aplicación
 * para permitir su uso sin conexión.
 *
 * No modifica ni elimina entrenamientos,
 * mediciones ni historial de localStorage.
 */

const CACHE = "mi-gimnasio-v3";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./tecnica.js?v=1",
  "./FFB8CAB0-13CD-4DBB-96A6-D924C18F5F70.png"
];

// Instalar y guardar los recursos
self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
  );
});

// Activar nueva versión y limpiar cachés antiguas
self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys()
      .then(claves =>
        Promise.all(
          claves
            .filter(clave =>
              clave.startsWith("mi-gimnasio-") &&
              clave !== CACHE
            )
            .map(clave => caches.delete(clave))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Servir recursos locales desde caché
self.addEventListener("fetch", evento => {
  if (evento.request.method !== "GET") return;

  const url = new URL(evento.request.url);

  if (url.origin !== self.location.origin) return;

  evento.respondWith(
    caches.match(evento.request)
      .then(respuesta => respuesta || fetch(evento.request))
  );
});
