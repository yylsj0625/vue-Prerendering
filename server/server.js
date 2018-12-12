const express = require('express');
let app = express();
app.use(express.static("../dist"));

app.listen(8000, ()=>{
  console.log("服务启动成功。");
})
