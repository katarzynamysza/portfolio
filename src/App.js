import Main from './pages/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
