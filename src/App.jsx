import { Slide } from "react-toastify";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        autoClose={1500}
      />
      <AppRouter />;
    </>
  );
}
export default App;
