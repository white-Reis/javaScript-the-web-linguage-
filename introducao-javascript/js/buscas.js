var botaoAdicionar = document.querySelector('#buscas-paciente')

botaoAdicionar.addEventListener('click', function () {
  var xhl = new XMLHttpRequest()

  xhl.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

  xhl.addEventListener('load', function () {
    if (xhl.status == 200) {
      var resposta = xhl.responseText
      var pacientes = JSON.parse(resposta)

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente)
      })
    } else {
      console.log('falhou')
    }
  })
  xhl.send()
})
