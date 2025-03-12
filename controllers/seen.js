const { seenModels } = require('../models');

const getItems = async (req, res) => {
    try {
        const seen = await seenModels.findAll();
        res.json(seen);
    } catch (error) {
        console.error(`❌ Error al obtener seen: ${error}`);
        res.status(500).json({ error: "Error al obtener seen", details: error.message });
    }
};

module.exports = { getItems }
