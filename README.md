# Cloudinary Signature

Este servicio forma parte del backend para la página web de [Biblioteca216](https://216.caefisica.com/), diseñado específicamente para firmar digitalmente las cargas de imágenes antes de su envío a Cloudinary. Este servicio, basado en Express.js, facilita la creación de firmas para peticiones de carga de imágenes con parámetros específicos.

La iniciativa de este proyecto surgió de la necesidad de solucionar un inconveniente encontrado al subir imágenes a Cloudinary. Esto permitirá a los editores de la biblioteca actualizar las imágenes de los libros disponibles. En la actualidad, el paquete `cloudinary` enfrenta limitaciones al ejecutarse nativamente en el Edge Runtime, debido a su dependencia de múltiples paquetes no compatibles con dicho entorno.

## Requisitos Previos

Para la correcta ejecución del proyecto, es necesario contar con:

- Node.js
- npm o yarn
- Una cuenta activa en Cloudinary

## Proceso de Instalación

1. Realiza la clonación del repositorio.
2. Utiliza `npm install` o `yarn` para instalar las dependencias necesarias.
3. Configura las variables de entorno requeridas, siguiendo las instrucciones detalladas a continuación.

### Configuración de Cloudinary

Para configurar Cloudinary, crea un archivo `.env` en la raíz del proyecto e incluye las siguientes variables:

- `CLOUDINARY_CLOUD_NAME`: Tu nombre de usuario en Cloudinary.
- `CLOUDINARY_API_KEY`: Clave API de Cloudinary.
- `CLOUDINARY_SECRET`: Secreto API de Cloudinary.
- `PORT` (opcional): Define el puerto de ejecución del servicio (por defecto se usa el puerto 3000).

## Guía de Uso

Para iniciar el servidor, ejecuta `npm start` o `yarn start`. El servidor se lanzará automáticamente en el puerto 3000, a menos que se especifique un puerto diferente en las variables de entorno.

### Endpoint de Firma

El servicio incluye un endpoint específico para la firma de cargas:

- **URL**: `/api/sign`
- **Método**: `POST`
- **Cuerpo de la Petición**: JSON en el formato siguiente:
  ```json
  {
    "folder": "nombre_de_la_carpeta"
  }
  ```
- **Respuesta**: Recibirás un JSON con la firma y la marca de tiempo necesarias para la carga en Cloudinary.

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

- `server.ts`: Archivo principal del servidor, donde se define el endpoint de firma.
- `config/cloudinaryConfig.ts`: Contiene la configuración inicial para Cloudinary.
- `utils/cloudinaryUtils.ts`: Incluye la función para generar la firma requerida por Cloudinary.
