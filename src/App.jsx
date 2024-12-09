import Header from "./components/Header";
import Aside from "./components/Aside";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-red-500 hover:text-blue-300">
        Hello
      </h1>
      <Header />
      <Aside />
      <Form />
    </div>
  );
}

export default App;