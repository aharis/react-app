import { render } from '@testing-library/react';
import {useState, useEffect } from 'react';
import { insert, update, read, remove} from '../services/apiService';



const Course = ( { match, history } ) => {

    const [id] = useState(match.params.id);
    const [course, setCourse] = useState({
        _id: '0',

        name: ' ',

        points: 0

    });

    useEffect(() => {
        if(id !== '0') {
            read('courses', id, data => {
                if(data) setCourse( data );
            })
        }
    }, [id]);

    function changeHandler (e) {

       setCourse({
           ...course,
           [ e.target.name]:e.target.value


           
       });
    }

    const back = () => {
        history.push('/courses');
    }

        const save = () => {

            if(nameIsEmpty || pointsIsEmpty) {
                alert('Some of required fields are empty!' );
                return;
            }
        
            if(id === '0') {
                insert('courses', course, data => {
                    if(data._id) return history.push('/courses');
                    console.log('There was error!');
                })
                
                }else {
                    update('courses', id, course, data => {
                        if(data) return history.push('/courses');
                        console.log('There was error!');

                    })
                    
            }
            
        }

        const del = () => {
            remove('courses', id, data => {
                history.push('/courses');
            })
        }

         
            const pointsIsEmpty = !course.points;
            const nameIsEmpty = !course.name.trim();

render() 
    return (
    <div className='container'>
       <h2>Course</h2> 

       <form className='input-form'  >

           <div className='label-form'>
               <label htmlFor='name'>Course name:  </label> 
               <input type='text'   name='name' value={course.name}
               onChange={changeHandler} />
               
           </div>
           { nameIsEmpty && <div>This field is required!</div>}
            
           <div className='label-form'>
               <label htmlFor='points'>Course points: </label>
               <input type='text' name='points' value={course.points}
               onChange={changeHandler}/> 
           </div>
           { pointsIsEmpty && <div>This field is required!</div> }
            <hr />

           {id !== '0' &&  (

               <div className='delete'>
               <button type='button' onClick={del}>DELETE</button>
                </div>
           )}
               <div className='back'>
               <button type='but ton' onClick={back}>BACK</button>
               &nbsp;&nbsp;
               <button type='button'  onClick={save}>SAVE</button>
           </div>

        
       </form>
   </div>
    )

}
export default  Course;