# **AI-Powered Conversational Interface Chatbot**  

An open-source AI chat application designed for seamless user interactions and efficient AI-driven conversations.  

![Chatbot UI Screenshot](./public/readme/screenshot.png)  

## **Live Demo**  
Experience Chatbot UI in action: [Live Demo](https://akshaykalapgar.com/projects/ui-chatbot)  

## **About This Project**  
I have customized and enhanced the **Chatbot UI**, an AI-driven conversational platform that streamlines interactions and provides an intuitive user experience. This project features:  

✅ **Responsive and Adaptive UI** – Designed for both desktop and mobile users.  
✅ **Supabase Integration** – Leveraging a scalable PostgreSQL database for data persistence.  
✅ **Next.js Framework** – Ensuring smooth and efficient performance.  
✅ **Easy Deployment** – Compatible with local and cloud hosting platforms like Vercel.  
✅ **Secure Data Handling** – Improved authentication mechanisms and storage solutions.  

## **Project Enhancements & Updates**  
I have incorporated key improvements based on user feedback:  
- **Simplified Deployment** – Streamlined setup for quick installation.  
- **Enhanced Backend Compatibility** – Ensuring smooth integration with multiple platforms.  
- **Optimized Mobile Layouts** – Improving usability on smartphones and tablets.  

Stay tuned for further updates! 🚀  

## **Getting Started**  

Follow these steps to set up Chatbot UI on your local machine:  

### **1. Clone the Repository**  
```bash
git clone https://github.com/your-github-username/chatbot-ui.git
cd chatbot-ui
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Set Up Supabase (Backend)**  
#### **Why Supabase?**  
Supabase offers:  
- Secure data storage  
- Scalable database management  
- Open-source, PostgreSQL-based backend  

#### **Required Installations**  
- **Docker** – [Download Here](https://docs.docker.com/get-docker)  
- **Supabase CLI**  

**MacOS/Linux:**  
```bash
brew install supabase/tap/supabase
```
**Windows:**  
```bash
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

#### **Start Supabase Locally**  
```bash
supabase start
```

### **4. Configure Environment Variables**  
```bash
cp .env.local.example .env.local
```
Retrieve necessary credentials using:  
```bash
supabase status
```
Fill in the `.env.local` file with the retrieved values.  

### **5. Install Ollama (Optional for Local Models)**  
[Follow these instructions](https://github.com/jmorganca/ollama#macos) for local model integration.  

### **6. Run the Application Locally**  
```bash
npm run chat
```
Your instance will be available at **[http://localhost:3000](http://localhost:3000)**.  

## **Deploying to Production**  

### **1. Setup Supabase in the Cloud**  
- Create a **new project** on [Supabase](https://supabase.com/).  
- Obtain **Project Ref**, **Project ID**, **API Keys** (found in "Settings" → "API").  
- Update the **migration file** `supabase/migrations/20240108234540_setup.sql` with:  
  - `project_url` (Use the value from Supabase)  
  - `service_role_key`  

Login to Supabase:  
```bash
supabase login
supabase link --project-ref <your-project-id>
supabase db push
```

### **2. Deploy the Frontend with Vercel**  
- Create a new project on [Vercel](https://vercel.com/).  
- Import your GitHub repository and set up environment variables:  
  - `NEXT_PUBLIC_SUPABASE_URL`  
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
  - `SUPABASE_SERVICE_ROLE_KEY`  
  - (Optional) API keys for OpenAI/Azure OpenAI.  
- Click **Deploy** and get your hosted chatbot URL.  

## **Contributing**  
This project is open for contributions! If you’d like to enhance Chatbot UI further, feel free to submit a pull request.  

## **Contact**  
For queries, discussions, or collaboration opportunities, reach out to me on [GitHub](https://github.com/your-github-username).  
