import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store"; // Make sure the path to the store is correct

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
