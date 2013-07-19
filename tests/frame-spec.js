define(function(require) {

  var frame = require('../src/frame');

  describe('frame', function () {

    var frameClass = new frame();
    var css = {
      "position": "absolute",
      "width": "20px",
      "height": "20px",
      "background-image": "url(Resources/ArtImages/35/npc506/35_npc506_role.png)",
      "background-position": "-2px -158px",
      "left": "100px",
      "top": "100px"
    };
    var data = {
      "img": "Resources/ArtImages/35/npc506/35_npc506_role.png",
      "dt": 0.1,
      "css": css,
      "index": 8,
      "belong": 4560,
    };

    it('frame create', function () {

      frameClass.createFrame(function (data) {
        console.log("create one frame");
        console.log(data);
      });
    });

    it('edit frame', function(){
      frameClass.editFrame(function (data) {
        console.log("edit frame");
      });
    });

    it('copy frame', function () {
      frameClass.copyFrame(function (data) {
        console.log("copy frame");
      });
    });

    it('delete frame', function () {
      frameClass.deleteFrame(function (data) {
        console.log("delete frame");
      });
    });

  });

});
