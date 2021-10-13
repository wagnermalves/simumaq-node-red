#simumaq-node-red

Está é uma aplicação de teste para simular algumas maquinas e gerar dados para o envio a um banco de dados SQL Server

##Como usar

Para clonar e rodar este repositório você irá precisar do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalados no seu computadr. Na sua linha de comando:

```bash
# Crie o diretório
mkdir simumaq-node-red
# Vá até o diretório
cd simumaq-node-red
# Clone este repositório
git clone https://github.com/wagnermalves/simumaq-node-red.git
# Instale as dependencias
npm i
# Execute o app
npm start
```

Para rodar esta aplicação em uma porta diferente da 1880

```bash
# Execute o comando abaixo com a porta desejada exemplo: 1890
npm start 1890
