const form = document.getElementById("form-cadastro");

function verificar() {
  const num1 = document.getElementById("campo-a");
  const num2 = document.getElementById("campo-b");

  if (num2.value > num1);
  const containerMensagemSucesso = document.querySelector("..sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    
} else {
  nomeBeneficiario.classList.remove("error");
  document.querySelector(".error-message").style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault;
});
