import React from 'react';
import NavItem from './components/NavItem';
import Button from './components/Button';
import LogoImg from './components/LogoImg';
import Icon from './components/Icon';

function header() {
  return (
          <header className="main-header">
              <div className="row align-items-center container-fluid text-center py-4">

                <div className="col-md-2 ">

                <strong class='h2'> CSS TOGO </strong>
                  {/* <LogoImg
                    imgAlt={'testing'}
                    imgSrc={'/'}
                  /> */}
                </div>
                
                <div className="col-md-8">
                  <nav className="w-100 d-none">
                    <ul class='d-flex justify-content-center align-items-center list-unstyled mb-0'>  
                      <NavItem
                        navLink={'#'} navName={'Link1'}
                      />
                        <NavItem
                        navLink={'#'} navName={'Link2'}
                      />
                        <NavItem
                        navLink={'#'} navName={'Link3'}
                      />
                    </ul>
                  </nav>
                </div>
                
                <div className="col-md-2">
                  <Icon
                    iconClass={"fa fa-bars h2"}
                  />
                </div>

              </div>
          </header>  
      )
}

export default header