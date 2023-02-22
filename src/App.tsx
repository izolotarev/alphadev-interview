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
          <nav className="navigation header__navigation">
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
        <section className="speakers" id="speakers">
          <div className="wrapper">
            <h2 className="heading-2 speakers__title">Спикеры нашего форума</h2>
              <div className="layout-3-column speakers-wrapper">
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
                <div className="speakers__person">
                  <img
                    className="speakers__person-img"
                    src="assets/img/girl.jpg"
                    alt="speaker"
                  />
                  <h3 className="heading-3 speakers__name">Кристина Боровикова</h3>
                  <div className="speakers__line"></div>
                  <div className="speakers__person-desc">
                    Партнёр, отвечающий за услуги по GDPR, являющийся Microsoft Data Privacy Officer в Ernst & Young во Франции и части EU
                  </div>
                  <a className="speakers__detailed" href="/#">Подробнее</a>
                </div>
              </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrapper footer__wrapper">
          <div className="logo footer__logo">
            <div className="logo__picture"></div>
            <div className="logo__wrapper">
              <div className="logo__name-main">Security</div>
              <div className="logo__name-sec">Forum</div>
            </div>
          </div>
          <div className="footer__contacts">
            <ul className="footer__contacts-list">
              <li className="footer__contacts-item">
                <a className="footer__contacts-link" href="/#">Политика конфиденциальности</a>
              </li>
              <li className="footer__contacts-item">
                <a className="footer__contacts-link" href="/#">Публичная оферта</a>
              </li>
              <li className="footer__contacts-item">
                <a className="footer__contacts-link" href="tel:79121234567">+7 912 123-45-67</a>
              </li>
              <li className="footer__contacts-item">
                <a className="footer__contacts-link" href="mailto:about@microsoftforum.com">about@microsoftforum.com</a>
              </li>
            </ul>
          </div>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#forum">О мероприятии</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="/#">Темы</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="/#">Расписание</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#speakers">Спикеры</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="/#">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="footer__social-links">
            <ul className="social-list">
              <li>
                <a href="/#" aria-label="Vkontakte">
                  <span className="icon-social icon-social_vkontakte"></span>
                </a>
              </li>
              <li>
                <a href="/#" aria-label="Facebook">
                  <span className="icon-social icon-social_facebook"></span>
                </a>
              </li>
              <li>
                <a href="/#" aria-label="Instagram">
                  <span className="icon-social icon-social_instagram"></span>
                </a>
              </li>
              <li>
                <a href="/#" aria-label="Telegram">
                  <span className="icon-social icon-social_telegram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
