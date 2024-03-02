import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import WishListContextProvider from './Context/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * (60 * 1000),
      refetchOnWindowFocus: false,

    }
  }
})

root.render(
  <WishListContextProvider>
    <UserContextProvider>
      < QueryClientProvider client={queryClient}>
        < Toaster />
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'></ReactQueryDevtools> */}
      </QueryClientProvider>
    </UserContextProvider>
  </WishListContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();