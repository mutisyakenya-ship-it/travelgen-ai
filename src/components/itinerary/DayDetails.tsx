import Timeline from "./TimeLine";
import type { Day } from "../../types/itinerary";
type Props = {
  day: Day;
};
function DayDetails({ day }: Props) {
    return (
        <div className="space-y-6">
            <Timeline activities={day.activities ?? []} />
            <div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-primary-light)] p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-primary)]">
                    Weather Forecast
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
                  {day.weather.condition}

                  </h3>
                </div>
                <div className="text-4xl">
                  weather icon
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Temperature
                        </p>
                        <p className="font-semibold text-[var(--color-text)]">
                            {day.weather.temperature}°C
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Humidity
                        </p>
                        <p className="font-semibold text-[var(--color-text)]">
                            {day.weather.humidity}%
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Wind Speed
                        </p>
                        <p className="font-semibold text-[var(--color-text)]">
                            {day.weather.windSpeed} km/h
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Precipitation
                        </p>
                        <p className="font-semibold text-[var(--color-text)]">
                            {day.weather.precipitation} mm
                        </p>
                    </div>
                </div>
            <div className="mt-5 rounded-xl bg-white/70 p-4">
                <p className="text-sm font-medium text-[var(--color-primary)]">
                    Weather Advice
                </p>
                <p className="mt-1 text-[var(--color-text-secondary)]">
                    {day.weather.advice}
                </p>
                </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                            Meals
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
                            Food and dining options for the day
                        </h3>
                    </div>
                <div className="text-4xl">
                    food icon

                </div>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                    {(day.meals ?? []).map((meal, index) => (
                        <div 
                        key={`${meal.type}-${index}`} 
                        className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]"
                        >
                            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-dark)]">
                                {meal.type}
                            </p>
                         <h4 className="mt-2 font-bold text-[var(--color-text)]">
                            {meal.restaurant}
                         </h4>
                         <p className="mt-2 text-lg font-medium text-[var(--color-text-secondary)]">
                            Try: {meal.foodToTry}
                         </p>
                         <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                            {meal.description}
                            </p>
                        <p className="mt-4 font-semibold text-[var(--color-text)]">
                            {meal.estimatedCost.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                    </div>
                    ))}
                </div>
                  {(!day.meals || day.meals.length === 0) && (
                    <p className="mt-2 text-[var(--color-text-secondary)]">
                        No meals recommended for this day.
                    </p>
                )}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {/* estimated cost */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                         Estimated Cost
                        </h3>
                        <p className="mt-2 text-[var(--color-text-secondary)]">
                            {day.cost.total.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                </div>
                {/* HOTEL */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                        Hotel   
                    </h3>
                    <p className="mt-2 text-[var(--color-text-secondary)]">
                        {day.hotel || "No hotel recommended for this day."}
                    </p>
                </div>
                {/* Airbnb */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                        Airbnb  
                    </h3>
                    <p className="mt-2 text-[var(--color-text-secondary)]">
                        {day.airbnb || "No Airbnb recommended for this day."}
                    </p>
                </div>
                {/* attractions */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                        Attractions
                    </h3>
                    {day.attractions && day.attractions.length > 0 ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                            {day.attractions.map((place, index) => (
                                <li key={index}>{place}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-[var(--color-text-secondary)]">
                            No attractions recommended for this day.
                        </p>
                    )}
                </div>
                {/* daily cost breakdown */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary-light)] p-5 shadow-[var(--shadow-soft)] md:col-span-2">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                        Daily Cost Breakdown
                    </h3>
                    <div className="mt-4 gap-4 grid grid-cols-2 md:grid-cols-3"> 
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Accommodation
                            </p>
                            <p className="font-semibold text-[var(--color-text)]">
                                {day.cost.accommodation.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Transport
                            </p>
                            <p className="font-semibold text-[var(--color-text)]">
                                {day.cost.transport.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Food
                            </p>
                            <p className="font-semibold text-[var(--color-text)]">
                                {day.cost.food.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Activities
                            </p>
                            <p className="font-semibold text-[var(--color-text)]">
                                {day.cost.activities.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Miscellaneous
                            </p>    
                        <p className="font-semibold text-[var(--color-text)]">
                            {day.cost.miscellaneous.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Daily Total
                        </p>
                        <p className="font-semibold text-[var(--color-primary)]">
                            {day.cost.total.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* restaurants */}
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-accent-light)] p-5 shadow-[var(--shadow-soft)]" >
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">
            Restaurants
        </h3>
        {(day.restaurants?.length ?? 0) > 0 ?
            <ul className="mt-3 list-disc space-y-1 pl-5" >
            {(day.restaurants ?? []).map((restaurant, index) => (
                    <li key={index}>{restaurant}</li>
                ))}
            </ul>
        : (
            <p className="mt-2 text-[var(--color-text-secondary)]">
                No restaurants recommended for this day.
            </p>
        )}
    </div>
    {/* Transport */}
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]" >
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">
            Transport
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
            {day.transport.method}
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {day.transport.description}
        </p>
        <p className="mt-4 font-semibold text-[var(--color-text)]">
            {day.transport.estimatedCost.toLocaleString("en-KE", {
                style: "currency",
                currency: "KES",
            })}
        </p>
    </div>
    {/* Travel tips */}
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-5 shadow-[var(--shadow-soft)]" >
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">
            Travel Tips
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
            {day.tips || "No travel tips available for this day."}
        </p>
    </div>
    </div>
    );
}
export default DayDetails;