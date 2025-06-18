# Usa imagem oficial do Node.js
FROM node:20-alpine

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do container
COPY . .

# Expõe a porta que a aplicação utiliza (3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
