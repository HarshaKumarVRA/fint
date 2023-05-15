// import "./styles.css";
import {
  Button,
  showToast,
  ToastContainer
} from "@cred/neopop-web/lib/components";
// import IntroPage from "./welcome-page/IntroPage";
import Home from './Home/Home';

export default function App() {
  return (
    <>
    <Home />
      {/* <ToastContainer />
      <Button
        variant="primary"
        kind="elevated"
        size="big"
        colorMode="light"
        onClick={() => {
          showToast("you clicked the sexy button!", {
            type: "success",
            autoCloseTime: "1000"
          });
        }}
      >
        Click Me!
      </Button>
      <IntroPage /> */}
    </>
  );
}
