// functions that interact with database
const orm = ("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.all("burger", (res) => {
      cb(res);
    });
  },
  // variables columns and values are arrays
  create: (cols, vals, cb) => {
    orm.create("burger", cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cd) => {
    orm.update ("burger", objColVals, condition, (res) =>{
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("burger", condition, (res) =>{
      cb(res);
    });
  }
};

module.exports = burger;