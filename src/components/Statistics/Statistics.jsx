import css from './Statistics.modules.css';
const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="Percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
