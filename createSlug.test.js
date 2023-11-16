const db = require("./db/test.json");
//eseguiamo test 
const { test, expect } = require("@jest/globals");
const { createSlug } = require("./createSlug");
//test per tornare stringa da function create slug PASSA
test("createSlug dovrebbe ritornare una stringa", () => {
    const testo = "Il Testo DEVE tornare In Lower"
    const result = createSlug(testo, db);
    expect(typeof result).toBe("string")
})
//createSlug dovrebbe ritornare una stringa in lowercase PASSA
test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
    const testo = "Il Testo DEVE tornare In Lower"
    const result = createSlug(testo, db);
    expect(result).toBe("il-testo-deve-tornare-in-lower")
})
//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test("createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const testo = "Il Testo DEVE tornare In Lower"
    const result = createSlug(testo, db);
    expect(result).toBe("il-testo-deve-tornare-in-lower")
})
//createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test("ccreateSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const testo = "terzo Elemento"
    const result = createSlug(testo, db);
    expect(result).toBe("terzo-elemento-1")
})
//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test("createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
    const testo = "";
    expect(() => createSlug(testo, db)).toThrowError("Il titolo non è presente o ha un formato errato");
})
//createSlug dovrebbe lanciare un errore se manca l’array dei post
test("createSlug dovrebbe lanciare un errore se manca l’array dei post", () => {

    expect(() => createSlug("", db)).toThrowError("Il titolo non è presente o ha un formato errato");
    expect(() => createSlug("dnd", "non è un array")).toThrowError("array dei post non è presente o ha un formato errato");
});