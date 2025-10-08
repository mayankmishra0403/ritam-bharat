'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LogIn, Loader2, AlertCircle } from 'lucide-react';
import logo from '../../../../logo.png';

// Hardcoded admin credentials (only admin should login)
const ADMIN_EMAIL = 'admin@ritambharat.software';
const ADMIN_PASSWORD = 'Ritam@04032006';

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<string | null>(null);

    const validate = () => {
        if (!email || !email.includes('@')) {
            setLoginError('Please enter a valid email address.');
            return false;
        }
        if (!password || password.length < 8) {
            setLoginError('Password must be at least 8 characters long.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError(null);

        if (!validate()) return;

        setIsSubmitting(true);
        try {
            // simulate server check delay
            await new Promise((r) => setTimeout(r, 800));

                    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                        // mark as logged in (client-side) - replace with real auth in production
                        if (typeof window !== 'undefined') {
                            window.localStorage.setItem('rb_admin_auth', '1');
                        }
                        router.push('/admin/dashboard');
                        return;
                    }

            setLoginError('Invalid email or password.');
        } catch (err: any) {
            setLoginError(err?.message || 'An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                {/* Header Area */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <Image src={logo} alt="Ritam Bharat Logo" width={80} height={80} priority className="rounded-lg shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Ritam Bharat Command Center</h2>
                    <p className="text-gray-600">Sign in to manage your ecosystem.</p>
                </div>

                {loginError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-red-800">Login Failed</p>
                            <p className="text-sm text-red-700 mt-1">{loginError}</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@ritambharat.software"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-gray-300"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-gray-300"
                            disabled={isSubmitting}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Signing In...
                            </>
                        ) : (
                            <>
                                <LogIn className="w-5 h-5" />
                                Sign In
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
                    <p className="font-medium">Admin only access</p>
                    <p className="mt-1">Use the registered admin credentials to sign in.</p>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">Secured by Ritam Bharat Enterprise Security</p>
                </div>
            </div>
        </div>
    );
}
