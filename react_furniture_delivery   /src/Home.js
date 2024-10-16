import React, { useEffect } from "react";
import "./Home.css";
import Robot from "./png-clipart-robot-3d-three-dimensional-removebg-preview.png";

const Home = () => {
  const handleClick = () => {
    window.location.href = "https://wa.me/yourphonenumber";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const heroSectionHeight =
        document.querySelector(".hero-section")?.offsetHeight || 0;
      const colorChangePoint = heroSectionHeight / 2;

      if (scrollTop > colorChangePoint) {
        document.body.style.backgroundColor = "#333";
      } else {
        document.body.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <section className="hero-section">
        <img
          id="heroImage"
          src="https://img.freepik.com/free-photo/3d-delivery-robot-working_23-2151150066.jpg?t=st=1724148576~exp=1724152176~hmac=681b9ed5fb2d7f77ae9d69de726f6c346105161634aa0d1b4d18f3ce32e8fb61&w=1380"
          alt="Truck"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to PACE - Always With You</h1>
          <p>
            Providing Reliable Moving Solutions to Make Your Transition Smooth
          </p>
        </div>
      </section>

      <section className="clickable-image-section">
        <div className="clickable-image-wrapper" onClick={handleClick}>
          <img src={Robot} alt="Delivery Robot" className="clickable-image" />
          <div className="clickable-image-text">Click Me</div>
        </div>
      </section>

      <section className="cards-container">
        <div className="card">
          <img
            id="cardImageOne"
            src="image/I_NOT_I_Multiple_shipping_boxes_arriving_at_mailbox_vector_styl_63d583df-9392-4075-a23a-f4dca2340267-fotor-2023061717657.jpg"
            alt="Packing"
            className="card-image"
          />
          <h3 className="card-title">Packing</h3>
          <p className="card-description">
            Secure packing services to ensure all your belongings are safely
            packed for transport.
          </p>
        </div>

        <div className="card">
          <img
            id="cardImageTwo"
            src="image/truck-1.jpg.png"
            alt="Transport"
            className="card-image"
          />
          <h3 className="card-title">Transport</h3>
          <p className="card-description">
            Reliable transportation with modern trucks to deliver your items
            safely to your new location.
          </p>
        </div>

        <div className="card">
          <img
            id="cardImageThree"
            src="image/fotor_2023-6-3_14_57_17.png"
            alt="Setup"
            className="card-image"
          />
          <h3 className="card-title">Setup</h3>
          <p className="card-description">
            Professional setup of your furniture and belongings to make your new
            space feel like home.
          </p>
        </div>

        <div className="card">
          <img
            id="cardImageFour"
            src="image/fotor_2023-6-3_16_19_1.png"
            alt="Preparation"
            className="card-image"
          />
          <h3 className="card-title">Preparation</h3>
          <p className="card-description">
            Preparing your current home for moving, including packing and
            organizing to ensure a smooth process.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h4>
          Мы занимаемся как городскими, так и междугородними переездами в
          Израиле. Наш квалифицированный персонал гарантирует быструю и точную
          работу.
        </h4>
        <p>
          Попробуйте наш{" "}
          <a href="/calculator" className="calculator-link">
            калькулятор
          </a>{" "}
          , чтобы оценить стоимость, прежде чем обращаться к оператору.
        </p>
        <p>
          Мы также предлагаем консультации и помощь в планировании вашего
          переезда, чтобы обеспечить вам максимальный комфорт.
        </p>
      </section>

      <section className="services">
        <h4>Мы предлагаем следующие услуги:</h4>
        <div className="services-list">
          <div className="service-item">
            <h5>Упаковка и распаковка мебели</h5>
            <p>
              Профессиональная упаковка и распаковка мебели для вашего удобства
              и безопасности.
            </p>
          </div>
          <div className="service-item">
            <h5>Упаковка и транспортировка крупных предметов</h5>
            <p>
              Тщательная упаковка и транспортировка крупных и тяжёлых предметов
              без риска повреждений.
            </p>
          </div>
          <div className="service-item">
            <h5>Упаковка и транспортировка хрупких предметов</h5>
            <p>
              Использование специализированных материалов для упаковки хрупких
              предметов, таких как стекло и электроника.
            </p>
          </div>
          <div className="service-item">
            <h5>Размещение и установка мебели в новом доме</h5>
            <p>
              Качественная установка и размещение мебели в вашем новом доме по
              вашему плану.
            </p>
          </div>
          <div className="service-item">
            <h5>Установка мебели и бытовой техники</h5>
            <p>
              Профессиональная установка мебели и бытовой техники для быстрого и
              удобного обустройства нового жилья.
            </p>
          </div>
          <div className="service-item">
            <h5>
              Подготовка квартиры к аренде, косметический ремонт и ремонт мебели
            </h5>
            <p>
              Услуги по подготовке квартиры к аренде, включая косметический
              ремонт и ремонт мебели для улучшения внешнего вида вашего жилья.
            </p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h4>Почему стоит выбрать нас?</h4>
        <div className="reason">
          <h5>Качество и надежность</h5>
          <p>
            Мы гарантируем, что каждый товар тщательно упакован и защищен от
            возможных повреждений. Мы относимся к вашим вещам так, как будто они
            наши собственные.
          </p>
        </div>
        <div className="reason">
          <h5>Опыт и профессионализм</h5>
          <p>
            Наша команда имеет опыт упаковки и транспортировки предметов любой
            сложности. Мы знаем, как обращаться с различными материалами и
            предметами, чтобы минимизировать риск повреждения.
          </p>
        </div>
        <div className="reason">
          <h5>Комплексный подход</h5>
          <p>
            Мы предлагаем не только услуги по упаковке, но и услуги по
            распаковке и настройке в новом месте. Наши специалисты помогут вам
            распаковать и упорядочить ваши вещи, чтобы обеспечить комфорт и
            удобство в новом пространстве.
          </p>
        </div>
        <div className="reason">
          <h5>Гарантия качества</h5>
          <p>
            Мы стремимся к высочайшему качеству во всех аспектах нашей работы.
            Если во время переезда или распаковки возникнут какие-либо проблемы,
            мы готовы решить их быстро и предложить наилучшее решение.
          </p>
        </div>
        <p className="contact-action">
          Не рискуйте своими вещами с неквалифицированными командами. Свяжитесь
          с профессионалами, которые сделают ваш переезд максимально комфортным
          и безопасным!{" "}
          <a href="https://wa.me/yourphonenumber" className="contact-link">
            Свяжитесь с нами сегодня
          </a>
          , и мы поможем вам с переездом!
        </p>
      </section>

      <section className="how-it-works">
        <h4>Как это работает</h4>
        <div className="how-step">
          <div className="how-icon-wrap">
            <img
              src="https://img.freepik.com/free-vector/person-moving-house-furniture_23-2148652974.jpg"
              alt="Request Quote"
              className="how-icon"
            />
          </div>
          <div className="how-text-wrap">
            <h3>Request a Quote</h3>
            <p>
              Get a quick and easy estimate for your move over the phone. We
              guarantee quality and professional service for each client, as
              well as the safety and protection of your belongings during
              transport.
            </p>
          </div>
        </div>
        <div className="how-step">
          <div className="how-icon-wrap">
            <img
              src="https://img.freepik.com/premium-vector/people-developing-cellphone-ui-design-mobile-phone-app-technology-flat-isolated-white_53562-8304.jpg"
              alt="Book Your Move"
              className="how-icon"
            />
          </div>
          <div className="how-text-wrap">
            <h3>Book Your Move</h3>
            <p>
              We offer flexible scheduling options to accommodate your needs.
              Our team will help you select the best date and time for your move
              to ensure a smooth process.
            </p>
          </div>
        </div>
        <div className="how-step">
          <div className="how-icon-wrap">
            <img
              src="https://img.freepik.com/premium-vector/moving-house-woman-packing-stuff-move-new-house-apartment-men-carrying-sofa-cardboard-box_333239-97.jpg"
              alt="Move Day"
              className="how-icon"
            />
          </div>
          <div className="how-text-wrap">
            <h3>Move Day</h3>
            <p>
              On the day of your move, our professional team will arrive on time
              and handle all aspects of the move. We will ensure everything is
              packed securely and transported safely to your new location.
            </p>
          </div>
        </div>
        <div className="how-step">
          <div className="how-icon-wrap">
            <img
              src="https://img.freepik.com/premium-photo/quotfamily-sorting-organizing-household-items-togetherquot_1279815-104449.jpg"
              alt="Unpack and Settle In"
              className="how-icon"
            />
          </div>
          <div className="how-text-wrap">
            <h3>Unpack and Settle In</h3>
            <p>
              After the move, we will help you unpack and set up your new space.
              Our team will assist with organizing your belongings to make your
              new home comfortable and functional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
