import {Profile} from './Profile/Profile';
import {Statistics} from './Statistic/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';
import IndexCss from './App.css';

export const App = () => {
  return ( 
  <div class="container">
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics title="Upload stats" stats={data} />
  </div>
   );
}

