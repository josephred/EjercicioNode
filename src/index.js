const app = require('./app');


async function main(){
    await app.listen(3000);
    console.log("Servidor corriendo ");
}
main();
// app.listen(3000,()=>{ console.log('Server, port 3000') });