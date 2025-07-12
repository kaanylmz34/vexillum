import React, { useState } from 'react';
import '../../../css/auth.css';
import { router } from "@inertiajs/react"

interface LoginForm
{
    email: string;
    password: string;
}

const Login = ({ errors }: { errors: any }) => 
{
    const [data, setData] = useState<LoginForm>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        await router.post(route("auth.login.action"), data as any);
    }

    return (
        <>
            <div className="w-[400px] max-w-md bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-10">
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                            Hoş Geldiniz
                        </h1>
                        <p className="text-gray-500 text-lg font-medium">Hesabınıza giriş yapın</p>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                </div>
                
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            E-posta Adresi
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white ${errors.email ? "border-red-500" : ""}`}
                            placeholder="ornek@email.com"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                            Şifre
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className={`w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white ${errors.password ? "border-red-500" : ""}`}
                                placeholder="••••••••"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">Beni hatırla</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                            Şifremi unuttum
                        </a>
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 cursor-pointer text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition duration-200 shadow-lg"
                    >
                        Giriş Yap
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;