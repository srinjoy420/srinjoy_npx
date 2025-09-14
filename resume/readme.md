# 📦 Resume — Srinjoy Ghosh

This is my **resume as an npm package** 🎉.  
You can view it directly in your terminal using `npx`.

---

## 🚀 Usage

Run the following command to display my resume:

```bash
npx resume-srinjoyghosh75

📂 Project Structure

resume-srinjoyghosh75/
│
├── package.json   # npm package config (with bin entry for CLI)
├── index.js       # CLI script that prints resume.json in terminal
├── resume.json    # Resume data in JSON format
└── README.md 

How It Works

resume.json contains all my resume data (projects, skills, education).

index.js is a Node.js CLI script:

Reads resume.json

Prints a nicely formatted resume in your terminal

package.json defines a bin command:

resume-srinjoyghosh75

srinjoy-resume

This makes the package executable with npx.


📝 Example Output

=======================================
Srinjoy Ghosh — Full Stack Developer
=======================================
📧  Email: ghoshsrinjoy2@gmail.com
📞  Phone: +91 8670112436
🔗  GitHub: https://github.com/srinjoy420
🔗  LinkedIn: https://linkedin.com/in/srinjoy-ghosh-b38608222/

Projects:

 1. LeetLab – Online DSA Practice Platform
    Tech: Node.js, Express.js, PostgreSQL, React.js, Daisy UI, Judge0
    Repo: https://github.com/srinjoy420/leetlab
    - Built a coding platform supporting real-time code execution
    - Implemented JWT authentication with role-based access control
    - Scalable backend using Express + PostgreSQL

 2. Book Store – A MERN Stack Real-Time E-Commerce App
    Tech: Node.js, Express.js, MongoDB, React.js, ShadCn UI
    Repo: https://github.com/srinjoy420/bookbackend
    - Secure JWT auth & role-based access
    - OTP login via Twilio + email notifications with Mailgen
    - Payment integration with Razorpay
    - Cloudinary image uploads + order tracking

Skills:
   Languages: JavaScript, TypeScript
   Frontend: React.js, Next.js, Redux, Tailwind CSS, ShadCn UI
   Backend: Node.js, Express.js, REST APIs, Redis, Socket.IO, Docker
   Databases: MongoDB, PostgreSQL
   Tools: Git, GitHub, VS Code

Education:
   B.Tech in CSE, Camellia Institute of Technology & Management (2023 – 2026)
   Diploma in CST, Technique Polytechnic Institute (2021 – 2023)
=======================================


git clone https://github.com/srinjoy420/resume-npm.git
cd resume-npm

# Install dependencies (none required)
npm install

# Run directly
node index.js

# Link package globally for testing
npm link
srinjoy-resume

Srinjoy Ghosh

📧 ghoshsrinjoy2@gmail.com

🔗 GitHub:-https://github.com/srinjoy420

🔗 LinkedIn:-https://www.linkedin.com/in/srinjoyghosh75/