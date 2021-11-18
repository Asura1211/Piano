import Dashboard from '@/pages/Dashboard';

const routerConfig = [
  {
    path: '/',
    children: [
      {
        path: '/',
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
