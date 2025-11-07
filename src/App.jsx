import React, { useState } from "react";
import RoomList from "./Components/RoomList";
import DeletedRoomList from "./Components/DeletedRoomList";
import AddRoomForm from "./Components/AddRoomForm";
const App = () => {
  const [tab, setTab] = useState("list");

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl text-center font-semibold mb-4">
          🏨 Xpress Hotel — Room Master
        </h1>

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setTab("add")}
            className={`px-3 py-1 rounded ${
              tab === "add" ? "bg-orange-600 text-white" : "bg-gray-100"
            }`}
          >
            Add Room
          </button>
          <button
            onClick={() => setTab("deleted")}
            className={`px-3 py-1 rounded ${
              tab === "deleted" ? "bg-orange-600 text-white" : "bg-gray-100"
            }`}
          >
            Deleted Rooms
          </button>
          <button
            onClick={() => setTab("list")}
            className={`px-3 py-1 rounded ${
              tab === "list" ? "bg-orange-600 text-white" : "bg-gray-100"
            }`}
          >
            Room List
          </button>
        </div>

        {tab === "list" && <RoomList />}
        {tab === "deleted" && <DeletedRoomList />}
        {tab === "add" && <AddRoomForm />}
      </div>
    </div>
  );
};

export default App;
