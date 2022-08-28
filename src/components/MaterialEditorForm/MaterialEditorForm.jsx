import { Formik, Form,Field } from "formik";


export const MaterialEditorForm = () => {
    return (
    <Formik
        initialValues={{ title: '', link: '' }}
        onSubmit={xxx => console.log(xxx)}
    >
            <Form>
                <label>
                    Описание
                    <Field name="title"/>
                </label>
            <button type="submit">Добавить материал</button>
        </Form>
    </Formik>
    )
}