# Usa una imagen Alpine como base
FROM node:alpine
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /software
# Copia el archivo package.json y package-lock.json a la carpeta de trabajo
COPY package*.json ./
# Instala las dependencias de Node.js
RUN npm install
# Copia el resto de los archivos de la aplicación a la carpeta de trabajo
COPY . .
# Expone el puerto en el que se ejecutará la aplicación (ajusta según sea necesario)
EXPOSE 5173
# Comando para ejecutar la aplicación (ajusta según tu aplicación)
CMD ["npm", "start"]

# docker build -t web . 
# docker run -p 5173:5173 --name vue web
# docker stop vue
# docker rmi web
