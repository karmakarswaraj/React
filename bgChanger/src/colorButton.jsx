import React from "react";

function BButtons() {
  const [color, setColor] = useState("olive");
//   const myColor = {
//     c1: "red",
//     c2: "blue",
//     c3: "green",
//     c4: "yellow",
//     c5: "pink",
//   };

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        {/* <div className="bg-black rounded-lg p-4">
          <button className="m-2" onClick={() => setColor(myColor.c1)}>
            {myColor.c1}
          </button>
          <button className="m-2" onClick={() => setColor(myColor.c2)}>
            {myColor.c2}
          </button>
          <button className="m-2" onClick={() => setColor(myColor.c3)}>
            {myColor.c3}
          </button>
          <button className="m-2" onClick={() => setColor(myColor.c4)}>
            {myColor.c4}
          </button>
          <button className="m-2" onClick={() => setColor(myColor.c5)}>
            {myColor.c5}
          </button>
        </div> */}
      </div>
    </>
  );
}

export default BButtons;
