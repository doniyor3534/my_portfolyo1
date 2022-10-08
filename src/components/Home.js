import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import ReactPlayer from 'react-player/youtube'


const Home = () => {
     const { HomeCardsmass } = useSelector(state => state)
     console.log(HomeCardsmass);
     const [open, setOpen] = useState(false);
     const [confirmLoading, setConfirmLoading] = useState(false);
     const [modalText, setModalText] = useState('');

     const showModal = () => {
          setOpen(true);
     };

     const handleOk = () => {
          setModalText('The modal will be closed after two seconds');
          setConfirmLoading(true);
          setTimeout(() => {
               setOpen(false);
               setConfirmLoading(false);
          }, 2000);
     };

     const handleCancel = () => {
          console.log('Clicked cancel button');
          setOpen(false);
     };
     const modal=(video)=>{
          setModalText(video)
          showModal()
     }
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
               <div className="homePage2 container">
                    {
                         HomeCardsmass.map((val) => (
                              <div className="homCard" key={val.id} onClick={()=>modal(val.video)}>
                                   <img src={val.img} alt={val.name} />
                                   <p>{val.name}</p>
                              </div>
                         ))
                    }
               </div>
               <Modal
                    title="Title"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    width="min-content"
               >
                   <ReactPlayer url={modalText} />
               </Modal>
          </div>
     );
}

export default Home;