import { Cosy } from "./components/Cosy.jsx";
import { Hot } from "./components/Hot.jsx";
import { Juicy } from "./components/Juicy.jsx";
import { Navbar } from "./components/Navbar.jsx";

export function App() {
  return (
    <>
      <Navbar />
      <Hot />
      <Juicy />
      <Cosy />
    </>
  );
}
