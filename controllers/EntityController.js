const Error = require('../components/schemas/Error');
const Entity = require('../components/schemas/Entity');
const EntityModel = require('../components/schemas/Entity');

const message = Error({Error: "Error no se encuentra para rango especificado"});

function filterEntity(req, res) {
    const { startId, endId } = req.body;
    EntityModel.find((err, data) => {
        if (!err) {
            let entities = data.filter(entity => (entity.entityId >= startId && entity.entityId <= endId)).sort();
            if (entities.length != 0) {
                res.status(200).send({ status: 200, data: entities });
            }
        }
    });
    res.status(404).send({ status: 404, message: message.Error });
}

module.exports = {
    filterEntity
}