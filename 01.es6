const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        "cep": 'hacked, pay to recover',
        "logradouro": 'hacked, pay to recover',
        "complemento": 'hacked, pay to recover',
        "bairro": 'hacked, pay to recover',
        "localidade": 'hacked, pay to recover',
        "uf": '',
        "geo": {
            "lat": "-23.61919020307765",
            "lng": "-46.70793551534256"
        }
    }
}

const http = require('http');

const resultado = () => new Promise(
    (resolve, reject) => http.get(
        `http://viacep.com.br/ws/05650000/json`,
        response => {
            let result = ''
            response.on('data', data => {
                result += data
            })
    
            response.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        }
    )
)

resultado(dono).then(({
    cep, bairro, localidade
}) => console.log(`${dono.proprietario} - ${cep} - ${bairro} - ${localidade} (${dono.endereco.geo.lat}, ${dono.endereco.geo.lng})`));