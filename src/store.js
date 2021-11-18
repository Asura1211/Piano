import { createStore } from 'ice';
import keys from './models/keys';
import keyHistory from './models/keyHistory';

const store = createStore({
  keys,
  keyHistory,
});

export default store;
