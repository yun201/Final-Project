import Footer from './Footer';
import { useCollapse } from 'react-collapsed';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();

  // State and handler for each collapsible section
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);

  // Handler for toggling the first collapsible section
  function handleOnClick1() {
    setExpanded1(!isExpanded1);
  }

  // Handler for toggling the second collapsible section
  function handleOnClick2() {
    setExpanded2(!isExpanded2);
  }

  function handleOnClick3() {
    setExpanded3(!isExpanded3);
  }

  const { getCollapseProps: getCollapsePropsFirst, getToggleProps: getTogglePropsFirst } = useCollapse({ isExpanded: isExpanded1 });
  const { getCollapseProps: getCollapsePropsSecond, getToggleProps: getTogglePropsSecond } = useCollapse({ isExpanded: isExpanded2 });
  const { getCollapseProps: getCollapsePropsThird, getToggleProps: getTogglePropsThird } = useCollapse({ isExpanded: isExpanded3 });

  const handleSubmit = () => {
    window.alert(t('messageSent'));
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="contact">
      <div className="mainContact">
        <div className="contactHeader">
          <h1>{t('contact')}</h1>
          <button onClick={toggleLanguage} className="languageToggle">
            {i18n.language === 'en' ? 'Switch to French' : 'Switch to English'}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t('name')}</label>
          <input type="text" id="name" required aria-label={t('name')} />

          <label htmlFor="email">{t('email')}</label>
          <input type="email" id="email" required aria-label={t('email')} />

          <label htmlFor="question">{t('question')}</label>
          <textarea id="question" cols="20" rows="5" aria-label={t('question')}></textarea>

          <button type="submit">{t('send')}</button>
        </form>
        <br />
      </div>
      <h1 style={{ justifyContent: 'center', display: 'flex' }}>{t('faq')}</h1>
      <div className='fqa'>
        <div className="collapsible">
          <button {...getTogglePropsFirst({ onClick: handleOnClick1, role: 'button', 'aria-expanded': isExpanded1 })}>
            {t('q1')}
          </button>
          <div {...getCollapsePropsFirst()} aria-hidden={!isExpanded1}>
            <div className="content">
              <p>{t('a1')}</p>
            </div>
          </div>
        </div>
        <div className="collapsible">
          <button {...getTogglePropsSecond({ onClick: handleOnClick2, role: 'button', 'aria-expanded': isExpanded2 })}>
            {t('q2')}
          </button>
          <div {...getCollapsePropsSecond()} aria-hidden={!isExpanded2}>
            <div className="content">
              <p>{t('a2')}</p>
            </div>
          </div>
        </div>

        <div className="collapsible">
          <button {...getTogglePropsThird({ onClick: handleOnClick3, role: 'button', 'aria-expanded': isExpanded3 })}>
            {t('q3')}
          </button>
          <div {...getCollapsePropsThird()} aria-hidden={!isExpanded3}>
            <div className="content">
              <p>{t('a3')}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;








