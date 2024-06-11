export function Login() {
    return (
            <div className="grid lg:grid-cols-2 overflow-y-hidden min-h-screen bg-pink">
                <div className="hidden lg:block h-full bg-[100%] bg-cover bg-thumb"></div>
                <main className="flex items-center justify-center flex-col">
                    <img src={"https://desafio3furniro.s3.us-east-2.amazonaws.com/header/logo.png"} alt="Logo" />
                    <h1 className="sm:text-64 text-4xl font-bold">
                        Welcome back
                    </h1>
                    <p className="mt-3 font-poppins max-w-[315px] text-center">
                        Welcome to our forfeiture site, your gateway to extraordinary finds!
                    </p>
                    <button className="bg-primary text-white hover:bg-amber-700 transition-colors font-poppins w-full py-4 max-w-80 mt-8">
                        Login
                    </button>
                </main>
            </div>
    );
};

export default Login;