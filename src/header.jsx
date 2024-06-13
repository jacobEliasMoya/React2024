import React from 'react';
import NavItem from './components/NavItem';
import Button from './components/Button';
import LogoImg from './components/LogoImg';

function header() {
  return (
          <header className="main-header">
              <div className="row align-items-center container-fluid text-center py-4">

                <div className="col-md-2 ">
                  <LogoImg
                    imgAlt={'testing'}
                    imgSrc={'/'}
                  />
                </div>
                
                <div className="col-md-8">
                  <nav className="w-100">
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
                  <Button
                    buttonLink={"#"}
                    buttonText={"Click Me"}
                  />
                </div>

              </div>
          </header>  
      )
}

export default header