function winRate(win, loss){
    let winRate = win - loss
    return winRate
}

let winRateResult = winRate(11, 0)

for(i = 1; i <= 7; i++){
    switch(i){
        case 1:
            if(winRateResult <= 10){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Ferro!`)
            }
        break;

        case 2:
            if(winRateResult > 10 && winRateResult <= 20){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Bronze!`)
            }
        break;

        case 3:
            if(winRateResult > 20 && winRateResult <= 50){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Prata!`)
            }
        break;

        case 4:
            if(winRateResult > 50 && winRateResult <= 80){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Ouro!`)
            }
        break;

        case 5:
            if(winRateResult > 80 && winRateResult <= 90){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Diamante!`)
            }
        break;

        case 6:
            if(winRateResult > 90 && winRateResult <= 100){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Lendário!`)
            }
        break;

        case 7:
            if(winRateResult >= 101){
                console.log(`O Herói tem o saldo de vítorias de: ${winRateResult}, e está no nível Imortal!`)
            }
    }
}