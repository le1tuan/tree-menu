import React from 'react'
import "./index.css"

class MenuItem extends React.Component {
  render() {
    const { label, subMenu } = this.props;
    return (
      <li>
        { 
          label && 
          <div className="tree-menu__title">
            <p>{label}</p>
            {
              subMenu && <i className="fas fa-angle-right"></i>
            }
            {
              subMenu && <ul className={`tree-menu__submenu tree-menu__submenu--hidden`}>{subMenu}</ul>
            }
          </div>
        }
      </li>
    )
  }
}

export default MenuItem