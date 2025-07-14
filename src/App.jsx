import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-4 bg-white p-4 rounded-xl shadow-lg">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("gray")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor(" green")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
             Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;