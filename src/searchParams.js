import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Result";
import ThemeContext from "./ThemeContext"


const SearchParams = () => {

    const [location, setLocation] = useState("seattle , WA");
    const [animal, AnimalDropdown] = useState("Animal", "dog", ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets , setPets] = useState([]);
    const [theme , setTheme] = useContext(themeContext)


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
                <label htmlFor="theme">
                    Theme 
                    <select
                        value={theme}
                        onchange = {e => setTheme(e.target.value)}
                        onBlur = {e => setTheme(e.target.value)}
                        >
                        <option value ="peru">Peru</option>
                        <option value ="darkblue">Darl Blue</option>
                        <option value ="mediumorchid">Medium Orchid</option>

                    </select>
                </label>
                <button style={ {backgroundColor:theme} }>Submit</button>
            </form>
            <Results  pets = {pets} />
        </div>
    );
};

export default SearchParams;
