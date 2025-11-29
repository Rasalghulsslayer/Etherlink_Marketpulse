import { createRoot } from "react-dom/client";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";
import App from "./App.tsx";
import "./index.css";

const client = createThirdwebClient({
clientId: "d2e9bf37f8622c327d0e100a48852032",
});

createRoot(document.getElementById("root")!).render(
<ThirdwebProvider>
    <App thirdwebClient={client} />
</ThirdwebProvider>
);