import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function Card({ name, image }) {
    return (
        <>
            <div className="card-container">
                <img src={image} alt="" className="card-img" />
                <div className="locicon-name">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon" /><span className="name">{name}</span>
                </div>
            </div>
        </>
    )
}