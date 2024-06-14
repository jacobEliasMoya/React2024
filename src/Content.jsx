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
                    <h1> Welcome To CSS To - Go </h1>
                    <h2> If you See It, Grab it </h2>


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

        <section className='overflow-hidden invert py-5'>
            <div className='large-wrapper h-100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eos qui, dignissimos eius cumque, incidunt numquam nobis doloremque earum iste ex! Animi totam voluptate exercitationem, dolorem reprehenderit harum debitis excepturi, id dolor, quibusdam numquam culpa provident! Ea praesentium optio unde consequuntur nam maiores quis. Soluta quasi, suscipit, odio earum modi repudiandae, assumenda cupiditate dolor quis rerum veniam porro natus accusamus dolores. Pariatur nihil velit at natus atque harum, fuga incidunt ducimus nulla odio beatae eum quod, sed, distinctio a. Facilis alias facere architecto debitis excepturi ad deserunt totam reprehenderit harum a quas ratione id nihil doloremque, nisi modi atque asperiores?
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
