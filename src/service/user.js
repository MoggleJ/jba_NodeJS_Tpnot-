

const getRhumsInfos = async (req, res) => {
    try {
        const rhums = await rhumService.getRhumsInfos();
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