## Project: Menu Tree
 
### Demo
https://codesandbox.io/s/github/le1tuan/tree-menu
 
### How to run this project
1. ```cd tree-menu```
2. ```yarn```
3. ```yarn start```

### Config menu data
This project get data from ./src/data/menu.json with following format:
```
[
  {
    "name": "Menu A",
    "items": ["Menu A.1", "Menu A.2"]
  },
  {
    "name": "Menu B",
    "items": ["Menu B.1", "Menu B.2", "Menu B.3"]
  },
  {
    "name": "Menu C",
    "items": []
  },
  {
    "name": "Menu D",
    "items": []
  },
  {
    "name": "Menu B.1",
    "items": ["Menu B.1.2"]
  }
]
```

### Feature
1. Tree Menu with any depth
2. UI
3. When you hover over a supermenu, it will show the submenu 
