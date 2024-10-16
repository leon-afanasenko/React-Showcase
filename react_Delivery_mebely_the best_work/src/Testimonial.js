import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTestimonials([
          {
            id: 1,
            name: "Иван Петров",
            body: "Отличная компания! Переезд прошел гладко и без проблем.",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            id: 2,
            name: "Ольга Смирнова",
            body: "Мебель потрясающего качества. Очень доволен покупкой!",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            id: 3,
            name: "Александр Иванов",
            body: "Сервис на высшем уровне. Все было сделано быстро и качественно.",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            id: 4,
            name: "Мария Кузнецова",
            body: "Прекрасное обслуживание и отличный персонал. Рекомендую!",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },
          {
            id: 5,
            name: "Николай Сидоров",
            body: "Очень доволен работой компании. Все было сделано четко и быстро.",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },
          {
            id: 6,
            name: "Елена Белова",
            body: "Мебель просто супер! Доставка была на высшем уровне.",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
          {
            id: 7,
            name: "Дмитрий Орлов",
            body: "Сделали все, как обещали. Удобно и качественно.",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
          {
            id: 8,
            name: "Анна Морозова",
            body: "Сервис просто шикарный. Довольна на 100%!",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
          },
          {
            id: 9,
            name: "Петр Васильев",
            body: "Выбор мебели и качество обслуживания на высоте.",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            id: 10,
            name: "Юлия Петрова",
            body: "Очень понравилось. Вежливый персонал и быстрая доставка.",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },
        ]);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="testimonial">
      <div className="container mx-auto">
        <h2>Что говорят наши клиенты</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-container">
            {testimonials
              .slice(0, showMore ? testimonials.length : 3)
              .map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-avatar">
                    <img
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.name}`}
                    />
                  </div>
                  <div className="testimonial-content">
                    <p>"{testimonial.body}"</p>
                    <p>- {testimonial.name}</p>
                  </div>
                </div>
              ))}
          </div>
          <button className="testimonial-button" onClick={handleShowMore}>
            {showMore ? "Скрыть отзывы" : "Показать все отзывы"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
