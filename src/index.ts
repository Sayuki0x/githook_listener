import { exec } from 'child_process';
import crypto from 'crypto';
import http from 'http';

const secret = 'github_secret_here';

const repo = '/path/to/repo';

http.createServer((req, res) => {
    req.on('data', (chunk) => {
        const sig = 'sha1=' + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

        if (req.headers['x-hub-signature'] === sig) {
            const git = exec('cd ' + repo + ` && git stash; git pull; echo "${getTimeStamp()} Script completed"`);
            if (git.stdout && git.stderr) {
                git.stdout.pipe(process.stdout);
                git.stderr.pipe(process.stderr);
            }
        }
    });

    res.end();
}).listen(41920);

console.log(`${getTimeStamp()} Script started, listening on port 41920 for webhooks`);

function getTimeStamp() {
  const date: Date = new Date(Date.now());
  return date.toUTCString();
}
