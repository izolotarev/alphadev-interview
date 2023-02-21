import React from 'react';

function App() {
  return (
    <>
      <header className="header">
        <div className="wrapper header__wrapper">
          <div className="logo header__logo">
            <div className="logo__picture"></div>
            <div className="logo__wrapper">
              <div className="logo__name-main">Security</div>
              <div className="logo__name-sec">Forum</div>
            </div>
          </div>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#forum" className="link-button link-button_visited">
                  О мероприятии
                </a>
              </li>
              <li className="navigation__item">
                <a href="#speakers" className="link-button">
                  Спикеры
                </a>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <a className="user-block__link" href="#signup">
              Регистрация
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="forum" id="forum">
          <div className="wrapper forum__wrapper">
            <h1 className="heading-1 forum__heading-main">Форум Microsoft</h1>
            <h2 className="heading-1 forum__heading-sec">«Finance industry trust in AI and IT-Security»</h2>
            <div className="forum__description">Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение требований законодательства может привести к существенным штрафам и даже к блокировке ресурсов</div>
            <div className="forum__tooltip">Узнайте как этого избежать, регистрируйтесь на наш форум</div>
            <div className="user-block">
              <a className="user-block__link" href="#signup">
                Регистрация
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
