'use client';

import React, { useState, useEffect } from 'react';
import { LogOut, Users, MessageSquare, TrendingUp, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../../logo.png';

// Define a type for our contact inquiry for TypeScript
interface Inquiry {
  $id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: string;
  $createdAt: string;
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch inquiries from the API
  const fetchInquiries = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/contacts');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch inquiries');
      }
      
      if (data.success) {
        setInquiries(data.data.documents);
      } else {
        throw new Error(data.error || 'Failed to load inquiries');
      }
    } catch (err) {
      console.error('Error fetching inquiries:', err);
      setError(err instanceof Error ? err.message : 'Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    // Simple client-side guard: require localStorage flag set by login
    const isAuth = typeof window !== 'undefined' && window.localStorage.getItem('rb_admin_auth') === '1';
    if (!isAuth) {
      // Redirect to login if not authorized
      if (typeof window !== 'undefined') {
        window.location.href = '/admin/login';
      }
      return;
    }

    fetchInquiries();
  }, []);
  const handleLogout = () => {
    // In a real app, you would clear the session/token
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('rb_admin_auth');
    }
    window.location.href = '/admin/login';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      new: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status as keyof typeof statusClasses] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Ritam Bharat"
                width={40}
                height={40}
                className="mr-3"
              />
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Inquiries</dt>
                    <dd className="text-lg font-medium text-gray-900">{inquiries.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">New This Week</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {inquiries.filter(inquiry => {
                        const inquiryDate = new Date(inquiry.$createdAt);
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return inquiryDate > weekAgo;
                      }).length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending Review</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {inquiries.filter(inquiry => inquiry.status === 'new').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Viewer Card */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Inquiries</h2>
              <button
                onClick={fetchInquiries}
                disabled={loading}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center text-gray-500">
                  <RefreshCw className="w-5 h-5 mr-3 animate-spin" />
                  Loading inquiries...
                </div>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-12">
                <div className="text-red-600 mb-4">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Failed to load inquiries</p>
                  <p className="text-sm text-gray-500 mt-2">{error}</p>
                </div>
                <button
                  onClick={fetchInquiries}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Success State - Data Table */}
            {!loading && !error && (
              <div className="overflow-hidden">
                {inquiries.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium text-gray-900">No inquiries yet</p>
                    <p className="text-sm text-gray-500 mt-2">When customers submit the contact form, they&apos;ll appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Message
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Submitted At
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {inquiries.map((inquiry) => (
                          <tr key={inquiry.$id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {inquiry.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <a 
                                href={`mailto:${inquiry.email}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {inquiry.email}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {inquiry.phone ? (
                                <a 
                                  href={`tel:${inquiry.phone}`}
                                  className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  {inquiry.phone}
                                </a>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                              <div className="truncate" title={inquiry.message}>
                                {inquiry.message}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {getStatusBadge(inquiry.status)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(inquiry.$createdAt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
