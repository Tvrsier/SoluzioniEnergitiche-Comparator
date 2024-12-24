import React from "react";
import "../styles/dashboard.css";
import "../styles/footer.css"
import Footer from "../components/Footer";

const Dashboard = () => {
  const impianti = [
    { nome: "Eva 95 - 145.16 kWp", cliente: "azienda.eva95@soluzionienergetiche.eu" },
    { nome: "Torneria Pitton - 99 kWp", cliente: "torneria.pitton@soluzionienergetiche.eu" },
    { nome: "Uniform - 41.86 kWp", cliente: "uniform@soluzionienergetiche.eu" },
    { nome: "Officina Meccanica Bombana - 99.84 kWp", cliente: "officina.bombana@soluzionienergetiche.eu" },
    { nome: "Gruppo Manara S.p.A. - 120.75 kWp", cliente: "gruppo.manara@soluzionienergetiche.eu" },
  ];

  return (
    <div className="wrapper">
      {/* Header */}
      <header className="main-header">
        <div className="logo">
          <b>Admin</b>LTE
        </div>
        <nav className="navbar">
          <div className="navbar-custom-menu">
            <ul className="navbar-menu">
              <li className="navbar-item">
                <a href="#" className="notifications">
                  <i className="fa fa-bell"></i>
                  <span className="badge">12</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="user-menu">
                  <i className="fa fa-user-circle"> </i>
                  <span className="user-name">Giacomo Di Matteo</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-panel">
          <div className="user-info">
            <i className="fa fa-user-circle fa-2x"></i>
            <span className="user-name">Giacomo Di Matteo</span>
          </div>
          <p className="status">
            <i className="fa fa-circle text-success"></i> Online
          </p>
        </div>
        <form className="sidebar-form">
          <input
            type="text"
            placeholder="Search..."
            className="sidebar-search"
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <ul className="menu">
          <li className="menu-section">Sezione Produzione</li>
          <li className="menu-item">
            <i className="fa fa-list"></i> Lista impianti
          </li>
          <li className="menu-item">
            <i className="fa fa-bell"></i> Lista allarmi
          </li>
          <li className="menu-item">
            <i className="fa fa-cogs"></i> Impostazioni generali
          </li>
          <li className="menu-section">Sezione GSE</li>
          <li className="menu-item">
            <i className="fa fa-users"></i> Anagrafica clienti
          </li>
          <li className="menu-item">
            <i className="fa fa-building"></i> Anagrafica impianti GSE
          </li>
          <li className="menu-item">
            <i className="fa fa-bell"></i> Lista allarmi
          </li>
          <li className="menu-item">
            <i className="fa fa-envelope"></i> Comunicazioni
          </li>
          <li className="menu-item">
            <i className="fa fa-object-group"></i> Comunicazioni gruppi
          </li>
          <li className="menu-item">
            <i className="fa fa-download"></i> Esportazione produzione
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="content-header">
          <h1>Soluzioni Energetiche</h1>
          <p>Analisi possibili guasti</p>
        </header>
        <section className="content-body">
          <div className="table-container">
            <div className="table-header">
              <button className="btn btn-new">
                <i className="fa fa-plus"></i> Nuovo
              </button>
              <button className="btn btn-view-all">
                <i className="fa fa-eye"></i> Vedi tutti
              </button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Impianto</th>
                  <th>Cliente</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {impianti.map((impianto, index) => (
                  <tr key={index}>
                    <td>{impianto.nome}</td>
                    <td>{impianto.cliente}</td>
                    <td>
                      <button className="btn-action">
                        <i className="fa fa-pencil"></i>
                      </button>
                      <button className="btn-action">
                        <i className="fa fa-database"></i>
                      </button>
                      <button className="btn-action">
                        <i className="fa fa-envelope"></i>
                      </button>
                      <button className="btn-action">
                        <i className="fa fa-check"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
