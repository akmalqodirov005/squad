<<<<<<< HEAD
import "./Home.css";
import Losers from './images/losers.jpg'

const Home = () => {
  const stats = [
    {
      id: 1,
      number: "5000+",
      title: "O'quvchilar",
    },
    {
      id: 2,
      number: "40+",
      title: "Mentorlar",
    },
    {
      id: 3,
      number: "350+",
      title: "Loyihalar",
    },
    {
      id: 4,
      number: "20+",
      title: "Kurslar",
    },
  ];

  const news = [
    {
      id: 1,
      title: "Yangi Frontend guruhi ochildi",
      date: "25-Iyun",
    },
    {
      id: 2,
      title: "Hackathon musobaqasi bo'lib o'tdi",
      date: "18-Iyun",
    },
    {
      id: 3,
      title: "AI kursiga qabul boshlandi",
      date: "10-Iyun",
    },
  ];

  return (
    <div className="home">

    

      <section className="hero">
        <div className="hero-left">
          <h1>
            Kelajak kasbini <span>Mars IT School</span> bilan o'rganing
          </h1>

          <p>
            Zamonaviy IT kasblarini professional mentorlar bilan o'rganing va
            haqiqiy loyihalarda tajriba orttiring.
          </p>

          <button>Bepul darsga yozilish</button>
        </div>

        <div className="hero-right">
          <img
            src={Losers}
            alt=""
          />
        </div>
      </section>

     
      <section className="about">
        <h2>Biz kimmiz?</h2>

        <p>
          Mars IT School — dasturlash va zamonaviy texnologiyalarni o'rgatuvchi
          o'quv markazi. Biz o'quvchilarni real loyihalar orqali tajriba
          orttirishga tayyorlaymiz.
        </p>
      </section>

     

      <section className="mars-info">
        <div className="box">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React.</p>
        </div>

        <div className="box">
          <h3>Backend</h3>
          <p>NodeJS, Express, MongoDB.</p>
        </div>

        <div className="box">
          <h3>UI/UX</h3>
          <p>Figma va zamonaviy dizayn.</p>
        </div>
      </section>

     
      <section className="cohort">
        <h2>O'quv yili (Cohort)</h2>

        <div className="cohort-card">
          <h3>2026 Summer Cohort</h3>

          <p>
            Frontend, Backend va Foundation guruhlariga qabul davom etmoqda.
          </p>

          <button>Ro'yxatdan o'tish</button>
        </div>
      </section>

    

      <section className="statistics">

        <h2>Statistika</h2>

        <div className="stats">

          {stats.map((item) => (
            <div className="stat-card" key={item.id}>
              <h1>{item.number}</h1>
              <p>{item.title}</p>
            </div>
          ))}

        </div>

      </section>

    

      <section className="news">

        <h2>Eng so'nggi yangiliklar</h2>

        <div className="news-wrapper">

          {news.map((item) => (
            <div className="news-card" key={item.id}>
              <h3>{item.title}</h3>
              <span>{item.date}</span>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;
=======
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
>>>>>>> cdd26ec5f2419deb852cae7a5818640e94e52109
