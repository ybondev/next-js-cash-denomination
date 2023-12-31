"use client";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [sum, setSum] = useState(0);
  const [data, setData] = useState([]);
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [amount3, setAmount3] = useState(0);
  const [amount4, setAmount4] = useState(0);
  const [amount5, setAmount5] = useState(0);
  const [amount6, setAmount6] = useState(0);
  const [amount7, setAmount7] = useState(0);
  const [amount8, setAmount8] = useState(0);
  const [amount9, setAmount9] = useState(0);
  const [amount10, setAmount10] = useState(0);

  // 1,000
  const [a, setA] = useState("");
  // 500
  const [b, setB] = useState("");
  // 200
  const [c, setC] = useState("");
  // 100
  const [d, setD] = useState("");
  // 50
  const [ee, setE] = useState("");
  // 20
  const [f, setF] = useState("");
  // 20 coins
  const [g, setG] = useState("");
  // 10 coins
  const [h, setH] = useState("");
  // 5 coins
  const [i, setI] = useState("");
  // 1 coins
  const [j, setJ] = useState("");

  // CASH
  const cash1 = useRef();
  const cash2 = useRef();
  const cash3 = useRef();
  const cash4 = useRef();
  const cash5 = useRef();
  const cash6 = useRef();
  const cash7 = useRef();
  const cash8 = useRef();
  const cash9 = useRef();
  const cash10 = useRef();

  const handleCount = (e) => {
    let res1 = cash1.current.value * a;
    let res2 = cash2.current.value * b;
    let res3 = cash3.current.value * c;
    let res4 = cash4.current.value * d;
    let res5 = cash5.current.value * ee;
    let res6 = cash6.current.value * f;
    let res7 = cash7.current.value * g;
    let res8 = cash8.current.value * h;
    let res9 = cash9.current.value * i;
    let res10 = cash10.current.value * j;

    let totalSum =
      res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9 + res10;

    // RESULT
    setAmount1(res1);
    setAmount2(res2);
    setAmount3(res3);
    setAmount4(res4);
    setAmount5(res5);
    setAmount6(res6);
    setAmount7(res7);
    setAmount8(res8);
    setAmount9(res9);
    setAmount10(res10);

    // TOTAL SUM
    setSum(totalSum);
  };

  const handleSave = () => {
    setData(
      localStorage.setItem("p1", a),
      localStorage.setItem("p2", b),
      localStorage.setItem("p3", c),
      localStorage.setItem("p4", d),
      localStorage.setItem("p5", ee),
      localStorage.setItem("p6", f),
      localStorage.setItem("p7", g),
      localStorage.setItem("p8", h),
      localStorage.setItem("p9", i),
      localStorage.setItem("p10", j),
      localStorage.setItem("a1", amount1),
      localStorage.setItem("a2", amount2),
      localStorage.setItem("a3", amount3),
      localStorage.setItem("a4", amount4),
      localStorage.setItem("a5", amount5),
      localStorage.setItem("a6", amount6),
      localStorage.setItem("a7", amount7),
      localStorage.setItem("a8", amount8),
      localStorage.setItem("a9", amount9),
      localStorage.setItem("a10", amount10),
      localStorage.setItem("sum", sum)
    );

    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        pending: "Saving...",
        success: "Data has been saved to localstorage!",
        error: "Error",
      }
    );
  };

  const handleClear = () => {
    localStorage.clear();
    setA("");
    setB("");
    setC("");
    setD("");
    setE("");
    setF("");
    setG("");
    setH("");
    setI("");
    setJ("");

    toast.success("Data has been removed to localstorage!");
  };

  useEffect(() => {
    handleCount();

    if (localStorage.getItem("p1")) {
      setA(localStorage.getItem("p1"));
    }

    if (localStorage.getItem("p2")) {
      setB(localStorage.getItem("p2"));
    }

    if (localStorage.getItem("p3")) {
      setC(localStorage.getItem("p3"));
    }

    if (localStorage.getItem("p4")) {
      setD(localStorage.getItem("p4"));
    }

    if (localStorage.getItem("p5")) {
      setE(localStorage.getItem("p5"));
    }

    if (localStorage.getItem("p6")) {
      setF(localStorage.getItem("p6"));
    }

    if (localStorage.getItem("p7")) {
      setG(localStorage.getItem("p7"));
    }

    if (localStorage.getItem("p8")) {
      setH(localStorage.getItem("p8"));
    }

    if (localStorage.getItem("p9")) {
      setI(localStorage.getItem("p9"));
    }

    if (localStorage.getItem("p10")) {
      setJ(localStorage.getItem("p10"));
    }
  }, [a, b, c, d, ee, f, g, h, i, j, sum, data]);

  return (
    <>
      <section className="container-fluid home_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">fv balete cash denomination</div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col" style={{ display: "none" }}>
                            #
                          </th>
                          <th scope="col">Cash</th>
                          <th scope="col">Pieces</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="th_row">
                            1
                          </th>
                          <td data-title="Cash:">
                            <input
                              type="number"
                              value={1000}
                              ref={cash1}
                              disabled
                            />
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={a}
                              onChange={(e) => setA(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount1.toLocaleString()}
                          </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            2
                          </th>
                          <td data-title="Cash:">
                            <input
                              type="number"
                              value={500}
                              ref={cash2}
                              disabled
                            />
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={b}
                              onChange={(e) => setB(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount2.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            3
                          </th>
                          <td data-title="Cash">
                            <input
                              type="number"
                              value={200}
                              ref={cash3}
                              disabled
                            />
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={c}
                              onChange={(e) => setC(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount3.toLocaleString()}
                          </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            4
                          </th>
                          <td data-title="Cash:">
                            <input
                              type="number"
                              value={100}
                              ref={cash4}
                              disabled
                            />
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={d}
                              onChange={(e) => setD(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount4.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            5
                          </th>
                          <td data-title="Cash:">
                            <input
                              type="number"
                              value={50}
                              ref={cash5}
                              disabled
                            />
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={ee}
                              onChange={(e) => setE(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount5.toLocaleString()}
                          </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            6
                          </th>
                          <td data-title="Cash:">
                            <input
                              type="number"
                              value={20}
                              ref={cash6}
                              disabled
                            />
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={f}
                              onChange={(e) => setF(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount6.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            7
                          </th>
                          <td className="coins" data-title="Cash:">
                            <input
                              type="number"
                              value={20}
                              ref={cash7}
                              disabled
                            />
                            <span>(coins)</span>
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={g}
                              onChange={(e) => setG(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount7.toLocaleString()}
                          </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            8
                          </th>
                          <td className="coins" data-title="Cash:">
                            <input
                              type="number"
                              value={10}
                              ref={cash8}
                              disabled
                            />
                            <span>(coins)</span>
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={h}
                              onChange={(e) => setH(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount8.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            9
                          </th>
                          <td className="coins" data-title="Cash:">
                            <input
                              type="number"
                              value={5}
                              ref={cash9}
                              disabled
                            />
                            <span>(coins)</span>
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={i}
                              onChange={(e) => setI(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount9.toLocaleString()}
                          </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row">
                            10
                          </th>
                          <td className="coins" data-title="Cash:">
                            <input
                              type="number"
                              value={1}
                              ref={cash10}
                              disabled
                            />
                            <span>(coins)</span>
                          </td>
                          <td className="pieces" data-title="Pieces:">
                            <input
                              type="number"
                              className="fomr-control"
                              value={j}
                              onChange={(e) => setJ(e.target.value)}
                            />
                          </td>
                          <td data-title="Amount:">
                            {amount10.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="th_row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="total" data-title="Total:">
                            PHP {sum.toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="btn_clear" onClick={handleClear}>
                    clear
                  </button>
                  <button className="btn_save" onClick={handleSave}>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        pauseOnFocusLoss={false}
        style={{ width: "400px" }}
      />
    </>
  );
};

export default page;
