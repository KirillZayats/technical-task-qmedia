import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/index.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
   </BrowserRouter>
);