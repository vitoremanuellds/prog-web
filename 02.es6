const tcc = (e, d) => {
    if (d - e >= 3) {
        console.log('Muito bem! O aluno está apto a apresentar até o natal!');
    } else {
        console.log('O trabalho está muito ruim!');
        if (e + 2 < 24) {
            console.log('TCC Apresentado!');
        } else {
            console.log('Não deu! Só no próximo ano agora.')
        }
    }
}

tcc(13, 19)
tcc(22, 23)
tcc(21, 22)