import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Optimized inline SVG logo component representing OrbX
function OrbXLogo({ className = "w-10 h-10" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 614 534" className={className}>
      <g className="fill-slate-300 group-hover:fill-white transition-colors duration-300">
        <path d="M0 0 C39.733 -0.713 75.281 14.413 103.934 41.543 C109.443 46.922 114.166 52.805 118.887 58.871 C119.103 59.149 119.103 59.149 120.2 60.554 C122.316 63.313 124.079 65.989 125.574 69.121 C107.078 70.751 107.078 70.751 101.855 67.352 C100.074 64.934 100.074 64.934 98.426 62.172 C96.18 58.472 93.512 55.654 90.449 52.621 C89.895 52.07 89.34 51.519 88.769 50.952 C82.886 45.248 76.465 40.531 69.574 36.121 C69.006 35.756 68.438 35.392 67.852 35.016 C40.096 17.523 6.369 13.23 -25.426 20.121 C-58.447 27.647 -85.178 47.846 -103.426 76.121 C-104.043 77.076 -104.661 78.031 -105.297 79.016 C-125.149 111.337 -128.93 150.905 -120.465 187.402 C-116.332 203.684 -108.553 219.737 -98.426 233.121 C-97.741 234.026 -97.057 234.931 -96.352 235.863 C-75.717 262.017 -47.493 279.666 -14.426 285.121 C-13.375 285.304 -12.325 285.487 -11.242 285.676 C22.756 289.643 55.153 280.163 81.949 258.996 C87.434 254.401 92.512 249.425 97.531 244.332 C97.786 244.074 97.786 244.074 99.078 242.771 C100.574 241.121 100.574 241.121 101.93 239.18 C103.997 236.294 105.372 234.404 108.92 233.568 C111.63 233.433 114.242 233.508 116.949 233.684 C117.876 233.715 118.803 233.747 119.758 233.779 C122.033 233.861 124.302 233.976 126.574 234.121 C107.265 267.005 75.354 290.453 38.574 300.121 C30.01 302.219 21.388 303.729 12.574 304.121 C12.003 304.148 12.003 304.148 9.113 304.281 C-32.802 305.259 -68.63 287.964 -98.816 259.898 C-100.426 258.121 -100.426 258.121 -100.426 256.121 C-101.086 256.121 -101.746 256.121 -102.426 256.121 C-104.674 253.821 -106.546 251.181 -108.488 248.621 C-108.78 248.237 -108.78 248.237 -110.256 246.293 C-115.735 238.937 -120.27 231.285 -124.426 223.121 C-124.742 222.511 -125.059 221.901 -125.385 221.272 C-144.231 184.613 -146.326 141.287 -134.156 102.199 C-121.657 64.32 -95.795 33.142 -60.328 14.909 C-41.302 5.46 -21.221 0.75 0 0 Z" transform="translate(189.42578125,43.87890625)"/>
        <path d="M0 0 C10.18 10.75 13.144 22.377 13.094 36.836 C13.11 37.761 13.126 38.686 13.143 39.639 C13.151 52.232 8.678 64.105 -0.094 73.273 C-9.347 81.828 -20.598 86.359 -33.219 86.898 C-33.973 86.95 -34.727 87.002 -35.504 87.055 C-48.962 87.58 -62.404 83.485 -73.031 75.148 C-82.732 66.04 -87.739 54.15 -88.422 40.98 C-88.72 24.664 -85.186 11.27 -73.66 -0.844 C-53.665 -19.335 -19.462 -18.434 0 0 Z M-65.434 7.984 C-72.818 15.902 -76.204 26.16 -76.219 36.898 C-75.448 49.076 -72.526 58.702 -63.453 67.145 C-54.785 73.949 -44.153 76.968 -33.219 75.898 C-21.535 74.169 -13.281 70.201 -5.723 61.047 C1.653 50.51 2.298 37.239 0.285 24.844 C-2.626 14.286 -9.059 6.095 -18.531 0.543 C-34.076 -6.539 -53.018 -3.616 -65.434 7.984 Z" transform="translate(159.21875,405.1015625)"/>
        <path d="M0 0 C3.63 0 7.26 0 11 0 C13.005 2.005 12.256 6 12.316 8.754 C12.337 9.529 12.358 10.305 12.379 11.104 C12.445 13.59 12.504 16.076 12.562 18.562 C12.606 20.244 12.649 21.926 12.693 23.607 C12.801 27.738 12.902 31.869 13 36 C13.449 35.594 13.898 35.189 14.36 34.771 C23.277 26.888 32.241 25.122 43.91 25.629 C54.65 26.422 61.814 31.132 69 39 C75.994 48.022 75.982 60.127 75 71 C73.244 80.643 67.544 87.871 59.766 93.664 C50.099 99.526 38.213 100.477 27.344 97.836 C22.086 95.961 16.952 92.952 13 89 C11.032 90.968 11.338 94.348 11 97 C7.37 97 3.74 97 0 97 C0 64.99 0 32.98 0 0 Z M16 45 C11.324 52.226 10.294 59.511 11 68 C12.502 74.992 15.11 79.801 20.875 84.188 C28.587 88.661 36.262 88.877 45 88 C51.619 86.007 56.214 82.736 60 77 C64.06 68.849 64.654 59.741 62.121 50.949 C59.138 44.461 54.874 39.577 48.207 36.863 C36.319 33.663 24.276 35.632 16 45 Z" transform="translate(274,393)"/>
        <path d="M0 0 C0 3.96 0 7.92 0 12 C-0.825 11.835 -0.825 11.835 -5 11 C-13.031 10.365 -20.143 10.395 -27 15 C-32.665 20.296 -34.997 27.045 -35.432 34.694 C-35.473 36.338 -35.499 37.984 -35.512 39.629 C-35.53 40.504 -35.548 41.379 -35.566 42.281 C-35.62 45.041 -35.654 47.802 -35.688 50.562 C-35.721 52.449 -35.755 54.335 -35.791 56.221 C-35.875 60.814 -35.942 65.407 -36 70 C-39.96 70 -43.92 70 -48 70 C-48 47.23 -48 24.46 -48 1 C-44.37 1 -40.74 1 -37 1 C-37 4.63 -37 8.26 -37 12 C-36.34 12 -35.68 12 -35 12 C-34.745 11.403 -34.49 10.806 -34.227 10.191 C-31.304 4.971 -24.993 1.353 -19.418 -0.539 C-13.229 -1.719 -6.004 -2.001 0 0 Z" transform="translate(248,420)"/>
      </g>
      <g className="fill-[#00c200] group-hover:fill-emerald-400 transition-colors duration-300">
        <path d="M0 0 C0.728 0.004 1.456 0.008 2.207 0.013 C4.53 0.03 6.853 0.067 9.176 0.105 C10.752 0.121 12.328 0.134 13.904 0.146 C17.766 0.18 21.627 0.231 25.488 0.293 C23.603 4.372 20.871 7.316 17.801 10.543 C16.706 11.71 15.613 12.878 14.52 14.047 C13.994 14.608 13.468 15.169 12.926 15.747 C10.62 18.227 8.404 20.783 6.188 23.344 C2.674 27.374 -0.929 31.324 -4.512 35.293 C-6.012 36.959 -7.512 38.626 -9.012 40.293 C-11.283 42.818 -13.556 45.342 -15.832 47.863 C-19.824 52.288 -23.785 56.736 -27.699 61.23 C-30.543 64.467 -33.438 67.657 -36.324 70.855 C-38.816 73.632 -41.269 76.44 -43.719 79.254 C-45.69 81.496 -47.693 83.707 -49.699 85.918 C-53.354 89.964 -56.914 94.08 -60.449 98.23 C-65.679 104.37 -71.044 110.365 -76.512 116.293 C-75.013 121.722 -71.274 125.008 -67.449 128.918 C-62.259 134.33 -57.355 139.787 -52.684 145.652 C-50.231 148.634 -47.641 151.469 -45.012 154.293 C-41.579 157.98 -38.286 161.734 -35.137 165.668 C-30.53 171.393 -25.544 176.715 -20.52 182.07 C-17.667 185.114 -14.902 188.222 -12.176 191.379 C-10.188 193.665 -8.165 195.917 -6.137 198.168 C-5.376 199.012 -4.616 199.857 -3.832 200.727 C-2.31 202.41 -0.784 204.09 0.746 205.766 C5.43 210.915 9.899 216.188 14.27 221.605 C17.085 225.016 20.048 228.274 23.055 231.516 C24.488 233.293 24.488 233.293 24.488 235.293 C20.115 235.568 15.746 235.766 11.366 235.897 C9.881 235.952 8.397 236.027 6.915 236.123 C-5.35 236.896 -5.35 236.896 -10.631 232.98 C-13.171 230.199 -15.355 227.377 -17.512 224.293 C-18.938 222.534 -20.374 220.782 -21.824 219.043 C-22.555 218.138 -23.286 217.233 -24.039 216.301 C-26.929 212.786 -29.899 209.349 -32.887 205.918 C-38.372 199.619 -43.792 193.269 -49.173 186.881 C-55.239 179.683 -61.322 172.501 -67.449 165.355 C-67.943 164.779 -68.437 164.203 -68.945 163.609 C-71.543 160.58 -74.147 157.558 -76.762 154.543 C-77.295 153.925 -77.829 153.308 -78.379 152.672 C-79.389 151.504 -80.401 150.338 -81.416 149.174 C-83.864 146.338 -86.113 143.473 -88.234 140.383 C-88.986 139.363 -89.737 138.344 -90.512 137.293 C-91.172 137.293 -91.832 137.293 -92.512 137.293 C-93.773 138.739 -93.773 138.739 -95.199 140.773 C-95.728 141.518 -96.256 142.263 -96.801 143.031 C-97.365 143.839 -97.93 144.648 -98.512 145.48 C-99.699 147.153 -100.888 148.825 -102.078 150.496 C-102.665 151.32 -103.251 152.145 -103.856 152.994 C-105.991 155.959 -108.205 158.847 -110.449 161.73 C-113.957 166.246 -117.396 170.803 -120.785 175.409 C-122.015 177.075 -123.254 178.734 -124.502 180.386 C-129.537 187.094 -129.537 187.094 -131.34 190.918 C-133.154 194.435 -134.154 196.141 -137.512 198.293 C-145.389 199.872 -153.52 199.612 -161.512 199.293 C-160.833 195.521 -160.043 193.205 -157.762 190.105 C-157.445 189.668 -157.445 189.668 -155.84 187.453 C-155.072 186.41 -154.303 185.367 -153.512 184.293 C-140.811 166.905 -128.721 149.135 -116.762 131.23 C-116.082 130.213 -115.402 129.196 -114.702 128.148 C-114.067 127.194 -113.432 126.24 -112.777 125.258 C-112.218 124.419 -111.659 123.579 -111.083 122.715 C-109.499 120.274 -107.994 117.797 -106.512 115.293 C-116.382 100.211 -126.795 85.505 -137.533 71.031 C-141.403 65.813 -145.2 60.551 -148.944 55.241 C-151.015 52.323 -153.138 49.463 -155.348 46.648 C-155.814 46.054 -156.28 45.46 -156.761 44.847 C-157.656 43.714 -158.557 42.587 -159.466 41.465 C-162.512 37.619 -162.512 37.619 -162.512 34.293 C-143.852 31.472 -143.852 31.472 -137.29 35.737 C-133.14 39.81 -130.167 44.716 -127.164 49.663 C-124.398 54.065 -121.181 58.114 -118.012 62.23 C-112.337 69.785 -106.734 77.393 -101.166 85.027 C-98.079 89.242 -94.905 93.32 -91.512 97.293 C-85.692 91.012 -80.106 84.642 -74.727 77.977 C-71.847 74.487 -68.805 71.163 -65.758 67.82 C-63.45 65.223 -61.256 62.559 -59.074 59.855 C-55.998 56.052 -52.824 52.392 -49.512 48.793 C-45.492 44.421 -41.712 39.915 -37.98 35.297 C-34.041 30.503 -29.95 25.843 -25.875 21.164 C-22.012 16.727 -18.192 12.255 -14.382 7.772 C-13.101 6.271 -11.807 4.781 -10.512 3.293 C-10.121 2.746 -9.73 2.198 -9.327 1.635 C-6.469 -0.477 -3.411 -0.075 0 0 Z"/>
        <path d="M0 0 C5.016 -0.722 10.057 -1.365 15 0 C19.286 3.392 22.023 7.488 25 12 C26.131 13.47 27.276 14.929 28.438 16.375 C28.975 17.076 29.513 17.777 30.066 18.5 C31.641 20.536 33.234 22.552 34.84 24.562 C35.09 24.877 35.09 24.877 36.356 26.467 C37.353 27.72 38.353 28.969 39.357 30.216 C41.407 32.799 42.949 34.846 44 38 C52.168 30.342 58.601 20.959 65.344 12.065 C66.397 10.68 67.458 9.3 68.528 7.926 C69.466 6.699 70.371 5.446 71.232 4.164 C72.406 2.508 72.406 2.508 75 0 C77.924 -0.455 79.948 -0.589 82.812 -0.375 C83.159 -0.361 83.159 -0.361 84.912 -0.293 C86.609 -0.223 88.305 -0.115 90 0 C87.621 3.639 85.184 7.131 82.438 10.5 C79.089 14.64 75.783 18.809 72.5 23 C69.235 27.168 65.949 31.317 62.625 35.438 C59.603 39.2 56.756 43.039 54 47 C55.372 49.962 56.965 52.389 59 54.938 C61.913 58.618 64.78 62.328 67.625 66.062 C72.658 72.638 77.877 79.058 83.117 85.469 C83.364 85.772 83.364 85.772 84.612 87.305 C85.858 88.827 87.12 90.336 88.383 91.844 C90 94 90 94 90 96 C77.269 97.661 77.269 97.661 72.422 94.113 C70.517 91.754 68.801 89.352 67.175 86.793 C65.412 84.103 63.457 81.568 61.511 79.008 C59.955 76.96 58.42 74.898 56.887 72.832 C53.819 68.727 50.61 64.756 47.328 60.82 C46 59 46 59 46 57 C42.029 60.811 38.588 64.865 35.188 69.188 C34.125 70.527 33.063 71.867 32 73.207 C31.487 73.856 30.974 74.505 30.445 75.174 C27.913 78.373 25.363 81.557 22.766 84.703 C21 87 21 87 19.484 89.609 C17.813 92.327 16.59 94.118 14 96 C8.883 96.757 4.127 96.535 -1 96 C1.285 91.98 3.941 88.361 6.812 84.75 C7.049 84.451 7.049 84.451 8.245 82.937 C13.326 76.536 18.539 70.245 23.742 63.945 C29.18 57.361 29.18 57.361 31.812 54.125 C32.115 53.755 32.115 53.755 33.645 51.883 C35 50 35 50 36 47 C35.142 45.369 35.142 45.369 33.746 43.586 C33.487 43.251 33.487 43.251 32.177 41.555 C31.603 40.836 31.029 40.116 30.438 39.375 C29.852 38.625 29.266 37.875 28.663 37.103 C23.873 31.005 18.939 25.025 13.984 19.062 C0 2.196 0 2.196 0 0 Z" transform="translate(370,394)"/>
      </g>
    </svg>
  );
}

// Live interactive software mockup component shown in the Hero
function LiveTeaserDashboard() {
  const [revenue, setRevenue] = useState(182450);
  const [transactions, setTransactions] = useState([
    { id: 4805, item: 'Pro Scanner V2', price: '₹14,999', method: 'UPI Pay', status: 'Completed' },
    { id: 4804, item: 'Thermal Printer Paper x10', price: '₹1,200', method: 'Cash', status: 'Completed' },
    { id: 4803, item: 'Retail Terminal Desktop', price: '₹45,500', method: 'Card Swipe', status: 'Completed' }
  ]);

  // Keep KPIs slightly changing to represent live streaming data
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 450) + 50);
      setTransactions(prev => {
        const nextId = prev[0].id + 1;
        const items = ['Barcode Printer', 'Cash Drawer Steel', 'Label Roll x50', 'ERP Setup Fee', 'Inventory Audit'];
        const prices = ['₹8,500', '₹4,200', '₹3,500', '₹15,000', '₹7,500'];
        const methods = ['UPI Pay', 'Card Swipe', 'Cash', 'Net Banking'];
        const randomIdx = Math.floor(Math.random() * items.length);
        
        const newTx = {
          id: nextId,
          item: items[randomIdx],
          price: prices[randomIdx],
          method: methods[Math.floor(Math.random() * methods.length)],
          status: 'Completed'
        };
        return [newTx, ...prev.slice(0, 2)];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative glass-card border-emerald-500/20 bg-[#060c07]/80 rounded-3xl p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Top Controls Bar */}
      <div className="flex justify-between items-center pb-4 mb-6 border-b border-emerald-500/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#00c200] animate-pulse"></span>
          <span className="text-xs text-slate-400 font-mono ml-2 uppercase tracking-widest font-semibold">Live System Monitor</span>
        </div>
        <div className="bg-emerald-950/50 border border-[#00c200]/20 rounded-full px-3 py-1 flex items-center gap-1.5 text-[10px] text-[#00c200] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c200] animate-ping"></span>
          CLOUD SYNCHRONIZED
        </div>
      </div>

      {/* Grid of Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-950/60 rounded-2xl p-4 border border-emerald-950/40 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#00c200]/5 rounded-full blur-xl"></div>
          <div className="text-xs text-slate-400 font-medium mb-1 font-accent">Today's Revenue</div>
          <div className="text-xl font-bold text-white font-mono tracking-tight transition-all duration-300">
            ₹{revenue.toLocaleString('en-IN')}
          </div>
          <div className="text-[10px] text-[#00c200] flex items-center gap-1 mt-1 font-bold">
            <span>↑ 18.2%</span> <span className="text-slate-500 font-normal">from yesterday</span>
          </div>
        </div>
        <div className="bg-slate-950/60 rounded-2xl p-4 border border-emerald-950/40 relative overflow-hidden">
          <div className="text-xs text-slate-400 font-medium mb-1 font-accent">Offline Buffer</div>
          <div className="text-xl font-bold text-[#00c200] font-mono">0 Items</div>
          <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-1 font-accent">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Network Latency: 4ms
          </div>
        </div>
      </div>

      {/* Sales Trend Line (Visual SVG representation) */}
      <div className="mb-6 bg-slate-950/40 border border-emerald-950/40 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-white font-bold font-heading">Hourly Sales Velocity</span>
          <span className="text-[10px] text-slate-400 font-mono">Peak: 68 invoices/hr</span>
        </div>
        <div className="h-20 w-full relative">
          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00c200" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#00c200" stopOpacity="0.0"/>
              </linearGradient>
            </defs>
            <path d="M 0 25 Q 15 10 30 18 T 60 8 T 90 22 L 100 15 L 100 30 L 0 30 Z" fill="url(#chartGradient)"/>
            <path d="M 0 25 Q 15 10 30 18 T 60 8 T 90 22 L 100 15" fill="none" stroke="#00c200" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="60" cy="8" r="1.5" fill="#fff" className="animate-ping" style={{ transformOrigin: '60px 8px' }}/>
            <circle cx="60" cy="8" r="1" fill="#00c200"/>
          </svg>
        </div>
      </div>

      {/* Live Transaction Logs */}
      <div>
        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-heading">Recent Invoices</h4>
        <div className="space-y-3 font-mono text-xs">
          <AnimatePresence initial={false}>
            {transactions.map(tx => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-slate-950/70 border border-emerald-950/40 p-3 rounded-xl flex justify-between items-center overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">#INV-{tx.id}</span>
                    <span className="text-[10px] text-slate-500 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-950/60">{tx.method}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 max-w-[200px] truncate">{tx.item}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#00c200]">{tx.price}</div>
                  <div className="text-[9px] text-emerald-400/80 font-bold uppercase mt-0.5">✔ Saved</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pos'); // pos, inventory, mobile

  // Tracks vertical scroll position to transform the floating navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020703] text-slate-300 font-body selection:bg-[#00c200] selection:text-black scroll-smooth overflow-x-hidden tech-grid relative">
      
      {/* Background Decorative Auroras */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full aurora-glow-1 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] rounded-full aurora-glow-2 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[60%] rounded-full aurora-glow-1 pointer-events-none z-0"></div>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919787317484"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-[#25D366]/20 glow-primary"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.564 5.823 0 10.564 4.745 10.564 10.568 0 5.824-4.74 10.564-10.564 10.564z" /></svg>
      </motion.a>

      {/* Navigation Header */}
      <div className="fixed w-full z-50 transition-all duration-700 flex justify-center px-4 md:px-8 py-4">
        <nav 
          className={`w-full max-w-[1600px] flex justify-between items-center transition-all duration-500 ${
            isScrolled 
              ? 'bg-[#030d05]/75 border border-[#00c200]/25 backdrop-blur-xl rounded-full py-2.5 px-6 shadow-2xl' 
              : 'bg-transparent py-4 px-4'
          }`}
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 flex items-center justify-center border border-emerald-950/20 bg-slate-900/60 p-1.5 rounded-xl group-hover:border-[#00c200]/50 transition-all duration-300">
              <OrbXLogo className="w-full h-full" />
            </div>
            <span className="text-xl font-heading font-black text-white tracking-tight uppercase">
              Orb<span className="text-[#00c200] group-hover:text-emerald-400 transition-colors duration-300">X</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider font-accent">
            {['Features', 'Services', 'About', 'Projects', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors relative py-1 text-slate-400"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00c200] transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="hover:text-white transition-colors text-slate-400">Contact</a>
            
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 194, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-[#00c200] text-black px-6 py-2.5 rounded-full font-bold transition-all font-heading text-xs tracking-wider"
            >
              Get Free Demo
            </motion.a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center border border-[#00c200]/25 rounded-full text-[#00c200]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020703]/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {['Features', 'Services', 'About', 'Projects', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold font-heading text-slate-300 hover:text-white"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold font-heading text-slate-300 hover:text-white"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#00c200] text-black px-8 py-3 rounded-full font-bold font-heading"
            >
              Get Free Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-16 lg:pt-40 lg:pb-28 overflow-hidden z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-[#00c200]/30 text-[#00c200] text-xs font-bold uppercase tracking-wider font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00c200] shadow-[0_0_10px_#00c200] animate-ping"></span>
                Next-Gen ERP v2.0 Launch
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-tight tracking-tight">
                High-Performance <span className="text-[#00c200]">ERP & POS</span> for Retail Outlets
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-body">
                Fast, secure, and synchronized enterprise software designed specifically for retail. 
                Features lightning-quick checkout billing, real-time stock alert logic, and an 
                offline data synchronization engine that keeps you selling even without internet.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 194, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="bg-[#00c200] text-black px-8 py-4 rounded-xl font-bold transition-all font-heading text-sm tracking-wider"
                >
                  Start Free Demo
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 51, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919787317484"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent text-white border border-emerald-950 px-8 py-4 rounded-xl font-bold transition-all font-heading text-sm tracking-wider backdrop-blur-sm"
                >
                  WhatsApp Expert
                </motion.a>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-emerald-950/40">
                {[
                  { num: '11+', label: 'Years Experience' },
                  { num: '50+', label: 'Delivered Projects' },
                  { num: '100%', label: 'Cloud Uptime' },
                  { num: 'Offline', label: 'Synchronization' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-black font-heading text-white mb-1">
                      {stat.num.match(/[a-zA-Z]/) ? (
                        <span className="text-[#00c200]">{stat.num}</span>
                      ) : (
                        <>
                          {stat.num.replace(/[^0-9]/g, '')}
                          <span className="text-[#00c200]">{stat.num.replace(/[0-9]/g, '')}</span>
                        </>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold leading-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Right Visuals - Interactive ERP Teaser */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative perspective-container"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00c200]/10 to-transparent rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="mockup-3d">
                <LiveTeaserDashboard />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Trust Loop Banner */}
      <section className="py-8 bg-black/60 border-y border-emerald-950/60 overflow-hidden relative z-10 backdrop-blur-md">
        <div className="flex whitespace-nowrap animate-infinite-scroll gap-16 text-slate-500 font-mono text-[10px] uppercase font-bold tracking-widest">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0">
              <span>✦ Offline Synchronization Active</span>
              <span className="text-[#00c200]">✦ 11+ Years Industrial Trust</span>
              <span>✦ Auto Cloud Failover</span>
              <span className="text-[#00c200]">✦ Seamless Odoo Integrations</span>
              <span>✦ Zero Database Latency</span>
              <span className="text-[#00c200]">✦ Instant Print Routing</span>
              <span>✦ Custom MIS Reporting Engine</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase Tabbed visual section */}
      <section id="features" className="py-24 relative z-10 border-b border-emerald-950/40 bg-[#010602]/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs text-[#00c200] font-bold uppercase font-mono tracking-widest mb-3">Enterprise Core Features</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">Software Engineered to Perform</h2>
            <p className="text-slate-400 mt-4 font-accent">Toggle below to preview how our systems optimize different operations.</p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {[
              { id: 'pos', name: '🛒 POS Billing' },
              { id: 'inventory', name: '📊 Inventory Alerts' },
              { id: 'mobile', name: '📱 Mobile Control' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full font-heading font-semibold text-xs tracking-wider transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#00c200] text-black shadow-lg shadow-[#00c200]/25' 
                    : 'bg-[#060e08] border border-emerald-950/50 text-slate-400 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tabs Display Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-[#050b06]/65 border border-emerald-950/40 p-8 rounded-3xl backdrop-blur-xl">
            <div className="lg:col-span-5 space-y-6">
              {activeTab === 'pos' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Lightning POS Billing</h3>
                  <p className="text-slate-400 font-body">
                    A cashier interface built for speed. Scans barcodes instantly, computes bundle discounts automatically, and pushes invoices under 2.5 seconds. Fully integrates with payment gateways and printers.
                  </p>
                  <ul className="space-y-3 font-accent text-sm">
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> UPI QR, Card & Multi-Pay Integration</li>
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Suspended Cart / Hold Invoice Feature</li>
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Automated Weighing Scale Comm</li>
                  </ul>
                </motion.div>
              )}
              {activeTab === 'inventory' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Automated Inventory Rules</h3>
                  <p className="text-slate-400 font-body">
                    Never run out of stock or overstock capital. The system monitors sales velocity, sends automated low-stock warnings, and generates PO drafts for approval.
                  </p>
                  <ul className="space-y-3 font-accent text-sm">
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Min/Max Re-order Stock Warnings</li>
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Automated PO Generation</li>
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Multi-Warehouse Transfer Tracking</li>
                  </ul>
                </motion.div>
              )}
              {activeTab === 'mobile' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Unified Mobile Control</h3>
                  <p className="text-slate-400 font-body">
                    Run your retail empire from your pocket. Track live sales performance per branch, audit stock counts via the barcode scanner app, and receive alerts.
                  </p>
                  <ul className="space-y-3 font-accent text-sm">
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Live Sales Dashboards (iOS & Android)</li>
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Mobile Barcode Audit Scanner</li>
                    <li className="flex items-center gap-2 text-slate-300"><span className="text-[#00c200] font-bold">✔</span> Real-Time Staff Shift Notifications</li>
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Right Screen Visual representation */}
            <div className="lg:col-span-7 bg-[#020502] border border-emerald-950 p-4 rounded-2xl relative overflow-hidden shadow-2xl h-80 flex flex-col">
              {activeTab === 'pos' && (
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex-1 flex flex-col font-mono text-[10px]">
                  {/* Mock Billing Header */}
                  <div className="flex justify-between border-b border-emerald-950 pb-2 mb-3 text-slate-400 font-bold uppercase tracking-widest text-[9px]">
                    <span>Item Billing Terminal</span>
                    <span>Operator: Staff_01</span>
                  </div>
                  {/* Items List */}
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between text-white border-b border-emerald-950/30 pb-2">
                      <span>Premium Bluetooth Speaker V5</span>
                      <span>1 Qty</span>
                      <span className="font-bold text-[#00c200]">₹2,499</span>
                    </div>
                    <div className="flex justify-between text-white border-b border-emerald-950/30 pb-2">
                      <span>USB C Fast Charge Cable 2M</span>
                      <span>2 Qty</span>
                      <span className="font-bold text-[#00c200]">₹798</span>
                    </div>
                    <div className="flex justify-between text-white border-b border-emerald-950/30 pb-2">
                      <span>Dual Slot QC Wall Charger</span>
                      <span>1 Qty</span>
                      <span className="font-bold text-[#00c200]">₹1,199</span>
                    </div>
                  </div>
                  {/* Totals */}
                  <div className="border-t border-emerald-950 pt-3 mt-auto space-y-1">
                    <div className="flex justify-between text-slate-400"><span>Sub-Total:</span> <span>₹4,496</span></div>
                    <div className="flex justify-between text-slate-400"><span>Tax (GST 18%):</span> <span>₹809</span></div>
                    <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-emerald-950/50">
                      <span>GRAND TOTAL:</span>
                      <span className="text-[#00c200]">₹5,305</span>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === 'inventory' && (
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex-1 flex flex-col font-mono text-[10px]">
                  <div className="flex justify-between border-b border-emerald-950 pb-2 mb-3 text-slate-400 font-bold uppercase tracking-widest text-[9px]">
                    <span>Stock Warning Console</span>
                    <span>System Status: 2 Alerts</span>
                  </div>
                  {/* Inventory Warning Alerts */}
                  <div className="space-y-3">
                    <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white uppercase text-[9px]">CRITICAL LOW STOCK WARNING</div>
                        <div className="text-slate-400 mt-1">Item: Wireless Router Pro</div>
                        <div className="text-slate-500 mt-0.5">Avail: 2 units | Safety Threshold: 10 units</div>
                      </div>
                      <div className="bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg font-bold text-[9px] cursor-pointer hover:bg-red-500/30 transition-all uppercase">Reorder</div>
                    </div>
                    <div className="bg-yellow-950/20 border border-yellow-500/30 rounded-xl p-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white uppercase text-[9px]">WARNING: VELOCITY ALERT</div>
                        <div className="text-slate-400 mt-1">Item: RGB Mechanical Keyboard</div>
                        <div className="text-slate-500 mt-0.5">Avail: 8 units | Weekly Velocity: 14 units</div>
                      </div>
                      <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1.5 rounded-lg font-bold text-[9px] cursor-pointer hover:bg-yellow-500/30 transition-all uppercase">PO Draft</div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === 'mobile' && (
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex-1 flex flex-col justify-center items-center">
                  {/* Phone container */}
                  <div className="w-52 bg-slate-900 border border-emerald-950/60 rounded-3xl p-3 shadow-2xl relative flex flex-col h-72">
                    <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2"></div>
                    <div className="flex-1 font-mono text-[8px] flex flex-col">
                      <div className="flex justify-between text-slate-500 pb-1 border-b border-emerald-950 mb-2 font-bold uppercase">
                        <span>Branch Manager</span>
                        <span>Active</span>
                      </div>
                      <div className="bg-slate-950/80 p-2 border border-emerald-950 rounded-lg mb-2 text-center">
                        <div className="text-slate-500 font-accent uppercase text-[6px]">Live Sales Today</div>
                        <div className="text-white text-xs font-black font-mono mt-0.5">₹1,82,450</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-white py-1 border-b border-emerald-950/30">
                          <span>Branch A (City)</span>
                          <span className="text-[#00c200] font-bold">₹1,02,400</span>
                        </div>
                        <div className="flex justify-between text-white py-1 border-b border-emerald-950/30">
                          <span>Branch B (Mall)</span>
                          <span className="text-[#00c200] font-bold">₹58,150</span>
                        </div>
                        <div className="flex justify-between text-white py-1 border-b border-emerald-950/30">
                          <span>Branch C (Sub)</span>
                          <span className="text-[#00c200] font-bold">₹21,900</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Grid of ERP Features */}
      <section className="py-24 relative z-10 border-b border-emerald-950/40 bg-black/40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Offline-First Sync', desc: 'Keep billing during network outages. Local buffers sync automatically to the cloud once network stabilizes.' },
              { title: 'Secure Multi-Branch', desc: 'Securely manage several warehouses and retail locations from a single admin console.' },
              { title: 'Bundle Discounter', desc: 'Setup automated mix-and-match bundle codes, loyalty programs, and promotional coupon algorithms.' },
              { title: 'Live Telemetry MIS', desc: 'Track comprehensive financial metrics, inventory turns, and sales trends with auto-generated exports.' }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="glass-card bg-[#060c07]/50 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00c200]/10 text-[#00c200] border border-[#00c200]/25 flex items-center justify-center mb-6 font-bold text-lg font-heading">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading tracking-wide">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-body">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-b border-emerald-950/40 relative z-10 bg-[#010602]/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <div className="text-xs text-[#00c200] font-bold uppercase font-mono tracking-widest mb-3">Professional Services</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Enterprise Deployment & Customization
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: 'Retail ERP Customization', desc: 'End-to-end configuration and tailoring of ERP platforms (Odoo integration expertise) to match your organizational workflow requirements.' },
              { title: 'POS Infrastructure Setup', desc: 'Designing and deploying fast billing terminals, printing routers, barcode scanner endpoints, and device communication protocols.' }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.01 }}
                className="glass-card bg-[#050a06]/40 p-8 rounded-3xl border border-emerald-950/30 relative overflow-hidden group shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4 relative z-10 font-heading">{srv.title}</h3>
                <p className="text-xs text-slate-400 relative z-10 leading-relaxed font-body">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Grid of Other Competencies */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Odoo Deployments', icon: '⚙️' },
              { title: 'Mobile Apps Development', icon: '📱' },
              { title: 'Web Platforms', icon: '🌐' },
              { title: 'Cloud Administration', icon: '☁' }
            ].map((svc, i) => (
              <div key={i} className="glass-card bg-[#050a06]/20 p-5 rounded-2xl border border-emerald-950/20 hover:bg-[#00c200]/5 hover:border-[#00c200]/40 transition-all duration-300 text-center">
                <span className="text-3xl block mb-3">{svc.icon}</span>
                <span className="text-xs text-white font-heading font-semibold uppercase tracking-wider">{svc.title}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="py-24 border-b border-emerald-950/40 relative z-10 bg-black/40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <div className="text-xs text-[#00c200] font-bold uppercase font-mono tracking-widest mb-3">Selected Projects</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">Proven Solutions Built to Scale</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Retail ERP & Odoo Setup', desc: 'Custom deployment and optimization of ERP workflows for a manufacturing client, driving inventory accuracy and accounting speed.', tags: ['ERP', 'Odoo', 'Database'] },
              { title: 'Custom POS Billing Interface', desc: 'Designed and built a fast Point of Sale billing terminal supporting offline buffers and UPI QR integrations.', tags: ['POS UI', 'React', 'Offline Sync'] },
              { title: 'Inventory Analytics Console', desc: 'An enterprise web application providing automated re-order indicators, stock analytics, and PO workflows.', tags: ['Analytics', 'Vite', 'Node.js'] },
              { title: 'IT Infrastructure Design', desc: 'Configured cloud virtualization systems, secure networks, and IoT barcode audit devices for high-volume stores.', tags: ['Network', 'Cloud', 'IoT Security'] },
            ].map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="glass-card bg-[#060c07]/50 rounded-2xl p-6 border border-emerald-950/30 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video bg-[#020502]/65 rounded-xl border border-emerald-950/40 mb-6 flex items-center justify-center text-slate-700">
                    <svg className="w-8 h-8 text-[#00c200]/20" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-heading tracking-wide">{proj.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-body mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 bg-slate-950/80 text-[#00c200] text-[9px] font-mono font-bold rounded-md border border-emerald-950/50 uppercase">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Experience / Timeline Section */}
      <section id="experience" className="py-24 relative z-10 border-b border-emerald-950/40 bg-[#010602]/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <div className="text-xs text-[#00c200] font-bold uppercase font-mono tracking-widest mb-3">Journey</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">11+ Years of Technical Management</h2>
          </div>

          <div className="space-y-0 pl-6 border-l border-emerald-950 max-w-4xl">
            {[
              { year: '2024 — PRESENT', title: 'Lead Systems & Web Developer', org: 'Automotive Tech Sector', desc: 'Optimizing Odoo ERP systems, support configurations, managing Microsoft 365 environments, and ensuring operational high-availability.' },
              { year: '2018 — 2023', title: 'Senior Web App & ERP Developer', org: 'Retail & Lifestyle Manufacturing', desc: 'Maintained and customized ERP setups, developed custom business telemetry tools, and streamlined database upgrades.' },
              { year: '2013 — 2018', title: 'ERP & Solutions Developer', org: 'Investment & Logistics Group', desc: 'Administered ERP systems training, built compliance reports, and supervised onboarding procedures.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 pb-16 last:pb-0"
              >
                <div className="absolute w-4 h-4 bg-[#00c200] rounded-full -left-[32.5px] top-1.5 border-4 border-[#020703] shadow-[0_0_15px_#00c200]"></div>
                <div className="inline-block px-3 py-1 bg-[#060f07] rounded-md text-[#00c200] font-mono text-[9px] font-bold border border-emerald-950 mb-3">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-1 font-heading">{item.title}</h3>
                <div className="text-xs text-slate-400 font-bold font-accent mb-3">{item.org}</div>
                <p className="text-xs text-slate-500 max-w-2xl leading-relaxed font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-black/40 border-b border-emerald-950/40 relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-16">Perfect Solution For</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {['Supermarkets', 'Retail Boutiques', 'Multi-Store Chains', 'Distributors'].map((item, i) => (
              <div key={i} className="glass-card bg-[#060c07]/40 p-8 rounded-2xl hover:border-[#00c200]/40 hover:bg-[#00c200]/5 transition-all duration-300">
                <h3 className="text-base font-bold text-white font-heading">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-xs text-[#00c200] font-bold uppercase font-mono tracking-widest mb-3">Get In Touch</div>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight font-heading">Let's Optimize Your Retail Engine</h2>
              <p className="text-slate-400 font-body text-sm max-w-lg leading-relaxed">
                Ready to deployment? Request a personalized live demo showing offline synchronization, printer routing, and Odoo integrations customized for your catalog.
              </p>
              
              <div className="space-y-8 pt-4">
                <div className="glass-card bg-[#050a06]/40 p-6 rounded-2xl border border-emerald-950/30 max-w-sm flex items-center gap-4">
                  <div className="text-2xl">✉</div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">Direct Email</h4>
                    <a href="mailto:rkyuvaa@hotmail.com" className="text-xs text-[#00c200] font-bold font-mono">rkyuvaa@hotmail.com</a>
                  </div>
                </div>
                
                <div className="glass-card bg-[#050a06]/40 p-6 rounded-2xl border border-emerald-950/30 max-w-sm flex items-center gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">Call Support</h4>
                    <a href="tel:+919787317484" className="text-xs text-[#00c200] font-bold font-mono">+91 9787317484</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Request Demo Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card bg-[#050b06]/65 border border-emerald-500/20 rounded-[2rem] p-8 lg:p-12 shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading tracking-wide">Request Live Demo</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#020502]/80 border border-emerald-950 rounded-xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#00c200] focus:ring-1 focus:ring-[#00c200] transition-all placeholder:text-slate-700 font-mono" 
                    placeholder="Enter full name" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#020502]/80 border border-emerald-950 rounded-xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#00c200] focus:ring-1 focus:ring-[#00c200] transition-all placeholder:text-slate-700 font-mono" 
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">Brief requirements</label>
                  <textarea 
                    rows="3" 
                    className="w-full bg-[#020502]/80 border border-emerald-950 rounded-xl px-5 py-4 text-xs text-white focus:outline-none focus:border-[#00c200] focus:ring-1 focus:ring-[#00c200] transition-all placeholder:text-slate-700 resize-none font-mono" 
                    placeholder="E.g., 2 retail outlets, require inventory alerts..."
                  ></textarea>
                </div>
                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 194, 0, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-[#00c200] text-black font-bold py-4 rounded-xl transition-all font-heading text-sm tracking-wider uppercase"
                  >
                    Start ERP Onboarding
                  </motion.button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 pt-20 pb-10 border-t border-emerald-950/60 relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-xs font-heading">System Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Odoo ERP integration', 'React Web Applications', 'PostgreSQL Admin', 'Linux Cloud Infrastructure', 
                'Local Printing Spoolers', 'Offline Buffer Engines', 'Microsoft 365 Operations', 'IoT Barcode Readers'
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-slate-900/60 text-slate-400 rounded-lg text-xs border border-emerald-950/40 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-emerald-950/30 text-slate-600 text-xs font-mono">
            <div className="flex items-center gap-2">
              <OrbXLogo className="w-5 h-5 fill-slate-600" />
              <span>© 2026 OrbX. All rights reserved.</span>
            </div>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-[#00c200] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00c200] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
