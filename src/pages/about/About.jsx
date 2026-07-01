import "./About.css";

const About = () => {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "API",
    "Responsive Design",
  ];

  const timeline = [
    {
      year: "01",
      title: "HTML",
      text: "Web sahifalar strukturasini yaratishni o'rgandik",
    },
    {
      year: "02",
      title: "CSS",
      text: "Modern dizayn, animatsiya va responsive UI",
    },
    {
      year: "03",
      title: "JavaScript",
      text: "Interaktiv va dinamik web ilovalar",
    },
    {
      year: "04",
      title: "React",
      text: "Component asosida professional loyihalar",
    },
    {
      year: "05",
      title: "Projects",
      text: "Real loyihalar va portfolio yaratish",
    },
    {
      year: "06",
      title: "Future",
      text: "Kelajak developer sifatida rivojlanish",
    },
  ];

  return (
    <section className="about">

      <div className="stars"></div>

      <div className="about-header">

        <h1>
          About Our <span>Mission</span>
        </h1>

        <p>
          Biz Mars IT School Frontend Group 2025 —
          kelajak dasturchilarini tayyorlayotgan
          innovatsion jamoamiz.
        </p>

      </div>


      <div className="about-grid">


        <div className="glass-card">

          <h2>🚀 Guruh haqida</h2>

          <p>
            Bizning guruh zamonaviy frontend texnologiyalarini
            o'rganayotgan yosh developerlar jamoasi.
            Biz kod yozamiz, loyihalar yaratamiz va
            kelajak texnologiyalarini zabt etamiz.
          </p>

        </div>



        <div className="glass-card">

          <h2>🎯 Maqsadimiz</h2>

          <p>
            Professional frontend developer bo'lish,
            real loyihalarda ishlash va IT sohasida
            o'z o'rnimizni yaratish.
          </p>

        </div>


      </div>



      <div className="tech-section">

        <h2>
          O'rgangan texnologiyalarimiz
        </h2>


        <div className="tech-list">

          {
            technologies.map((item,index)=>(
              <div 
                className="tech"
                key={index}
              >
                {item}
              </div>
            ))
          }

        </div>

      </div>





      <div className="timeline-section">


        <h2>
          🪐 Learning Timeline
        </h2>


        <div className="timeline">


        {
          timeline.map((item,index)=>(

            <div className="timeline-item" key={index}>


              <div className="circle">
                {item.year}
              </div>


              <div className="timeline-card">


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>


              </div>


            </div>

          ))
        }


        </div>


      </div>





      <div className="future">


        <h2>
          🌎 Kelajak rejalari
        </h2>


        <p>

          Kelajakda biz katta loyihalar yaratish,
          xalqaro kompaniyalarda ishlash va
          yangi avlod texnologiyalarini o'rganishni davom ettiramiz.

        </p>


        <button>
          Start Mission 🚀
        </button>


      </div>



    </section>
  );
};


export default About;