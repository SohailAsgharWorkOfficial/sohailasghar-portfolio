import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      className="max-w-lg mx-auto  text-white p-6 rounded-2xl shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-green-400 text-2xl font-bold">✨ Let's Connect ✨</h2>

      <p className="mt-4 text-lg">
        You can reach me at:  
        <a href="mailto:sohailasghar.workofficial@gmail.com" className="text-green-400 hover:underline ml-1">
          ✉️ sohailasghar.workofficial@gmail.com
        </a>
      </p>
      <p className="mt-2 text-gray-300 text-lg">Feel free to drop a message! 🚀</p>

 
      <div className="flex justify-center gap-5 mt-5">
        {[
          { href: "https://github.com/SohailAsgharWorkOfficial", icon: "fa-github" },
          { href: "https://www.linkedin.com/in/sohailasgharofficial", icon: "fa-linkedin" },
          { href: "https://twitter.com/SohailAsgharWorkOfficial", icon: "fa-x-twitter" },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 hover:scale-110 hover:text-green-400"
            whileHover={{ y: -5 }}
          >
            <i className={`fa-brands ${icon}`}></i>
          </motion.a>
        ))}
      </div>

      <p className="mt-6 text-green-400 text-lg font-semibold">💡 Open to collaborations & new opportunities!</p>
    </motion.div>
  );
}
