const bCipher = document.querySelector('#cipher');
const bDecipher = document.querySelector('#decipher');
const spaceNum = 33;
//Función para Cifrar
bCipher.addEventListener('click',() => {
  let textCipher = document.querySelector('#cipherText'); 
  let txt = document.querySelector('#texto');
  let message = txt.value;    
  var strLetC = '';
  for(i = 0; i < message.length; i++){      
    let asc = message.charCodeAt(i); 
    if(asc >= 64 && asc <= 91){                      
      let newAsc = (asc - 65 + spaceNum) % 26 + 65;   
      let newLet = String.fromCharCode(newAsc);  
      strLetC += newLet;                         
    }else if(asc >= 96 && asc <= 123) {
      let newAscm = (asc - 97 + spaceNum) % 26 +97;  
      let newLetm = String.fromCharCode(newAscm);
      strLetC += newLetm; 
    }else if (asc === 32) {
      let space = ' ';
      strLetC += space;                     
    }else{
      alert(`ingrese solo texto`);
    } 
  } 
  textCipher.value = strLetC ; 
  txt.value = '' ;                     
});

//Función para Cifrar
bDecipher.addEventListener('click',() => {
  let textDecipher = document.querySelector('#decipherText'); 
  let txt = document.querySelector('#texto');
  let message = txt.value;    
  var strLet = '';
  for(i = 0; i < message.length; i++){      
    let asc = message.charCodeAt(i); 
    if(asc >= 64 && asc <= 91){                      
      let newAsc = (asc + 65 - spaceNum) % 26 + 65;   
      let newLet = String.fromCharCode(newAsc);  
      strLet += newLet;                         
    }else if(asc >= 96 && asc <= 123) {
      let newAscm = (asc + 97 + spaceNum) % 26 +97;  
      let newLetm = String.fromCharCode(newAscm);
      strLet += newLetm; 
    }else if (asc === 32) {
      let space = ' ';
      strLet += space;                     
    }else{
      alert(`ingrese solo texto`);
    } 
  } 
  textDecipher.value = strLet ; 
  txt.value = '' ;                     
});


