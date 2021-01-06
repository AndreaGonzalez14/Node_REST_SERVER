//=========================================================//
//puerto
process.env.PORT = process.env.PORT || 3000;
//=========================================================//
//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================================================//
//Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cocoa';
} else {
    urlDB = 'mongodb+srv://cocoa-user:MnsXv8qEO8F2gokD@cluster0.kisyi.mongodb.net/Cocoa'
}
process.env.urlDB = urlDB;