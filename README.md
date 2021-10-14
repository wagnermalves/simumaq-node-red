# simumaq-node-red

Está é uma simples aplicação de teste para simular algumas máquinas e gerar dados para o envio a um banco de dados SQL Server e posteriormente utilizar estes dados em um software de OEE.

## Como usar

Para clonar e rodar este repositório você irá precisar do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)).
Após instalados em seu computador vá na linha de comando:

```bash
# Clone este repositório
git clone https://github.com/wagnermalves/simumaq-node-red.git
# Vá até o diretório
cd simumaq-node-red
# Instale as dependencias
npm i
# Execute o app
npm start
```

Para rodar esta aplicação em uma porta diferente da 1880

```bash
# Execute o comando abaixo com a porta desejada exemplo: 1890
npm start 1890
```

## Ao iniciar

O node-red ao iniciar irá solicitar um login:

username : `guest`
password : `1234`

