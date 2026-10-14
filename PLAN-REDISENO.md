# Plan de rediseño · De María Restaurantes

Fecha: 14-10-2026. Este plan sustituye la web actual, que es una sola página: `index.html`, más `css/styles.css` y `js/main.js`.

---

## 1. Diagnóstico de la web actual

| Problema | Por qué importa |
|---|---|
| Todo cabe en un único `index.html` con 8 secciones apiladas | No hay una URL por casa, por carta ni por eventos. Google no puede posicionar cada local por separado y el usuario tiene que hacer scroll para encontrarlo todo. |
| La estética imita una carta en papel: pestañas de carpeta, hoja con precios, postal en el pie | Funciona como guiño, pero toda la web se queda en un único truco. No transmite experiencia, fuego ni sala. |
| Está pensada para Félix Boix y trata a las otras casas como una lista | El grupo tiene 3 casas activas y cada una merece su propia página. |
| Muestra **Ópera** como casa abierta | La web oficial del grupo ([demariarestaurantes.es](https://www.demariarestaurantes.es/)) solo lista Félix Boix, Preciados y Majadahonda. Ópera debe salir de la web. |
| Las fotos son de clientes de Tripadvisor, de Privateaser y de ¡Hola!, con un máximo de 1120 px | Tienen derechos ajenos y no dan la calidad que exige un diseño premium. Hace falta una sesión de fotos propia. |
| La reserva solo funciona por `mailto:` | Si el usuario no tiene un cliente de correo configurado, no puede reservar. Además, el restaurante ya está en TheFork. |
| Le faltan piezas | Versión en inglés (Preciados está en zona turística), páginas legales (LSSI/RGPD), página de grupos y eventos, 404 y una imagen OG por página. |

---

## 2. Lo que sabemos del restaurante (investigación)

### El grupo
- **Empresa:** De María Restaurantes S.L., constituida en 1996. Su objeto social es la explotación de un restaurante de comida argentina.
- **Origen:** la casa de Félix Boix funciona desde 1994. No hay datos públicos sobre el fundador.
- **Locales históricos** (registro de sucursales y prensa): Correo 2, Gran Vía 72, Cruz 1, Hortaleza 81, Carrera de San Jerónimo 5 y Parrilla El Gaucho (Tetuán 34). Dan para una línea de tiempo.
- **Posicionamiento:** es «un asador de cortes argentinos» ([¡Hola!, 2021](https://www.hola.com/cocina/noticias/20210114182523/restaurante-de-maria-alessandro-lequio-maria-palacios/)) y lleva «calidad argentina pura y dura». Se le define como «lugar de encuentro de las figuras del fútbol» ([El Debate, 2022](https://www.eldebate.com/estilo-vida/restaurantes/20220930/maria_62377.html)).

### Las casas activas (según la web oficial del grupo)

| Casa | Dirección | Teléfono | Rasgos |
|---|---|---|---|
| Félix Boix (la primera, 1994) | C/ Félix Boix 5, 28036 · Chamartín | 913 596 507 · 913 591 151 · 648 06 05 00 | 2 salones para 200 personas, reservado para 50, terraza, aparcacoches. Metro Cuzco y Plaza de Castilla. |
| Preciados | C/ Preciados 32, 28013 · Sol/Callao | 915 211 603 | Zona turística. OpenTable la sitúa entre 31 y 50 €. Según esMadrid abre de 12:30 a 1:30. |
| Majadahonda | Av. de las Moreras 42, C.C. Cerro del Espino, 28220 | 916 027 419 | Terraza. Las reseñas destacan empanadas, entraña, provoleta y chorizo criollo, y avisan de que se llena. |

### Rituales de la casa (son contenido diferencial, confirmado en varias fuentes)
1. **Al sentarse:** llegan a la mesa chimichurri, salsa de pimienta, tostas y crema de queso.
2. **Sopa de temporada, de cortesía:** gazpacho o salmorejo en verano y crema de verduras (de calabaza, por ejemplo) en invierno. Algunos días hay una copa de cava.
3. **La comida:** parrilla de carbón, con mollejas, morcilla, provoleta y chorizo criollo como imprescindibles.
4. **El final, invitación de la casa:** sorbete de mandarina, yogur con salsa de mango y los chupitos tradicionales ([Naked Madrid](https://www.nakedmadrid.com/2015/12/15/de-maria-argentinian-restaurant/)).
5. **El ambiente:** luz tenue, jazz a poco volumen, camareros de chaqueta blanca y mantel blanco.

### Prensa y clientela
- **La pared de fotos:** Beckham, Bardem, futbolistas y políticos.
- **María Palacios y Alessandro Lequio:** llevan más de 20 años yendo y fue el primer restaurante al que fueron juntos.
- **Carlos Alcaraz:** cenó allí en el Mutua Madrid Open de 2023.
- **Recomendaciones de la prensa:** ¡Hola! recomienda la provoleta, el tartar de atún, las patatas soufflé y las mollejas. El Debate destaca la mermelada de guindilla («el secreto») y el ravioloni de ricota.
- **Valoraciones:**

  | Fuente | Puntuación |
  |---|---|
  | Google | 9,2 sobre 3.487 opiniones |
  | Tripadvisor | 4,3 sobre 897 opiniones |
  | TheFork | 7,4 sobre 276 opiniones |
  | Macarfi | Comida 7,0 · Decoración 7,0 · Servicio 7,2 |

### Datos que hay que confirmar por teléfono antes de publicar
- **Horario de Félix Boix:** la web actual dice que abre todos los días de 13:00 a 16:30 y de 20:30 a 1:00. esMadrid (marzo de 2025) dice que de domingo a jueves cierra a las 00:30 y abre las cenas a las 21:00.
- **Horario de Preciados:** esMadrid dice de 12:30 a 1:30, todos los días.
- **Carta:** si es la misma en las 3 casas y si los precios son los de hoy.
- **Ópera:** si cerró definitivamente.
- **Marca «Mascort»:** figura en el registro mercantil y no hay rastro público de ella.

---

## 3. Concepto de diseño: «Brasa y mantel»

La idea es que la web huela a carbón y se sienta a mesa puesta. Se construye sobre tres capas, ordenadas de más oscuro a más claro, igual que la experiencia en el restaurante:

1. **Brasa (casi negro carbón):** fuego, vídeo, la parrilla. Es la entrada y la emoción.
2. **Caoba (marrón madera):** la sala, las fotos de la pared, el jazz. Es la historia.
3. **Mantel (blanco roto):** la carta, los datos y la reserva. Es lo práctico, limpio y legible.

El usuario baja de la brasa al mantel en cada página. El rojo De María se reserva para una sola cosa: la acción de reservar.

### Referencias de oficio
Son patrones que se pueden aprender, no diseños que haya que copiar:
- **Hawksmoor (hawksmoorrestaurants.com):** grupo de asadores con varias sedes, una página por local y una carta como documento vivo.
- **Gaucho (gauchorestaurants.com):** asador argentino premium que usa el fuego como protagonista y tiene un selector de local siempre visible.
- **Don Julio, Buenos Aires (parrilladonjulio.com):** parrilla clásica que da protagonismo a los cortes y al oficio del parrillero.
- **St. JOHN y Noble Rot:** tono editorial, mucho espacio en blanco y tipografía con carácter.

### Qué cogemos de cada skill
| Skill | Qué aporta |
|---|---|
| **design-taste-frontend (v2)** | Dirección de arte con *page-is-the-object*, sin rasgos de diseño hecho por IA. El inspector real se ejecuta a 1440, 768 y 390 px. Los titulares no pasan de 2 líneas y hay como mucho 5 tamaños de texto. |
| **high-end-visual-design** | Arquetipo «Editorial Luxury» con tonos espresso, serif de alto contraste y grano fijo al 3 %. Mucho espacio vertical, entre 96 y 160 px por sección. |
| **gpt-taste** | Estructura AIDA por página, una sección *sticky* fijada (los rituales) y titulares con una imagen pequeña en línea, por ejemplo «La **[foto de brasa]** provoleta». |
| **emil-design-eng** | Curva `ease-out` (0.23, 1, 0.32, 1). Pulsación a `scale(.97)`. Las interacciones duran menos de 300 ms. El hover solo se activa con puntero fino. Los menús se despliegan desde el elemento que los abre. |
| **apple-design** | Barra translúcida con desenfoque y borde degradado en lugar de una línea dura. La respuesta se da al pulsar, no al soltar. Se respetan `prefers-reduced-motion` y `prefers-reduced-transparency`. |
| **redesign-existing-projects** | Auditoría de estados: foco visible, errores en línea en los formularios, enlace activo marcado y `text-wrap: balance`. |
| **mobile-native** | Botón «Reservar» fijo abajo, en la zona del pulgar. Altura con `100dvh`. Inputs de 16 px para que el móvil no haga zoom. `safe-area-inset`. |
| **animate / animation-performance** | Solo se animan `transform` y `opacity`. Las animaciones que dependen del scroll usan `animation-timeline: view()`, con alternativa estática si el navegador no lo soporta. |
| **frontend-ui-engineering** | Accesibilidad WCAG 2.2 AA, HTML semántico y componentes reutilizables. |

---

## 4. Arquitectura: de una página a un sitio

```
/                         Inicio del grupo
/carta/                   Carta interactiva (una sola fuente de datos)
/casas/felix-boix/        Ficha de casa (plantilla común)
/casas/preciados/
/casas/majadahonda/
/la-casa/                 Historia, rituales y la pared
/grupos-y-eventos/        Reservado, menús para grupos, empresas y catering
/reservar/                Reserva en pasos (con la casa elegida)
/en/…                     Versión en inglés (fase 4)
/aviso-legal/ /privacidad/ /cookies/
/404.html
```

**Navegación global**
- **Cabecera translúcida:** logo, Carta, Casas ▾, La casa, Grupos y el botón Reservar en rojo.
- **«Casas ▾»:** abre un panel con las 3 casas, una foto de cada una y su estado en vivo («Abierto ahora»).
- **Móvil:** menú a pantalla completa, con los enlaces apareciendo en cascada y el botón Reservar fijo abajo.
- **Entre páginas:** transición con View Transitions entre documentos (`@view-transition { navigation: auto }`). La foto de una casa crece desde la tarjeta hasta el hero de su página. No necesita ningún framework.

---

## 5. Página por página

### 5.1 Inicio `/`
```
┌──────────────────────────────────────────────┐
│ [cabecera translúcida]          [Reservar]   │
│                                              │
│   VÍDEO A SANGRE: brasa + parrillero (16:9)  │
│   De María                                   │
│   Asador argentino en Madrid desde 1994      │
│   [Reservar mesa]  Félix Boix · Preciados ·  │
│                    Majadahonda (estado vivo) │
└──────────────────────────────────────────────┘
 Tres casas: tarjetas grandes y asimétricas (una de 8 col. y dos de 4), con
   foto, barrio, estado en vivo y "Ver casa →"
 Los imprescindibles: un titular con foto en línea y una fila horizontal
   arrastrable con mollejas, provoleta, chuletón, morcilla y chorizo criollo
   (foto grande con nombre y precio)
 El ritual (resumen): 3 pasos, con enlace a /la-casa/
 La pared: un tira de fotos en blanco y negro que se desplaza lento, con una
   cita de ¡Hola!
 Cifras: 1994 · 3 casas · 200 cubiertos en Félix Boix · Google 9,2
 Llamada a la acción final, a todo el ancho, sobre fondo mantel
 Pie: 3 casas con teléfonos, Instagram, aviso legal y logo grande
```

### 5.2 Carta `/carta/`
Es lo que más se ha pedido mejorar: deja de imitar un papel y pasa a ser una herramienta.
- **Navegación por categorías:** índice fijo en una columna lateral en escritorio y como chips horizontales en móvil. Las categorías son Entradas, Parrilla, Carnes a la brasa, Cocina, Pescados, Ensaladas, Verduras, Pastas, Guarniciones, Postres y Grupos.
- **Mapa de cortes:** un SVG interactivo de la res. Al pasar el ratón o pulsar sobre ojo de bife, lomo, solomillo, asado de tira, T-bone o chuletón, se ilumina la pieza y aparece su ficha (textura, punto recomendado y precio). Ningún asador madrileño tiene algo así.
- **Guía del punto:** de vuelta y vuelta a hecho, cinco niveles con su color de corte y temperatura interna. Es contenido útil, educativo y de marca.
- **Platos con foto:** al abrir uno se despliega una ficha con la foto grande. Los platos sin foto quedan como líneas tipográficas limpias.
- **Filtros:** «Para compartir», «Sin gluten» y «Para dos».
- **Una sola fuente de datos:** `carta.json`. Si una casa (Majadahonda) tiene una carta más corta, la ficha de esa casa la filtra.
- **PDF imprimible:** una hoja de estilos de impresión, sin generar el PDF a mano.

### 5.3 Ficha de casa `/casas/<casa>/` (plantilla común)
- **Hero:** foto de la fachada o la sala, nombre, barrio y estado en vivo («Abierto · cierra a la 1:00»).
- **Ficha rápida en dos columnas:** dirección, horario, teléfonos, cómo llegar (metro, bus, BiciMAD, aparcacoches) y un mapa estático que, al pulsarlo, abre Google Maps. El mapa no se carga como iframe hasta que el usuario lo pide.
- **Los salones:** galería asimétrica con lightbox. En Félix Boix se ven los 2 salones, el reservado para 50, la barra y la terraza.
- **Lo propio de cada casa:** la pared en Félix Boix, el centro de Madrid en Preciados y la terraza en Majadahonda.
- **Reseñas:** 3 citas reales con su fuente y la nota agregada.
- **Reservar en esta casa:** el formulario llega con la casa ya elegida.
- **Datos estructurados:** JSON-LD `Restaurant` propio, con `hasMenu`, `openingHoursSpecification` y `geo`.

### 5.4 La casa `/la-casa/`
- **Línea de tiempo horizontal:** de 1994 en Félix Boix a 1996, cuando se constituye la S.L., pasando por los locales de Correo, Gran Vía, Hortaleza, Cruz, San Jerónimo y El Gaucho, hasta las 3 casas de hoy.
- **El ritual, sección fijada:** a la izquierda el título queda fijo y a la derecha avanzan seis escenas con el scroll: salsas y tostas, sopa de temporada, cava, parrilla, sorbete de mandarina y chupito. Cada escena tiene foto y dos líneas de texto.
- **La pared:** un mosaico de las fotos enmarcadas que se ven en la sala, en blanco y negro, con el nombre al pasar el ratón. Antes hay que confirmar los derechos de imagen.
- **El equipo:** retratos de los camareros de chaqueta blanca y del parrillero, si el restaurante lo autoriza.

### 5.5 Grupos y eventos `/grupos-y-eventos/`
- **Espacios:** reservado para 50, salón completo y terraza, con su capacidad y fotos.
- **Menús:** degustación (30 €) y especial (50 €), con sus platos desplegables.
- **Tipos de encuentro:** empresa, celebración y catering.
- **Formulario de presupuesto:** fecha, número de personas, tipo y casa. Valida en el navegador y lo envía un servicio de formularios como Formspree o Netlify Forms.

### 5.6 Reservar `/reservar/`
- **Pasos con resumen siempre visible:** casa → personas → día → hora → zona → datos.
- **Horas:** se calculan con el horario de cada casa, reutilizando el `status()` actual ampliado por casa.
- **Cómo se envía**, según lo que decida el restaurante:
  - **A:** widget de TheFork, que ya tiene ficha;
  - **B:** formulario a un servicio de formularios con correo de confirmación;
  - **C:** como hoy, con `mailto:` y el teléfono como respaldo.
- **Errores:** se muestran en línea y nunca con `alert()`.

---

## 6. Sistema de diseño

### Color
La paleta actual se mantiene, porque ya es la de la marca.

| Token | Valor | Uso |
|---|---|---|
| `--carbon` | `#120a07` | Brasa: hero y vídeo |
| `--caoba` | `#2a1610` | Secciones de historia |
| `--madera` | `#6a3a24` | Bordes y detalles sobre la caoba |
| `--mantel` | `#f6f4ef` | Carta, datos y reserva |
| `--tinta` | `#22130c` | Texto sobre el mantel |
| `--rojo` | `#b5121b` | **Solo para reservar y para el estado activo** |
| `--hueso` | `#cdbfae` | Texto secundario sobre fondo oscuro |

### Tipografía
Dos familias, como máximo cinco tamaños y `clamp()` para escalar.
- **Títulos: Fraunces**, variable, con eje óptico y cursiva. Es expresiva y tiene raíz clásica, y a tamaño grande con eje óptico 144 y tracking −2 % recuerda a los rótulos de un asador antiguo. La alternativa es mantener Young Serif.
- **Texto e interfaz: Instrument Sans.** Se lee bien en tamaño pequeño, y los precios usan cifras tabulares (`tabular-nums`).
- **Logo:** se mantiene el SVG ya vectorizado (`<symbol id="logo">`).

### Textura y profundidad
- **Grano:** se aplica al 3 % sobre un pseudo-elemento fijo con `pointer-events: none`, nunca sobre contenedores que hacen scroll.
- **Fotografía:** es la protagonista, con proporciones mezcladas: 4:5 para la sala, 16:9 para la brasa y 1:1 para los platos.
- **Sombras:** ninguna en reposo. Solo los paneles flotantes (menú y lightbox) llevan una sombra teñida de caoba.

### Movimiento
- **Interfaz:** dura entre 160 y 240 ms con `cubic-bezier(.23, 1, .32, 1)`.
- **Entradas de sección:** opacidad y un desplazamiento vertical de 16 px, ligados al scroll con `animation-timeline: view()`. Donde no hay soporte, se usa IntersectionObserver.
- **Hero:** vídeo en bucle de 8 a 12 s sin sonido, con un *poster* en AVIF. Con *reduced motion* se sustituye por una imagen fija.
- **Prohibido:** parallax pesado, cursores personalizados, bucles infinitos decorativos y animar `top`, `left`, `width` o `height`.

### Componentes
Botón (principal rojo, secundario con contorno y enlace), chip de categoría, tarjeta de casa con estado en vivo, línea de plato, ficha de corte, galería con lightbox (`<dialog>`), stepper de personas, selector segmentado, banner de cookies (sin cookies de terceros, es lo más sencillo) y pie.

---

## 7. Fotografía: una sesión propia (imprescindible)

Las fotos actuales son de terceros y de poca resolución, y sin fotos propias el diseño premium no se sostiene. Esta es la lista mínima de tomas, todas en RAW con salida de al menos 2400 px:
1. **Brasa:** vídeo en 4K de unos 15 s y 3 fotos con la parrilla y las manos del parrillero.
2. **Cortes en crudo:** 6 fotos cenitales sobre madera (ojo de bife, lomo, solomillo, asado de tira, T-bone y chuletón).
3. **Platos estrella:** 10 fotos (mollejas, morcilla, provoleta, chorizo, empanada, tartar, patatas soufflé, panqueque, sorbete de mandarina y la mesa con el ritual inicial).
4. **Salas:** 3 fotos de cada casa, con luz de servicio de cena.
5. **Fachadas:** una de cada casa, de día y de noche.
6. **Detalles:** el mantel, la chaqueta blanca, la pared de fotos y la barra.

Mientras llega la sesión se usan las imágenes actuales, con su crédito, solo en la fase de pruebas y nunca en producción.

---

## 8. Tecnología

- **Recomendación: Astro** (sitio estático). Tiene componentes para cabecera, pie y ficha de casa, guarda los datos de la carta y de las casas en JSON, y optimiza las imágenes (AVIF y WebP con `srcset`) de forma automática. No envía JavaScript salvo donde hace falta (estado en vivo, reserva y carta). Es una dependencia justificada, porque hay 8 páginas o más con piezas compartidas.
- **Alternativa sin dependencias:** HTML puro con cabecera y pie duplicados. Es más barato al principio y más caro de mantener.
- **Despliegue:** Cloudflare Pages o Netlify, gratis, con HTTPS y formularios. La web oficial tiene hoy el **certificado SSL caducado**, y eso hay que avisarlo.
- **Objetivos de rendimiento:**

  | Métrica | Objetivo |
  |---|---|
  | LCP | menos de 2,0 s en 4G |
  | CLS | menos de 0,05 |
  | JavaScript por página | menos de 15 KB |
  | Peso del hero | menos de 250 KB, más el vídeo en diferido |

- **SEO:** JSON-LD por casa, `sitemap.xml`, imágenes OG por página, `hreflang` es/en y URLs limpias.
- **Accesibilidad:** WCAG 2.2 AA, foco visible, objetivos táctiles de 44 px, contraste comprobado y navegación completa con teclado en la carta y en la reserva.

---

## 9. Fases

| Fase | Entregable | Cómo se verifica |
|---|---|---|
| 0 · Datos | Horarios, carta y precios confirmados por casa; decisión sobre la reserva (A, B o C); sesión de fotos encargada | Llamada a cada casa |
| 1 · Sistema | Tokens, tipografías, componentes base, cabecera y pie, plantilla de página | Página de muestra con todos los componentes; inspector taste-skill con 0 FAIL |
| 2 · Páginas clave | Inicio, Carta (con el mapa de cortes) y ficha de casa para las 3 casas | Inspector a 1440, 768 y 390 px; Lighthouse ≥ 95 en las 4 categorías |
| 3 · Contenido | La casa (línea de tiempo, ritual fijado, la pared), Grupos y eventos, Reservar | Pruebas de teclado y lector de pantalla; reserva probada de principio a fin |
| 4 · Cierre | Versión EN, páginas legales, 404, banner de cookies, despliegue y dominio | Validador de JSON-LD; Search Console; revisión en un móvil real |

---

## 10. Decisiones que te tocan a ti
1. **Stack:** Astro (recomendado) o HTML puro.
2. **Reserva:** TheFork (A), formulario con un servicio (B) o mailto (C).
3. **Tipografía:** Fraunces y Instrument Sans (recomendado) o mantener Young Serif y Source Serif.
4. **Versión en inglés:** en esta entrega o más adelante.
5. **Sesión de fotos:** si hay presupuesto. Sin ella, el diseño se queda a medias.
