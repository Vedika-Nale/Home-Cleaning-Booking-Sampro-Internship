export default function AddServicePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Service</h1>
      <p className="text-gray-600 mb-4">Use this form to add new cleaning services (placeholder).</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold">Service Name</label>
          <input className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-bold">Price</label>
          <input className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-bold">Description</label>
          <textarea className="w-full p-2 border rounded" rows={4}></textarea>
        </div>

        <button className="px-4 py-2 bg-[#008751] text-white rounded">Add Service</button>
      </form>
    </div>
  );
}
