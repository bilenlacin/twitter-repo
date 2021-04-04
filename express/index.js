const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors())

const DATABASE = 'items.json';
let list = [];

fs.readFile(DATABASE, { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    list.push(...JSON.parse(data));
  }
});

const saveList = () => {
  fs.writeFile(DATABASE, JSON.stringify(list), () => { console.log('saved') });    
}

app.get('/', function (req, res) {
  res.send(list)
});

app.get('/:id', function (req, res) {
  const item = list.find(i => i.id.toString() === req.params.id);
  if (item) {
    res.send(item);
  } else {
    res.sendStatus(400);
  }
});

app.post('/', function (req, res) {
  const item = req.body;
  if (!item) {
    res.sendStatus(400);
  } else {
    if (!item.id) {
      item.id = Math.random();
    }
    list.push(item);
    saveList();
    res.sendStatus(204);
  }
});

app.put('/:id', function (req, res) {
  const itemIndex = list.findIndex(i => i.id.toString() === req.params.id.toString());
  if (itemIndex >= 0) {
    list[itemIndex] = req.body;
    saveList();
    res.sendStatus(204);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/:id', function (req, res) {
  list = list.filter(i => i.id !== req.params.id)
  saveList();
  res.sendStatus(204);
});

app.listen(5000);
