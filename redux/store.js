import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import boardInitializer from '../util/boardInitializer';

let myBoard = boardInitializer(10, 10, 10);

const initialData = {
  boardArr: myBoard,
  gameState: 0,
};

export default function configureStore () {
  return createStore(rootReducer, initialData, composeWithDevTools(applyMiddleware(thunk)));
}