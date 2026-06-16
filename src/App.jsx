import Header from "./components/Header";
import Quiz from "./components/Quiz";
// import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* You will eventually use logic here to switch between Quiz and Summary */}
        <Quiz />
        {/* <Summary /> */}
      </main>
    </>
  );
}

export default App;
