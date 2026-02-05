"use client";

import { useState } from "react";

const AVAILABLE_SERVICES = [
  "Basic Cleaning",
  "Deep Cleaning",
  "Carpet Cleaning",
  "In-Out Cleaning",
  "Mini Services",
];

export default function ServicesPage() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState(AVAILABLE_SERVICES[0]);
  const [apartmentType, setApartmentType] = useState("1 BHK");
  const [slot, setSlot] = useState("Morning (9AM-12PM)");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [paymentOption, setPaymentOption] = useState("Cash");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          address,
          description,
          service: serviceType,
          apartmentType,
          slot,
          preferredDate,
          preferredDay,
          paymentOption,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Error creating booking");

      setMessage({ type: "success", text: `Booking created (id: ${data.insertedId})` });
      setFullName("");
      setAddress("");
      setDescription("");
      setServiceType(AVAILABLE_SERVICES[0]);
      setApartmentType("1 BHK");
      setSlot("Morning (9AM-12PM)");
      setPreferredDate("");
      setPreferredDay("");
      setPaymentOption("Cash");
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-700">Book Services</h1>
      <p className="text-gray-600 mb-6">Fill the form below to request a booking for a cleaning service.</p>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8 p-6 bg-white rounded-lg shadow-md text-gray-800">
        <div>
          <label className="block text-sm font-bold mb-1">Full Name</label>
          <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Full Address</label>
          <textarea required value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border rounded" rows={3} />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Service Type</label>
          <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="w-full p-2 border rounded">
            {AVAILABLE_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Apartment Type</label>
          <select value={apartmentType} onChange={(e) => setApartmentType(e.target.value)} className="w-full p-2 border rounded">
            <option value="Studio">Studio</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4+ BHK">4+ BHK</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Preferred Date</label>
            <input required value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} type="date" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Preferred Day</label>
            <select value={preferredDay} onChange={(e) => setPreferredDay(e.target.value)} className="w-full p-2 border rounded">
              <option value="">(optional)</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Booking Slot</label>
          <select value={slot} onChange={(e) => setSlot(e.target.value)} className="w-full p-2 border rounded">
            <option>Morning (9AM-12PM)</option>
            <option>Afternoon (12PM-4PM)</option>
            <option>Evening (4PM-8PM)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Payment Option</label>
          <select value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)} className="w-full p-2 border rounded">
            <option value="Cash">Cash on Service</option>
            <option value="UPI">Online - UPI</option>
            <option value="Card">Credit / Debit Card</option>
            <option value="Wallet">Wallet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Description / Notes</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" rows={4} />
        </div>

        <div className="flex items-center gap-3">
          <button disabled={loading} type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-bold transition-all">{loading ? 'Booking...' : 'Request Booking'}</button>
          {message && (
            <span className={message.type === 'success' ? 'text-green-600' : 'text-red-600'}>{message.text}</span>
          )}
        </div>
      </form>
    </div>
  );
}
