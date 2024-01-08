 const path=require("path")

 console.log(path.dirname("D:/Node Js/Path/path.js"));
 console.log(path.extname("D:/Node Js/Path/path.js"));
 console.log(path.basename("D:/Node Js/Path/path.js"));

 console.log(path.parse("D:/Node Js/Path/path.js"));
  const mypath=path.parse("D:/Node Js/Path/path.js");
   console.log(mypath.name);