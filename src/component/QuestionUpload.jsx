import React, { useState } from "react";
import * as XLSX from "xlsx";

const QuestionUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "https://localhost:8443/sphinx/api/question/upload";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileName = selectedFile.name.toLowerCase();

      if (!fileName.endsWith(".xlsx") && !fileName.endsWith(".xls")) {
        setError("Please select an Excel file (.xlsx or .xls)");
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setError(null);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Uploading file:", file);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
        credentials: "include", // remove if not using cookies/session
      });

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid JSON response from server");
      }

      console.log("Response:", data);

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      setError("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    const data = [
      [
        "topicId",
        "questionDetail",
        "optionA",
        "optionB",
        "optionC",
        "optionD",
        "optionE",
        "answer",
        "numAnswers",
        "questionTypeId",
        "difficultyLevel",
        "answerValue",
        "negativeMarkValue",
      ],
      [
        "T001",
        "What does SQL stand for?",
        "Structed query Language",
        "Structured Query Language",
        "SQL",
        "None of the above",
        "",
        "B",
        "1",
        "SINGLE_CHOICE",
        "2",
        "1",
        "2",
      ],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);

    worksheet["!cols"] = [
      { wch: 10 },
      { wch: 30 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 10 },
      { wch: 12 },
      { wch: 20 },
      { wch: 15 },
      { wch: 15 },
      { wch: 20 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Questions");

    XLSX.writeFile(workbook, "question_template.xlsx");
  };

  return (
    <div
      className="question-upload"
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <h2>Upload Questions from Excel</h2>

      <div className="upload-section" style={{ marginBottom: "15px" }}>
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          disabled={loading}
        />

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleUpload} disabled={!file || loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>

          <button
            onClick={downloadTemplate}
            type="button"
            style={{ marginLeft: "10px" }}
          >
            Download Template
          </button>
        </div>
      </div>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Upload Result</h3>
          <p>
            Status: <strong>{result.status || "Success"}</strong>
          </p>
          <p>Message: {result.message || result.successMessage}</p>
          <p>
            Successfully uploaded: <strong>{result.successCount || 0}</strong>{" "}
            questions
          </p>

          {result.errors && result.errors.length > 0 && (
            <div style={{ color: "red" }}>
              <h4>Errors ({result.errorCount || result.errors.length}):</h4>
              <ul>
                {result.errors.map((err, index) => (
                  <li key={index}>
                    Row {err.row}: {err.error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "#f5f5f5",
        }}
      >
        <h4>Excel File Format:</h4>
        <p>Your Excel file should have these columns in order:</p>
        <ol>
          <li>
            <strong>topicId</strong> (required)
          </li>
          <li>
            <strong>questionDetail</strong> (required)
          </li>
          <li>
            <strong>optionA</strong> (required)
          </li>
          <li>
            <strong>optionB</strong> (required)
          </li>
          <li>
            <strong>optionC</strong> (required)
          </li>
          <li>
            <strong>optionD</strong> (required)
          </li>
          <li>
            <strong>optionE</strong> (optional)
          </li>
          <li>
            <strong>answer</strong> (required)
          </li>
          <li>
            <strong>numAnswers</strong> (required)
          </li>
          <li>
            <strong>questionTypeId</strong> (required)
          </li>
          <li>
            <strong>difficultyLevel</strong> (optional)
          </li>
          <li>
            <strong>answerValue</strong> (optional)
          </li>
          <li>
            <strong>negativeMarkValue</strong> (optional)
          </li>
        </ol>
      </div>
    </div>
  );
};

export default QuestionUpload;
