import React from 'react'
import './navmenu.css'

const navmenu = () => {
  return (
    <>
    <div className='navmenu'>
        <div className='menu-heading'>
         <span >all categories</span><span ><button type="button"  role="button" tabindex="0" data-aut-id="" title=""><svg viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path  d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg></button></span>
        </div>
        <div className='sub-menus'>
            <ul>
                <li>Cars</li>
                <li>Motorcycles</li>
                <li>Mobile Phones</li>
                <li>For Sale: Houses & Apartments</li>
                <li>Scooters</li>
                <li>Commercial & Other Vehicles</li>
                <li>For Rent: Houses & Apartments</li>
            </ul>
            
        </div>
    </div>
    <div className='box'>

    </div>
    </>
  )
}

export default navmenu