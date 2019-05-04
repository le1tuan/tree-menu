import React from 'react'
import "./index.css"

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
    this.toggleHover = this.toggleHover.bind(this)
  }
 
  toggleHover() {
    this.setState((prev) => ({
      isShow: !prev.isShow
    }))
  }

  render() {
    const { label, subMenu } = this.props;
    const { isShow } = this.state;
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
              subMenu && <ul className={`tree-menu__submenu tree-menu__submenu--hidden ${isShow ? 'tree-menu__submenu--show' : ''}`}>{subMenu}</ul>
            }
          </div>
        }
      </li>
    )
  }
}

export default MenuItem