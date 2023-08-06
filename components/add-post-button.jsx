"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function AddPostButton() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/add-post");
  }, [router]);

	return <button className="add-post-button" onClick={handleClick}>Add Post</button>;
}
