self.addEventListener('install', () => {
    console.log('SW: instalado')
});

self.addEventListener('fetch', e => {
   /* const respOff = new Response(`
    Bienvenido a la pagina offline

    Para poder usar la app necesitas conexion a internet
    `)*/

   /* const respOffHtml = new Response(`
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
                <link rel="stylesheet" href="css/pages.css">
                <title>Document</title>
            </head>

            <body>
                <h1>Bienvenido a la pagina offline</h1>
                <p>
                    Para poder usar la app necesitas conexion a internet
                </p>    
            <body>
            </html>
    `,{
        headers:{
            'Content-Type':'text/html'
        }
    }); 
*/
    const respOffFile =fetch('pages/viewOffline.html'); 

    const resp = fetch(e.request).catch(() => {
        console.log('error SW')
        return respOffFile;
    });

    console.log(e.request.url);
    e.respondWith(resp)
});