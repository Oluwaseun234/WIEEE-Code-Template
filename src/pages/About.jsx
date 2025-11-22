import { useState } from "react";

export default function About() {
  const [resolution, setResolution] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleEnhance() {
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://localhost:4000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: resolution }),
      });

      if (!response.ok) {
        const text = await response.text();
        setResult(`Error from backend: ${text || response.statusText}`);
      } else {
        const text = await response.text();
        setResult(text);
      }
    } catch (err) {
      setResult("Network error: could not reach backend.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="about"
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>AI Resolution Enhancer</h2>

      <textarea
        rows={4}
        placeholder="Write your resolution here..."
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
        style={{
          width: "100%",
          marginTop: "1rem",
          padding: "0.5rem",
          fontSize: "1rem",
        }}
      />

      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          opacity: loading ? 0.7 : 1,
        }}
        onClick={handleEnhance}
        disabled={loading}
      >
        {loading ? "Enhancing..." : "Enhance"}
      </button>

      <p style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
        <strong>Result:</strong>{" "}
        {loading ? "Loading..." : result}
      </p>
    </div>
  );
}
