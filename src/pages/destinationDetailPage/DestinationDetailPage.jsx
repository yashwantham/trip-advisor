import { useParams } from "react-router-dom";
import "./DestinationDetailPage.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataProvider";

export function DestinationDetailPage() {

    const { contId, countryId, destinationId } = useParams();

    const { dataState } = useContext(DataContext);

    const selectedDestination = dataState.find(({ id }) => id == contId).countries.find(({ id }) => id == countryId).destinations.find(({ id }) => id == destinationId)

    console.log({ selectedDestination })

    return (
        <>
            <div className="destinationdetail-page">
                <div className="destination-heading">
                    <h1>{selectedDestination.name}</h1>
                </div>
                <div className="img-n-details">
                    <div className="dest-img-container">
                        <img src={selectedDestination.image} alt="" className="dest-img" />
                    </div>
                    <div className="dest-detail-container">
                        <div className="row">
                            <strong>Description: </strong>{selectedDestination.description}
                        </div>
                        <div className="row">
                            <strong>Ratings: </strong>{selectedDestination.ratings}
                        </div>


                        <div className="row">
                            <strong>Reviews: </strong>{selectedDestination.reviews}
                        </div>

                        <div className="row">
                            <strong>Location: </strong>{selectedDestination.location}
                        </div>


                        <div className="row">
                            <strong>Opening Hours: </strong>{selectedDestination.openingHours}
                        </div>

                        <div className="row">
                            <strong>Ticket Price: </strong>{selectedDestination.ticketPrice}
                        </div>

                       <strong> <a href={selectedDestination.website} target="_blank">Website</a></strong>
                    </div>
                </div>
            </div>
        </>
    )
}