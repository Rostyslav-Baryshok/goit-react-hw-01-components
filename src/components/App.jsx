import s from './App.module.css';
import { Profile } from './profile/Profile';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/TransactionHistory';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
