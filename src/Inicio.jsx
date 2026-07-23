import { Link } from "react-router-dom";

export default function Inicio(){
    return(
        <div>
            <div>
                <img className="banner img-fluid w-100" src="/imagenes/capi-banner.png" alt="banner"></img>
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
                <div className="row gy-3">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <img src="/imagenes/vida-social.png" class="card-img-top" alt="vida-social"></img>
                            <div class="card-body">
                                <h5 class="card-title">Vida social</h5>
                                <p class="card-text">Los capibaras son animales muy sociables que viven en grupos de 10 a 20 miembros o más.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <img src="/imagenes/capi-habitat.png" class="card-img-top" alt="capi-habitat"></img>
                            <div class="card-body">
                                <h5 class="card-title">Hábitat</h5>
                                <p class="card-text">Habitan en zonas cercanas a ríos, lagos y humedales en América del Sur. ¡Les encanta el agua!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <img src="/imagenes/capi-alimentacion.png" class="card-img-top" alt="capi-alimentacion"></img>
                            <div class="card-body">
                                <h5 class="card-title">Alimentación</h5>
                                <p class="card-text">Son hervíboros y se alimentan principalmente de pastos, frutas y plantas acuáticas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}