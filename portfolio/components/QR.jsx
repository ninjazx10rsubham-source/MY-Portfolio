import QRCode from "qrcode.react";

export default function QR() {
  const data = "Subham Dey Portfolio";

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr.png";
    a.click();
  };

  return (
    <div className="card">
      <h2>QR Code</h2>
      <QRCode value={data} size={200} />
      <br />
      <button onClick={downloadQR}>Download</button>
    </div>
  );
}
