import * as React from 'react';
import Loadable from 'react-loadable';
// import Loading from '../components/Loading';

const routeConfig: any = [
  // {
  //   path: '/',
  //   component: asyncLoad(() => import('../views/HomePage')),
  // },
  // {
  //   path: '/detail/:id',
  //   component: asyncLoad(() => import('../views/DetailPage')),
  // },
  // /**
  //  * Exception 页面
  //  */
  // {
  //   path: '/exception/404',
  //   component: asyncLoad(() => import('../views/Exception')),
  // },
];

// function generateRouteConfig (route: IRouteConfig[]) {
//   return route.map(item => {
//     return {
//       key: item.path,
//       exact: typeof item.exact === 'undefined' ? true : item.exact,
//       ...item,
//       component: item.component,
//     };
//   });
// }

// function asyncLoad (loader: () => Promise<any>) {
//   return Loadable({
//     loader,
//     loading: props => {
//       if (props.pastDelay) {
//         return <Loading />;
//       } else {
//         return null;
//       }
//     },
//     delay: 500,
//   });
// }

// export default generateRouteConfig(routeConfig);
export default (routeConfig);