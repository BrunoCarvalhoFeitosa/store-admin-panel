const AuthLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            {children}
        </div>
    )
}

export default AuthLayout