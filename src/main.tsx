import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <BrowserRouter>
  //   <Provider store={store}>
      <App />
  //   </Provider>
  // </BrowserRouter>
);