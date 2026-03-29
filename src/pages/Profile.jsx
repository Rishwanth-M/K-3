import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, initialized } = useAuth(); // ✅ important
  const [data, setData] = useState(null);

  useEffect(() => {
    // ⛔ wait until auth ready
    if (!initialized || !user) return;

    const fetchData = async () => {
      const { data } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", user.id)
        .single();

      setData(data);
    };

    fetchData();
  }, [user, initialized]); // ✅ dependency added

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl mb-4">Profile</h2>

      <p><b>Name:</b> {data.child_name}</p>
      <p><b>Parent:</b> {data.parent_name}</p>
      <p><b>Email:</b> {data.email}</p>
      <p><b>Token:</b> {data.token}</p>
    </div>
  );
}