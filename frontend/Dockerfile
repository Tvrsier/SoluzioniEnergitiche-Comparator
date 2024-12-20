# Dockerfile for React frontend
FROM node:18

WORKDIR /app

COPY comparator-frontend/package*.json ./
RUN npm install

COPY comparator-frontend ./

CMD ["npm", "start"]
