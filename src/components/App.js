import {Profile} from './Profile/Profile';
import {Statistics} from './Statistic/Statistics';
import {FriendList} from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


export const App = () => {
  return ( 
  <div 
    style ={{
        paddingTop: 40,
        paddingBottom: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 50,
      
    }}>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}></FriendList>
    <TransactionHistory items={transactions} />

  </div>
   );
}

