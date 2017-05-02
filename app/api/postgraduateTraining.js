import fs from 'fs';
import express from 'express';
import path from 'path';
const router = express.Router();

router.post('/', (req, res) => {
  let content = "module.exports=`"+ req.body.content + "`";
  fs.writeFile(path.resolve(__dirname,'../../file/postgraduateTraining.js'), content, (err) => {
    console.log(content);
    if (err) throw err;
    console.log('It\'s saved!');
    res.sendStatus(201);
  });
});

export default router;
