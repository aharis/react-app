import { useState, useEffect} from 'react';
import { insert, read, update, remove } from '../services/apiService';

const Student = ({ match, history }) => {

    const [id] = useState(match.params.id);
    const [student, setStudent] = useState({
        _id: '0',
        firstName: '',
        lastName: '',
        yearOfBirth: 0,
        address: ''
    });

    useEffect(() => {
        if(id !== '0'){
            read('students', id, data => {
                if(data) setStudent(data);
            })
        }
    }, [id]);

        function changeHandler (e) {
            setStudent({
                ...student,
                [  e.target.name ]: e.target.value
            });
           
        }

        const back = () => {
            history.push('/students');
        }

        const save = () => {

            if(firstNameIsEmpty || lastNameIsEmpty) {
                alert('Some of required fields are empty!');
                return;
            }
           if(id === '0') {
               insert('students', student, data => {
                   if(data._id) return history.push('/students');
                   console.log('There is mistake!')
               })
           }else {
               update('students', id, student, data => {
                   if(data) return history.push('/students');
                   console.log('There is mistake!')
               })
           }

        }

        const del = () => {
            remove('students', id, data => {
                history.push('/students');
        })}

        const firstNameIsEmpty = !student.firstName.trim();
        const lastNameIsEmpty = !student.lastName.trim();
        

    return ( 

    <div className='container'>
       <h2>Student</h2>

       <form className='input-form' id='form-stile'>

           <div className='label-form'>
               
            <label htmlFor='firstName'>FIrst name: </label>
            <input type='text' name='firstName'  
            value={student.firstName}
            onChange={changeHandler}/>
           </div>
           { firstNameIsEmpty && <div>This field is required!</div>}

           <div className='label-form'>
           <label htmlFor='lastName'>Last name: </label>
            <input type='text' name='lastName'
             value={student.lastName} 
             onChange={changeHandler}/>
           </div>
           { lastNameIsEmpty && <div>This field is required!</div>}

           <div className='label-form'>
           <label htmlFor='yearOfBirth'>Birth of year: </label>
            <input type='text' name='yearOfBirth' 
            value={student.yearOfBirth}
            onChange={changeHandler}/>
           </div>

           <div className='label-form'>
           <label htmlFor='address'>Address: </label>
            <input type='text' name='address'
             velue={student.address} 
             onChange={changeHandler}/>
           </div>
            <hr />
            {id !== '0' && (
           <div className='logo'>
               <button type='button' onClick={del}>DELETE</button>
            </div>
            )}
            <div className='nav'>
               <button type='button' onClick={back}>BACK</button>
               &nbsp;&nbsp;
               <button type='button' onClick={save}>SAVE</button>
            </div>
       </form>
    </div>

     );
}


export default Student;