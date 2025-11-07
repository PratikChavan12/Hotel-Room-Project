import React, { useEffect, useState } from "react";
import {activateRoom, getDeletedRoomList} from "../API/RoomAPI.js";

const DeletedRoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadRooms = async () => {
        setLoading(true);
        try {
            setRooms(await getDeletedRoomList());
        } catch (err) {
            setMessage({ type: "error", text: err.message });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadRooms(); }, []);

    const handleActivate = async (room) => {
        if (!window.confirm(`Reactivate room ${room.RoomName}?`)) return;
        setLoading(true);
        try {
            const res = await activateRoom(room);
            setMessage({ type: "success", text: res?.result?.[0]?.Message || "Activated" });
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
                <h2 className="text-lg font-medium">Deleted Rooms</h2>
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
                                <button onClick={() => handleActivate(r)} className="px-2 py-1 bg-green-600 text-white rounded text-xs">Activate</button>
                            </td>
                        </tr>
                    ))}</tbody>
                </table>
            )}
        </div>
    );
};

export default DeletedRoomList;
