import React, { useState, useRef } from "react";
import Input from "../Small Component/Input/Input";
import "./../../index.css";
type UploadedFile = {
  file: File;
  name: string;
  type: string;
  progress: number;
  preview: string | null;
};

const AdvancedFileUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file) => ({
      file,
      name: file.name,
      type: file.type,
      progress: 0,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    simulateUpload(newFiles, files.length);
  };

  const simulateUpload = (newFiles: UploadedFile[], startIndex: number) => {
    newFiles.forEach((file, index) => {
      let progress = 0;
      const fileIndex = startIndex + index;

      const interval = setInterval(() => {
        progress += 10;

        setFiles((prevFiles) =>
          prevFiles.map((f, i) =>
            i === fileIndex ? { ...f, progress: Math.min(progress, 100) } : f
          )
        );

        if (progress >= 100) clearInterval(interval);
      }, 200);
    });
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "1rem",
        borderRadius: "8px",
        border: "1px solid var(--surface-border)",
        backgroundColor: "var(--surface-card)",
        color: "var(--text-primary)",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Advanced File Upload
      </h2>

      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        style={{
          border: "2px dashed var(--surface-border)",
          borderRadius: "8px",
          padding: "1.5rem",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "var(--surface-hover)",
          userSelect: "none",
        }}
      >
        <p style={{ color: "var(--text-secondary)", margin: 0 }}>
          Click or drag & drop files (Images & PDFs)
        </p>
        <Input
          ref={inputRef}
          type="file"
          label=""
          multiple
          onChange={handleFileInput}
          inputClassName="hidden"
        />
      </div>

      <div
        style={{
          marginTop: "1rem",
          display: "grid",
          gap: "0.75rem",
        }}
      >
        {files.map((fileData, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "1px solid var(--surface-border)",
              backgroundColor: "var(--surface-card)",
              boxSizing: "border-box",
            }}
          >
            {fileData.type.startsWith("image/") && fileData.preview ? (
              <img
                src={fileData.preview}
                alt={fileData.name}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "4px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "4px",
                  backgroundColor: "var(--color-info)",
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  userSelect: "none",
                }}
              >
                PDF
              </div>
            )}

            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "0.875rem",
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={fileData.name}
              >
                {fileData.name}
              </p>
              <div
                style={{
                  marginTop: "4px",
                  height: "6px",
                  borderRadius: "4px",
                  backgroundColor: "var(--color-grey-200)",
                }}
              >
                <div
                  style={{
                    width: `${fileData.progress}%`,
                    height: "100%",
                    borderRadius: "4px",
                    backgroundColor: "var(--color-primary)",
                    transition: "width 0.2s ease",
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              aria-label={`Remove file ${fileData.name}`}
              onClick={() => handleRemove(index)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "var(--color-error)",
                fontSize: "1.25rem",
                lineHeight: 1,
                padding: "0 4px",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedFileUpload;
