
<?php

if (isset($_POST['nome'])) {
  
  //Variaveis de POST, Alterar somente se necess�rio 
  //====================================================
 
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];
  //====================================================
  
  //REMETENTE --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO comunicação@itaesbra.com.br 
  //==================================================== 
  $email_remetente = "comunicacao@itaesbra.com.br"; // deve ser uma conta de email do seu dominio 
  //====================================================
  
  //Configura��es do email, ajustar conforme necessidade
  //==================================================== 
  $email_destinatario = "comunicacao@itaesbra.com.br"; // pode ser qualquer email que receber� as mensagens
  $email_reply = "$email"; 
  $email_assunto = "Contato SITE"; // Este ser� o assunto da mensagem
  //====================================================
  
  //Monta o Corpo da Mensagem
  //====================================================
  $email_conteudo = "FORMULARIO SITE ITAESBRA \n"; 
  $email_conteudo = "------------------------------------------ \n"; 
  $email_conteudo = "Nome = $nome \n"; 
  $email_conteudo .= "Email = $email \n";
  $email_conteudo .= "Mensagem = $mensagem \n"; 
  //====================================================
  
  //Seta os Headers (Alterar somente caso necessario) 
  //==================================================== 
  $email_headers = implode ( "\n",array ( "From: $email_remetente", "Reply-To: $email_reply","Return-Path: $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=utf-8" ) );
  //====================================================
  
  //Enviando o email 
 
  //==================================================== 
  if (mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)){ 
            echo $_POST['email'];          } 
      else{ 
            echo $_POST['nome'];          } 
  //====================================================
} 
?>