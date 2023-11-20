export default function SidebarRightDashboard() {
  return (
    <section className="payment-section">
      <h2>Notificaciones</h2>
      <div className="payments">
        <div className="payment">
          <div className="payment-details">
            <h3>Revision</h3>
            <div>
              <span>
                El usuario Jorge Alvarado del grupo 1501 ha solicitado la
                revision de un articulo
              </span>
              <button className="icon-button platform">
                <i className="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="payment-details">
            <h3>Revision</h3>
            <div>
              <span>
                El usuario Jorge Alvarado del grupo 1501 ha solicitado la
                revision de un articulo
              </span>
              <button className="icon-button platform">
                <i className="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="payment-details">
            <h3>Publicacion</h3>
            <div>
              <span>
                Tu publicacion Apple watch ha sido acceptada y publicada
              </span>
              <button className="icon-button article">
                <i className="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="payment-details">
            <h3>Retroalimentacion</h3>
            <div>
              <span>Tu publicacion Apple watch tiene retroalimentacion</span>
              <button className="icon-button article">
                <i className="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
