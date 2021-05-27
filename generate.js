function generate() {
    var p = "";
    const lowercase = "abcdefghijklmnopqrstuvwxyz"; 
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "1234567890";

    var choice;

    if(document.getElementById("alf_num").checked == true){
        choice = 1;
    }else if(document.getElementById("alf_num_sym").checked == true){
        choice = 2;
    }

    var n = document.getElementById("n_character");

    //The algorithm it's that choices a random cell inside the array where is the characters,
    //and randomly choiches if the next character will be a number, a lower case or a upper case.
    if (scelta == 1){     
        for (i = 0; i != parseInt(n.value); ++i){
            let l = Math.floor( Math.random() * 2);
            if(l == 0){
                p += lowercase.charAt(Math.floor( Math.random() * lowercase.length));
            }else if (l == 1) {
                p += uppercase.charAt(Math.floor( Math.random() * uppercase.length));
            }else if (l == 2) {
                p += digits.charAt(Math.floor( Math.random() * digits.length));
            }
        }
    }else if(scelta == 2){     
        const symbols = "@#$!%*?&_"; 
        for (i = 0; i != parseInt(n.value); ++i){
            let l = Math.floor( Math.random() * 4);
            if(l == 0){
                p += lowercase.charAt(Math.floor( Math.random() * lowercase.length));
            }else if(l == 1){
                p += uppercase.charAt(Math.floor( Math.random() * uppercase.length));
            }else if(l == 2){
                p += digits.charAt(Math.floor( Math.random() * digits.length));
            }else if(l == 3){
                p += symbols.charAt(Math.floor( Math.random() * symbols.length));
            }
        }
    }

    document.getElementById("password").value = p;
}
