function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <img width={38} height={38} src="./img/logo.svg" alt="logo" />
          <div>
            <p>REACT PIZZA</p>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="cart"></div>
      </div>
    </div>
  );
}

export default App;
