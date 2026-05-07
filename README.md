# xAdEv — Sitio estático

**Explorar · Adaptar · Evolucionar**  
Modelo abierto de transformación organizacional · [xadev.wiki](https://xadev.wiki)

---

## Stack

- **[Astro](https://astro.build)** + **[Starlight](https://starlight.astro.build)** — generador de sitios de documentación
- **Vercel** — hosting estático gratuito
- **Dominio propio** — `xadev.wiki`

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Deploy en Vercel

### Opción A — GitHub + Vercel (recomendado)

1. Crear un repositorio en GitHub y subir este proyecto:
   ```bash
   git init
   git add .
   git commit -m "init: xAdEv site"
   git remote add origin https://github.com/TU_USUARIO/xadev.git
   git push -u origin main
   ```

2. En [vercel.com](https://vercel.com):
   - **New Project** → importar el repo de GitHub
   - Framework: **Astro** (se detecta automáticamente)
   - Click **Deploy**

3. Conectar dominio `xadev.wiki`:
   - En Vercel → Settings → Domains → Add `xadev.wiki`
   - En tu registrador de dominio, apuntar los DNS a Vercel:
     ```
     A     @     76.76.21.21
     CNAME www   cname.vercel-dns.com
     ```

### Opción B — Vercel CLI

```bash
npm install -g vercel
vercel deploy
```

---

## Estructura de contenido

```
src/content/docs/
├── index.mdx              ← Página de inicio
├── feedback.md
├── intro/                 ← Introducción y Contexto (8 páginas)
├── ciclos/                ← Ciclos de Retroalimentación (3 páginas)
├── evolucion/             ← Exploración, Adaptación y Evolución (3 páginas)
├── equipos/               ← Equipos y Roles (5 páginas)
├── onboarding/            ← Onboarding Team (4 páginas)
├── tecnologia/            ← Tecnología con Propósito (3 páginas)
├── fuentes/               ← Disrupciones y Fuentes (10 páginas)
├── aprendizajes/          ← Aprendizajes y Adopción (8 páginas)
└── recursos/              ← Videos y Papers (2 páginas)
```

**Total: ~41 páginas**

### Cómo editar contenido

Cada archivo `.md` o `.mdx` tiene un frontmatter con `title` y `description`.  
El cuerpo es Markdown estándar con soporte de componentes MDX en las páginas `.mdx`.

Páginas que tienen contenido completo migrado:
- `index.mdx` — Inicio ✅
- `ciclos/exp-ada-evo.md` — Ciclos Explorar/Adaptar/Evolucionar ✅
- `evolucion/10-pasos.md` — 10 Pasos ✅
- `onboarding/ciclo-vida.md` — Ciclo de vida Onboarding Team ✅
- `fuentes/korbut-flip.md` — El Korbut flip ✅

El resto tiene el contenido marcado como "en migración" con link a la wiki original.  
Para completar la migración, copiar el texto de cada página de `xadev.wiki` al archivo `.md` correspondiente.

---

## Personalización del tema

El tema xAdEv está definido en `src/styles/custom.css`.  
Variables principales:

```css
--sl-color-accent:      #b4dc45;  /* Verde lima / chartreuse */
--sl-color-accent-high: #d4ef7a;
--sl-color-bg:          #0b0d0b;  /* Negro verdoso */
--sl-font: 'Outfit', system-ui, sans-serif;
/* Headings: Cormorant Garamond serif */
```

---

## Licencia

CC Attribution-Share Alike 4.0 International  
[creativecommons.org/licenses/by-sa/4.0/deed.es](https://creativecommons.org/licenses/by-sa/4.0/deed.es)

---

*Desarrollado por [adaptant.com](https://adaptant.com)*
