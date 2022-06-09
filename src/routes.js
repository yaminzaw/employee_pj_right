import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));
const Registration = React.lazy(() => import('./views/menus/registration/EmployeeIndex'));
const List = React.lazy(() => import('./views/menus/list/EmployeeListIndex'));
const DeptPosition = React.lazy(() => import('./views/menus/deptPositionReg/DeptPositionRegIndex'));

const routes = [
  
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
  { path: '/menus/registration', name: 'Registration', component: Registration },
  { path: '/menus/list', name: 'List', component: List },
  { path: '/menus/deptPositionReg', name: 'Dept Position Reg', component: DeptPosition },
  { path: '/', exact: true, name: 'Home' },
];

export default routes;
