const db = require("./db/test.json");

function createSlug(stringa, db) {

    if (typeof stringa !== 'string' || stringa.trim() === '') {
        throw new Error('Il titolo non è presente o ha un formato errato');
    }
    if (!Array.isArray(db)) {
        throw new Error("array dei post non è presente o ha un formato errato");
    }
    let slug = stringa.toString().toLowerCase().replace(/ /g, '-');
    // estraggo slug
    const existingSlugs = db.map(item => item.slug);
    //se esiste gia
    if (existingSlugs.includes(slug)) {
        let counter = 1;
        let newSlug = `${slug}-${counter}`;

        while (existingSlugs.includes(newSlug)) {
            counter++;
            newSlug = `${slug}-${counter}`;
        }

        return newSlug;
    }
    return slug;
}
/*function convertJSON() {
    try {
        const jsonFile = fs.readFileSync('./db/test.json', 'utf8');
        return JSON.parse(jsonFile);
    } catch (error) {
        console.error("Errore nel caricare o analizzare il file JSON dei post");
    }
}
*/
module.exports = {
    createSlug
};

