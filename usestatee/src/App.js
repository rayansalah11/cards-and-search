import Card from "./Component/card/Card";
import Container from "./Component/navbar/Container";
import Navbar from "./Component/navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Container>
          <Card/>
      </Container>
    </>
  );
}

export default App;
