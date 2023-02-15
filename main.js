const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.post('/calculadora', (req, res) => {
  const operacion = req.body.oper
  const resultado = parseInt(eval(operacion))
  res.json({
    resultado
  })
})

/* app.get('/sumar/:n1/:n2', (req, res) => {
  const num1 = Number(req.params.n1)
  const num2 = Number(req.params.n2)
  const sum = num1 + num2
  res.send(`el resultado es ${sum}`)
})

app.get('/resta/:n1/:n2', (req, res) => {
  const num1 = Number(req.params.n1)
  const num2 = Number(req.params.n2)
  const resta = num1 - num2
  res.send(`el resultado es ${resta}`)
})

app.get('/multiplicacion/:n1/:n2', (req, res) => {
  const num1 = Number(req.params.n1)
  const num2 = Number(req.params.n2)
  const multi = num1 * num2
  res.send(`el resultado es ${multi}`)
})

app.get('/division/:n1/:n2', (req, res) => {
  const num1 = Number(req.params.n1)
  const num2 = Number(req.params.n2)
  if (num2 === 0) {
    res.status(400).send('No se puede dividir por cero')
  } else {
    const div = num1 / num2
    res.send(`el resultado es ${div}`)
  }
}) */

app.listen(PORT, () => {
  console.log(`Iniciando http://localhost:${PORT}`)
})

/* http://localhost:3000/sumar/3/4
http://localhost:3000/restar/2/4
http://localhost:3000/division/3/1
http://localhost:3000/multiplicacion/3/0
*/
