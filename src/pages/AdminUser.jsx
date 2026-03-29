import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { data } = await supabase
      .from("enrollments")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    setUser(data);
  };

  const handleUpload = async () => {
    if (!file) return;

    const fileName = `${user.token}_${file.name}`;

    // upload to storage
    const { error: uploadError } = await supabase.storage
      .from("reports")
      .upload(fileName, file);

    if (uploadError) {
      alert("Upload failed");
      return;
    }

    // get public URL
    const { data } = supabase.storage
      .from("reports")
      .getPublicUrl(fileName);

    const fileUrl = data.publicUrl;

    // update DB
    await supabase
      .from("enrollments")
      .update({
        report_url: fileUrl,
        status: "completed",
      })
      .eq("id", id);

    alert("Report uploaded successfully");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">
        {user.child_name}
      </h2>

      <p><b>Parent:</b> {user.parent_name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Token:</b> {user.token}</p>

      <div className="mt-6">

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          className="bg-green-500 px-4 py-2 rounded ml-3"
        >
          Upload Report
        </button>

      </div>

    </div>
  );
}