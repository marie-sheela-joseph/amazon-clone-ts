import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { useContext } from "react";
import { AppContext } from "../App";

const Header=()=>{
    const appContext=useContext(AppContext)        
    return (
        <div>
            <header className='header'>
                <nav>
                    <div className='header__logo'>
                        <Link to={'/'}>
                            <img src='./assets/logo.png' alt='amazon' />
                        </Link>
                    </div>
                    <div className='header__search'>
                        <input type={"text"} value="" />                        
                        <SearchIcon className="header__search__icon"/>
                    </div>
                    <div className='header__nav'>
                    <Link to={"/login"} className='header__link'>
                            <div>                                
                                <p className='header__optionLineOne'>Hello{appContext.state.user?.email}</p>
                                <p className='header__optionLineOne'>Hello</p>                                
                                <p className='header__optionLineTwo'>{appContext.state.user?'Sign Out':'Sign in'}</p>
                            </div>
                        </Link>
                        <Link to={"/checkout"} className='header__link'>
                            <div className='header__cart'>
                            <ShoppingCartIcon/>
                                <span className='header__optionLineTwo'>{appContext.state?.cart.length}</span>
                            </div>
                    </Link>                        
                    </div>                  
                </nav>
            </header>
            <Outlet />
        </div>
    );
}
export default Header