const express=require('express');
const port=process.env.PORT||3000;

let json=JSON.stringify({key:"value",key2:"value2",key3:[1,3,5,7,9]},null,2);

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