"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function Forget() {
  const router = useRouter();
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showOtpBox, setShowOtpBox] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [newError, setNewError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  // Password validation
  const validateNewPassword = (password) => {
    return (
      password.length >= 6 &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

  // Mock OTP verification
  const verifyOtp = () => {
    if (otp.length === 6) {
      setOtpVerified(true);
      setOtpError("");
      alert("✅ OTP verified successfully!");
    } else {
      setOtpError("Please enter a valid 6-digit OTP");
    }
  };

  // Mock password reset
  const resetPassword = () => {
    setNewError("");
    setConfirmError("");

    let isValid = true;

    if (!validateNewPassword(newPassword)) {
      setNewError(
        "Password must be at least 6 characters, include a number and a special character."
      );
      isValid = false;
    }

    if (newPassword !== confirmPassword) {
      setConfirmError("Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      alert("✅ Password updated successfully!");
      router.push("/Homepage"); // Change this to your desired route
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
            <p className="text-sm text-gray-500">
              Update your account password for security
            </p>
          </div>
          <button
            onClick={() => router.push("/Homepage")}
            className="bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:scale-105 transition-transform shadow-md"
          >
            ×
          </button>
        </div>

        {/* OTP Box */}
        <div className="mb-5">
          <button
            className="text-sm text-white rounded-xl font-medium px-6 py-3 bg-blue-500 hover:scale-105 transition"
            onClick={() => {
              setShowOtpBox(true);
              alert("✅ Demo OTP: 123456");
            }}
          >
            Request OTP
          </button>

          {showOtpBox && (
            <div className="mt-3 p-4 rounded-lg border shadow-sm space-y-3 bg-gradient-to-r from-blue-300 to-purple-200">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                className="w-32 h-10 border rounded-md px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {otpError && <p className="text-red-500 text-xs">{otpError}</p>}
              <div className="flex justify-between">
                <button
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
                  onClick={() => alert("✅ Demo OTP: 123456")}
                >
                  Resend OTP
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition"
                  onClick={verifyOtp}
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Password Fields */}
        <div className="mb-5">
          <label className="text-sm font-semibold text-gray-700 block mb-1">
            New Password
          </label>
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md border focus-within:ring-2 focus-within:ring-blue-300">
            <Lock size={16} className="text-gray-500 mr-2" />
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              disabled={!otpVerified}
              className="flex-1 bg-transparent outline-none text-sm text-gray-700"
            />
            <button type="button" onClick={() => setShowNew(!showNew)}>
              {showNew ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
          {newError && <p className="text-red-500 text-xs mt-1">{newError}</p>}
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700 block mb-1">
            Confirm Password
          </label>
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md border focus-within:ring-2 focus-within:ring-blue-300">
            <Lock size={16} className="text-gray-500 mr-2" />
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              disabled={!otpVerified}
              className="flex-1 bg-transparent outline-none text-sm text-gray-700"
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
          {confirmError && (
            <p className="text-red-500 text-xs mt-1">{confirmError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={resetPassword}
          disabled={!otpVerified}
          className={`w-full py-2 rounded-md shadow-md transition-all duration-300 ${
            otpVerified
              ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:scale-[1.02]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Update Password
        </button>
      </div>
    </div>
  );
}