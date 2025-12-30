"use client";

import { useState, useEffect } from "react";

export default function PrivacyBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kubernion_privacy_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("kubernion_privacy_consent", "accepted");
    localStorage.setItem("kubernion_visit_log", "true"); 
    
    // DISPATCH EVENT: Tell the rest of the app that the system is ready
    window.dispatchEvent(new Event("kubernion-system-ready"));
    
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("kubernion_privacy_consent", "declined");
    localStorage.removeItem("kubernion_visit_log");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/90 backdrop-blur-md border-t border-white/10 text-slate-300 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="space-y-2 text-sm">
          <h3 className="text-white font-medium">Privacy & Local Storage</h3>
          <p className="max-w-2xl leading-relaxed">
            We use your browser's local storage to enhance your experience (e.g., visit status) 
            and GitHub's API to manage your data. <span className="font-bold">No data is sent to our servers; you own 100% of your data.</span>
          </p>
        </div>

        <div className="flex gap-4 shrink-0">
          <button 
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium uppercase tracking-wider rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}