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
                        <h1 className="text-center fs-1">Bienvenido al <br></br>Mundo de los Capibaras🌿</h1>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                        <p>
                            Descubre la vida tranquila y fascinante de los roedores más amigables del planeta
                        </p>
                        <div className="d-flex justify-content-end">
                            <Link className="btn" to="/galeria">Ver Galería ➡︎</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row gy-3">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="carta-1 card rounded-5 p-3 shadow">
                            <div className="d-flex align-items-center">
                                <img src="/imagenes/vida-social.png" alt="vida-social" style={{ width: "120px", height: "120px" }}></img>
                                <div className="ms-4">
                                    <h5 className="card-title">🤎Vida Social</h5>
                                    <p className="card-text">
                                        Los capibaras son animales muy sociables que viven en grupos de
                                        10 a 20 miembros o más.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="carta-2 card rounded-5 p-3 shadow">
                            <div className="d-flex align-items-center">
                                <img src="/imagenes/capi-habitat.png" alt="capi-habitat" style={{ width: "120px", height: "120px" }}></img>
                                <div className="ms-3">
                                    <h5 className="card-title">🌲Hábitat</h5>
                                    <p className="card-text">
                                        Habitan en zonas cercanas a ríos, lagos y humedales en América del Sur.
                                        ¡Les encanta el agua!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="carta-3 card rounded-5 p-3 shadow">
                            <div className="d-flex align-items-center">
                                <img src="/imagenes/capi-alimentacion.png" alt="capi-alimentacion"style={{ width: "120px", height: "120px" }}></img>
                                <div className="ms-3">
                                    <h5 className="card-title">🍃Alimentación</h5>
                                    <p className="card-text">
                                        Son herbívoros y se alimentan principalmente de pastos,
                                        frutas y plantas acuáticas.
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