function verificar() {
  const form = document.getElementById("form-cadastro");
  const num1 = document.getElementById("TNA");
  const num2 = document.getElementById("TNB");
  var res = document.getElementById("res");
  var errorMensagem = document.getElementById("error-message");
  const numA = Number(TNA.value);
  const numB = Number(TNB.value);
  if (numB > numA) {
    res.innerHTML = `você conseguiu o número b ${numB} é maior que o número a ${numA}`;
  } else {
    errorMensagem.innerHTML = `tente novamente o número b ${numB} precisa ser maior que o número a ${numA}`;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
