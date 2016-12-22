var Sprite = require('../js/sprite.js');

var image = [
[
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrA","clrA","clrA",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrB","clrB","clrB","clrB","clrA","clrA",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrA","clrA","clrB","clrB","clrB","clrC","clrB","clrA","clrA",""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,"clrA","clrC","clrC","clrC","clrA","clrA","clrB","clrB","clrB","clrB","clrC","clrA",""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,"clrA","clrC","clrB","clrC","clrC","clrC","clrA","clrA","clrB","clrB","clrB","clrB","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,"clrA","clrC","clrC","clrC","clrC","clrB","clrC","clrC","clrC","clrA","clrA","clrB","clrB","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,"clrA","clrC","clrB","clrC","clrC","clrC","clrC","clrC","clrC","clrA","clrB","clrA","clrA","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,"clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrA","clrB","clrB","clrB","clrB","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,"clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrA","clrA","clrB","clrB","clrC","clrB","clrB","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,"clrA","clrC","clrC","clrC","clrC","clrC","clrA","clrB","clrB","clrB","clrB","clrB","clrB","clrA","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,"clrA","clrC","clrC","clrA","clrA","clrA","clrB","clrB","clrB","clrB","clrB","clrA","clrA","clrC","clrC","clrA",""/**/,""/**/],
[""/**/,"clrA","clrB","clrA","clrA","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrA",""/**/,""/**/],
[""/**/,"clrA","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrA",""/**/,""/**/],
[""/**/,"clrA","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrA",""/**/,""/**/],
[""/**/,"clrA","clrB","clrC","clrB","clrB","clrB","clrC","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrA",""/**/],
["clrA","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrB","clrC","clrA",""/**/],
["clrA","clrB","clrB","clrB","clrB","clrC","clrB","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrA",""/**/],
["clrA","clrB","clrC","clrB","clrB","clrB","clrB","clrB","clrB","clrA","clrC","clrC","clrB","clrC","clrC","clrB","clrC","clrC","clrA",""/**/],
["clrA","clrB","clrB","clrC","clrB","clrB","clrB","clrC","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrC","clrA"],
["clrA","clrB","clrB","clrB","clrB","clrC","clrB","clrB","clrB","clrB","clrA","clrC","clrC","clrB","clrC","clrC","clrC","clrB","clrC","clrA"],
[""/**/,"clrA","clrA","clrB","clrB","clrB","clrB","clrC","clrB","clrB","clrA","clrC","clrC","clrC","clrC","clrC","clrB","clrC","clrC","clrA"],
[""/**/,""/**/,""/**/,"clrA","clrA","clrB","clrB","clrB","clrC","clrB","clrA","clrC","clrC","clrC","clrB","clrC","clrC","clrC","clrC","clrA"],
[""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrA","clrB","clrB","clrB","clrB","clrA","clrC","clrB","clrC","clrC","clrC","clrA","clrA",""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrA","clrB","clrB","clrA","clrC","clrC","clrC","clrA","clrA",""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrA","clrA","clrC","clrA","clrA",""/**/,""/**/,""/**/,""/**/,""/**/],
[""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"clrA","clrA",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/]
]
];

var sprite = new Sprite (image);

module.exports = sprite;
