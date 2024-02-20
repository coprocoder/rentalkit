const Form = ({children}) => {
    return (
        <div style="background: gray">
            <div style="color: red">TestComponent</div>
            {children}
        </div>
    )
}

export { Form };