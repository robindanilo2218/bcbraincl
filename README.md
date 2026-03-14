# 🧠 Nube Mental - Tu RAM Externa

![Nube Mental App Context](https://img.shields.io/badge/Estado-Activo-emerald?style=for-the-badge) ![Plataforma](https://img.shields.io/badge/Plataforma-PWA_|_Web-cyan?style=for-the-badge) ![TailwindCSS](https://img.shields.io/badge/Diseño-TailwindCSS-blue?style=for-the-badge&logo=tailwind-css)

**Nube Mental** es una aplicación Web Progresiva (PWA) diseñada para funcionar como tu *memoria activa* o *RAM externa*. Su verdadero propósito es permitirte **vaciar la mente**. Como seres humanos, tendemos a cargar una "nube de preocupaciones" o una lista interminable de cosas por hacer, y a veces simplemente "se nos va la señal" de esa nube debido al cansancio o al estrés. 

Al descargar estas tareas de tu mente a la aplicación de forma rápida e intuitiva, reduces dramáticamente la carga cognitiva. La app se asegura de que no olvides pasos críticos de tus rutinas diarias sin importar cuán cambiante sea tu horario laboral (turnos rotativos, patrones 2-2-3 o días fijos). Siempre estará ahí para recordártelo.

## ✨ Características Principales

- 🧠 **Descarga Mental Instantánea**: Interfaz extremadamente fácil, rápida e intuitiva para que vaciar tus preocupaciones en la app no sea una carga en sí misma. Siempre disponible.
- 🔄 **Motor de Turnos Inteligente**: Soporte nativo para horarios rotativos, el complejo patrón 2-2-3, y semanas de turno fijo. Se ajusta todo automáticamente en base a tu contexto temporal.
- ⚡ **Rendimiento, Minimalismo y Offline**: Construida en un único archivo (`index.html`), impulsada por **Tailwind CSS**. Sin frameworks pesados y totalmente reactiva. Al ser PWA, funciona al 100% sin conexión a internet.
- ⏰ **Rutinas Ancladas Dinámicas**: Define actividades de forma relativa ("90 min antes de la entrada al turno"). La app recalcula la hora exacta diariamente según tu turno.
- 🔔 **Notificaciones Push y Alertas Precisas**: Notificaciones locales que funcionan excepcionalmente bien para mantenerte a tiempo sin distracciones.
- 📆 **Fusión con Google Calendar**: Opción de exportar tu rutina diaria completa o actividades individuales directamente a tu Calendario de Google con un simple clic.
- 🗃️ **Bloques de Memoria**: Un sistema flexible tipo "checklists" separadas por contexto (Personal / Trabajo) para volcar la mente a la "RAM".
- 📅 **Excepciones y Turnos Modificados**: Control total sobre ausencias informadas, días libres o modificaciones puntuales al horario programado.

## 🛠️ Tecnologías

- **HTML5 & Vanilla JavaScript**: Motor estable y un objeto de estado unificado simulando la reactividad moderna (cero dependencias externas).
- **Tailwind CSS via CDN**: Sistema de diseño de alta legibilidad, tema oscuro, animaciones por CSS, minimalista e hiper-optimizado.
- **Service Workers API**: Caching de recursos para apertura instantánea y modo offline garantizado.
- **Local Storage API**: Persistencia segura; los datos del usuario se guardan únicamente de manera local en el navegador, con privacidad máxima sin depender de bases de datos de terceros.

## 🚀 Instalación y Uso Local

Dado que es una PWA pensada con foco en arquitectura Web:

1. Aloja la carpeta del proyecto en cualquier servidor moderno o herramienta local (Ej: `Live Server` en VSCode, GitHub Pages, Vercel).
2. Si prefieres abrir el `index.html` directo en el PC, verás la experiencia de uso total (con ciertas restricciones lógicas de notificaciones web debido a las políticas de seguridad de navegadores locales sobre `file://`).
3. Accede desde tu móvil mediante IP local (o dominio web) para que el navegador sugiera **"Agregar a Inicio / Instalar "**. ¡Listo! Nube Mental será ahora una App independiente en el dispositivo.

## 💡 Filosofía y Motivación

La carga mental consume nuestra energía lentamente, en especial bajo condiciones de rotaciones continuas, cambios de horario laboral o turnos dinámicos nocturnos que rompen rutinas estándar. Nube Mental nace de la premisa de responder a la pregunta automatizada: *"¿A qué hora debí empezar mi rutina de preparativos para hoy?"*

---
Desarrollado para quienes necesitan recuperar capacidad de procesamiento interno optimizando su tiempo y rutinas diarias.