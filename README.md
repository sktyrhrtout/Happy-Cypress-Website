# Happy Cypress Setup

## 1. Start the Server
Run the local Node.js server on port 3002:
```bash
cd projects/happy-cypress
node server.js
```

## 2. Start the Tunnel
Expose the server to the internet using `localtunnel`:
```bash
lt --port 3002 --subdomain happy-cypress
```
**URL:** https://happy-cypress.loca.lt

## 3. Tunnel Password
The tunnel requires a password (your public IP) to access the page.
Get it by running:
```bash
curl -s https://loca.lt/mytunnelpassword
```
