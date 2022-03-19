let p = new Promise((resolve,reject) => 
{
    let login = "ak@gmail.com";
    let password = 8308607474;
    if(login == "ak@gmail.com" && password=="8308607474")
    {
        resolve('Login successFull');
    }else
    {
        reject('Please Check Your Username');
    }
})

p.then((message) =>
{
    document.write('&hearts;'+ " " + message);
}).catch((message) =>
{
    document.write('&#128512;' + message);
})