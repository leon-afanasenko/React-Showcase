import React, { useState } from "react";
import "./JobList.css";

const JobList = () => {
  const [showMore, setShowMore] = useState(false);

  const jobData = [
    {
      id: 1,
      company: "SONY",
      title: "Менеджер по управлению финансами в крупной компании",
      location: "Осакa, Япония - 3 дня назад",
      icon: "fa-briefcase",
    },
    {
      id: 2,
      company: "facebook",
      title: "Дизайнер интерьера в студию в центре города",
      location: "Коясан, Япония - 7 дней назад",
      icon: "fa-laptop-code",
    },
    {
      id: 3,
      company: "SONY",
      title: "Системный администратор",
      location: "Токио, Япония - 3 дня назад",
      icon: "fa-users",
    },
    {
      id: 4,
      company: "facebook",
      title: "Разработчик программного обеспечения",
      location: "Осакa, Япония - 7 дней назад",
      icon: "fa-cogs",
    },
    {
      id: 5,
      company: "CocaCola",
      title: "Оператор колл центра",
      location: "Томаму, Япония - 3 дня назад",
      icon: "fa-chart-line",
    },
    {
      id: 6,
      company: "CocaCola",
      title: "Водитель на дальние дистанции",
      location: "Кобе, Япония - 7 дней назад",
      icon: "fa-globe",
    },
    {
      id: 7,
      company: "Apple",
      title: "UX/UI Designer",
      location: "Нагоя, Япония - 5 дней назад",
      icon: "fa-pencil-alt",
    },
    {
      id: 8,
      company: "Microsoft",
      title: "Программист Java",
      location: "Йокогама, Япония - 2 дня назад",
      icon: "fa-code",
    },
    {
      id: 9,
      company: "Amazon",
      title: "Специалист по логистике",
      location: "Саппоро, Япония - 4 дня назад",
      icon: "fa-truck",
    },
    {
      id: 10,
      company: "Google",
      title: "Маркетолог",
      location: "Нагоя, Япония - 1 день назад",
      icon: "fa-bullhorn",
    },
    {
      id: 11,
      company: "Netflix",
      title: "Аналитик данных",
      location: "Токио, Япония - 6 дней назад",
      icon: "fa-database",
    },
    {
      id: 12,
      company: "Adobe",
      title: "Графический дизайнер",
      location: "Кобе, Япония - 8 дней назад",
      icon: "fa-image",
    },
  ];

  return (
    <div>
      <h2 className="section-title">Новые вакансии</h2>
      <div className="job-list">
        {jobData.slice(0, showMore ? jobData.length : 6).map((job) => (
          <div key={job.id} className="job-card">
            <i className={`fas ${job.icon}`}></i>
            <span className="job-company">{job.company}</span>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Скрыть вакансии" : "Все вакансии"}
      </button>
    </div>
  );
};

export default JobList;
