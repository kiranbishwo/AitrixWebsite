import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;
      
      // Basic validation
      if (!email || !email.includes('@') || !message) {
        return res.status(400).json({ message: "Invalid form data" });
      }
      
      // In a real app, you would store this data or send an email
      // For now, we're just returning a success response
      
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ message: "An error occurred" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
