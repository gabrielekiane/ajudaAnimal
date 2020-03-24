const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query //buscando o parametro page, se n existir, utilizaremos a pag 1 por padrao

        // [count] -> para pegar apenas a primeira posicao do array
        const [count] = await connection('incidents').count(); //contando o total de registros

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)  // limite de 5 incidents
            .offset((page - 1) * 5)  //pulando os registros de 5 em 5 registros por pagina
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); //retorna apenas um resultado

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: "Operation not permitted." })
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send(); //resposa com sucesso mas sem mensagem
    }
}