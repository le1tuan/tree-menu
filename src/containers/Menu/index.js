import React from 'react'
import MenuItem from '../MenuItem'
import './index.css'
import menu from '../../data/menu.json'

const parseJsonTree = (nodes) => {
  for (let i = 0; i< nodes.length; i++) {
    for (let j = 0; j < nodes[i].items.length; j++) {
      let node = nodes[i].items[j]
      let found = nodes.find(n => n.name == node);
      if (found) {
        nodes[i].items[j] = Object.assign({}, found);
        found.removed = true;
      } else {
        nodes[i].items[j] = {
          name: node,
          items: []
        }
      }
    }
  }
  return nodes.reduce((arr, item) => {
    if (!item.removed) {
      arr.push(item);
    }
    return arr
  }, [])
}

const menuTree = parseJsonTree(menu)


function recursiveRender(tree) {
  const len = tree.length
  if (len === 0) {
    return <div />
  }
  return tree.map((t) => {
    if (t.items.length === 0) {
      return <MenuItem
        label={t.name}
      />
    }
    return <MenuItem 
      label={t.name}
      subMenu={recursiveRender(t.items)}
    />
  })
}

class Menu extends React.Component {
  render() {
    return (
      <ul className="tree-menu"> 
        {recursiveRender(menuTree)}
      </ul>
    )
  }
}

export default Menu;