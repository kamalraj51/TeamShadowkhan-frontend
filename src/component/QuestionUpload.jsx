import React, { useState } from "react";

const QuestionUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

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
      const response = await fetch("/rest/question/upload", {
        method: "POST",
        body: formData,
        // Don't set Content-Type header - browser sets it automatically with boundary
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.message || "Upload failed");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    // Create a sample CSV template (or you can provide an actual Excel file)
    const headers = [
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
    ];

    const sampleRow = [
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
    ];

    const csvContent = [headers.join(","), sampleRow.join(",")].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "question_template.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="question-upload">
      <h2>Upload Questions from Excel</h2>

      <div className="upload-section">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          disabled={loading}
        />

        <button onClick={handleUpload} disabled={!file || loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>

        <button onClick={downloadTemplate} type="button">
          Download Template
        </button>
      </div>

      {error && (
        <div
          className="error-message"
          style={{ color: "red", marginTop: "10px" }}
        >
          {error}
        </div>
      )}

      {result && (
        <div className="result-section" style={{ marginTop: "20px" }}>
          <h3>Upload Result</h3>
          <p>
            Status: <strong>{result.status}</strong>
          </p>
          <p>Message: {result.message}</p>
          <p>Successfully uploaded: {result.successCount} questions</p>

          {result.errors && result.errors.length > 0 && (
            <div className="errors">
              <h4>Errors ({result.errorCount}):</h4>
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
        className="instructions"
        style={{ marginTop: "20px", padding: "10px", background: "#f5f5f5" }}
      >
        <h4>Excel File Format:</h4>
        <p>Your Excel file should have these columns in order:</p>
        <ol>
          <li>
            <strong>topicId</strong> (required) - e.g., T001
          </li>
          <li>
            <strong>questionDetail</strong> (required) - The question text
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
            <strong>answer</strong> (required) - e.g., A, B, C, D
          </li>
          <li>
            <strong>numAnswers</strong> (required) - Number of correct answers
          </li>
          <li>
            <strong>questionTypeId</strong> (required) - e.g., SINGLE_CHOICE
          </li>
          <li>
            <strong>difficultyLevel</strong> (optional) - e.g., 1, 2, 3
          </li>
          <li>
            <strong>answerValue</strong> (optional) - Points for correct answer
          </li>
          <li>
            <strong>negativeMarkValue</strong> (optional) - Negative marking
            value
          </li>
        </ol>
      </div>
    </div>
  );
};

export default QuestionUpload;
