// functions that interact with database
const orm = ("../config/orm.js");

const burger = {
  all: function(cb){
    orm.all("burger", function(res){
      cb(res);
    });
  },
  // variables columns and values are arrays
  create: function(cols, vals, cb){
    orm.create("burger", cols, vals, function(res){
      cb(res);
    });
  },
  update: function(objColVals, condition, cd){
    orm.update ("burger", objColVals, condition, function(res){
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.delete("burger", condition,function(res){
      cb(res);
    });
  }
};

module.exports = burger;