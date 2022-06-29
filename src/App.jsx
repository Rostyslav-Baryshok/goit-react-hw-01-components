import css from './App.module.css';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from './components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={css.appWrap}>
      Pro
      <Profile
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        username={user.username}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
