import React from 'react'
import Image from './components/Image'
import AlienImg from './assets/robot-quirky.png'
import PropTypes from 'prop-types'
import Button from './components/Button'

function Content(props) {
return (
<main>
        <section className='overflow-hidden invert py-5 dk'>
        <div className='large-wrapper h-100'>
            <div className='row container-fluid h-100'>
                <div className='col-md-6 p-5'>
                    <div className='w-100 h-100 robot-img'></div>
                </div>

                <div className='col-md-6 p-md-5 d-flex align-items-start justify-content-center flex-column'>
                    <h1> Shakin Cobwebs loose</h1>
                    <h2> React For The Win </h2>


                    <div className='row mt-4'>
                        <div className='col-md-6'>

                            <Button
                                buttonClass={'btn d-inline-block'}
                                buttonLink={'#'}
                                buttonText={' Contact '}
                            />
                        </div>

                        <div className='col-md-6'>
                            <Button
                                buttonClass={'btn d-inline-block'}
                                buttonLink={'#'}
                                buttonText={'Collaborate'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className='overflow-hidden invert py-5 lt rounded thin'>
            <div className='large-wrapper h-100'>
                <div className='row container-fluid h-100'>
                    <div className='col-md-4 p-4'>
                        <div className='card-wrapper rounded'>
                        </div>
                    </div>
                    <div className='col-md-4 p-4'>
                        <div className='card-wrapper rounded'>
                        </div>
                    </div>
                    <div className='col-md-4 p-4'>
                        <div className='card-wrapper rounded'>
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
