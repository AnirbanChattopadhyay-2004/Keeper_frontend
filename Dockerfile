# Building the image starting from a root nodeJs runtime image.
FROM node:20-alpine
WORKDIR /frontend_app
COPY package* .
RUN npm i 
COPY . .
RUN npm run build
EXPOSE 5173
# Running the image.a
CMD ["npm","run","dev"]
