import React from 'react'
import MenuItem from '../MenuItem'
import './index.css'
import menu from './menu.json'

class Menu extends React.Component {
  render() {
    return (
      <ul className="tree-menu"> 
        <li>Menu1</li>
        <li>Menu1</li>
        <li>Menu1</li>
        <li>Menu1</li>
        <li>Menu1</li>
        <li>Menu1</li>
      </ul>
    )
  }
}

export default Menu;