import {useState} from 'react';

export const useForm = (initialValue={}) => {

    const [form, setForm] = useState(initialValue);
    
    const onChangeInput = ({target}) =>{
        const{name, value} = target;
        // console.log(name, value);
        setForm({
            ...form,
            [name] :value,
        });
    }

    const onResetForm = () =>{
        setForm(initialValue)
    };

  return{
    ...form,
    form,
    onChangeInput,
    onResetForm
  }
}
