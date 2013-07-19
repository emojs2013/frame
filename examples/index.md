# 演示文档

---

````javascript
seajs.use('../src/frame', function(frame){
	var frameClass = new frame();
	var css = {
		"position": "absolute",
    "width": "20px",
    "height": "20px",
    "background-image" : "url(Resources/ArtImages/35/npc506/35_npc506_role.png)",
    "background-position" : "-2px -158px",
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
	var newSingleFrame = frameClass.createFrame(data);
	console.log(newSingleFrame);
	var edit = frameClass.editFrame(newSingleFrame);
	var copy = frameClass.copyFrame(data);
	var del = frameClass.deleteFrame(newSingleFrame);
	
	console.log(newSingleFrame);
});
````
