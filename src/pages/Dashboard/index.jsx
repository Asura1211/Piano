import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Piano from './components/Piano';
import MusicDisplay from './components/MusicDisplay';
import InputMusic from './components/InputMusic';
import MusicWave from './components/MusicWave';
import Notation from './components/Notation';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={10} >
      <Cell colSpan={12}> <Piano /> </Cell>
      <Cell colSpan={3}> <MusicDisplay /> </Cell>
      <Cell colSpan={3}> <InputMusic /> </Cell>
      <Cell colSpan={3}> </Cell>
      <Cell colSpan={3}> <Notation /> </Cell>
      <Cell colSpan={12}> <MusicWave /> </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
