import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <Container fluid>
        <Row xs={1} md={2} className="gap-3">
          <MyCard
            imgUrl="https://images.pexels.com/photos/14666143/pexels-photo-14666143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            name="Sheperd"
            description="Perro amigable y lleno de energía. Con su pelaje blanco y su sonrisa contagiosa, es difícil resistirse a su encanto."
            tagText="Pastor australiano"
            tagColor="danger"
          />
          <MyCard
            imgUrl="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg"
            name="Bobi"
            description="Conocidos por su inteligencia y su deseo de 
          trabajar. Son muy activos y necesitan mucho ejercicio y 
          estimulación mental para estar contentos."
            tagText="Furbitzer"
            tagColor="success"
          />
          <MyCard
            imgUrl="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
            name="Cristiano"
            description="Perro pequeño pero con una personalidad grande. Con su cara arrugada y sus orejas puntiagudas, es simplemente adorable. "
            tagText="Pitbull"
            tagColor="info"
          />
          <MyCard
            imgUrl="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
            name="Van de Glass"
            description="Estos perros son conocidos por su elegancia y su apariencia única. Son perros enérgicos y atléticos, por lo que necesitan mucho ejercicio y actividades estimulantes para estar felices."
            tagText="Bumblepaw"
            tagColor="warning"
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;

