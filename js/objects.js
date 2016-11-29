var Objects;

Objects = {
  index: {},
  people: [],
  terrain: [],
  all: [],
  count: -1,
};

Objects.push = function (obj, classes) {
  var oo;
  if (!classes) { classes = []; }
  this.count++;
  this.index[this.count] = obj;
  obj.id = this.count;
  this.all.push(obj.id);
  for (oo=0 ; oo<classes.length ; oo++) {
    this[classes[oo]].push(obj.id);
  }
};

module.exports = Objects;
