import { useState, useRef, useCallback } from "react";

const ACCEPTED_TYPES = ["image/jpeg", "image/png"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

const styles = {
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    backdropFilter: "blur(20px)",
    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
    marginTop: "2rem",
    marginInline: "auto",
  },
  dropzone: (isDragging, hasPreview) => ({
    position: "relative",
    border: `2px dashed ${isDragging ? "#a78bfa" : "rgba(167,139,250,0.3)"}`,
    borderRadius: "14px",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    cursor: "pointer",
    background: isDragging
      ? "rgba(167,139,250,0.08)"
      : hasPreview
        ? "transparent"
        : "rgba(255,255,255,0.02)",
    transition: "all 0.25s ease",
    minHeight: "160px",
  }),
  previewImg: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid rgba(167,139,250,0.5)",
  },
  removeBtn: {
    marginTop: "0.5rem",
    background: "rgba(248,113,113,0.12)",
    border: "1px solid rgba(248,113,113,0.3)",
    color: "#f87171",
    padding: "0.25rem 0.75rem",
    borderRadius: "8px",
    fontSize: "0.7rem",
    cursor: "pointer",
  },
};

const DragNDrop = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleFile = useCallback((incoming) => {
    setError("");
    if (!incoming) return;

    if (!ACCEPTED_TYPES.includes(incoming.type)) {
      setError("Only JPG and PNG files are accepted.");
      return;
    }
    if (incoming.size > MAX_SIZE_BYTES) {
      setError("File exceeds 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
      setFile(incoming);
    };
    reader.readAsDataURL(incoming);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div style={styles.card}>
      <label className="block text-[#c4b8e8] text-[0.7rem] uppercase tracking-widest font-semibold mb-4 text-center">
        Upload Avatar
      </label>

      <div
        style={styles.dropzone(isDragging, !!preview)}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <>
            <img src={preview} alt="Preview" style={styles.previewImg} />
            <button
              style={styles.removeBtn}
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
                setPreview(null);
              }}
            >
              Remove
            </button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-[#e2d9f3] text-sm">
              {isDragging ? "Drop here!" : "Click or drag to upload"}
            </p>
            <span className="text-[#c4b8e8]/40 text-[0.65rem]">
              JPG/PNG (Max 5MB)
            </span>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {error && (
        <p className="text-red-400 text-xs mt-2 text-center">⚠ {error}</p>
      )}
    </div>
  );
};

export default DragNDrop;
