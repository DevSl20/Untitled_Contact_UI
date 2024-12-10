import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-8">
      <div className="grid-cols-2 bg-red-500">
        <Aside />
      </div>
      <div className="col-span-6 bg-blue-500">
        <Form />
      </div>
      </div>
    </div>
  );
}

export default Home;