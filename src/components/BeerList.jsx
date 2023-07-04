import { useEffect, useState } from "react"
import BeerCard  from "./BeerCard"
export default function BeerList({ user}) {
    const [beers, setBeers] = useState()
    const [selectedBeer, setSelectedBeer] = useState()

    const getBeers = () => {
        fetch("http://api.sampleapis.com/beers/ale")
        .then(response =>response.json())
        .then(setBeers)
        .catch(alert)
    }

    useEffect(() => { //run once on mount
        getBeers() 
    }, [selectedBeer]);
 //triggering a side-effect when selected (state) changes
      useEffect(() =>  {document.title = selectedBeer || "The Beers!"
    }, [selectedBeer])

    useEffect(() => { //right before component unmounts
        return () => {
            alert("Thanks for all the Beers!")
        }
        },[])
    return (
        <main>
                {selectedBeer && <h2>Selected: {selectedBeer}</h2>}
            <section className="beer-list">
             {!beers
             ? <h2>Loading...</h2>
             : beers.map((beer) => (
            <BeerCard
            key={beer.id}
            setSelectedBeer={setSelectedBeer}
            name={beer.name}
            avgRating={beer.rating.average}
            image={beer.image} />
             ))
             }
            </section>
        </main>
    )
}