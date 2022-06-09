export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu',
        to: '/menus/sub-menu',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Registration',
        to: '/menus/registration',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee List',
        to: '/menus/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department & Position Registration',
        to: '/menus/deptPositionReg',
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Login',
    to: '/login',
  }
]

