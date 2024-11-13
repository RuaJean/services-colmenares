# Sistema de Gestión de Casos Fiscales para Colmenares & Asociados

Este proyecto constituye el backend del **Sistema de Gestión de Casos Fiscales** desarrollado para la firma de abogados [Colmenares & Asociados](https://www.colmenaresasociados.com/), ubicada en Bogotá, Colombia. La firma se especializa en diversas áreas del derecho, incluyendo Derecho Deportivo, Corporativo, Comercial, Laboral y Tributario.

**Desarrollador**: Jean Rúa  
**Sitio Web**: [jeanrua.com](https://jeanrua.com)  
**LinkedIn**: [Jean Rúa](https://www.linkedin.com/in/jean-rua/)

---

## 📖 Descripción del Proyecto

Anteriormente, Colmenares & Asociados gestionaba sus casos fiscales mediante hojas de cálculo, lo que dificultaba el seguimiento y actualización de la información. Este proyecto implementa una solución backend robusta que centraliza la gestión de casos fiscales, proporcionando APIs y servicios que son consumidos por una interfaz gráfica desarrollada en Angular.

Además, se integró un sistema de Recuperación de Información Asistida por Inteligencia Artificial (RAG) que procesa y analiza los documentos y datos de los casos, permitiendo consultas eficientes sobre el estado y detalles específicos de cada caso.

## 🚀 Características Principales

1. **APIs RESTful**: Servicios desarrollados con Node.js y Express que manejan operaciones CRUD para la gestión de casos, clientes y documentos asociados.
2. **Integración de Inteligencia Artificial**: Implementación de un sistema RAG que permite consultas avanzadas sobre los casos, facilitando la recuperación de información específica y actualizada.
3. **Seguridad y Autenticación**: Mecanismos de autenticación y autorización para garantizar el acceso seguro a la información sensible de los casos.
4. **Escalabilidad**: Arquitectura diseñada para manejar un creciente volumen de datos y usuarios, asegurando un rendimiento óptimo.

## 🛠️ Stack Tecnológico

- **Backend**: Node.js con Express
- **Inteligencia Artificial**: Implementación de RAG para procesamiento y análisis de documentos
- **Base de Datos**: MongoDB para almacenamiento de datos estructurados y no estructurados
- **Autenticación**: JWT (JSON Web Tokens) para manejo de sesiones y permisos
- **Control de Versiones**: Git y GitHub


## 🚀 Instalación

1. Clona el repositorio y navega a la carpeta del proyecto:
   ``` 
   git clone https://github.com/jeanrua/services-colmenares.git
   cd services-colmenares
Instala las dependencias:
    npm install

Configura las variables de entorno en un archivo .env:

    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    AI_API_KEY=your_ai_api_key
    Inicia el servidor:

Inicia el servidor 
    npm start

🤝 Contribuciones
Las contribuciones son bienvenidas para mejorar y expandir las funcionalidades del sistema. Si tienes ideas o mejoras, por favor abre un Pull Request o contacta al desarrollador.

Desarrollado por Jean Rúa para Colmenares & Asociados. Para más información, visita jeanrua.com o conecta en LinkedIn.

Gracias por tu interés en este proyecto.

