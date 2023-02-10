import React,{useState} from 'react'
import './Contact.modules.css'

//eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  const errors = {};
  if(!inputs.name){
    errors.name = "Se requiere su nombre"
  }
  if(regexEmail.test(inputs.email)){
    errors.email = "Debe ser correo electrónico"
  }
  if(!inputs.phone < 0){
    errors.phone = "Solo números positivos"
  }
  if(!inputs.message){
    errors.message = "Se requiere un mensaje"
  }

}

export default function Contact () {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
 });
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
 });

 const handlerChange = (e) => {
  setInputs({
    ...inputs,
    [e.target.name]: e.target.value
  });
  setErrors(
    validate({
      ...inputs,
      [e.target.name]: e.target.value
    })
  )
 }

 const handlerSubmit = (e) => {
  e.preventDefault();

  if(Object.entries(errors) === 0){
    alert("Datos completados")
    setErrors(
      validate({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    )
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: '',
      })
  }else{
    alert("Debes corregir los errores")
  }
 }

  return (
  <div>
    <form> 
    <label>Nombre:</label>
    <input name="name" className={errors.name && 'warning'} onChaange={handlerChange} value={inputs.name} placeholder='Escribe tu nombre...' type='text'></input>
    <p className='danger'>{errors.name}</p>

    <label>Correo Electronico:</label>
    <input name="email" className={errors.email && 'warning'} onChaange={handlerChange} value={inputs.email} placeholder='Escribe tu email...' type='text'></input>
    <p className='danger'>{errors.email}</p>

    <label>Telefono:</label>
    <input name="phone" className={errors.phone && 'warning'} onChaange={handlerChange} value={inputs.phone} placeholder='Escribe un telelefono...' type='number'></input>
    <p className='danger'>{errors.phone}</p>

    <label>Asunto:</label>
    <input name="subject" className={errors.subject && 'warning'} onChaange={handlerChange} value={inputs.subject} placeholder='Escribe el asunto...' type='text'></input>
    <p className='danger'>{errors.subject}</p>

    <label>Mensaje:</label>
    <textarea name="message" className={errors.message && 'warning'} onChaange={handlerChange} value={inputs.message} placeholder='Escribe tu mensaje...' type='text'></textarea>
    <p className='danger'>{errors.message}</p>

    <button type='submit'>enviar</button>
    </form>
  </div>
  )
}
