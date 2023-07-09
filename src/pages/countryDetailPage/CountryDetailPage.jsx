import { NavLink, useParams } from "react-router-dom";
import "./CountryDetailPage.css";
import { useContext } from "react";
import { Card } from "../components/Card";
import { DataContext } from "../../contexts/DataProvider";

export function CountryDetailPage() {

    const {contId, countryId} = useParams();

    const {dataState} = useContext(DataContext);

    const selectedCountry = dataState.find(({id}) => id == contId).countries.find(({id}) => id == countryId )

    // console.log({selectedCountry})

    return (
        <>
        <div className="countrydetail-page">
        <div className="heading">
                <h2>Top Destinations in {selectedCountry.name} for your next holiday</h2>
            </div>

           <div className="countrylist-container cards">
            {selectedCountry.destinations.map((dest) => (
                    <NavLink to={`/continent/${contId}/country/${countryId}/destination/${dest.id}`} key={dest.id}>
                        <Card name={dest.name} image={dest.image}/>
                    </NavLink>
                ))}
            </div>
        </div>
        </>
    )
}