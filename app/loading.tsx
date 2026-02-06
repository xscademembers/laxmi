export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-primary-red border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
