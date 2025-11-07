# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Xpress Hotel Rooms Management UI

This is a **React-based UI** for managing hotel rooms as part of an interview assignment for **Xpress Hotel ERP**.  
The app is built using **React**, **Ant Design**, and **Tailwind CSS**, and it consumes the provided **Rooms APIs**.

---

## 🚀 Features

- List active rooms with all key fields:
  - `RoomID`, `RoomAlise`, `RoomName`, `RoomTypeId`, `RFloorId`, `RoomStatus`, `DisplayIndex`, `Discription`, `EntryDate`
- Add a new room via modal form
- Soft delete a room (`action_flag = 3`)
- View deleted rooms and reactivate them (`action_flag = 4`)
- Inline validation for required fields
- Responsive UI with Tailwind + Ant Design components

---

## 📦 Tech Stack

- **React 18** (Vite)  
- **Ant Design** (UI components)  
- **Tailwind CSS** (utility-first styling)  
- **Axios / Fetch** (API requests)  
- **JavaScript ES6+**  

---

## 🔧 Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd xpress-hotel-rooms

Install dependencies

npm install

Run the project

npm run dev


Open in browser: http://localhost:5173

Build for production

npm run build

View active rooms

Click Add New Room → fill form → Save

Delete a room → moves it to deleted list

Activate deleted room → moves it back to active list


---

This single-page README includes **all required info**: features, setup, APIs, notes, and usage instructions.  

If you want, I can **also make it “GitHub polished”** with **badges, table of contents, and screenshots placeholders**, so it looks **professional for your interview submission**.  

Do you want me to do that?
