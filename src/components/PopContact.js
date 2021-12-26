import React, { useState } from 'react'
import { useFormik } from "formik";
import validationSchema from "./validations"

const PopContact = () => {
    const { handleSubmit, handleChange, handleBlur, errors, touched } =
        useFormik({
            initialValues: {
                name: "",
                surname: "",
                email: "",
                subject: "",
                message: "",
            },
            validationSchema,
        });
    return (
        <div className='pop-contact'>
            <form onSubmit={handleSubmit} className='row container-fluid d-flex'>
                <div className='col-6'>
                <label>İsim *</label>
                    <input type="text" id='name' name='name' placeholder="İsminizi giriniz" onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name && (
                        <span className="error">{errors.name}</span>
                    )}
                </div>
                <div className='col-6'>
                <label>Soyisim *</label>
                    <input type="text" id='surname' name='surname' placeholder="Soyisimizi giriniz" onChange={handleChange} onBlur={handleBlur} />
                    {errors.surname && touched.surname && (
                        <span className="error">{errors.surname}</span>
                    )}
                </div>
                <div className='col-6'>
                <label>E-Mail *</label>
                    <input type="email" id='email' name='email' placeholder="E-mail adresinizi giriniz" onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email && (
                        <span className="error">{errors.email}</span>
                    )}
                </div>
                <div className='col-6'>
                <label>Konu *</label>
                    <input type="text" id='subject' name='subject' placeholder="Konu giriniz" onChange={handleChange} onBlur={handleBlur} />
                    {errors.subject && touched.subject && (
                        <span className="error">{errors.subject}</span>
                    )}
                </div>
                <div className='col-6' className='message-box'>
                    <label>Mesaj *</label>
                    <textarea className='message' id='message' name='message' placeholder="Mesajınızı giriniz" onChange={handleChange} onBlur={handleBlur} />
                    {errors.message && touched.message && (
                        <span className="error">{errors.message}</span>
                    )}
                </div>
                <p>* İşareti olan kutuları doldurmak zorunludur.</p>
                <button type="submit">Gönder</button>
            </form>
        </div>
    )
}

export default PopContact
