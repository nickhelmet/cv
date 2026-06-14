# CV — Nicolás Casco

CV online de **Nicolás Rodrigo Casco** — Senior Infrastructure Engineer.

Sitio estático, de una sola página, bilingüe (🇪🇸 ES / 🇬🇧 EN), optimizado para web e impresión/PDF.

🔗 **En vivo:** https://nickhelmet.github.io/cv/

## Estructura

| Archivo        | Para qué sirve                                              |
| -------------- | ---------------------------------------------------------- |
| `index.html`   | Esqueleto de la página y etiquetas meta.                   |
| `styles.css`   | Estilos (incluye estilos de impresión/PDF).                |
| `cv-data.js`   | **El contenido del CV** (bilingüe). Editá acá para actualizar. |
| `app.js`       | Render del contenido y toggle de idioma.                   |

## Cómo actualizar el contenido

Toda la información (experiencia, skills, educación, etc.) está en **`cv-data.js`**,
con su versión en español (`es`) e inglés (`en`). Editás ese archivo, hacés commit y
push, y GitHub Pages publica el cambio automáticamente.

```bash
git add .
git commit -m "Actualizo experiencia"
git push
```

## Ver localmente

Abrí `index.html` en el navegador, o levantá un server simple:

```bash
python3 -m http.server 8000
# luego abrí http://localhost:8000
```

## Deploy

Automático vía GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.
