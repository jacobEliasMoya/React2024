import React from 'react'
import Image from './components/Image'
import AlienImg from './assets/robot-quirky.png'
import PropTypes from 'prop-types'
import Button from './components/Button'

function Content(props) {
  return (
    <main>
          <section className='overflow-hidden invert py-5'>

            <div className='row container-fluid h-100'>
                <div className='col-md-6 p-5'>
                    <div className='w-100 h-100 robot-img'></div>
                </div>

                <div className='col-md-6 p-md-5 d-flex align-items-start justify-content-center flex-column'>
                    <h1> Welcome To CSS To - Go </h1>
                    <h2> If you See It, Grab it </h2>


                    <div className='row mt-4'>
                        <div className='col-md-6'>

                            <Button
                                buttonClass={'btn d-inline-block'}
                                buttonLink={'#'}
                                buttonText={'Call Now'}
                            />
                        </div>

                        <div className='col-md-6'>
                            <Button
                                buttonClass={'btn d-inline-block'}
                                buttonLink={'#'}
                                buttonText={'Call Now'}
                            />
                        </div>
                    </div>
                </div>
            </div>

          </section>
    </main>
  )
}

Content.propTypes = {}

export default Content
