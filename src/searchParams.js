import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Result";


const SearchParams = () => {

    const [location, setLocation] = useState("seattle , WA");
    const [animal, AnimalDropdown] = useState("Animal", "dog", ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets , setPets] = useState([]);


    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type:animal
        });

        setPets(animals || []);
    }



    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedStrings = apiBreeds.map(() => name);
            setBreeds(breedStrings);
        },console.error)
    }, [animal, setBreed, setBreeds]);

    return (
        <div className="search-params">
            <form onSubmit = {e  => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location"
                        onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            <Results  pets = {pets} />
        </div>
    );
};

export default SearchParams;
