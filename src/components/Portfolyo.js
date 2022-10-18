import React from 'react';
import { useSelector } from 'react-redux';

const Portfolyo = () => {
    const {  portfolyoMassiv } = useSelector(state => state)
    return (
        <div>
             {/* //Page6 */}
             <div className="homePage6 ">
                    <div className="container homePage6Cards">
                         {
                              portfolyoMassiv.map((val) => (
                                   <div className="portfolyoCard">
                                        <div className="carDimg">
                                             <img src={val.img} alt="" />
                                             <p className='portFolyotext'>{val.name}</p>
                                        </div>
                                        <div className="cardBtn">
                                             <a href={val.linkgithub} target='blank'> <button className='linkbtn'>Github</button></a>
                                             <a href={val.linkdemo} target='blank'><button className='imgbtn'>Demo</button></a>
                                        </div>
                                   </div>
                              ))
                         }

                    </div>
               </div>
               {/* //Page6 */}
        </div>
    );
};

export default Portfolyo;