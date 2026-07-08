
type Props = {
  value: string;
  onChange: (value: string) => void;
};

const transportOptions = [
  { value: "Private Car", label: " Private Car" },
  { value: "Bus", label: "Bus" },
  { value: "Flight", label: " Flight" },
  { value: "Train", label: " Train" },
];

function TransportSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-slate-700">
        Preferred Transport
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white p-3 shadow-sm transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
      >
        {transportOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <p className="mt-2 text-sm text-slate-500">
        Select how you plan to travel to your destination.
      </p>
    </div>
  );
}

export default TransportSelector;

