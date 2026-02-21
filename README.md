# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Seguridad (Hardening)

Este proyecto ha sido reforzado siguiendo estándares de ingeniería de ciberseguridad para aplicaciones estáticas:

- **CSP (Content Security Policy):** Implementada en `index.html` y configurada para Vercel/Netlify. Restringe la ejecución de scripts a fuentes confiables y previene inyecciones.
- **Protección contra Clickjacking:**
  - `X-Frame-Options: DENY` configurado en headers de producción.
  - Script de *Frame-busting* en `index.html` como fallback de seguridad en navegadores antiguos.
- **Seguridad en Enlaces:** Todos los enlaces externos cuentan con `rel="noopener noreferrer"` para prevenir ataques de *tabnabbing*.
- **Headers de Producción:**
  - `X-Content-Type-Options: nosniff` (Previene MIME-type sniffing).
  - `Strict-Transport-Security` (Fuerza HTTPS).
  - `Referrer-Policy: strict-origin-when-cross-origin`.
- **Auditoría de Código:** Se ha verificado la ausencia de `dangerouslySetInnerHTML` y redirecciones dinámicas basadas en variables de usuario.

### Despliegue Seguro
Se incluyen archivos de configuración para los siguientes entornos:
- `vercel.json`: Configuración de headers para **Vercel**.
- `public/_headers`: Configuración de headers para **Netlify** y otros CDN compatibles.
