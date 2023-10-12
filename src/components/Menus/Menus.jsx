import React from 'react'
import styleMenu from "./Menus.Module.css"
import MenuBondi from '../MenuBondi/MenuBondi'
import MenuCronulla from '../MenuCronulla/MenuCronulla'
import Button from '../Button/Button'

const Menus = () => {
  return (
    <div className={styleMenu.menuContainer}>
    <div className={styleMenu.menusCnt}>
        <h2>MENUS</h2>
        <div className={styleMenu.menusP}>
            <p>Bondi</p>
            <p>Cronulla</p>
        </div>
        <div className={styleMenu.menusBox} >
        <MenuBondi/>
{/*         <MenuCronulla/> 
 */}         </div>

         <Button button="book now"/>


        
    </div>
    </div>
  )
}

export default Menus