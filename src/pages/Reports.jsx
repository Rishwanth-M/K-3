import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function Reports() {
  const { user } = useAuth();
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      const { data } = await supabase
        .from("enrollments")
        .select("report_url, status")
        .eq("user_id", user.id)
        .maybeSingle();

      setReport(data);
    };

    fetchReport();
  }, []);

  if (!report) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl mb-4">Reports</h2>

      {report.report_url ? (
        <a
          href={report.report_url}
          target="_blank"
          className="bg-green-500 px-4 py-2 rounded-xl"
        >
          View Report
        </a>
      ) : (
        <p className="text-gray-400">
          Your report is being processed 🚧
        </p>
      )}
    </div>
  );
}