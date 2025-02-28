import { useState } from "react";

const FlightForm = () => {
  // Estados para los valores del formulario
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [useMiles, setUseMiles] = useState(false);
  const [flexibleDates, setFlexibleDates] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      cabinClass,
      useMiles,
      flexibleDates,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 ">
      {/* Tipo de viaje */}
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center">
          <input type="radio" name="tripType" className="mr-2" />
          Ida
        </label>
        <label className="flex items-center">
          <input type="radio" name="tripType" className="mr-2" defaultChecked />
          Ida y vuelta
        </label>
        <label className="flex items-center">
          <input type="radio" name="tripType" className="mr-2" />
          Multidestinos
        </label>
      </div>

      {/* Selección de origen y destino */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        <input
          type="text"
          placeholder="Origen"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Destino"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="p-2 border rounded w-full"
        />
      

      {/* Clase y pasajeros */}
      
        <select
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value))}
          className="p-2 border rounded w-full"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Pasajero(s)
            </option>
          ))}
        </select>

        <select
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>

      {/* Fechas */}
      
        
      

      {/* Opciones adicionales */}
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={useMiles}
            onChange={() => setUseMiles(!useMiles)}
            className="mr-2"
          />
          Búsqueda en millas
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={flexibleDates}
            onChange={() => setFlexibleDates(!flexibleDates)}
            className="mr-2"
          />
          Tengo fechas flexibles
        </label>
      </div>

      {/* Botón de búsqueda */}
      <button
        type="submit"
        className=" bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700"
      >
        Buscar Vuelos
      </button>
    </form>
  );
};

export default FlightForm;