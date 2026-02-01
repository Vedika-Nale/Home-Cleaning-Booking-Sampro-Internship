export default function BookingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <p className="text-gray-600 mb-4">List of customer bookings will appear here. (Placeholder data)</p>

      <table className="w-full bg-white rounded shadow !text-black">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left !text-black">Customer</th>
            <th className="p-2 text-left !text-black">Service</th>
            <th className="p-2 text-left !text-black">Date</th>
            <th className="p-2 text-left !text-black">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 !text-black">-</td>
            <td className="p-2 !text-black">-</td>
            <td className="p-2 !text-black">-</td>
            <td className="p-2 !text-black">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
