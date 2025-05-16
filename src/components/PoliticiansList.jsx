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



import { useState, useEffect } from 'react';

export default function PoliticiansList() {

    const [politicians, setPoliticians] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3333/politicians")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setPoliticians(data)
            })
            .catch((err) => console.error(err))

    }, [])


    return (
        <>
            <h1>Lista di Politici</h1>
            <div className="card_container">
                {politicians.map(p => (
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