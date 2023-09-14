
import './Input.css';

const Input = ({ placeholder, onChange, value }) => {
    // const [value, setValue]= useState('');

    // const handleChange = (event) => {
    //     setValue(event.target.value)
    //     console.log('value', event.target.value)
    // };
    return (<input type='text' value={value} onChange={onChange} className="input" placeholder={placeholder} />);
}
 
export default Input;