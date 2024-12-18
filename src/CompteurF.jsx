import React, { useEffect, useState } from 'react'

export default function CompteurF() {
    const [compteur, setCompteur] = useState(0);
    useEffect(() => {
        console.log("Component Did mount ");
        
    },[])
    useEffect(() => {
        if(compteur == 0) return;
        console.log("Component Did update");
        return () => {
          console.log("Component Will unmount");
      }
    },[compteur])
  return (
    <div>CompteurF
        <input type="button" value="Incrementer" onClick={() => setCompteur(compteur + 1)} />
    </div>
  )
}
