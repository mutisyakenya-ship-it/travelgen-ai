import { create } from "zustand";
import type { Itinerary, Trip } from "../../types/itinerary";

type ItineraryStore = {
  itinerary: Itinerary | null;

  trips: Trip[];

  currentTrip: Trip | null;

  setItinerary: (itinerary: Itinerary) => void;

  setTrips: (trips: Trip[]) => void;

  setCurrentTrip: (trip: Trip | null) => void;

  clearItinerary: () => void;

  clearTrips: () => void;
};

export const useItineraryStore = create<ItineraryStore>((set) => ({
  itinerary: null,

  trips: [],

  currentTrip: null,

  setItinerary: (itinerary) => {
    set({ itinerary });
  },

  setTrips: (trips) => {
    set({ trips });
  },

  setCurrentTrip: (trip) => {
    set({
      currentTrip: trip,
      itinerary: trip?.itinerary ?? null,
    });
  },

  clearItinerary: () => {
    set({
      itinerary: null,
      currentTrip: null,
    });
  },

  clearTrips: () => {
    set({
      trips: [],
      currentTrip: null,
      itinerary: null,
    });
  },
}));