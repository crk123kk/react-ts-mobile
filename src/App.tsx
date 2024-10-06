import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { fetchChannelAPI } from "./apis/list";


fetchChannelAPI().then(res => {
  console.log('res :>> ', res);
})
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
