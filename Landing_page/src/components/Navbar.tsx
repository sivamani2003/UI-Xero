import nav from '../img/nav.png';

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <img src={nav} alt='Navigation Logo' />
        <div className='nav-links'>
          <p>Home</p>
          <p>About us</p>
          <p>Services</p>
          <p>Contact us</p>
        </div>
        <div className='dropdown'>
          <p>
            EN
            <span className='space'>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </p>
          <div className='drop-down-content'>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <p className='schedule_call'>Schedule a Call</p>
      </div>
    </div>
  );
}

export default Navbar;
