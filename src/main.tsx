import './index.css';
import { StrictMode } from 'react';
import router from './routes/routes';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster position="bottom-right" />
    </Provider>
  </StrictMode>
);
