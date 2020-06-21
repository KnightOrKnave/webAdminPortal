const express=require('express');
const fs=require('fs');

const port=process.env.PORT||3000;
const targetFileName=process.env.FILENAME||"setting.json";

let file=fs.readFileSync(`${__dirname}/data/${targetFileName}`,'utf-8');
let json=JSON.stringify(JSON.parse(file),null,2);

//express setting
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.end(`
  <head>
  <title>admin portal</title>
  </head>
 <html>
 <body>
  <form action="/" method="post" name="form1">
  <textarea name="textarea1" rows="40" cols="80">${json}</textarea>
  <input type="submit"></input>
  </form>
 </body>
 </html> 
  `)
});

app.post('/',(req,res)=>{
  const newJson=JSON.parse(req.body.textarea1);
  json=JSON.stringify(newJson,null,2);
  console.log(newJson);
  res.redirect('/');
})


app.listen(port,()=>console.log(`start port:${port}`));