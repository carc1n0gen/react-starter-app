import React from 'react';
import { intlShape } from 'react-intl';
import { locationShape } from 'react-router-props';
import { Helmet } from 'react-helmet';

const ENV = process.env.NODE_ENV || 'production';

const defaultTitle = 'React Starter App';

function buildTitle(pathname) {
  switch (pathname) {
    case '/about':
      return `About - ${defaultTitle}`;
    case '/todos':
      return `Todos - ${defaultTitle}`;
    default:
      return defaultTitle;
  }
}

export default function Meta({ location, intl }) {
  return (
    <Helmet>
      <html lang={intl.locale} />
      <title>{buildTitle(location.pathname)}</title>
      {/* This helper is great for debugging positioning of things */}
      {ENV === 'development' && (
        <style>
          {'* { outline: 1px dotted red; }'}
        </style>
      )
    }
    </Helmet>
  );
}

Meta.propTypes = {
  intl: intlShape.isRequired,
  location: locationShape.isRequired,
};
