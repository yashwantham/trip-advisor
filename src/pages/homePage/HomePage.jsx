import { useContext } from "react";
import "./HomePage.css";
import { DataContext } from "../../contexts/DataProvider";
import { NavLink } from "react-router-dom";
import { Card } from "../components/Card";

export function HomePage() {

    const {dataState} = useContext(DataContext);

    return (
        <>
        <div className="homepage-container">
            <h1>Welcome to Trip Advisor</h1>
            <h2>Top Continents for your next holiday</h2>

            <div className="continentslist-container cards">
                {dataState.map((cont) => (
                    <NavLink to={`/continent/${cont.id}`} key={cont.id}>
                        <Card name={cont.name} image={cont.image}/>
                    </NavLink>
                ))}
            </div>

        </div>
        </>
    )
}