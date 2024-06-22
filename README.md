
# Subiendo Archivos al servidor.

 Aplicación web que conta de un formulario para seleccionar un archivo de imagen y seleccionar una posicion (1-8), almacena y renombra el archivo en el servidor, para luego disponibilizarlos mediante un endpoint, ademas permite eliminar las imagenes al hacer click sobre alguna de ellas.



![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white) ![](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

# Endpoints:
```
GET /gastos: Devuelve todos los gastos almacenados en el archivo
gastos.json.

POST /gasto: Recibe el payload con los datos del gasto y los almacena.

PUT /gasto: Recibe el payload de la consulta y modifica los datos
almacenados en el servidor

DELETE /gasto: Recibe el id del gasto la elimine del historial de gastos.

GET /roommates: Devuelve todos los roommates almacenados en el servidor

```

### Estructura de Carpetas
```
└── 📁SbudaArchivos    
    └── collage.html
    └── formulario.html        
    └── package.json
    └── 📁public
        └── 📁imgs
            └── imagen-1.jpg
            └── imagen-2.jpg
            └── imagen-3.jpg
            └── imagen-4.jpg
            └── imagen-5.jpg
            └── imagen-6.jpg
            └── imagen-7.jpg
            └── imagen-8.jpg
    └── README.md
    └── server.js
```


## Dependencias
```
"dependencies": {
    "express": "^4.19.2",
    "express-fileupload": "^1.5.0",
    "fs": "^0.0.1-security"
  }
```

## instalacion

```
 git clone https://github.com/VictorTapiaEgana/collageimagenes.git
 npm install
 npm start
```
# Screenshots
## Agregar usuarios.
![](https://raw.githubusercontent.com/VictorTapiaEgana/collageimagenes/master/github/main.png)

## Mantenedor de gastos.
![](https://raw.githubusercontent.com/VictorTapiaEgana/collageimagenes/master/github/collage.png)


