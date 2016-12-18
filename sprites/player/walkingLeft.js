var Sprite = require('../../js/sprite.js');

var image = [
  [//0
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#478","#fff","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,"#720","#720","#478","#fff","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,"#720","#720",""/**/,"#fff",""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#fff","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#88f","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#88f","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#88f","#88f"],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#88f",""/**/,""/**/,""/**/,""/**/],
  ],
  [//1
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/,""/**/],
    [""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#478","#fff","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,"#720","#720","#478","#fff","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,"#720","#720",""/**/,"#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,"#88f","#fff","#fff","#fff","#88f","#fff","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#fff","#fff","#fff","#fff","#88f"],
    [""/**/,""/**/,"#88f","#88f","#88f","#fff","#fff","#fff","#fff","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff","#88f","#88f","#88f"],
    [""/**/,""/**/,""/**/,"#fff","#fff",""/**/,"#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff",""/**/,"#88f","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#88f",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#88f","#fff","#88f","#fff","#88f",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#fff","#88f",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#88f",""/**/,""/**/,""/**/],
  ],
  [//2
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#478","#fff","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,"#720","#720","#478","#fff","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,"#720","#720",""/**/,"#fff",""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#88f","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#fff","#88f","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#88f","#fff","#fff","#fff","#88f","#88f"],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#88f","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#88f",""/**/,""/**/],
  ],
  [//3
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/,""/**/],
    [""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#478","#fff","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,"#720","#720","#478","#fff","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,"#720","#720",""/**/,"#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#fff","#88f","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#fff","#88f","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#fff","#88f","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#fff","#88f","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#fff","#88f","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#88f","#88f","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#fff",""/**/,"#fff","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#88f",""/**/,""/**/,"#88f","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,"#88f","#fff","#88f",""/**/,""/**/,""/**/,"#88f","#88f","#88f"],
    [""/**/,""/**/,""/**/,"#88f","#88f","#88f",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
  ],
  [//4
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/,""/**/],
    [""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#478","#fff","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,"#720","#720","#478","#fff","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff",""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,"#720","#720",""/**/,"#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#88f",""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#fff","#fff","#fff","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#88f","#fff","#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#88f","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#88f","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#88f","#88f",""/**/,""/**/],
    [""/**/,""/**/,"#fff","#fff","#fff",""/**/,""/**/,"#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,"#fff","#fff",""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f",""/**/],
    ["#88f","#fff","#fff","#fff",""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#fff",""/**/],
    ["#88f","#fff","#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#88f"],
    ["#88f","#88f","#88f",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#88f"],
  ],
  [//5
    [""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff",""/**/],
    [""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#478","#fff","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,"#720","#720","#478","#fff","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,"#720","#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,"#fff",""/**/,""/**/,"#720","#720","#720","#720",""/**/,""/**/,"#fff"],
    [""/**/,""/**/,""/**/,"#fff",""/**/,""/**/,""/**/,"#720","#720",""/**/,"#fff",""/**/],
    [""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#88f","#88f",""/**/,""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#fff","#fff","#fff","#fff",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#fff","#88f",""/**/],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#fff","#fff","#88f","#fff","#fff","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#fff","#88f"],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#fff","#88f",""/**/,"#88f","#88f","#88f"],
    [""/**/,""/**/,""/**/,""/**/,""/**/,"#88f","#88f","#88f",""/**/,""/**/,""/**/,""/**/],
  ],
];

var sprite = new Sprite (image);

module.exports = sprite;
