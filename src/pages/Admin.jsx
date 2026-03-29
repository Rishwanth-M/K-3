import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("enrollments")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setUsers(data);
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">
        Admin Panel
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/10">

          <thead>
            <tr className="bg-white/10">
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Token</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-white/10">
                <td className="p-3">{u.child_name}</td>
                <td>{u.email}</td>
                <td>{u.token}</td>
                <td>{u.status}</td>

                <td>
                  <button
                    onClick={() => navigate(`/admin/user/${u.id}`)}
                    className="text-green-400"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}