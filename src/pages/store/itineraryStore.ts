import { create } from "zustand";
import type { Itinerary } from "../../types/itinerary";

type ItineraryStore = {
  itinerary: Itinerary | null;
  setItinerary: (itinerary: Itinerary) => void;
  clearItinerary: () => void;
};

export const useItineraryStore = create<ItineraryStore>((set) => ({
  itinerary: null,

  setItinerary: (itinerary) => {
    set({ itinerary });
  },

  clearItinerary: () => {
    set({ itinerary: null });
  },
}));