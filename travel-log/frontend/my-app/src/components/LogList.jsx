import React, { useEffect, useState } from "react";
import axios from "axios";

const LogList = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/logs");
                setLogs(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchLogs();
    }, []);

    return (
        <div>
            <h2>Travel Logs</h2>
            {logs.map((log) => (
                <div key={log._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                    <h3>{log.title}</h3>
                    <p>{log.description}</p>
                    <p><strong>Location:</strong> {log.location}</p>
                    <p><strong>Visit Date:</strong> {new Date(log.visitDate).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default LogList;