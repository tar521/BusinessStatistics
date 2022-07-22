import React, {useState} from 'react';
import SalesApis from '../../apis/SalesApis'


const SalesForm = props => {

    const [date, setDate] = useState('');
    const [status, setStatus] = useState(0);
    const [total, setTotal] = useState(0);
    const [deptId, setDeptId] = useState(0);
    const [userId, setUserId] = useState(0);

    const handleSubmit = (event) => {

        console.log("Date = " + date);
        console.log("Status = " + status);
        console.log("Total = " + total);
        console.log("Dept ID = " + deptId);
        console.log("User ID = " + userId);

        const sale = {
            "date": date,
            "status": status,
            "total": total,
            "deptId": deptId,
            "userId": userId
        }

        SalesApis.createSale(sale);

        setDate('');
        setStatus(0);
        setTotal(0);
        setDeptId(0);
        setUserId(0);

        event.preventDefault();

    }

    return (
        <div style={{"margin":"20px"}}>

            <form style={{"marginTop": "20px"}}
            onSubmit={handleSubmit}>

            <div className='mb-3'>
                <label className='form-label'
                    htmlFor='date'>Date</label>
                <input type='datetime-local'
                    className='form-control'
                    id='date'
                    name='date'
                    value={date}
                    onChange={(event) => {setDate(event.target.value)}}/>

            </div>

            <div className='mb-3'>
                <label className='form-label'
                    htmlFor='status'> Order Status</label>
                <input type='number'
                    className='form-control'
                    id='status'
                    name='status'
                    value={status}
                    onChange={(event) => {setStatus(event.target.value)}}
                    max="1"
                    min="0"/>
            </div>

            <div className='mb-3'>
                <label className='form-label'
                    htmlFor='total'> Total </label>
                <input type='number'
                    className='form-control'
                    id='total'
                    name='total'
                    value={total}
                    onChange={(event) => {setTotal(event.target.value)}}
                    min="0"/>
            </div>

            <div className='mb-3'>
                <label className='form-label'
                    htmlFor='deptId'>Department ID</label>
                <input type='number'
                    className='form-control'
                    id='deptId'
                    name='deptId'
                    value={deptId}
                    onChange={(event) => {setDeptId(event.target.value)}}
                    min="0"
                    max="10"/>
            </div>

            <div className='mb-3'>
                <label className='form-label'
                    htmlFor='userId'>User ID</label>
                <input type='number'
                    className='form-control'
                    id='userId'
                    name='userId'
                    value={userId}
                    onChange={(event) => {setUserId(event.target.value)}}
                    min="0"/>
            </div>

            <input type="submit" className='btn btn-primary'/>
            </form>
        </div>
    );
};

export default SalesForm;