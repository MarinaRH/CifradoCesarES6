# CifradoCesarES6
___
### ES6

Para este ejercicio de cifrado Cesar utilizaremos ECMAScript6 (ES6) que es una especificación de lenguaje de scripting estandarizada por ECMAScript International. Las aplicaciones lo utilizan para habilitar el scripting del lado del cliente. Los lenguajes como JavaScript, Jscript y ActionScript se rigen por esta especificación.

por ejemplo:Con la función arrow => de ES6, el código es mucho más limpio y claro.

* Al ingresar introducimos nuestra frase y elegiremos entre las dos opciones:
     Cifrado 
     Decifrado

* Si es CIFRADO => Llama función Cipher
    1. Crea variable strLet.
    2. Inicializa i = 0; si **i** es menor que **message.length**; aumentar + 1{
    3. Variable **asc** es igual a **String** donde transformara el numero sacado en i a codigo ASCII.
    4. **SI** asc es >= que 65 y asc es <= 90 
         * newAsc = (asc - 65 + 33) residuo de 26 + 65;
         * newLet = la respuesta de newAsc convertida a letra;
         * se concatena strLet += newLet;

    5. **NO** asc es >= que 97 y asc es <=122 
        * newAsc =(asc - 97 + 33)residuo de 26 + 97;
        * newLet = la respuesta de newAsc convertida en letra;
        * se concatena strLet +=newLet;
    Muestra en el input el valor Cifrado.
}
* Si es DECIFRAR => LLama función Decipher
    1. Crea variable strLet.
    2. Inicializa i = 0; si **i** es menor **message.length**; aumentar + 1.{
        * varialbe **asc** es igual a **String** donde transformara el numero sacado en i a ASCII.
        * **si** asc es >= 65 && asc <=90{
            * variable newAsc =(asc + 65 - 33) residuo de 26 -65;
            * variable newLet = la respuesta de newAsc convertida a letra;
            * se concatena strLet += newLet;
        }
    3. **NO** asc es >= que 97 y asc es <= 122{
        * variable newLet = (asc - 97+ 33 ) residuo de 26 - 97;
        * variable newLet = la respuesta de newLet convertida a letra;
        * se concatena strLet += newLet;
    Muestra en el input el valor decifrado.