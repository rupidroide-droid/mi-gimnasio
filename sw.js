
/*
 * MI GIMNASIO
 * Service Worker - Fase 1, versión 1.0
 *
 * Guarda los archivos de la aplicación
 * para permitir su uso sin conexión.
 *
 * Los entrenamientos y pesos se almacenan
 * en el dispositivo mediante localStorage.
 */

const CACHE = "mi-gimnasio-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
  );
});

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

self.addEventListener("fetch", evento => {
  if (evento.request.method !== "GET") return;

  const url = new URL(evento.request.url);

  if (url.origin !== self.location.origin) return;

  evento.respondWith(
    caches.match(evento.request)
      .then(guardado => {
        if (guardado) return guardado;

        return fetch(evento.request)
          .then(respuesta => {
            if (respuesta.ok) {
              const copia = respuesta.clone();

              caches.open(CACHE)
                .then(cache =>
                  cache.put(evento.request, copia)
                );
            }

            return respuesta;
          });
      })
  );
});
