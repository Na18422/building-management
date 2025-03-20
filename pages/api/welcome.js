export default function handler(req, res) {
  console.log("Welcome! This is a scheduled task.");  // 每次 Cron Job 执行时打印欢迎消息
  res.status(200).json({ message: "Welcome! This is a scheduled task." });
}
