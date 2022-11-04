import './styles/style.css';

function App() {
  return (
    <div id='container'>

      <div id='header'>
        <div id='header_one'>
          <div id='logo'>A Real Shop</div>
        </div>
        <div id='header_two'>
          <div id='home'>Home</div>
          <div id='shop'>Shop</div>
          <div id='about'>About</div>
          <span id='cart' className="material-symbols-outlined">shopping_cart</span>
        </div>
      </div>

      <div id='content'>
        Content
      </div>

      <div id="footer">
          <span id='footer-title'>Copyright © 2022 Waldorfio&nbsp;&nbsp;&nbsp;
            <img id='git' src={require('./img/github-logo.png')} alt={'github-logo'}></img>
          </span>
      </div>

    </div>
  );
}

export default App;
