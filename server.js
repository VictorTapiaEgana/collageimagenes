const express = require('express');
const path = require('path');
const expressFileUpload = require('express-fileupload');
const fs = require('fs');

const PORT = 3005;

const app = express();
app.use(express.json())

app.use(express.static(path.join(process.cwd(),'/public')));

app.use( expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido",
}));    

// formulario.html
app.get('/',(req,res)=>{

    res.sendFile(path.join(process.cwd(),'formulario.html'));

});

// collage.html
app.get('/collage',(req,res)=>{

    res.sendFile(path.join(process.cwd(),'collage.html'));

});


// guardar imagen
app.post('/imagen',(req,res)=>{

    const{ target_file } = req.files;

    const{ name } = target_file;    
    const { posicion } = req.body;

    target_file.mv(path.join(process.cwd(),`/public/imgs/imagen-${posicion}.jpg`), (err) => {           
        

       if (err) {
            console.log(err);
       }else{
            res.sendFile(path.join(process.cwd(),'collage.html'));
       }

    });    

});

app.get('/deleteImg/:imagen',(req,res)=>{

        const { imagen } = req.params;

        fs.unlink(path.join(process.cwd(),`/public/imgs/${imagen}`), (err) => {
        
            if (err) {
              
                console.error(err);

            } else {

              res.sendFile(path.join(process.cwd(),'collage.html'));
              console.log('Archivo eliminado');

            }
        });

});

// Holiwis
app.listen (PORT,()=>{

    console.clear();
    console.log(`Holiwis en PORT ${PORT}`);

});