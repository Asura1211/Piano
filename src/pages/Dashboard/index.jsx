import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Piano from './components/Piano';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Piano />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
