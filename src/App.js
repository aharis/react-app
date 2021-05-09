import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import MainRouter from './MainRouter';

//Creat React component

const App = () => {
    return (
    <BrowserRouter>
        
        <AppHeader />
        <MainRouter />
        <AppFooter />
        
    </BrowserRouter>
    )
}

export default App;