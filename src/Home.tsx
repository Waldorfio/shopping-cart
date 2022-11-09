import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <div id='home-content'>
        <div id='home-text'>Best online cd key reseller of the year</div>
        <div id='main-home-text'>Real keys.<br></br>Real prices.<br></br>No hidden fees.</div>
        <Link className='shop-btn' id='shop-now' to='/shop'>Shop now</Link>
        <img id='game-samples' src={require('./img/frontshop.PNG')}></img>
      </div>
    );
  };
  
  export default Home;
  