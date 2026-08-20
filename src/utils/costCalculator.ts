import type { Day, Itinerary } from "../types/itinerary";

export function calculateDayTotal(day: Day): number {
  return (
    day.cost.accommodation +
    day.cost.transport +
    day.cost.food +
    day.cost.activities +
    day.cost.miscellaneous
  );
}

export function calculateTripCost(days: Day[]) {
  const accommodation = days.reduce(
    (total, day) => total + day.cost.accommodation,
    0
  );
  const transport = days.reduce(
    (total, day) => total + day.cost.transport,
    0
  );

  const food = days.reduce(
    (total, day) => total + day.cost.food,
    0
  );

  const activities = days.reduce(
    (total, day) => total + day.cost.activities,
    0
  );

  const miscellaneous = days.reduce(
    (total, day) => total + day.cost.miscellaneous,
    0
  );

  const total =
    accommodation +
    transport +
    food +
    activities +
    miscellaneous;

  return {
    accommodation,
    transport,
    food,
    activities,
    miscellaneous,
    total,
    currency: "KES" as const,
  };
}

export function normalizeItinerary(itinerary: Itinerary): Itinerary {
  const normalizedDays = itinerary.days.map((day) => {
    const total = calculateDayTotal(day);

    return {
      ...day,
      estimatedCost: total,
      cost: {
        ...day.cost,
        total,
      },
    };
  });

  return {
    ...itinerary,
    days: normalizedDays,
    costSummary: calculateTripCost(normalizedDays),
  };
}