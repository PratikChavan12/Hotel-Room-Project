import axios from "axios";

const BASE = "/cloudpms";
const API_USER = "pmsuser";
const API_PASS = "pms@123";
const HOTEL_ID = 1;

const axiosInstance = axios.create({
    baseURL: BASE,
    headers: { "Content-Type": "application/json" },
    timeout: 15000,
});

const authPayload = (extra = {}) => ({
    ApiUser: API_USER,
    ApiPass: API_PASS,
    HotelId: HOTEL_ID,
    ...extra,
});

export const getRoomList = async () => {
    const { data } = await axiosInstance.post("/get_room_list_demo.php", authPayload({
        FromDevice: "Web",
        NetworkType: "WiFi",
        ClientIp: "",
        CreatedBy: 101,
    }));
    return data?.result?.rooms || [];
};

export const getDeletedRoomList = async () => {
    const { data } = await axiosInstance.post("/get_room_list_deleted_demo.php", authPayload({
        FromDevice: "Web",
        NetworkType: "WiFi",
        ClientIp: "",
        CreatedBy: 101,
    }));
    return data?.result?.deleted_rooms || [];
};

export const saveRoom = async (roomPayload) => {
    const { data } = await axiosInstance.post("/save_room_demo.php", authPayload(roomPayload));
    return data;
};

export const deleteRoom = async (room) => {
    const { data } = await axiosInstance.post("/save_room_demo.php", authPayload({
        ...room,
        action_flag: 3,
        FromDevice: "Web",
        NetworkType: "WiFi",
        ClientIp: "",
        CreatedBy: 101,
        EntryDate: new Date().toISOString().slice(0, 10),
    }));
    return data;
};

export const activateRoom = async (room) => {
    const { data } = await axiosInstance.post("/save_room_demo.php", authPayload({
        ...room,
        action_flag: 4,
        FromDevice: "Web",
        NetworkType: "WiFi",
        ClientIp: "",
        CreatedBy: 101,
        EntryDate: new Date().toISOString().slice(0, 10),
    }));
    return data;
};
