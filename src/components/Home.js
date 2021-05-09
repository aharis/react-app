import { buildQueries } from '@testing-library/dom';
import logo from '../assets/images/logo.png';

const styles = {
    image: {
        width: '150px',
    },
    title: {
        fontSize: '2em',
        
    },

}
const Home = () => {
    return (
        <div className='container'>
            <img src={logo} alt='logo' style = {styles.image}/>
            <div style={styles.title} ><h3>Welcome to My First React App</h3></div>
        </div>
    )
}

export default Home;