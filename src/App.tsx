import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Header
          mainHeading={"The Code Review"}
          subHeading={"Signup for our newsletter"}
          headerDescription={
            "Get the latest news on how your code is doing right in your inbox"
          }
        />
        <Form />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
