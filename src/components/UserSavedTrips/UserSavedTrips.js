import React from "react";
import { useQuery } from "@apollo/client";
import { USER_TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./UserSavedTrips.css";
import UserSavedTripCard from "../UserSavedTripCard/UserSavedTripCard";

const UserSavedTrips = ({ user }) => {
  const { loading, error, data } = useQuery(USER_TRIPS_QUERY);
  console.log({ loading });
  console.log({ error });
  console.log({ data });
  console.log("USER IN SAVED TRIPS", user);
  const onlyUserTrips = data?.trips.filter((trip) => trip.hostId === user.id);
  // console.log({ onlyUserTrips });

  return (
    <div className="saved-trip-container">
      <div className="page-title">
        <p className="user-saved-trips">Your Saved Field Trips</p>
      </div>
      <QueryResult data={data} error={error} loading={loading}>
        <>
          {onlyUserTrips?.map((trip) => {
            return (
              <UserSavedTripCard
                attendance={trip.attendance}
                destinationName={trip.destinationName}
                destinationPlaceId={trip.destinationPlaceId}
                hostId={trip.hostId}
                tripId={trip.id}
                maxAttendees={trip.maxAttendees}
                startDate={trip.startTime}
                tripName={trip.name}
                key={trip.destinationPlaceId}
              />
            );
          })}
        </>
      </QueryResult>
    </div>
  );
};

export default UserSavedTrips;
