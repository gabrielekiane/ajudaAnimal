const crypto = require('crypto');
const connection = require('../database/connection');

const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body; //aqui acessamos os dados do corpo da requisicao

        //para gerar o id usaremos strings randomicas com o pacote crypto do nodeJS
        const id = generateUniqueId();
        
        // fazer a conexao com o banco || await fara com q qnd o node chegar nesse codigo ele ira aguardar o codigo finalizar para continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    }
}