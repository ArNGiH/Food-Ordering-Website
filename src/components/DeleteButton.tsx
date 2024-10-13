"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State to manage loading status

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return null; // Return null if not authorized to delete
  }

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return; // Abort deletion if not confirmed

    try {
      setLoading(true); // Start loading state
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        router.push("/menu");
        toast.success("The product has been deleted!");
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed to delete the product.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <button
      className={`bg-red-400 hover:bg-red-500 text-white p-2 rounded-full ml-6 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleDelete}
      disabled={loading} // Disable button while loading
    >
      {loading ? (
        <span className="loader" /> // Optional loading spinner
      ) : (
        <Image src="/delete.png" alt="Delete" width={20} height={20} />
      )}
    </button>
  );
};

export default DeleteButton;
