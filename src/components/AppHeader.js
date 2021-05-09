import logo from '../assets/images/paragon.png'
import Navigator from './Navigator'

const AppHeader = () => {
    return (
    <header>

        <div className="logo">
        <img src={logo} alt="logo" />
        </div>

        <div className="logo">
        <h2>My React App</h2>
        </div>

        <div className="nav">
        <Navigator />
        </div> 

        </header>

    );
}

export default AppHeader;