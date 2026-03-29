import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePDF = async (elementId, returnBlob = false) => {
  const element = document.getElementById(elementId);

  const canvas = await html2canvas(element, {
  scale: 1.5,                 // 🔥 increase quality
  useCORS: true,
  backgroundColor: "#ffffff",
  scrollY: -window.scrollY, // 🔥 fix offset issue
});

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const imgWidth = 190;
  const pageHeight = 297;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  // ✅ THIS IS THE FIX
  if (returnBlob) {
    return pdf.output("blob");   // 🔥 REQUIRED
  } else {
    pdf.save("Kreedentials_Form.pdf");
  }
};