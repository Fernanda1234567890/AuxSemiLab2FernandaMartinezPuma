const emailList = [
    "javascript@gmail.com", 
    "abc.com",//email no valido
    "mydomain.com",//email no valido
    "Python@hotmail.com",
    "test",//email no valido
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",//email no valido
    "elta@kkk.co",//email no valido
    "user123.....",//email no valido
    "wrongEmail@gmail.com",
    "kattis.go",//email no valido
    "java@gamil.com",
  ];

let emailvalido = emailList.filter(function(valido) {
    if (valido.includes ("@"))
        return valido.includes("@" && ".com");
});
console.log("los correos validos son:" , emailvalido);