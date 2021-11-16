/*
Item example:
{
  name: "과제하기",
  done: false
}
*/

const TodoModel = require("./models/todo");

//let ITEMS = [];
//let ID_COUNTER = 1;

function getAll(callback) {
  TodoModel.find({}, (error, result) => {
    if(error) {
      console.log(error);
      callback([]);
    }
    else {
      callback(result);
    }
  })
}

function add(name, callback) {
  const newItem = new TodoModel({
    name,
  });
  newItem.save((error, result) => {
    callback(result);
  })
}

function remove(id, callback) {
  TodoModel.deleteOne({_id: id}, (error) => {
    callback();
  });
}

function setDone(id, callback) {
  TodoModel.find({_id: id}, (error, result) => {
    if(result[0].done === true) {
      TodoModel.updateOne({_id: id}, {done: false}, () => {
        callback();
      });
    }
    else {
      TodoModel.updateOne({_id: id}, {done: true}, () => {
        callback();
      });
    }
  });
}

module.exports = {
  getAll,
  add,
  remove,
  setDone
};
