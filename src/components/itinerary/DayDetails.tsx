import Timeline from "./TimeLine";
import type { Day } from "../../types/itinerary";
type Props = {
  day: Day;
};
function DayDetails({ day }: Props) {
    return (
        <div className="space-y-6">
            <Timeline activities={day.activities ?? []} />
            <div className="rounded-2xl bg-sky-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium uppercase tracking-wide text-sky-600">
                    Weather Forecast
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-800">
                  {day.weather.condition}

                  </h3>
                </div>
                <div className="text-4xl">
                  weather icon
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                        <p className="text-sm text-slate-500">
                            Temperature
                        </p>
                        <p className="font-semibold text-slate-800">
                            {day.weather.temperature}°C
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">
                            Humidity
                        </p>
                        <p className="font-semibold text-slate-800">
                            {day.weather.humidity}%
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">
                            Wind Speed
                        </p>
                        <p className="font-semibold text-slate-800">
                            {day.weather.windSpeed} km/h
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">
                            Precipitation
                        </p>
                        <p className="font-semibold text-slate-800">
                            {day.weather.precipitation} mm
                        </p>
                    </div>
                </div>
            <div className="mt-5 rounded-xl bg-white/70 p-4">
                <p className="text-sm font-medium text-sky-700">
                    Weather Advice
                </p>
                <p className="mt-1 text-slate-700">
                    {day.weather.advice}
                </p>
                </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-wide text-slate-600">
                            Meals
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-slate-800">
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
                        className="rounded-xl bg-white p-5 shadow-sm"
                        >
                            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 ">
                                {meal.type}
                            </p>
                         <h4 className="mt-2 font-bold text-slate-800">
                            {meal.restaurant}
                         </h4>
                         <p className="mt-2 text-lg font-medium text-slate-600">
                            Try: {meal.foodToTry}
                         </p>
                         <p className="mt-2 text-sm text-slate-500">
                            {meal.description}
                            </p>
                        <p className="mt-4 font-semibold text-slate-800">
                            {meal.estimatedCost.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                    </div>
                    ))}
                </div>
                  {(!day.meals || day.meals.length === 0) && (
                    <p className="mt-2 text-slate-700">
                        No meals recommended for this day.
                    </p>
                )}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {/* estimated cost */}
                <div className="rounded-2xl bg-green-50 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700">
                         Estimated Cost
                        </h3>
                        <p className="mt-2 text-slate-700">
                            {day.cost.total.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                </div>
                {/* HOTEL */}
                <div className="rounded-2xl bg-blue-50 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-700">
                        Hotel   
                    </h3>
                    <p className="mt-2 text-slate-700">
                        {day.hotel || "No hotel recommended for this day."}
                    </p>
                </div>
                {/* Airbnb */}
                <div className="rounded-2xl bg-purple-50 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-purple-700">
                        Airbnb  
                    </h3>
                    <p className="mt-2 text-slate-700">
                        {day.airbnb || "No Airbnb recommended for this day."}
                    </p>
                </div>
                {/* attractions */}
                <div className="rounded-2xl bg-orange-50 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-orange-700">
                        Attractions
                    </h3>
                    {day.attractions && day.attractions.length > 0 ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                            {day.attractions.map((place, index) => (
                                <li key={index}>{place}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-slate-700">
                            No attractions recommended for this day.
                        </p>
                    )}
                </div>
                {/* daily cost breakdown */}
                <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm md:col-span-2">
                    <h3 className="text-lg font-semibold text-emerald-700">
                        Daily Cost Breakdown
                    </h3>
                    <div className="mt-4 gap-4 grid grid-cols-2 md:grid-cols-3"> 
                        <div>
                            <p className="text-sm text-slate-500">
                                Accommodation
                            </p>
                            <p className="font-semibold text-slate-800">
                                {day.cost.accommodation.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">
                                Transport
                            </p>
                            <p className="font-semibold text-slate-800">
                                {day.cost.transport.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">
                                Food
                            </p>
                            <p className="font-semibold text-slate-800">
                                {day.cost.food.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">
                                Activities
                            </p>
                            <p className="font-semibold text-slate-800">
                                {day.cost.activities.toLocaleString("en-KE", {
                                    style: "currency",
                                    currency: "KES",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">
                                Miscellaneous
                            </p>    
                        <p className="font-semibold text-slate-800">
                            {day.cost.miscellaneous.toLocaleString("en-KE", {
                                style: "currency",
                                currency: "KES",
                            })}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">
                            Daily Total
                        </p>
                        <p className="font-semibold text-slate-900">
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
    <div className="rounded-2xl bg-yellow-50 p-5 shadow-sm" >
        <h3 className="text-lg font-semibold text-yellow-700">
            Restaurants
        </h3>
        {(day.restaurants?.length ?? 0) > 0 ?
            <ul className="mt-3 list-disc space-y-1 pl-5" >
            {(day.restaurants ?? []).map((restaurant, index) => (
                    <li key={index}>{restaurant}</li>
                ))}
            </ul>
        : (
            <p className="mt-2 text-slate-700">
                No restaurants recommended for this day.
            </p>
        )}
    </div>
    {/* Transport */}
    <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm" >
        <h3 className="text-lg font-semibold text-indigo-700">
            Transport
        </h3>
        <p className="mt-2 text-slate-700">
            {day.transport.method}
        </p>
        <p className="mt-2 text-sm text-slate-500">
            {day.transport.description}
        </p>
        <p className="mt-4 font-semibold text-slate-800">
            {day.transport.estimatedCost.toLocaleString("en-KE", {
                style: "currency",
                currency: "KES",
            })}
        </p>
    </div>
    {/* Travel tips */}
    <div className="rounded-2xl bg-cyan-50 p-5 shadow-sm" >
        <h3 className="text-lg font-semibold text-cyan-700">
            Travel Tips
        </h3>
        <p className="mt-2 text-slate-700">
            {day.tips || "No travel tips available for this day."}
        </p>
    </div>
    </div>
    );
}
export default DayDetails;