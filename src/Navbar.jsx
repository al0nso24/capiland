import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand fs-1" to="/">CapiLand</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav fs-4">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/galeria">Galería</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}