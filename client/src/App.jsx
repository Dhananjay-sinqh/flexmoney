import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-1 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-bold after:text-gray-900">
          Welcome to Yoga Club
        </h1>
        <Card />
      </main>
    </>
  );
}

export default App;
