import { useNavigate } from "react-router-dom";
import { useEnrollStore } from "../store/useEnrollStore";
import { supabase } from "../lib/supabase";
import { generateToken } from "../utils/generateToken";
import { useAuth } from "../context/AuthContext";
import { generatePDF } from "../utils/generatePDF";
import { useEffect, useState } from "react"; // ✅ add useState
import logo from "../assets/logo2.png";

const pageStyle = {
  width: "794px",
  height: "1123px",
  background: "#fff",
  padding: "28px",
  marginBottom: "16px",
  border: "1px solid #ccc",
  position: "relative", // 🔥 IMPORTANT
};

const titleStyle = {
  textAlign: "center",
  fontSize: "13px",         // 👈 slightly smaller
  fontWeight: "600",        // 👈 cleaner than bold
  borderBottom: "1px solid #000",
  paddingBottom: "4px",
  marginBottom: "6px",      // 👈 added spacing control
};

const titleStyle2 = {
  textAlign: "center",
  fontSize: "13px",
  fontWeight: "600",
  paddingBottom: "4px",
  marginBottom: "6px",
};

const listStyle = {
  fontSize: "11.5px",       // 👈 slightly reduced
  marginLeft: "18px",
  lineHeight: "1.45",       // 👈 tighter lines
  marginBottom: "6px",      // 👈 reduces gaps
};

const paraStyle = {
  fontSize: "11.5px",
  marginTop: "6px",         // 👈 reduced from 10
  marginBottom: "6px",
  lineHeight: "1.45",
};

function line(label, value) {
  return (
    <p style={{
      marginBottom: "8px",
      fontSize: "12px",
      display: "flex",
      alignItems: "center"
    }}>
      <span style={{ minWidth: "160px" }}>
        {label}:
      </span>

      <span style={{
        flex: 1,
        borderBottom: "1px solid black",
        marginLeft: "10px",
        paddingBottom: "2px"
      }}>
        {value || ""}
      </span>
    </p>
  );
}

function SectionTitle({ text }) {
  return (
    <h4 style={{
  marginTop: "25px",
  fontSize: "13px",
  fontWeight: "bold",
  borderTop: "1px solid #000",
  paddingTop: "10px"
}}>
      {text}
    </h4>
  );
}

export default function Preview() {
  const navigate = useNavigate();
  const { formData } = useEnrollStore();
  const { user, initialized } = useAuth();
  const [generatedToken, setGeneratedToken] = useState(null);

  useEffect(() => {
    if (!initialized) return;

    if (!user) {
      navigate("/login");
    }
  }, [user, initialized]);

  const handleSubmit = async () => {
  if (!user) {
    alert("Please login again");
    return;
  }

  const token = generateToken();
setGeneratedToken(token); // 👈 ADD THIS

  const pdfBlob = await generatePDF("preview-content", true);

  console.log("PDF:", pdfBlob);

  if (!pdfBlob) {
    alert("PDF generation failed");
    return;
  }

  const fileName = `${user.id}/${token}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from("enrollments")
    .upload(fileName, pdfBlob, {
      contentType: "application/pdf",
    });

  if (uploadError) {
    console.error("UPLOAD ERROR:", uploadError);
    alert("PDF upload failed");
    return;
  }

  const fileUrl = supabase.storage
    .from("enrollments")
    .getPublicUrl(fileName).data.publicUrl;

  const { error } = await supabase.from("enrollments").insert([
    {
      user_id: user.id,
      child_name: formData.childName,
      parent_name: formData.parentName,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      township: formData.township,
      photo: formData.photo,
      data: formData,
      token,
      pdf_url: fileUrl,
      status: "pending",
    },
  ]);

  if (error) {
    console.error(error);
    alert("Error submitting form");
    return;
  }

  navigate("/success", { state: { token } });
};

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-200 p-6">
      <div className="w-full max-w-4xl">

        {/* PREVIEW */}
        <div id="preview-content" style={{ fontFamily: "Arial", color: "#000" }}>

  {/* ================= PAGE 1 ================= */}
  <div style={pageStyle}>

    {/* HEADER */}
    <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
}}>

  {/* LEFT → LOGO */}
  <div>
    <img
      src={logo}   // ✅ your path
      alt="logo"
      style={{ height: "100px" }}
    />
  </div>
  

  {/* RIGHT → COMPANY DETAILS */}
  <div style={{ textAlign: "right", fontSize: "12px", lineHeight: "1.5" }}>
    <b>AvyayPratyay Sports LLP</b><br/>
    Plot no. 10, Viman Nagar<br/>
    Hyderabad – 500016<br/>
    📧 support@kreedentials.com<br/>
    📞 +91 73309 85888
    GSTIN – 36ACHFA3555F1ZI
  </div>

</div>

    {/* TITLE */}
    <h3 style={titleStyle}>
      ADMISSION, PARENT CONSENT, MEDIA PERMISSION & WAIVER FORM
    </h3>
    <h4 style={titleStyle2}>
      K3 - Kreedentials™ Township Program (KTP)
    </h4>

    {/* PHOTO + DETAILS */}
    <div style={{ display: "flex", marginTop: "20px", alignItems: "flex-start" }}>
  
  {/* PHOTO LEFT */}
  <div style={{
    width: "120px",
    height: "140px",
    border: "1px solid #000",
    marginRight: "20px"
  }}>
    {formData.photo && (
      <img
        src={formData.photo}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    )}
  </div>

  {/* DETAILS RIGHT */}
  <div style={{ flex: 1, fontSize: "13px" }}>
    {line("Child Name", formData.childName)}
    {line("Gender", formData.gender)}
    {line("DOB", formData.dob)}
    {line("Age", formData.age)}
    {line("Mobile", formData.mobile)}
  </div>

</div>

    {/* MORE DETAILS */}
    <div style={{ marginTop: "20px", fontSize: "13px" }}>
      {line("Parent/Guardian Name", formData.parentName)}
      {line("Email", formData.email)}
      {line("Address/Township", formData.address)}
      {line("School", formData.school)}
      {line("Medical Conditions", formData.medical)}
      {line("Emergency Contact", `${formData.emergencyName} - ${formData.emergencyPhone}`)}
    </div>

    {/* SECTION 2 */}
<SectionTitle text="2. CONSENT FOR PARTICIPATION IN SPORTS TRAINING" />

<p style={paraStyle}>
I hereby grant permission for my child to participate in the Kreedentials™ Township Program (KTP) and all structured sports activities conducted by Kreedentials™.
</p>

<ul style={listStyle}>
  <li>The program involves physical activity, drills, and sport-specific movements.</li>
  <li>Minor injuries such as sprains, falls, and fatigue may occur.</li>
  <li>Kreedentials™ coaches are trained to maintain a safe and child-first environment.</li>
  <li>I will inform Kreedentials™ of any medical conditions or limitations relevant to my child.</li>
  <li>I understand that minimal, sport-appropriate physical contact may be required for instruction, and I consent to such contact being applied professionally.</li>
  <li>I agree not to interfere with or interrupt training sessions unless requested by the coach.</li>
</ul>

<p style={paraStyle}>
I accept full responsibility for my child’s participation.
</p>



{/* SECTION 3 */}
<SectionTitle text="3. MEDICAL & EMERGENCY CONSENT" />

<p style={paraStyle}>
I authorize Kreedentials™ coaches to provide first aid and seek medical assistance if required. I accept responsibility for related expenses.
</p>

<p style={paraStyle}>
Please mention below if any special care or assistance is required for the child (ex: Asthma, Allergies, Heart condition, Bone/Joint injuries etc.,)
</p>

{/* 👇 PUT THIS HERE (instead of empty ul) */}
<div style={{ marginTop: "8px", fontSize: "11.5px" }}>
  {formData.specialMedical ? (
    formData.specialMedical.split("\n").map((line, i) => (
      <p key={i} style={{ ...paraStyle, borderBottom: "1px solid #000" }}>
        {line}
      </p>
    ))
  ) : (
    <>
      <p>________________________________________</p>
      <p>________________________________________</p>
      <p>________________________________________</p>
    </>
  )}
</div>



  </div>


  {/* ================= PAGE 2 ================= */}
  <div style={pageStyle}>

    {/* TITLE */}
    <h3 style={titleStyle}>
      ADMISSION, PARENT CONSENT, MEDIA PERMISSION & WAIVER FORM
    </h3>
    <h4 style={titleStyle2}>
      K3 - Kreedentials™ Township Program (KTP)
    </h4>

    {/* 4 */}
    {/* 4 */}
<SectionTitle text="4. PHOTO, VIDEO & MEDIA CONSENT" />

<p style={paraStyle}>
I grant Kreedentials™ full permission to capture and use photos, videos, assessments, achievements, and training footage of my child for:
</p>

<ul style={listStyle}>
  <li>Program Use</li>
  <li>Skill tracking & performance assessment</li>
  <li>Certification & progress documentation</li>
  <li>Coach training and quality improvement</li>
</ul>

<p style={paraStyle}><strong>Marketing & Promotions (digital, print & social media)</strong></p>

<ul style={listStyle}>
  <li>Website, social media posts, reels</li>
  <li>Brochures, flyers, posters</li>
  <li>Program highlights, achievements & promotional campaigns</li>
</ul>

<p style={paraStyle}>
I understand that:
</p>

<ul style={listStyle}>
  <li>Kreedentials™ will never misuse, sell, or share data with unauthorized third parties.</li>
  <li>Media will be used respectfully and responsibly.</li>
  <li>No personal contact details of my child will ever be published.</li>
</ul>




{/* 5 */}
<SectionTitle text="5. DATA PROTECTION CONSENT" />

<ul style={listStyle}>
  <li>Kreedentials™ collects attendance, performance, and training data for program improvement.</li>
  <li>All data is securely stored and used only internally.</li>
  <li>I may request data review or deletion at any time.</li>
</ul>


{/* 6 */}
<SectionTitle text="6. CODE OF CONDUCT ACKNOWLEDGEMENT" />

<ul style={listStyle}>
  <li>Kreedentials™ follows strict child-safety and protection standards.</li>
  <li>Coaches use a positive, supportive teaching approach.</li>
  <li>Parents must avoid interfering during sessions unless requested by a coach.</li>
</ul>


{/* 7 */}
<SectionTitle text="7. LIABILITY WAIVER" />

<ul style={listStyle}>
  <li>Kreedentials™ takes necessary precautions for safety.</li>
  <li>Sports activities carry inherent risks (implicit & explicit).</li>
  <li>I will not hold Kreedentials™, its coaches, or staff liable for minor, non-negligent injuries.</li>
</ul>

<p style={paraStyle}>
This waiver does not limit my rights in cases of proven negligence.
</p>


{/* 8 */}
<SectionTitle text="8. PARENT/GUARDIAN DECLARATION" />

<p style={paraStyle}>
I hereby declare that:
</p>

<ul style={listStyle}>
  <li>I have read and understood all sections of this form.</li>
  <li>I voluntarily provide consent for my child’s participation in Kreedentials™ programs.</li>
  <li>I grant Kreedentials™ permission to use program-related media of my child for the purposes stated.</li>
</ul>

    <p style={paraStyle}>
      I confirm that I have read and understood all sections.
    </p>

    <div style={{ marginTop: "20px", fontSize: "13px" }}>
      {line("Parent Name", formData.parentName)}
      {line("Signature", formData.parentName)}
      {line("Date", formData.declarationDate)}
    </div><div style={{
  position: "absolute",
  bottom: "30px",
  left: "40px",
  right: "40px",
  borderTop: "1px solid #000",
  paddingTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "12px"
}}>

  {/* Athlete ID */}
  <div>
    <span style={{ fontWeight: "600" }}>Athlete ID:</span>
    <span style={{
      marginLeft: "8px",
      borderBottom: "1px solid #000",
      minWidth: "120px",
      display: "inline-block"
    }}>
      {generatedToken || ""}
    </span>
  </div>

  {/* Batch */}
  <div>
    <span style={{ fontWeight: "600" }}>Batch:</span>
    <span style={{
      marginLeft: "8px",
      borderBottom: "1px solid #000",
      minWidth: "100px",
      display: "inline-block"
    }}>
    </span>
  </div>

  {/* Fee */}
  <div>
    <span style={{ fontWeight: "600" }}>Fee (Rs):</span>
    <span style={{
      marginLeft: "8px",
      borderBottom: "1px solid #000",
      minWidth: "100px",
      display: "inline-block"
    }}>
    </span>
  </div>

</div>
  </div>
  {/* FOOTER */}
<div style={{
  position: "absolute",
  bottom: "30px",
  left: "40px",
  right: "40px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  fontWeight: "600"
}}>
  
</div>

</div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8 flex-wrap">

          <button
            onClick={() => navigate("/enroll")}
            style={{
              backgroundColor: "#6b7280",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Edit
          </button>

          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#22c55e",
              color: "#000",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Submit
          </button>

          <button
            onClick={() => generatePDF("preview-content")}
            style={{
              backgroundColor: "#3b82f6",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Download PDF
          </button>

          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: "#9333ea",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Print
          </button>

        </div>

      </div>
    </div>
  );
}