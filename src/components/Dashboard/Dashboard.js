
import Chart1 from './Chart/Chart1';
import Chart2 from './Chart/Chart2';

const Dashboard = () => {

    return (
        <div>
            <div className='d-flex flex-column justify-content-center p-5'>
                <h3 className='text-primary'>MONTH WISE SELL</h3>
                <Chart1></Chart1>
            </div>
            <div className='d-flex flex-column justify-content-center p-5'>
                <h3 className='text-primary'>Investment VS Revenue</h3>
                <Chart2></Chart2>
            </div >
        </div >
    );
};

export default Dashboard;