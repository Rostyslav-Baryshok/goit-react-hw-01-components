import s from './App.module.css';
import Profile from './profile/Profile';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import Statistics from './statistics/Statistics';

export const App = () => {
  return (
    <div className={s.appWrapper}>
      <Profile
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        username={user.username}
      />
      <Statistics title="Upload stats" stats={statistics} />
    </div>
  );
};
