import React from 'react';
import SalesChart from '../../SalesChart';
import GoalGauge from '../../GoalGauge';
import PieChart from '../../PieChart';

const id = 2;
const dept_id = 1;

 const MainDashboard=(props) => {
  return(
    <div>
      <h2>Business Statistics Dashboard</h2>
      <div className='container' id='saleschart'>
        <SalesChart/>
      </div>
      <div className='parent'>
        <div className='child' style={{width: '40%'}} align='left'>
          <GoalGauge/>
        </div>
        <div className='child' style={{width: '40%'}} align='right'>
          <PieChart/>
        </div>
      </div>
    </div>
  );
}
export default MainDashboard