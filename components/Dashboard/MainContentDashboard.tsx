export default function MainContentDashboard() {
  return (
    <>
      <section className="service-section">
        <h2>Service</h2>
        <div className="service-section-header">
          <div className="search-field">
            <i className="ph-magnifying-glass"></i>
            <input type="text" placeholder="Account number" />
          </div>
          <div className="dropdown-field">
            <select>
              <option>Home</option>
              <option>Work</option>
            </select>
            <i className="ph-caret-down"></i>
          </div>
          <button className="flat-button">Search</button>
        </div>
        <div className="mobile-only">
          <button className="flat-button">Toggle search</button>
        </div>
        <div className="tiles">
          <article className="tile">
            <div className="tile-header">
              <i className="ph-lightning-light"></i>
              <h3>
                <span>Electricity</span>
                <span>UrkEnergo LTD.</span>
              </h3>
            </div>
            <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-fire-simple-light"></i>
              <h3>
                <span>Heating Gas</span>
                <span>Gazprom UA</span>
              </h3>
            </div>
            <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-file-light"></i>
              <h3>
                <span>Tax online</span>
                <span>Kharkov 62 str.</span>
              </h3>
            </div>
            <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
        </div>
        <div className="service-section-footer">
          <p>
            Services are paid according to the current state of the currency and
            tariff.
          </p>
        </div>
      </section>
      <section className="transfer-section">
        <div className="transfer-section-header">
          <h2>Latest transfers</h2>
          <div className="filter-options">
            <p>Filter selected: more than 100 $</p>
            <button className="icon-button">
              <i className="ph-funnel"></i>
            </button>
            <button className="icon-button">
              <i className="ph-plus"></i>
            </button>
          </div>
        </div>
        <div className="transfers">
          <div className="transfer">
            <div className="transfer-logo">
              <img src="https://assets.codepen.io/285131/apple.svg" />
            </div>
            <dl className="transfer-details">
              <div>
                <dt>Apple Inc.</dt>
                <dd>Apple ID Payment</dd>
              </div>
              <div>
                <dt>4012</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>28 Oct. 21</dt>
                <dd>Date payment</dd>
              </div>
            </dl>
            <div className="transfer-number">- $ 550</div>
          </div>
          <div className="transfer">
            <div className="transfer-logo">
              <img src="https://assets.codepen.io/285131/pinterest.svg" />
            </div>
            <dl className="transfer-details">
              <div>
                <dt>Pinterest</dt>
                <dd>2 year subscription</dd>
              </div>
              <div>
                <dt>5214</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>26 Oct. 21</dt>
                <dd>Date payment</dd>
              </div>
            </dl>
            <div className="transfer-number">- $ 120</div>
          </div>
          <div className="transfer">
            <div className="transfer-logo">
              <img src="https://assets.codepen.io/285131/warner-bros.svg" />
            </div>
            <dl className="transfer-details">
              <div>
                <dt>Warner Bros.</dt>
                <dd>Cinema</dd>
              </div>
              <div>
                <dt>2228</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>22 Oct. 21</dt>
                <dd>Date payment</dd>
              </div>
            </dl>
            <div className="transfer-number">- $ 70</div>
          </div>
        </div>
      </section>
    </>
  );
}
