const CACHE_NAME = 'nube-mental-v1';

// Archivos a guardar para que funcione sin internet
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  // Guardamos el CDN de Tailwind para que funcione sin conexión si ya se descargó una vez
  'https://cdn.tailwindcss.com'
];

// 1. INSTALACIÓN: Guardar archivos en caché
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Fuerza a que el nuevo SW se active inmediatamente
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .catch((err) => console.log('Error caching assets:', err))
  );
});

// 2. ACTIVACIÓN: Limpiar cachés viejos si creaste una nueva versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Borra versiones antiguas
          }
        })
      );
    })
  );
  return self.clients.claim(); // Toma el control de inmediato
});

// 3. INTERCEPTOR DE RED (Offline First)
self.addEventListener('fetch', (event) => {
  // Estrategia: Primero buscar en Caché, si no está, buscar en Red
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Retorna desde el disco duro (Sin internet)
        }
        
        // Si no está en caché (ej. una actualización de tailwind), intenta en red
        return fetch(event.request).then((networkResponse) => {
            // Guardar dinámicamente cosas nuevas en caché (como fuentes) si se logran descargar
            if (event.request.url.startsWith('http')) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
            }
            return networkResponse;
        }).catch(() => {
            // Si falla la red y no está en caché, simplemente no hace nada (evita la pantalla de dinosaurio en assets menores)
            return new Response();
        });
      })
  );
});
