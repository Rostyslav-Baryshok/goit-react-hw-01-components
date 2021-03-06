import css from './statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/random-color';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map((statEl, index) => (
          <li
            key={statEl.id}
            className={css.item}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className={css.label}>{statEl.label}</span>
            <span className={css.percentage}>{statEl.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
