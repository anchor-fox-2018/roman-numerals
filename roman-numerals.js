function toRoman(angka){
    var angkaString = String(angka);
    var arrayAngka = angkaString.split('');
    var hasil = '';
    //console.log(arrayAngka)
    //ANGKA SATUAN
    if(arrayAngka.length == 1){
        //console.log('ayam')
       if(Number(arrayAngka) <= 3){
           for(var i = 0;i < Number(arrayAngka);i++){
               hasil+= 'I';
           }
        }else if(Number(arrayAngka) === 5){
           hasil+= 'V';
        }else if(Number(arrayAngka) > 5 && Number(arrayAngka) < 9){
            hasil+= 'V'
            for(var i = 5;i < Number(arrayAngka);i++){
                hasil+= 'I';
                }
        }else{
           if(Number(arrayAngka) === 4){
            hasil+= 'IV'
            }
           if(Number(arrayAngka) === 9){
            hasil+= 'IX'
            }
       } 
    }
    //ANGKA PULUHAN
    if(arrayAngka.length == 2){
        //console.log('ayam')
        if(Number(arrayAngka[0]) <= 3){
           for(var i = 0;i < Number(arrayAngka[0]);i++){
               hasil+= 'X';
           }
        }else if(Number(arrayAngka[0]) === 5){
            hasil+= 'L';
        }else if(Number(arrayAngka[0]) > 5 && Number(arrayAngka[0]) < 9){
            hasil+= 'L'
            for(var i = 5;i < Number(arrayAngka);i++){
                hasil+= 'X';
                }
        }else{
           if(Number(arrayAngka[0]) === 4){
            hasil+= 'IX'
            }
           if(Number(arrayAngka[0]) === 9){
            hasil+= 'IC'
            }
       } 
       if(Number(arrayAngka[1]) <= 3){
            for(var i = 0;i < Number(arrayAngka[1]);i++){
                hasil+= 'I';
            }
        }else if(Number(arrayAngka[1]) === 5){
            hasil+= 'V';
        }else if(Number(arrayAngka) > 5 && Number(arrayAngka) < 9){
            hasil+= 'V'
            for(var i = 5;i < Number(arrayAngka);i++){
                hasil+= 'I';
                }
        }else{
            if(Number(arrayAngka[1]) === 4){
            hasil+= 'IV'
            }
            if(Number(arrayAngka[1]) === 9){
            hasil+= 'IX'
            }
            } 
    }
    //ANGKA RATUSAN
    if(arrayAngka.length == 3){
        //console.log('ayam')
        if(Number(arrayAngka[0]) <= 3){
           for(var i = 0;i < Number(arrayAngka[0]);i++){
               hasil+= 'C';
           }
        }else if(Number(arrayAngka[0]) === 5){
        hasil+= 'D';
        }else if(Number(arrayAngka[0]) > 5 && Number(arrayAngka) < 9){
            hasil+= 'D'
            for(var i = 5;i < Number(arrayAngka[0]);i++){
                hasil+= 'C';
                }
        }else{
           if(Number(arrayAngka[0]) === 4){
            hasil+= 'CD'
            }
           if(Number(arrayAngka[0]) === 9){
            hasil+= 'MC'
            }
       } 
       if(Number(arrayAngka[1]) <= 3){
            for(var i = 0;i < Number(arrayAngka[1]);i++){
                hasil+= 'X';
                }
        }else if(Number(arrayAngka[1]) === 5){
            hasil+= 'L';
        }else if(Number(arrayAngka[1]) > 5 && Number(arrayAngka) < 9){
            hasil+= 'L'
            for(var i = 5;i < Number(arrayAngka[1]);i++){
                hasil+= 'X';
                }
        }else{
            if(Number(arrayAngka[1]) === 4){
            hasil+= 'IX'
            }
            if(Number(arrayAngka[1]) === 9){
            hasil+= 'IX'
            }
        }
        if(Number(arrayAngka[2]) <= 3){
            for(var i = 0;i < Number(arrayAngka[2]);i++){
                hasil+= 'I';
                }
        }else if(Number(arrayAngka[2]) === 5){
            hasil+= 'V';
        }else if(Number(arrayAngka[2]) > 5 && Number(arrayAngka[2]) < 9){
            hasil+= 'V'
            for(var i = 5;i < Number(arrayAngka);i++){
                hasil+= 'I';
                }
        }else{
            if(Number(arrayAngka[2]) === 4){
            hasil+= 'IV'
            }
            if(Number(arrayAngka[2]) === 9){
            hasil+= 'IX'
            }
        }   
    }
    //ANGKA RIBUAN
    if(arrayAngka.length == 4){
        if(Number(arrayAngka[0]) <= 3){
            for(var i = 0;i < Number(arrayAngka[0]);i++){
                hasil+= 'M';
            }
        }    
       if(Number(arrayAngka[1]) <= 3){
           for(var i = 0;i < Number(arrayAngka[1]);i++){
               hasil+= 'C';
           }
        }else if(Number(arrayAngka[1]) === 5){
            hasil+= 'D';
        }else if(Number(arrayAngka[1]) > 5 && Number(arrayAngka[1]) < 9){
            hasil+= 'D'
            for(var i = 5;i < Number(arrayAngka[1]);i++){
                hasil+= 'C';
                }
        }else{
           if(Number(arrayAngka[1]) === 4){
            hasil+= 'CD'
            }
           if(Number(arrayAngka[1]) === 9){
            hasil+= 'MC'
            }
       } 
       if(Number(arrayAngka[2]) <= 3){
            for(var i = 0;i < Number(arrayAngka[2]);i++){
                hasil+= 'X';
                }
        }else if(Number(arrayAngka[2]) === 5){
            hasil+= 'L';
        }else if(Number(arrayAngka[2]) > 5 && Number(arrayAngka[2]) < 9){
            hasil+= 'L'
            for(var i = 5;i < Number(arrayAngka[2]);i++){
                hasil+= 'X';
                }
        }else{
            if(Number(arrayAngka[2]) === 4){
            hasil+= 'XL'
            }
            if(Number(arrayAngka[2]) === 9){
            hasil+= 'IC'
            }
        }
        if(Number(arrayAngka[3]) <= 3){
            for(var i = 0;i < Number(arrayAngka[3]);i++){
                hasil+= 'I';
                }
        }else if(Number(arrayAngka[3]) === 5){
            hasil+= 'V';
        }else if(Number(arrayAngka[3]) > 5 && Number(arrayAngka[3]) < 9){
            hasil+= 'V'
            for(var i = 5;i < Number(arrayAngka[3]);i++){
                hasil+= 'I';
                }
        }else{
            if(Number(arrayAngka[3]) === 4){
            hasil+= 'IV'
            }
            if(Number(arrayAngka[3]) === 9){
            hasil+= 'IX'
            }
        }   
    }
    // var spesial = ['4','9'];
    // var hasilSpesial = ['IV','IX'];
    // for(var i = arrayAngka.length-1;i >= 0;i--){
    //     if(Number(arrayAngka[i]) <= 3){
    //         for(var j = 0;j < Number(arrayAngka[i]);j++){
    //             hasil+= 'I';
    //             console.log(hasil,'  ',j);
    //         }
    //     }
    //     console.log(arrayAngka[i]);
    // }
    return hasil
}
console.log('My Totally sweet testing script\n');
console.log('Input | expected | actual');
console.log('______|__________|________')
console.log('4     | IV       |',toRoman(4));
console.log('9     | IX       |',toRoman(9));
console.log('23    | XXIII    |',toRoman(23));
console.log('1453  | MCDLIII  |',toRoman(1453));
console.log('1646  | MCDXLVI  |',toRoman(1646));
