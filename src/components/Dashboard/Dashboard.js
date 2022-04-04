import React, { useEffect, useState } from 'react';
import Chart from './Chart/Chart';

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setChart(data))
    })
    return (
        <div>
            <Chart chart={chart}></Chart>
        </div>
    );
};

export default Dashboard;