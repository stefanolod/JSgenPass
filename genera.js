function genera() {
    var p = "";
    const minuscole = "abcdefghijklmnopqrstuvwxyz";  //array di 26 celle
    const maiuscole = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeri = "1234567890";

    var scelta;

    if(document.getElementById("alf_num").checked == true){
        scelta = 1;
    }else if(document.getElementById("alf_num_sym").checked == true){
        scelta = 2;
    }

    var n = document.getElementById("n_caratteri");

    if (scelta == 1){     
        for (i = 0; i != parseInt(n.value); ++i){
            let l = Math.floor( Math.random() * 2);
            if(l == 0){
                p += minuscole.charAt(Math.floor( Math.random() * minuscole.length));
            }else if (l == 1) {
                p += maiuscole.charAt(Math.floor( Math.random() * maiuscole.length));
            }else if (l == 2) {
                p += numeri.charAt(Math.floor( Math.random() * numeri.length));
            }
        }
    }else if(scelta == 2){     
        const simboli = "@#$!%*?&_"; 
        for (i = 0; i != parseInt(n.value); ++i){
            let l = Math.floor( Math.random() * 4);
            if(l == 0){
                p += minuscole.charAt(Math.floor( Math.random() * minuscole.length));
            }else if(l == 1){
                p += maiuscole.charAt(Math.floor( Math.random() * maiuscole.length));
            }else if(l == 2){
                p += numeri.charAt(Math.floor( Math.random() * numeri.length));
            }else if(l == 3){
                p += simboli.charAt(Math.floor( Math.random() * simboli.length));
            }
        }
    }

    document.getElementById("password").value = p;
}