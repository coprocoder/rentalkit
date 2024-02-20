/**
 * Functional
 * Пример: <Form>{children}</Form>
 * */
const FormFunction = ({children}) => {
    return (
        `<div>
            <div>TestModule</div>
            ${children}
        </div>`
    )
}
exports.Form = FormFunction