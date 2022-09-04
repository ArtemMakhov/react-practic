import { Formik, Form,Field } from "formik";


export const MaterialEditorForm = ({ onSubmit }) => {
    const hendleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    };
    return (
    <Formik
        initialValues={{ title: '', link: '' }}
            onSubmit={hendleSubmit}
    >
            <Form>
                <label>
                    Описание
                    <Field name="title" type="text"/>
                </label>
                <label>
                    Ссылка
                    <Field name="link" type="text"/>
                </label>
            <button type="submit">Добавить материал</button>
        </Form>
    </Formik>
    )
}