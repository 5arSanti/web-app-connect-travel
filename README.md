# Equilibrium EGES - Grupo Empresarial de la Salud

Aplicación web moderna desarrollada con React para Equilibrium EGES, un grupo empresarial de la salud que ofrece servicios de estética, salud integral y atención geriátrica.

## 🚀 Características

- **Navegación por secciones**: Implementada con React Router y HashRouter para compatibilidad con GitHub Pages
- **Diseño responsive**: Optimizado para dispositivos móviles y desktop
- **Navegación flotante**: Botón flotante para navegación rápida entre secciones
- **Animaciones suaves**: Transiciones y efectos visuales modernos
- **Autenticación**: Sistema de login integrado
- **Gestión de estado**: Context API para manejo global del estado

## 📱 Navegación

La aplicación incluye navegación a las siguientes secciones:

- **Inicio** (`#home`): Sección principal con información de bienvenida
- **Servicios** (`#servicios`): Catálogo de servicios ofrecidos
- **Nosotros** (`#nosotros`): Información sobre la empresa
- **Opiniones** (`#opiniones`): Testimonios de clientes
- **Contacto** (`#contacto`): Información de contacto
- **Noticias** (`#noticias`): Últimas noticias y actualizaciones

### Tipos de Navegación

1. **Navegación principal**: En el header con enlaces a todas las secciones
2. **Navegación flotante**: Botón flotante que aparece al hacer scroll (móvil y desktop)
3. **Navegación por servicios**: Enlaces dinámicos generados desde el backend

## 🛠️ Tecnologías Utilizadas

- **React 19.1.0**: Framework principal
- **React Router DOM 7.6.3**: Enrutamiento con HashRouter
- **React Router Hash Link**: Navegación a secciones
- **Vite**: Build tool y servidor de desarrollo
- **Bootstrap 5.3.7**: Framework CSS
- **React Icons**: Iconografía
- **React Slick**: Carruseles
- **Axios**: Cliente HTTP
- **React Toastify**: Notificaciones

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd web-app-connect-travel

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🌐 Despliegue en GitHub Pages

### Configuración Automática

1. **Configurar GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: `gh-pages` o `main`
   - Folder: `/ (root)`

2. **Configurar Actions** (opcional):
   - Crea `.github/workflows/deploy.yml` para despliegue automático

### Configuración Manual

1. **Construir la aplicación**:
   ```bash
   npm run build
   ```

2. **Subir a GitHub Pages**:
   ```bash
   # Instalar gh-pages si no está instalado
   npm install --save-dev gh-pages

   # Agregar scripts al package.json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"

   # Desplegar
   npm run deploy
   ```

### Archivos de Configuración

- `public/404.html`: Redirección para SPA en GitHub Pages
- `index.html`: Script de redirección incluido
- `vite.config.js`: Configuración de Vite

## 🎨 Estructura del Proyecto

```
src/
├── Pages/
│   ├── App/
│   │   ├── components/
│   │   │   ├── NavOptions/          # Navegación principal
│   │   │   ├── FloatingNav/         # Navegación flotante
│   │   │   └── ...
│   │   ├── Screens/
│   │   │   └── Home/                # Página principal con secciones
│   │   └── Routes/                  # Configuración de rutas
│   ├── Context/                     # Context API
│   └── assets/                      # Imágenes y recursos
└── main.jsx                     # Punto de entrada
```

## 🔧 Configuración de Rutas

La aplicación usa `HashRouter` para compatibilidad con GitHub Pages:

```jsx
// src/Pages/App/App.jsx
import { HashRouter } from "react-router-dom";

<HashRouter>
  {/* Contenido de la aplicación */}
</HashRouter>
```

### Navegación a Secciones

```jsx
// Ejemplo de uso de HashLink
import { HashLink } from "react-router-dom";

<HashLink to="/home#servicios">Servicios</HashLink>
```

## 📱 Responsive Design

La navegación se adapta automáticamente:

- **Desktop**: Enlaces completos con texto e iconos
- **Tablet**: Enlaces compactos
- **Mobile**: Solo iconos en navegación principal, navegación flotante completa

## 🚀 Características de la Navegación

### Navegación Principal
- Enlaces a todas las secciones
- Iconos descriptivos
- Efectos hover
- Responsive design

### Navegación Flotante
- Aparece al hacer scroll (>300px)
- Botón toggle con animación
- Menú desplegable
- Cierre automático al navegar

### Scroll Suave
- Configurado en CSS global
- Compatible con todos los navegadores
- Experiencia de usuario fluida

## 🔒 Autenticación

El sistema de autenticación está integrado pero comentado en la navegación principal. Para activarlo:

1. Descomenta las líneas en `NavOptions/index.jsx`
2. Configura el backend de autenticación
3. Actualiza las rutas protegidas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para más información sobre Equilibrium EGES, visita nuestra aplicación web o contáctanos directamente.
