# Image de base contenant Node.js
FROM node:18-alpine

# Répertoire de travail dans l'image
WORKDIR /app

# Copier le package.json dans le répertoire de travail
COPY package.json .

# Installer yarn
RUN yarn install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . . 

# Construire l'application React
RUN yarn build

# Port de l'application
EXPOSE 3000

# Démarrer l'application
CMD [ "yarn", "start"]