# SUKI RAMEN·SUSHI — Landing page

Landing page de una sola página para SUKI RAMEN·SUSHI (Granada), construida
con Next.js 16, TypeScript, React 19 y Tailwind CSS.

## Poner en marcha el proyecto

Requiere Node.js 18.18 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000

Para generar la versión de producción:

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
app/
  layout.tsx      # metadata SEO, fuentes
  page.tsx        # ensambla las secciones
  globals.css      # estilos base y utilidades (halftone, focus, etc.)
  fonts/           # Bebas Neue + Manrope autoalojadas
components/
  Header.tsx
  Hero.tsx
  About.tsx
  FeaturedDishes.tsx
  Gallery.tsx
  Contact.tsx
  Footer.tsx
  icons/           # ilustraciones SVG originales (bol de ramen, robot, etc.)
lib/
  data.ts          # ← toda la información real del restaurante vive aquí
```

## Cómo editar la información del restaurante

Todo lo que puede cambiar con el tiempo (teléfono, horario, Instagram,
dirección, platos de la carta) está centralizado en **`lib/data.ts`**. No
hace falta tocar ningún componente para actualizar esos datos.

## Cómo sustituir las ilustraciones por fotos reales

Como todavía no había fotos reales del local ni del Instagram en el momento
de construir la web, las secciones **Hero**, **Sobre Suki** y **Galería**
usan ilustraciones SVG originales a modo de placeholder (ningún cliché
genérico: nada de geishas, dragones ni bambú — solo ramen, el robot
camarero real que mencionan las reseñas, y detalles neón).

Cuando tengas las fotos reales, el cambio es sencillo:

1. Añade las imágenes optimizadas dentro de `public/images/`.
2. En el componente correspondiente, sustituye el componente de icono por
   `next/image`. Por ejemplo, en `components/Gallery.tsx`:

   ```tsx
   // Antes:
   <GalleryArt variant={item.variant} />

   // Después:
   <Image src="/images/interior-1.jpg" alt={item.label} fill className="object-cover" />
   ```

3. Repite lo mismo en `Hero.tsx` (sustituye `<RamenBowlArt />` por la foto
   del ramen/plato estrella) y en `About.tsx` (sustituye `<InteriorArt />`
   por una foto real del interior).

No hace falta tocar `lib/data.ts` ni la estructura de las secciones — los
"labels" de la galería y los textos ya están listos.

## Notas

- El botón "Ver nuestra carta" enlaza hoy a Instagram (`@sukiramengranada`)
  porque es la única carta pública disponible. En cuanto haya una carta en
  PDF o una página de menú propia, se cambia `menuHref` en
  `components/FeaturedDishes.tsx`.
- Las reservas se hacen solo por teléfono (así lo confirma el informe), por
  eso todos los CTA de "Reservar" usan un enlace `tel:` en vez de un
  formulario.
- No se han incluido precios por plato porque no hay una carta oficial con
  precios confirmados por plato — solo el rango medio (10–20 € por
  persona), que sí aparece en la sección de platos.
