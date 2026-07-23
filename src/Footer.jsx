export default function Footer(){
    return(
        <div className="footer">
            <div className="container mt-5 p-5">
                <div className="row gy-4">
                    <div className="col-12 col-md-7 col-lg-7 col-xl-7">
                        <h1>CapiLand</h1>
                        <div className="mt-5">
                            <p className="mt-4">&copy; 2026. Alonso Zegarra Velásquez</p>
                            <p>✉️zegarrav24@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                        <div className="d-flex justify-content-end">
                            <img src="/imagenes/capi-removebg.png" className="capi-footer img-fluid" alt="capi-en-png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}