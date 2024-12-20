import React from 'react';

function Home() {
    return (
        <div className="app">
            <header className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reports">Reports</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="container">
                <h2>Benvenuto nella dashboard</h2>
            </main>
        </div>
    );
}

export default Home;
