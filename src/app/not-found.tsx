import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="bg-white w-max text-center p-6 shadow-xl rounded-lg">
        <h2 className="font-bold text-xl text-gray-700">Not Found! ⛔</h2>
        <p className="my-2">Could not find requested resource</p>
        <Link href="/" className="text-blue-500">
          Return Home
        </Link>
      </div>
    </div>
  );
}
