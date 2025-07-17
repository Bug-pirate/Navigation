import './Input.css'

const Input = () => {
    return (

        <div className='input'>
            <div className='input-container'>
                <div className='input-field'>
                    <input type="text" placeholder='From'/>
                </div>
                <div className='input-field'>
                    <input type="text" placeholder='To' />
                </div>
            </div>
        </div>
    )
}

export default Input;