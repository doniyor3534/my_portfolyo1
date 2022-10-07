import React from 'react';
import { useSelector } from 'react-redux';

const Home =()=> {
  const {HomeCardsmass}=useSelector(state=>state)
  console.log(HomeCardsmass);
    return (
        <div className='Home container-fluid p-0'>
                <div className="homePge1 container ">
                     <div className="homeTitle">
                          <h4>Hello</h4>
                          <h2>My name is <br /> Doniyorbek Tursunov</h2>
                          <p>Men bir yildan beri veb-dizayn, front-end va back-end sayt  <br /> ishlab chiqish bilan shug'ullanaman. <br /> Sizga veb-sayt , sayt tartibi yoki ehtimol kalit , veb-sayt kerakmi? Unda men bilan bog'laning</p>
                          <button className='btnContactme'>Contact me</button>
                     </div>
                     <div className="homeTitleImg">
                          <img src="./img/Gleb.png" alt="" />
                     </div>
                </div>
                <div className="homePage2">
                    
                </div>
        </div>
    );
}

export default Home;