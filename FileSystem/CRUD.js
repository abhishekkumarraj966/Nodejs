const fs=require("fs")
fs.mkdirSync("Abhi")

// C

fs.writeFileSync("Abhi/bio.txt","Thyis file create a simpal  not a complex")

// E

 fs.appendFileSync("bio.txt","Plz see my code")

// R
  const data=fs.readFileSync("bio.txt","utf-8");
  console.log(data);;


//E 

fs.renameSync("Abhi/bio.txt","Abhi/Hello.txt");

// D

 fs.unlinkSync("redwrit.txt")