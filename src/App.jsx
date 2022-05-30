import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    // console.log(arr);
  }, []);

  // let arr = ["#d5e8d4", "#ffe6cd", "#6a00ff", "#d9e8fb", "#e2d5e7"];

  // function shuffleArray(array) {
  //   return array.sort(() => Math.random() - 0.5);
  // }
  // const arr1 = shuffleArray(arr);

  const [inputNum, setInputNum] = useState("");
  const [empty_continer, setEmptyContainer] = useState([]);
  const [color, setcolors] = useState([
    "#d5e8d4",
    "#ffe6cd",
    "#6a00ff",
    "#d9e8fb",
    "#e2d5e7",
  ]);

  const handleShoot = (inputNum) => {
    const singlecolor = color.filter((e, i) => {
      if (i === inputNum - 1) {
        return color[i];
      }
    });
    setEmptyContainer([...empty_continer, ...singlecolor]);

    const filtered = color.filter((e, i) => {
      return i != inputNum - 1;
    });
    setcolors([...filtered]);
  };

  return (
    <div className="App">
      <div className="center_ver_hor">
        {/* <form action="" onSubmit={handleShoot}> */}
        <input
          type="number"
          onChange={(e) => {
            setInputNum(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleShoot(+inputNum);
          }}
          id="shoot"
        >
          Shoot
        </button>
        {/* </form> */}
      </div>

      <div id="bottom_div">
        <div id="ept_container">
          {empty_continer.map((e) => (
            <div style={{ backgroundColor: `${e}` }}></div>
          ))}
        </div>
        <div id="bollons_container" className="center_ver_hor">
          {color.map((e, i) => (
            <div key={i} style={{ backgroundColor: `${e}` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
