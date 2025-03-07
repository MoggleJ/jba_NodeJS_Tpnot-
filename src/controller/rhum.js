const rhumService = require('../service/compte.js');
const debugR = require('debug')('rhum');

// Récupérer tous les rhums
const getRhumsList = async (req, res) => {
    try {
        const rhums = await rhumService.getRhumsList();
        const page = parseInt(req.query.page) || 1;  // Par défaut, page 1
        const limit = 10;

        // Calculer l'offset en fonction de la page et du limit
        const offset = (page - 1) * limit;

        rhums_pagines = rhums.slice(offset, offset + limit);
        const totalResults = rhums.length;
        const totalPages = Math.ceil(totalResults / limit);

        if (page < 1 || page > totalPages) {
            return res.status(400).json({
                error: 'Page number out of range',
                totalPages,
                totalResults
            });
        }

        res.json({
            page,
            limit,
            totalResults,
            totalPages,
            data: rhums_pagines,
            nextPage: page < totalPages ? page + 1 : null,
            prevPage: page > 1 ? page - 1 : null,
        });

    } catch (err) {
        console.error('Error fetching rhums info:', err);
        res.status(500).send('Internal Server Error');
    }
};

// Rechercher un rhum par nom, type ou pays
const searchRhums = async (req, res) => {
    const filter = req.query.filter;
    const info = req.query.info;

    console.log('Received filter:', filter);  // Log du filter
    console.log('Received info:', info);      // Log de info

    if (!filter || !info) {
        return res.status(400).send('Filter and info parameters are required');
    }

    try {
        const rhums = await rhumService.searchRhums(filter, info);
        console.log('Rhums found:', rhums);  // Log des Pokémons trouvés

        if (rhums.length > 0) {
            res.json(rhums);
        } else {
            res.status(404).send('No Rhum found');
        }
    } catch (err) {
        console.error('Error searching Rhums:', err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getRhumsList,
};