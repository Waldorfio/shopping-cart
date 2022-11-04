import './styles/style.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div id='container'>

      <div id='header'>
        <div id='header_one'>
          <Link id='logo' to='/'>A Real Shop</Link>
        </div>
        <div id='header_two'>

          <Link id='home' to='/'>Home</Link>
          <Link id='shop' to='/shop'>Shop</Link>
          <Link id='about' to='/about'>About</Link>
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
