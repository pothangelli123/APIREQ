Access Token Generator
This repository contains two main components: a simple HTML front-end and a Node.js server. Together, they allow users to generate an access token for Salesforce Marketing Cloud (SFMC) using client credentials.

Overview
HTML (index.html)
The HTML file provides a user interface to input the required credentials and obtain an access token. It includes fields for the Client ID, Client Secret, Business Unit (MID), and SubDomain. Upon submission, it sends a POST request to the Node.js server to fetch the access token.

Node.js Server (server.mjs)
The Node.js server handles the POST request from the HTML form, processes the credentials, and interacts with the Salesforce Marketing Cloud API to retrieve the access token. The server uses Express.js for routing and node-fetch for making API requests.# APIREQ
