import App from './modules/core/page/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modules/core/style/AppStyle/Import.scss'
import { createRoot } from "react-dom/client";
import ProviderContainer from './modules/core/lib/ProviderContainer';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

  <ProviderContainer>
    <App />
  </ProviderContainer>    

);