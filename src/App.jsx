import Header from './Header';
import Body from './Body';
import Store from './store/Store';
import GlobalContext from './context/GlobalContext';
// import { observer } from 'mobx-react-lite'


const MainStore = new Store()


const App = () => {
  return (
    <div className="App">
      <GlobalContext.Provider value={{
        MainStore,
      }}>
        <Header />
        <Body />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
