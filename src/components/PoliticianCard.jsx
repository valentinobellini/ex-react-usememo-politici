// 📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
// Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
// Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
// Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.
// Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.

import React from "react";

function PoliticianCard({ name, image, position, biography }) {
    console.log(name);


    return (
        <>
            <div className="card">
                <img src={image} alt={name} className='card_image' />
                <h2>{name}</h2>
                <h4>{position}</h4>
                <p>{biography}</p>
            </div>
        </>
    )
}

export default React.memo(PoliticianCard)