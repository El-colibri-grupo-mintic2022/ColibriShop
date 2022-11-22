
import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout} from "../../actions/userActions"

const Header = () => {
    const alert= useAlert();
    const dispatch= useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () =>{
        dispatch(logout());
        alert.success("LogOut exitoso")
    }
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>

                        <Link to="/" ><img src="./images/productos/colibrishop-logo.jpg" alt="COLIBRISHOP 22"></img></Link>
                        </div>
                </div>

                <div className='col-12 col-md-5 mt-2 mt-md-0'>
                    {/*Aqui va buscar*/}
                    <Search />
                </div>
                {/*Boton inicio sesión*/}
                <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">2</span></Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                                id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className="rounded-circle"></img>
                                </figure>
                                <span>{user && user.nombre}</span>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/*Preguntamos el rol de quien esta online*/}
                                {user && user.role === "admin" && (
                                    <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                )}

                                <Link className="dropdown-item" to="/">Pedidos</Link>
                                <Link className="dropdown-item" to="/yo">Mi Perfil</Link>
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                            </div>
                        </div>
                    ) : !loading && <Link to="/login" className='btn ml-4' id="login_btn">Login</Link>}


                </div>

            </nav>

        </Fragment>
    )

}

export default Header

//este Header me funciona
/*import React, { Fragment } from 'react'
import "../../App.css"
import {Link} from "react-router-dom"
const Header = () => {

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>

                        <Link to="/" ><img src="./images/productos/colibrishop-logo.jpg" alt="COLIBRISHOP 22"></img></Link>
                    
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">

                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span><h4>Panel de Control</h4></span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/dashboard"><h4>Adm. Productos</h4></Link>
                            <Link className="dropdown-item" to="/"><h4>Pedidos</h4></Link>
                            <Link className="dropdown-item" to="/"><h4>Mi cuenta</h4></Link>
                            <Link className="dropdown-item" to="/"><h4>Cerrar Sesión</h4></Link>
                        </div>
                    </div>

                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-2" id="cart_count">2</span></Link>
                </div>

            </nav>

        </Fragment>
    )

}

export default Header*/