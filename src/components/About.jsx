import profile from "../assets/my-img.jpg";

export default function About() {
  return (
    <div className=" mx-auto px-4 py-5 text-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image */}
        <div className="relative md:w-44 md:h-auto overflow-hidden shadow-xl border-5 border-green-500">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Description */}
        <div className="flex-1 space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
          <p>
            Hey, I'm <span className="text-green-400 font-semibold">Sohail Asghar</span>, a passionate Full Stack Web Developer.
            My expertise lies in building scalable web applications using
            <span className="text-green-400 font-medium"> React.js & Node.js</span>, focusing on RESTful APIs,
            authentication, and third-party integrations. I'm comfortable working with
            <span className="text-green-400"> MongoDB</span>, optimizing queries, and deploying to production smoothly.
          </p>

          <p>
            I'm also skilled in
            <span className="text-green-400"> HTML, CSS, JavaScript</span>, and
            <span className="text-green-400"> Tailwind CSS</span>. I stay updated with modern technologies and keep exploring new tools.
          </p>

          <p>
            I'm proficient in version control using
            <span className="text-green-400"> Git & GitHub</span> and deploy projects via
            <span className="text-green-400"> Vercel & Netlify</span>. I love crafting clean, maintainable code
            and collaborating to build high-quality software.
          </p>

          {/* Quranic Verses about Knowledge & Creation */}
          <div className="pt-4 border-t border-green-500/20">
            <h3 className="text-green-400 text-sm font-medium mb-3">📜 Inspiring Quotes</h3>
            <div className="space-y-2 text-xs">
              <p className="text-gray-300 italic">
                "And He taught you that which you knew not." <span className="text-green-400">(Surah An-Nisa 4:113)</span>
              </p>
              <p className="text-gray-300 italic">
                "Say, 'Are those who know equal to those who know not?' <span className="text-green-400">(Surah Az-Zumar 39:9)</span>
              </p>
              <p className="text-gray-300 italic">
                "And He has subjected to you whatever is in the heavens and whatever is on the earth - all from Him." <span className="text-green-400">(Surah Al-Jathiya 45:13)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
