import { Link } from "react-router-dom";

export default function Inicio(){
    return(
        <div>
            <div>
                <img className="banner w-100 h-100 object-cover" src="/imagenes/banner.jpg" alt="banner"></img>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-7 col-xl-7">
                        <h1 className="text-center fs-1">Bienvenido al Mundo de los Capibaras 🌿</h1>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                        <p>
                            Descubre la vida tranquila y fascinante de los roedores más amigables del planeta
                        </p>
                        <div className="d-flex justify-content-end">
                            <Link className="btn btn-primary" to="/galeria">Ver Galería</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row gap-2">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="card radius-15">
                            <div class="card-body text-center">
                                <div class="p-4 radius-15">
                                    <img src="" width="110" height="110" class="rounded-circle shadow p-1 bg-white" alt=""></img>
                                    <h4 class="mt-5 text-white">Vida Social</h4>
                                    <p>
                                        Los capibaras son animales muy sociables que viven en grupos de 10 a 20 miembros a más.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="card radius-15">
                            <div class="card-body text-center">
                                <div class="p-4 radius-15">
                                    <img src="" width="110" height="110" class="rounded-circle shadow p-1 bg-white" alt=""></img>
                                    <h4 class="mt-5 text-white">Vida Social</h4>
                                    <p>
                                        Los capibaras son animales muy sociables que viven en grupos de 10 a 20 miembros a más.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="card radius-15">
                            <div class="card-body text-center">
                                <div class="p-4 radius-15">
                                    <img src="" width="110" height="110" class="rounded-circle shadow p-1 bg-white" alt=""></img>
                                    <h4 class="mt-5 text-white">Vida Social</h4>
                                    <p>
                                        Los capibaras son animales muy sociables que viven en grupos de 10 a 20 miembros a más.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}