"use client";

import { useEffect, useState } from "react";
// import { Card } from "../ui/card";
import { Card } from "./ui/card";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
// import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
// import rust from "react-syntax-highlighter/dist/esm/languages/hljs/rust";
// import c from "react-syntax-highlighter/dist/esm/languages/hljs/c";
import ruby from "react-syntax-highlighter/dist/esm/languages/hljs/ruby";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Register languages
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("python", python);
// SyntaxHighlighter.registerLanguage("swift", rust);
// SyntaxHighlighter.registerLanguage("cpp", cpp);
// SyntaxHighlighter.registerLanguage("c", c);
SyntaxHighlighter.registerLanguage("ruby", ruby);

const languages = ["javascript", "python", "ruby"] as const;
type Language = (typeof languages)[number];

const snippets = (lang: Language, isMobile: boolean): string => {
  if (lang === "javascript") {
    return isMobile
      ? `const developer = {
  name: "EdEarn Scholar!",
  skills: [
    "JavaScript",
    "Go",
    "Python"
  ],
  passionate: true,
  problemSolver: true,
  creative: true,
  hireable: function() {
    return (
      this.passionate &&
      this.problemSolver &&
      this.creative
    );
  }
};`
      : `const developer = {
  name: "EdEarn Scholar!",
  skills: ["JavaScript", "Go", "Python"],
  passionate: true,
  problemSolver: true,
  creative: true,
  hireable: function() {
    return (
      this.passionate &&
      this.problemSolver &&
      this.creative
    );
  }
};`;
  }

  if (lang === "python") {
    return isMobile
      ? `developer = {
  "name": "EdEarn Scholar!",
  "skills": [
    "JavaScript",
    "Go",
    "Python"
  ],
  "passionate": True,
  "problemSolver": True,
  "creative": True,
  "hireable": lambda: True
}`
      : `developer = {
  "name": "EdEarn Scholar!",
  "skills": ["JavaScript", "Go", "Python"],
  "passionate": True,
  "problemSolver": True,
  "creative": True,
  "hireable": lambda: True
}`;
  }

  if (lang === "ruby") {
    return isMobile
      ? `class Developer
  def initialize
    @name = "EdEarn Scholar!"
    @skills = ["Ruby", "JavaScript", "Python"]
    @passionate = true
    @problem_solver = true
    @creative = true
  end

  def hireable?
    @passionate && @problem_solver && @creative
  end
end

dev = Developer.new
puts "Hireable: #{dev.hireable?}"`
      : `class Developer
  def initialize
    @name = "EdEarn Scholar!"
    @skills = ["Ruby", "JavaScript", "Python"]
    @passionate = true
    @problem_solver = true
    @creative = true
  end
  def hireable?
    @passionate && @problem_solver && @creative
  end
end
dev = Developer.new
puts "Hireable: #{dev.hireable?}"`;
  }
  return "";
};

function getSnippet(lang: Language, isMobile: boolean) {
  let formatted = snippets(lang, isMobile);
  if (isMobile && lang === "javascript") {
    return formatted.replace(
      "this.passionate && this.problemSolver && this.creative;",
      "this.passionate && this.problemSolver &&\n      this.creative;"
    );
  }
  return formatted;
}

export default function CodeDialog() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const currentLang = languages[currentLanguageIndex];
    const fullText = getSnippet(currentLang, isMobile);
    let i = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentLanguageIndex((prev) => (prev + 1) % languages.length);
        }, 2000);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [currentLanguageIndex, isMobile]);

  const currentLang = languages[currentLanguageIndex];

  return (
    <Card
      className="bg-[#0b1120] border border-zinc-800 p-4 rounded-lg shadow-md w-full max-w-full w-[630px] h-[480px] ml-8 mt-6 overflow-hidden"
      style={{
        fontFamily: "'Bookman Old Style', 'Times New Roman', Georgia, serif",
        overflowX: "hidden", // hide horizontal overflow
      }}
    >

      <div className="flex items-center mb-3">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-sm font-mono text-white capitalize">
          {currentLang}
        </div>
      </div>

      <div className="text-base text-white rounded bg-transparent break-words whitespace-pre-wrap w-full overflow-hidden">
        <SyntaxHighlighter
          language={currentLang}
          style={atomOneLight}
          customStyle={{
            background: "transparent",
            padding: 0,
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            fontSize: "1rem",
            fontFamily:
              "'Bookman Old Style', 'Times New Roman', Georgia, serif",
            width: "100%",
            overflowX: "hidden",
            borderRadius: 0, // kill internal roundness
          }}
          PreTag="div" // override default <pre>
          CodeTag="code" // make sure <code> renders cleanly
        >
          {displayText + (isTyping ? "|" : "")}
        </SyntaxHighlighter>
      </div>
    </Card>
  );
}
