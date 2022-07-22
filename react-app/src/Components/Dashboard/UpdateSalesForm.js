import React, { useState } from 'react';
import SalesApis from '../../apis/SalesApis'

const UpdateSalesForm = props => {

    const [date, setDate] = useState(props.toUpdate.date);
    const [status, setStatus] = useState(props.toUpdate.status);
    const [total, setTotal] = useState(props.toUpdate.total);
    const [deptId, setDeptId] = useState(props.toUpdate.deptId);
    const [userId, setUserId] = useState(props.toUpdate.userId);

    const handleSubmit = (event) => {

        SalesApis.updateSale( {
            "id": props.toUpdate.id,
            "date": date,
            "status": status,
            "total": total,
            "deptId": deptId,
            "userId": userId
        })

        SalesApis.getSales(props.setSales);

        props.setShowForm(false);

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

export default UpdateSalesForm;