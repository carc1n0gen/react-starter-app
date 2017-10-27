import React from 'react'

import Banner from '../Banner'
import BigIcon from '../BigIcon'

export default class Home extends React.Component {
  state = {
    
  }

  clickHandler = () => {
     window.jQuery('#myModal').modal('show')
  }

  render() {
    return (
      <div className="container">
        <Banner title="React Is Cool" subtitle="Get'er done!" clickHandler={this.clickHandler} />

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

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <h2>I got clicked!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
