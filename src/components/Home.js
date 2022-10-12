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
     const [popen,setPopen]=useState(false)
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
     const modal = (video) => {
          setModalText(video)
          showModal()
     }
     return (
          <div className='Home container-fluid p-0'>
               {/* //Page1 */}
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
               {/* //Page1 */}
               {/* //Page2 */}
               <div className="homePage2 container">
                    {
                         HomeCardsmass.map((val) => (
                              <div className="homCard" key={val.id} onClick={() => modal(val.video)}>
                                   <img src={val.img} alt={val.name} />
                                   <p>{val.name}</p>
                              </div>
                         ))
                    }
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
               {/* //Page2 */}
               {/* //Page3 */}
               <div className="homePage3 container">
                    <div className="cardmaxM">
                         <div className="cardmax">
                              <div className="cardmin cardmin1"><img src="./img/html.png" alt="" /></div>
                              <div className="cardmin cardmin2"><img src="./img/css.png" alt="" /></div>
                              <div className="cardmin cardmin3"><img src="./img/sass.png" alt="" /></div>
                              <div className="cardmin cardmin4"><img src="./img/bootstrap.png" alt="" /></div>
                              <div className="cardmin cardmin5"><img src="./img/javascript.png" alt="" /></div>
                              <div className="cardmin cardmin6"><img src="./img/react.png" alt="" /></div>
                              <div className="cardmin cardmin7"><img src="./img/redux.png" alt="" /></div>
                              <div className="cardmin cardmin8"><img src="./img/github.png" alt="" /></div>
                         </div>
                         <div className="cardimg"><img src="./img/uzim.jpg" alt="" /></div>
                    </div>
               </div>
               {/* //Page3 */}
               <div className="homePage4 container">
                    <img src="" alt="" />
                    <div className={popen ? "pCard active":"pCard"} onClick={()=>setPopen(!popen)}>
                         <p>Hammaga yana salom! Shunday qilib, siz mening ismim  Doniyorbek ekanligini allaqachon bilasiz. O'zim haqimda bir oz sozlasam: talaba, 25 yosh, sportchi-futbolchi, bolaligimdan ijodni yaxshi ko'rgaman, Uzbekistonning Namangan viloyatida  yashayman. Nima uchun dasturlash? Hammasi oddiy - bu menga yoqadi, kelajak kasbi, buning yordamida men o'zimni ta'minlay olaman va orzuimni amalga oshira olaman - sayohat, hozir men veb-dizayn, front-end va back-end ishlab chiqish, kalitlarga topshirilgan veb-saytlar bo'yicha ixtisoslashganman. Nega meni tanlashingiz kerak? Men har bir buyurtmaga katta mas'uliyat va mehr bilan yondashaman, chunki men  plagiat va beparvolikni istisno qilishni, loyihani, mijozni va uning maqsadli auditoriyasini to'liq o'rganishni, sifatli ishlashni, buyurtmani tez va o'ziga xos tarzda bajarishga harakat qilaman. iloji boricha barcha tahrirlar va istaklarni hisobga olgan holda. Menga ishoning, loyihangiz uchun maksimal daromad olasiz, asablaringizni va vaqtingizni tejaysiz. Agar siz men bilan ishlamoqchi bolsangiz, ko'proq narsani bilmoqchi bo'lsangiz yoki mening xizmatlarimdan foydalanmoqchi bo'lsangiz, men quyida barcha kontaktlarimni taqdim etaman.</p>
                    </div>
               </div>
          </div>
     );
}

export default Home;