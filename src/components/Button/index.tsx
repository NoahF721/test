interface IButton {
    children: React.ReactNode
}

export const Button = ({ children}: IButton) => {
    return (
        <button className="px-2 py-1 border-blue-700 border-[1px]">{children}</button>
    )
}