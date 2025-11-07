import React, { useState } from "react";
import { saveRoom } from "../API/RoomAPI.js";

const AddRoomForm = () => {
  const defaultForm = {
    action_flag: 1,
    RoomAlise: "",
    RoomName: "",
    RoomTypeId: "",
    RFloorId: "",
    RoomStatus: 1,
    DisplayIndex: 1,
    FromDevice: "Web",
    NetworkType: "WiFi",
    ClientIp: "203.0.113.45",
    CreatedBy: 101,
    EntryDate: new Date().toISOString().slice(0, 10),
  };

  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const response = await saveRoom(form);
      const result = response?.result?.[0];
      if (result?.Success) {
        setMessage({ type: "success", text: result.Message });
        setForm(defaultForm);
      } else {
        setMessage({
          type: "error",
          text: result?.Message || "Failed to save room",
        });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div
          className={`p-3 rounded ${
            message.type === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Room Alias</label>
          <input
            className="border rounded px-3 py-2 w-full"
            value={form.RoomAlise}
            onChange={(e) => update("RoomAlise", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Room Name</label>
          <input
            className="border rounded px-3 py-2 w-full"
            value={form.RoomName}
            onChange={(e) => update("RoomName", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Room Type ID</label>
          <input
            className="border rounded px-3 py-2 w-full"
            type="number"
            value={form.RoomTypeId}
            onChange={(e) => update("RoomTypeId", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Floor ID</label>
          <input
            className="border rounded px-3 py-2 w-full"
            type="number"
            value={form.RFloorId}
            onChange={(e) => update("RFloorId", e.target.value)}
            required
          />
        </div>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-orange-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : "Save Room"}
      </button>
    </form>
  );
};

export default AddRoomForm;
