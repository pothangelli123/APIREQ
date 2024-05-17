import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());

app.post('/', async (req, res) => {
    const { clientId, clientSecret, account_id ,SubDomain} = req.body;

    // Updated Postman API URL to include the subDomain using backticks
    const postmanApiUrl = `https://${SubDomain}.auth.marketingcloudapis.com/v2/token`;

    try {
        const response = await fetch(postmanApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret,
                account_id: account_id.toString(), // Ensure it is a string
            }),
        });

        const data = await response.json();
        res.json({ accessToken: data.access_token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error getting access token' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
