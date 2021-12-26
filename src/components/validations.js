import * as yup from 'yup';



const validations = yup.object().shape({
    name: yup.string().min(3, "3 karakterden az olmamalı!").required("Lütfen isminizi giriniz"),
    surname: yup.string().min(3, "3 karakterden az olmamalı!").required("Lütfen soyisminizi giriniz"),
    subject: yup.string().min(3, "3 karakterden az olmamalı!").required("Lütfen konu giriniz"),
    message: yup.string().min(3, "3 karakterden az olmamalı!").required("Lütfen mesajınızı giriniz"),
    email: yup.string().email('Geçersiz e-mail adresi!').required('Lütfen mail adresinizi giriniz'),
  });

  export default validations;