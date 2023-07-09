import { NavLink, useParams } from "react-router-dom";
import "./CountryListPage.jsx.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataProvider";
import { Card } from "../components/Card";

export function CountryListPage() {


    const {contId} = useParams();

    const {dataState} = useContext(DataContext);

    const selectedContinent = dataState.find(({id}) => id == contId);

    console.log({selectedContinent})

    return (
        <>
           <div className="countrylist-page">

            <div className="heading">
                <h2>Top Countries in {selectedContinent.name} for your next holiday</h2>
            </div>

           <div className="countrylist-container cards">
            {selectedContinent.countries.map((country) => (
                    <NavLink to={`/continent/${contId}/country/${country.id}`} key={country.id}>
                        <Card name={country.name} image={country.image}/>
                    </NavLink>
                ))}
            </div>
           </div>
        </>
    )
}