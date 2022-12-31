import {useFormik} from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
    email : yup.string().min(6 , "Need a stronger email 😄😃😄")
    .required("why not fill this email 😃"),
    password : yup.string()
    .min(8  ,"Need a stronger password 😄😃😄")
    .required("why not fill this passsword 😃")
    .max(12, "password is tooo larger")
});

export function BasicForm() {
    const formik = useFormik({
        initialValues :{
            email : "" ,
            password : "" ,
        } ,
        // validation schema:

        validationSchema : formValidationSchema,
        onSubmit : (values) =>{
            console.log("The form values are " , values);
        },
    });
    return (
    <form className="basic-form" onSubmit={formik.handleSubmit}>
        <input 
        name="email"
        type ="email" 
        placeholder="Email" 
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur ={formik.handleBlur} />
        {/* {formik.errors.email} */}
        {formik.touched.email && formik.errors.email ? formik.errors.email : null}
        <input
        name="password"
        type ="text" 
        placeholder="Password" 
        value={formik.values.password} 
        onChange={formik.handleChange}
        onBlur ={formik.handleBlur} 
        />
        {/* {formik.errors.password} */}
        {formik.touched.password && formik.errors.password ? formik.errors.password : null}
        <p>Values</p>
        <pre>{JSON.stringify(formik.values)}</pre>
        Error
        <pre>{JSON.stringify(formik.errors)}</pre>
        Touched
        <pre>{JSON.stringify(formik.touched)}</pre>
        <button type="submit"> Submit</button>
    </form>
    );
}

// what will  formik.values.email will do ? it will  take intialvalues and tore it into email and display those
// values in screen
