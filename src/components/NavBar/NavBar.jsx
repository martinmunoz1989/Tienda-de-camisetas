import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1>Tienda de Camisetas del Futbol Argentino</h1>
            <div>
                <button>Primera Division</button>
                <button>Segunda Division</button>
                <button>Otras Divisiones</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar