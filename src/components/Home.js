import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { Box } from "./All";

const Home = () => {
  const { HomeCardsmass, portfolyoMassiv } = useSelector((state) => state);
  console.log(portfolyoMassiv);
  const [open, setOpen] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  // const [popen, setPopen] = useState(false)
  const showModal = () => {
    setOpen(true);
  };

  // const handleOk = () => {
  //      setModalText('The modal will be closed after two seconds');
  //      setConfirmLoading(true);
  //      setTimeout(() => {
  //           setOpen(false);
  //           setConfirmLoading(false);
  //      }, 2000);
  // };

  // const handleCancel = () => {
  //      console.log('Clicked cancel button');
  //      setOpen(false);
  // };
  const modal = (video) => {
    setModalText(video);
    showModal();
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      //   console.log(e.target.getAttribute('class'));
      if (e.target.getAttribute("class") === "modal active") {
        setOpen(false);
      }
    });
  }, []);
  const [title, setTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTitle(true);
    }, 1550);
  }, []);
  return (
    <div className="Home container-fluid p-0">
      {/* //Page1 */}
      <div className="homePge1 container ">
        <div className="homeTitle">
          <h2 className="titleh2">Salom!_Men... </h2>
          <h2 className={title ? "title2h2 active" : "title2h2"}>
            TursunovDoniyorbek{" "}
          </h2>
          <p>
            Men bir yildan beri veb-dizayn, front-end va back-end sayt <br />{" "}
            ishlab chiqish bilan shug'ullanaman. <br /> Sizga veb-sayt , sayt
            tartibi yoki ehtimol kalit , veb-sayt kerakmi? Unda men bilan
            bog'laning
          </p>
          <button className="btnContactme">Contact me</button>
        </div>
        <div className="homeTitleImg">
          <img src="./img/Gleb.png" alt="" />
        </div>
      </div>
      {/* //Page1 */}
      {/* //Page2 */}
      <div className="homePage2 container">
        <div className="titleText">
          <span>D</span>
          <span>a</span>
          <span>r</span>
          <span>s</span>
          <span>l</span>
          <span>i</span>
          <span>k</span>
          <span>l</span>
          <span>a</span>
          <span>r</span>
        </div>
        <div className="hom2cardss">
          {HomeCardsmass.map((val, i) => (
            <div
              className="homCard"
              key={val.i}
              onClick={() => modal(val.video)}
            >
              <img src={val.img} alt={val.name} />
              <p>{val.name}</p>
            </div>
          ))}
          <div className={open ? "modal active" : "modal"}>
            <div className="modalCard">
              {/* <button className="closemodal" onClick={() => setOpen(!open)}>x</button> */}
              <ReactPlayer url={modalText} className="modalPlay" />
            </div>
          </div>
        </div>
      </div>
      {/* //Page2 */}
      {/* //Page3 */}
      <div className="homePage3 container">
        <div className="cardmaxM">
          <div className="cardmax">
            <div className="cardmin cardmin1">
              <img src="./img/html.png" alt="" />
            </div>
            <div className="cardmin cardmin2">
              <img src="./img/css.png" alt="" />
            </div>
            <div className="cardmin cardmin3">
              <img src="./img/sass.png" alt="" />
            </div>
            <div className="cardmin cardmin4">
              <img src="./img/bootstrap.png" alt="" />
            </div>
            <div className="cardmin cardmin5">
              <img src="./img/javascript.png" alt="" />
            </div>
            <div className="cardmin cardmin6">
              <img src="./img/react.png" alt="" />
            </div>
            <div className="cardmin cardmin7">
              <img src="./img/redux.png" alt="" />
            </div>
            <div className="cardmin cardmin8">
              <img src="./img/github.png" alt="" />
            </div>
          </div>
          <div className="cardimg">
            <img src="./img/uzim.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* //Page3 */}
      {/* //Page3 */}
     
      ,{/* //Page6 */}
      <div className="homePage6 ">
        <div className="container homePage6Cards">
          {portfolyoMassiv.map((val, i) => (
            <div className="portfolyoCard" key={i}>
              <div className="carDimg">
                <img src={val.img} alt="" />
                <p className="portFolyotext">{val.name}</p>
              </div>
              <div className="cardBtn">
                <a href={val.linkgithub} target="blank">
                  {" "}
                  <button className="linkbtn">Github</button>
                </a>
                <a href={val.linkdemo} target="blank">
                  <button className="imgbtn">Demo</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* //Page6 */}
      {/* //Page7 */}
    </div>
  );
};

export default Home;
