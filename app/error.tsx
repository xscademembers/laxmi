"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: logErrorToService(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold text-primary-red mb-4"
          >
            500
          </motion.h1>
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Something went wrong!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-red/90 transition-all duration-300 hover:shadow-lg"
            >
              <RefreshCw size={20} />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-red border-2 border-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300"
            >
              <Home size={20} />
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
