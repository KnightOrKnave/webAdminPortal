const express=require('express');
const port=process.env.PORT||3000;

let json=JSON.stringify({key:"value",key2:"value2",key3:[1,3,5,7,9]},null,2);

//express setting
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.end(`
 <html>
 <body>
  <form>
  <textarea rows="40" cols="80">${json}</textarea>
  <button>Submit</button>
  </form>
 </body>
 </html> 
  `)
});

app.post('/',(req,res)=>{
  json=JSON.stringify(req.body,null,2);
})


app.listen(port,()=>console.log(`start port:${port}`));