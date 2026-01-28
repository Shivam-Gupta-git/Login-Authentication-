import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Verify() {
  const { token } = useParams();
  const { backend_URL, navigate } = useContext(UserContext);

  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const [message, setMessage] = useState("Verifying your email...");

  const authHeader = useMemo(() => {
    if (!token) return null;
    return `Bearer ${token}`;
  }, [token]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!authHeader) {
        setStatus("error");
        setMessage("Invalid verification link.");
        return;
      }

      try {
        const res = await axios.post(`${backend_URL}/api/user/verify`, null, {
          headers: { Authorization: authHeader },
        });

        if (cancelled) return;

        if (res.data?.success) {
          setStatus("success");
          setMessage("Email verified successfully. Redirecting to login...");
          setTimeout(() => {
            if (!cancelled) navigate("/login");
          }, 1200);
        } else {
          setStatus("error");
          setMessage(res.data?.message || "Verification failed.");
        }
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setMessage(err.response?.data?.message || "Verification failed.");
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [authHeader, backend_URL, navigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {status === "success"
            ? "Verified"
            : status === "error"
              ? "Verification failed"
              : "Verifying"}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
}

export default Verify;
