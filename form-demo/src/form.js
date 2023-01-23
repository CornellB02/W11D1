import React, {useState, useRef} from 'react';

function Form(props){

    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: 'Home',
        bio: ''
    }
    )
    // const phoneTypes = ['Home', 'Work', 'Mobile']
    // const [selectedPhone, setSelectedPhone] = useState(phoneTypes[0])

    // const setWork = () => {
    //     setSelectedPhone(phoneTypes[1]);
    // }

    const [errors, setErrors] = useState([]);

    const validates = () => {
        let errors = [];

        if(user.name.length === 0){
            errors.push('Name can\'t be empty');
        }

        // if(user.email)
    }

    const handleSubmit = (e) => {
        // setWork()
        e.preventDefault();
        // let errors = validate();

        console.log(user);
    }

    const handleChange = (field) => {
        return (e) =>{
            console.log(field)
            console.log(e)

            const newObject = Object.assign({}, user, {[field]: e.target.value})
            setUser(newObject);
        }
    }

    // return (<div>
    //     <button onClick={handleSubmit}>Hello</button>
    //     <h1>{selectedPhone}</h1>
    // </div>)
    return (
        <div>
            {/* {showErrors()} */}
            <form className="form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input 
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={handleChange('name')}
                />

                <input 
                type="text"
                placeholder="email"
                value={user.email}
                onChange={handleChange('email')}
                />

                <input 
                type="text"
                placeholder="Phone Number"
                value={user.phoneNumber}
                onChange={handleChange('phoneNumber')}
                /> 

                <select name={user.phoneType} 
                onChange={handleChange('phoneType')}>

                    <option value="Home">
                        Home
                    </option>
                    <option value="Mobile">
                        Mobile
                    </option>
                    <option value="Work">
                        Work
                    </option>
                </select>

                <input type="submit" value="submit"/>


            </form>
        </div>

    )
}

export default Form;