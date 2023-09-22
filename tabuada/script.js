function calcular(){
    let numero = document.getElementById('inumber');
   let resultado = document.getElementById('iresultado');

   if(numero.value.length == 0){
       window.alert('Digite um número!');
   }else{
       resultado.innerHTML = '';

       let n = Number(numero.value);

       for(let x = '1'; x<=10; x++){
           let item = document.createElement('option');
           item.text = `${n} x ${x} = ${n*x}`;
           item.value = `resultado${x}`;
           resultado.appendChild(item);
       }
   }
}