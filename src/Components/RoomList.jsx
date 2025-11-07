import React, { useEffect, useState } from "react";
import {deleteRoom, getRoomList} from "../API/RoomAPI.js";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadRooms = async () => {
        setLoading(true);
        try {
            setRooms(await getRoomList());
        } catch (err) {
            setMessage({ type: "error", text: err.message });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadRooms(); }, []);

    const handleDelete = async (room) => {
        if (!window.confirm(`Soft delete room ${room.RoomName}?`)) return;
        setLoading(true);
        try {
            const res = await deleteRoom(room);
            setMessage({ type: "success", text: res?.result?.[0]?.Message || "Deleted" });
            await loadRooms();
        } catch (err) {
            setMessage({ type: "error", text: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Active Rooms</h2>
                <button onClick={loadRooms} className="px-3 py-1 text-sm bg-gray-100 rounded">Refresh</button>
            </div>
            {message && <div className={`p-2 mb-3 rounded ${message.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>{message.text}</div>}
            {loading ? <p>Loading...</p> : (
                <table className="w-full table-auto border-collapse">
                    <thead><tr className="border-b text-left">
                        <th className="py-2 px-3">RoomID</th><th className="py-2 px-3">Alias</th><th className="py-2 px-3">Name</th><th className="py-2 px-3">Floor</th><th className="py-2 px-3">Action</th>
                    </tr></thead>
                    <tbody>{rooms.map((r) => (
                        <tr key={r.RoomID} className="border-b odd:bg-white even:bg-gray-50">
                            <td className="py-2 px-3">{r.RoomID}</td>
                            <td className="py-2 px-3">{r.RoomAlise}</td>
                            <td className="py-2 px-3">{r.RoomName}</td>
                            <td className="py-2 px-3">{r.RFloorId}</td>
                            <td className="py-2 px-3">
                                <button onClick={() => handleDelete(r)} className="px-2 py-1 bg-red-500 text-white rounded text-xs">Delete</button>
                            </td>
                        </tr>
                    ))}</tbody>
                </table>
            )}
        </div>
    );
};

export default RoomList;
