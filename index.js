import express from 'express';
import os from 'os';

const app = express();

// Start time for uptime
const startTime = Date.now();

// PORT setup
const PORT = process.env.PORT || 8080;

// Home Route
app.get('/', (req, res) => {
    const uptime = Math.floor((Date.now() - startTime) / 1000);

    res.send(`
    <html>
    <head>
        <title>🚀 DevOps Node API</title>
        <style>
            body {
                margin: 0;
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(135deg, #0f172a, #1e293b);
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                text-align: center;
                background: rgba(255,255,255,0.05);
                padding: 40px;
                border-radius: 16px;
                backdrop-filter: blur(10px);
                box-shadow: 0 0 30px rgba(0,0,0,0.5);
                max-width: 600px;
                width: 90%;
            }
            h1 {
                color: #38bdf8;
                margin-bottom: 10px;
            }
            .status {
                color: #22c55e;
                font-weight: bold;
                margin: 10px 0;
            }
            .info {
                margin-top: 20px;
                font-size: 14px;
                color: #cbd5f5;
                text-align: left;
            }
            .badge {
                display: inline-block;
                margin-top: 15px;
                padding: 6px 12px;
                border-radius: 20px;
                background: #22c55e;
                color: #000;
                font-size: 12px;
                font-weight: bold;
            }
            .section {
                margin-top: 20px;
                text-align: left;
            }
            .footer {
                margin-top: 25px;
                font-size: 12px;
                color: #94a3b8;
                text-align: center;
            }
            code {
                background: #020617;
                padding: 5px 8px;
                border-radius: 6px;
                display: block;
                margin-top: 5px;
                color: #38bdf8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 DevOps Node API</h1>
            <div class="status">Status: ONLINE ✅</div>

            <p>Fully Dockerized Node.js Application</p>

            <div class="info">
                <p><strong>Port:</strong> ${PORT}</p>
                <p><strong>Uptime:</strong> ${uptime}s</p>
                <p><strong>Server Time:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Hostname:</strong> ${os.hostname()}</p>
            </div>

            <div class="badge">Healthy</div>

            <div class="section">
                <h3>📦 Docker Setup</h3>
                <p>Dockerfile used to containerize the application</p>
                <code>docker build -t api .</code>
            </div>

            <div class="section">
                <h3>⚙️ Docker Compose</h3>
                <p>Application managed using docker-compose</p>
                <code>docker-compose up --build</code>
            </div>

            <div class="section">
                <h3>🌐 API Endpoints</h3>
                <p><strong>GET /</strong> → Dashboard</p>
                <p><strong>GET /api</strong> → JSON Response</p>
            </div>

            <div class="footer">
                Built with ❤️ using Node.js, Express, Docker & DevOps practices
            </div>
        </div>
    </body>
    </html>
    `);
});

// API route
app.get('/api', (req, res) => {
    res.json({
        status: "success",
        message: "API is working",
        timestamp: new Date()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});