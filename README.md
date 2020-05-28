# EventGo
Versão mobile do sistema EventManager.

## Descrição

Versão mobile do sistema EventManager com o objetivo de atender às necessidades dos clientes que desejam comparecer aos eventos cadastrados na plataforma web.
Apresenta as seguintes telas/funcionalidades:

* Listar os eventos cadastrados
* Informações do evento
* Ingressos disponíveis no evento
* Aquisição de ingresso
* Formas de pagamento 
* Confirmação de pagamento

Importante ressaltar que a confirmação de pagamento é realizada por meio de servidor com autenticação gmail para enviar no-replys. Além disso,
a aquisição de ingressos gratuitos é restrita a somente uma unidade. Se caso o ingresso seja pago fica a critério do cliente
escolher a quantidade desejada.

## Programas Necessários  

  - [Node](https://nodejs.org/en/download/)
  + [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)
  - [Expo](https://docs.expo.io/versions/v37.0.0/get-started/installation/)  
  + [ExpoClient](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)
  
## Tela inicial

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/index.png">
</p>

## Tela informações do evento

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/event_detail.png">
</p>

## Tela ingressos disponíveis

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/ticket_list.png">
</p>

## Tela aquisição de ingresso

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/buy_ticket.png">
</p>


## Tela pagamento

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/payment.png">
</p>


## Tela pagamento com cartão de crédito

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/payment_card.png">
</p>

## Tela ingressos gratuitos

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/free_list.png">
</p>

## Tela aquisição de ingresso gratuito

<p align="center">
  <img src="https://github.com/arthurmdros/EventGo/blob/master/free_ticket.png">
</p>

## Execução

  Executando back-end:
  - [Realizar git clone do repositório](https://github.com/arthurmdros/EventManager)
  
<dl>
  <dt>Executando front-end:</dt>
  <dd>1. Abrir prompt de comando</dd>
  <dd>2. Acesse o diretório do projeto pelo prompt</dd>
  <dd>3. Acesse a pasta app</dd>
  <dd>4. Execute o seguinte comando: expo start ou  yarn start</dd>
  <dd>5. Baixe o Expo Client disponível na Store do seu celular</dd>
  <dd>6. Abra o Expo Client e escaneie o QR Code gerado no seu terminal ou na página web que foi aberta.</dd>
</dl>

## Servidor com autenticação gmail para enviar no-reply

- [Repositório](https://github.com/arthurmdros/server_nodemailer)
