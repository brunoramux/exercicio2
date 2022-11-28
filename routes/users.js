var express = require('express');
var router = express.Router();

let clientes = {items: [] };
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res){
  clientes.items.push(req.body)
  res.send("OK")
  console.log(clientes)
});

router.post('/delete', function(req, res){
  const deletar = req.body.Email;
  let index = clientes.items.findIndex((item) => item.Email == deletar);
  console.log(index);
  if (index > -1){
    clientes.items.splice(index, 1)
  }
  console.log(clientes)
  res.send("Registro excluido")
}); 

module.exports = router;
