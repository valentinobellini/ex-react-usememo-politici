// 📌 Milestone 1: Recuperare e visualizzare i dati
// Effettua una chiamata API a
// https://boolean-spec-frontend.vercel.app/freetestapi/politicians
// Salva la risposta in uno stato React (useState).
// Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:
// Nome (name)
// Immagine (image)
// Posizione (position)
// Breve biografia (biography)
// Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.



// import { useState, useEffect } from 'react';

// export default function PoliticiansList() {

//     const [politicians, setPoliticians] = useState([]);

//     useEffect(() => {

//         fetch("http://localhost:3333/politicians")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);

//                 setPoliticians(data)
//             })
//             .catch((err) => console.error(err))

//     }, [])


//     return (
//         <>
//             <h1>Lista di Politici</h1>
//             <div className="card_container">
//                 {politicians.map(p => (
//                     <div key={p.id} className="card">
//                         <img src={p.image} alt={p.name} className='card_image' />
//                         <h2>{p.name}</h2>
//                         <h4>{p.position}</h4>
//                         <p>{p.biography}</p>
//                     </div>
//                 ))}
//             </div>
//         </>


//     )

// }




// 📌 Milestone 2: Implementare la ricerca ottimizzata
// Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
// Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
// ❌ Non usare useEffect per aggiornare l’array filtrato.
// Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.


import { useState, useEffect, useMemo } from 'react';

export default function PoliticiansList() {

    const [politicians, setPoliticians] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {

        fetch("http://localhost:3333/politicians")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setPoliticians(data)
            })
            .catch((err) => console.error(err))

    }, [])

    const filteredPoliticians = useMemo(() => {
        const lowerSearch = search.toLowerCase();

        return politicians.filter(p =>
            p.name.toLowerCase().includes(lowerSearch) ||
            p.biography.toLowerCase().includes(lowerSearch)
        )
    }, [search, politicians])


    return (
        <>
            <h1>Lista di Politici</h1>
            <div className="input_container">
                <input
                    type="text"
                    placeholder='Cerca per nome o biografia'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="card_container">
                {filteredPoliticians.map(p => (
                    <div key={p.id} className="card">
                        <img src={p.image} alt={p.name} className='card_image' />
                        <h2>{p.name}</h2>
                        <h4>{p.position}</h4>
                        <p>{p.biography}</p>
                    </div>
                ))}
            </div>
        </>


    )

}
















