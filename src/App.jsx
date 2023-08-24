import "./App.css";
import qrImg from "./assets/image-qr-code.png";

function App() {
  return (
    <main>
      <div className="img-container">
        <img src={qrImg} alt="qr code" />
      </div>
      <div className="txt-container">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="para">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}

export default App;
