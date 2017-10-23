import React from 'react'

import Banner from '../Banner.jsx'
import BigIcon from '../BigIcon.jsx'


export default () => (
  <div className="container">
    <Banner title="React Is Cool" subtitle="Get'er done!" />
    
    <div className="row">
      <div className="col-sm-4">
        <BigIcon icon="user" />
        <p>
          Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
          libero sit amet quam egestas semper. Aenean ultricies mi vitae
          est. Mauris placerat eleifend leo.
        </p>
      </div>
      
      <div className="col-sm-4">
        <BigIcon icon="heart" />
        <p>
          Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
          libero sit amet quam egestas semper. Aenean ultricies mi vitae
          est. Mauris placerat eleifend leo.
        </p>
      </div>
      
      <div className="col-sm-4">
        <BigIcon icon="star" />
        <p>
          Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
          libero sit amet quam egestas semper. Aenean ultricies mi vitae
          est. Mauris placerat eleifend leo.
        </p>
      </div>
    </div>
  </div>
)
