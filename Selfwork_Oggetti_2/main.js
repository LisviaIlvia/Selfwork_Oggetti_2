// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// - mostrare tutti i contatti dell’agenda
// - mostrare un singolo contatto
// - eliminare un contatto dall’agenda
// - aggiungere un nuovo contatto
// - modificare un contatto esistente  


let agenda = {
    'contacts': [
        { 'nome': 'Nicola', 'telefono': '3331111111' },
        { 'nome': 'Lorenzo', 'telefono': '3332222222' },
        { 'nome': 'Paola', 'telefono': '3333333333' },
        { 'nome': 'Jenny', 'telefono': '3334444444' }
    ],

    mostra_contatti: function () {

        this.contacts.forEach((contact) => console.log(`Nome: ${contact.nome}, Telefono: ${contact.telefono}`));
    },
    mostra_contatto: function (nome) {

        let contact = this.contacts.find((contact) => contact.nome == nome);

        if (contact) {
            console.log(`Nome: ${contact.nome}, Telefono: ${contact.telefono}`);
        } else {
            console.log('Contatto non trovato');
        }

    },

    rimuovi_contatto: function (nome) {

        let index = this.contacts.findIndex((contact) => contact.nome === nome);
        if (index >= 0) {
            this.contacts.splice(index, 1);
            console.log(`Il contatto ${nome} è stato rimosso con successo`);
        } else {
            console.log(`Il contatto ${nome} non è presente in rubrica`);
        }

    },

    aggiungi_contatto: function (nome, telefono) {
        this.contacts.push({ 'Nome': nome, 'Telefono': telefono })
    },

    modifica_contatto: function (nome_modificare, nome, telefono) {
        let index = this.contacts.findIndex((contact) => contact.nome === nome_modificare);
        if (index >= 0) {
            this.contacts[index] = { 'nome': nome, 'telefono': telefono };
            console.log(`Il contatto ${nome_modificare} è stato modificato con successo`);
        } else {
            console.log(`Il contatto ${nome_modificare} non è presente in rubrica`);
        }
    }
}
//agenda.mostra_contatto('Lorenzo');
//agenda.mostra_contatti();
//agenda.rimuovi_contatto('claudio')

agenda.aggiungi_contatto('Silvia', '3336666666')
agenda.aggiungi_contatto('Giuliano', '3335555555')
agenda.modifica_contatto('Lorenzo', 'Giada', '3337777777')
agenda.modifica_contatto('Paola', 'Paola', '3337777777')
agenda.modifica_contatto('Greta', 'Matteo', '3338888888')
console.log(agenda);
