import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.log(arr);
  }, []);

  let arr = ["#d5e8d4", "#ffe6cd", "#6a00ff", "#d9e8fb", "#e2d5e7"];

  // function shuffleArray(array) {
  //   return array.sort(() => Math.random() - 0.5);
  // }
  // const arr1 = shuffleArray(arr);

  const [inputNum, setInputNum] = useState("");
  let [empty_cont, setEmptyCont] = useState([]);

  let handleShoot = (e) => {
    //   let check_ava_color_in_emp_con = false;
    //   for (let i = 0; i < empty_cont.length; i++) {
    //     if (empty_cont[i] == arr[+inputNum]) {
    //       check_ava_color_in_emp_con = true;
    //     }
    //   }
    //   if (check_ava_color_in_emp_con === false) {
    //     setEmptyCont(arr[+inputNum]);
    //   }
    //   console.log(empty_cont);
    e.preventDefault();
    // const arr = JSON.parse(localStorage.getItem("num_arr")) || [];
    // // let new_arr = [...arr, arr.push(+inputNum)];
    // let new_arr = [1, 2, 3];
    // localStorage.setItem(JSON.stringify("new_arr", new_arr));
    // console.log(empty_cont);
  };
  // console.log(empty_cont);

  return (
    <div className="App">
      <div className="center_ver_hor">
        <form action="" onSubmit={handleShoot}>
          <input
            type="number"
            onChange={(e) => {
              setInputNum(e.target.value);
            }}
          />
          <input type="submit" onClick={handleShoot} id="shoot" value="Shoot" />
        </form>
      </div>

      <div id="bottom_div">
        <div id="ept_container">
          {arr
            .filter((e, i) => {
              return i + 1 == inputNum;
            })
            .map((e) => (
              <div style={{ backgroundColor: `${e}` }}></div>
            ))}
        </div>
        <div id="bollons_container" className="center_ver_hor">
          {arr
            .filter((e, i) => {
              return i + 1 != inputNum;
            })
            .map((e, i) => (
              <div key={i} style={{ backgroundColor: `${e}` }}></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
