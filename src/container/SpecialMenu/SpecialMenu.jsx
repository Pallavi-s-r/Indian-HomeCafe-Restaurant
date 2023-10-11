import React from 'react'
import './SpecialMenu.css';
import Subheading from '../../components/SubHeading/Subheading'
import MenuItem from '../../components/Menuitem/MenuItem.jsx'

import {images, data} from '../../constants';


const SpecialMenu = () => {
 return(
    <div className='app__specialmenu flex__center section__padding' id='menu'>
        <div className='app__specialmenu-title'>
            <Subheading title='Menu that fits your pallete'/>

            <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>

        <div className='app__specialmenu-menu'>
            <div className='app__specialmenu-menu_wine flex__center'>
                <p className='app__specialmenu-menu_heading'>Juices & Drinks</p>

                <div className='app__specialmenu-menu_items'>
                {data.wines.map((wine, index)=>(
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                ))}
                </div>
            </div>

                    <div className='app__specialmenu-menu_img'>
                        <img src={images.menu} alt='menu_img'/>
                    </div>
                    <div className='app__specialmenu-menu_wine flex__center'>
                <p className='app__specialmenu-menu_heading'>Food    </p>

                <div className='app__specialmenu-menu_items'>
                {data.food.map((foods, index)=>(
                    // <p>{foods.title}</p>
                      <MenuItem key={foods.title + index} title={foods.title} price={foods.price} tags={foods.tags} />
                ))}
                </div>
            </div>

        </div>
        <div style={{marginTop:'15px'}}>
            <button type='button' className='custom__button'>View More</button>
        </div>
    </div>
 ) 
}

export default SpecialMenu