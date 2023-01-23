import React, {useState, useRef} from 'react';

function Form(props){


    const phoneTypes = ['Home', 'Work', 'Mobile']
    const [selectedPhone, setSelectedPhone] = useState(phoneTypes[0])

    setSelectedPhone(phoneTypes[1]);
    return <h1>{selectedPhone}</h1>
    // return (
    //     <div>
    //         {/* {showErrors()} */}
    //         <form className="form" onSubmit={HandleSubmit}>
    //             <h2>Sign Up</h2>
    //             <input 
    //             type="text"
    //             placeholder="Name"
    //             value={user.name}
    //             // onChange={handleChange('name')}
    //             />

    //             <input 
    //             type="text"
    //             placeholder="email"
    //             value={user.email}
    //             // onChange={handleChange('email')}
    //             />

    //             <input 
    //             type="text"
    //             placeholder="Phone Number"
    //             value={user.phoneNumber}
    //             // onChange={handleChange('phoneNumber')}
    //             />

    //             <select name="" id="">

    //             </select>


    //         </form>
    //     </div>

    // )
}

export default Form;