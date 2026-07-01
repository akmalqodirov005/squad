<<<<<<< HEAD
import "./Modal.css";
import akmal from "../modal/images/akmal_aka.JPG"
import ibrohim from "../modal/images/ibrohim.JPG"
import muhammad from "../modal/images/muhammad.JPG"
import abduqodir from "../modal/images/Abduqodir.JPG"
import bilol from "../modal/images/bilol.JPG"
import ismoil from "../modal/images/ismoil.JPG"
import firdavs from "../modal/images/firdavs.JPG"



const users = [
  {
    id: 1,
    image: akmal,
    name: "Akmal aka Teacher ",
    info: "19 yoshli Frontend Developer. IELTS 6.0 sertifikatiga ega. Mas'uliyatli, aqlli va ishini doimo oxirigacha bajaradigan mutaxassis",
  },
  {
    id: 2,
    image: ibrohim,
    name: "Turgunov Ibrohim",
    info: "Yoshi 15 da. Sinf liderlaridan biri. Juda iste'dodli dizayner bo'lib, kreativ fikrlashi va zamonaviy dizaynlari bilan ajralib turadi.",
  },
  {
    id: 3,
    image: muhammad,
    name: "Turgunov Muhammad",
    info: "Yoshi 14 da. Sinf liderlaridan biri. Juda yaxshi kod yozadi, mas'uliyatli va har bir vazifani sifatli bajarishga intiladi.",
  },
  {
    id: 4,
    image: abduqodir,
    name: "Abdumalikov Abduqodir",
    info: "Yoshi 16 da. Sinf liderlaridan biri. Matematika va mantiqiy fikrlash qobiliyati juda kuchli. Mas'uliyatli bo‘lib, har bir vazifani puxta va sifatli bajarishga intiladi.",
  }, {
    id: 5,
    image: firdavs,
    name: "Xasanov Firdavs",
    info: "Yoshi 13 da. Sinfning faol o‘quvchilaridan biri. Mantiqiy fikrlashi rivojlangan, har qanday vaziyatga tez moslasha oladi. Mas’uliyatni chuqur his qiladi va topshiriqlarni dildan bajaradi.",
  }, {
    id: 6,
    image: ismoil,
    name: "Dilxushov Ismoil",
    info: "Yoshi 13 da. Tinch, odobli va intizomli o‘quvchi. Atrofdagilar bilan tez til topishadi, do‘stlariga yordam berishga har doim tayyor. Har qanday vazifani mas’uliyat bilan bajaradi.",
  },
  {
    id: 7,
    image: bilol,
    name: "Rahimberdiev Bilolidin",
    info: "Yoshi 14 da. Izlanuvchan va o‘rganishga chanqoq o‘quvchi. Yangi bilim va tajribalarni o‘zlashtirishga qiziqadi, o‘z ustida muntazam ishlaydi va rivojlanishga intiladi.",
  },
];

const Modal = () => {
  return (
    <>
      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.image} alt={user.name} />
            <div className="content">
              <h2>{user.name}</h2>
              <p>{user.info}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Modal;
=======
import React from 'react'

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal
>>>>>>> cdd26ec5f2419deb852cae7a5818640e94e52109
