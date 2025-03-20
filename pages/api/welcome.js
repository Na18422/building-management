export default function handler(req, res) {
  console.log("Welcome! This is a scheduled task.");  
  res.status(200).json({ message: "Welcome! This is a scheduled task." });
}
