import React, { useRef } from 'react';

const PhoneBox = () => {
    const phoneNumber = useRef();
    const phoneNumber2 = useRef();
    const handleSubmit = () => {
        const activeNumber = phoneNumber.current.value;
        if (activeNumber.split("").length == 10) {
            const activeNumWithCode = "+91" + activeNumber
            console.log(activeNumWithCode)
        }
        else {
            alert('Phone number should contain 10 digit')
        }
    }

    const handleSubmit2 = () => {
        const inactiveNumber = phoneNumber2.current.value;
        if (inactiveNumber.split("").length == 10) {
            const activeNumWithCode = "+91" + inactiveNumber
            console.log(activeNumWithCode)
        }
        else {
            alert('Phone number should contain 10 digit')
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <form>
                        <div className='m-2'>
                            <label for="country">Active</label>
                            <select id="country" name="country">
                                <option>+91</option>
                            </select>
                            <span className="number1Div">
                                <input ref={phoneNumber} className='border rounded' id="number1" name="Phone number" type="tel" required
                                    placeholder="Phone number" pattern="[0-9]{10}"
                                    aria-label="Phone number" />
                                <span className="validity"></span>
                            </span>
                            <button onClick={() => { handleSubmit() }} className='btn btn-success m-2'>Submit</button>
                        </div>
                    </form>
                    <form>
                        <div>
                            <div className='m-2'>
                                <label for="country">Inactive</label>
                                <select id="country" name="country">
                                    <option>+91</option>
                                </select>
                                <span className="number1Div">
                                    <input ref={phoneNumber2} className='border rounded' id="number1" name="Phone number" type="tel" required
                                        placeholder="Phone number" pattern="[0-9]{10}"
                                        aria-label="Phone number" />
                                    <span className="validity"></span>
                                </span>
                                <button onClick={() => { handleSubmit2() }} className='btn btn-success m-2'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PhoneBox;