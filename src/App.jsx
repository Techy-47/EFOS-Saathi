import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { askGemini } from "./services/geminiService";
import {
  startVoiceRecognition,
  speakText,
  stopSpeaking,
} from "./services/voiceService";
import "./App.css";


const assistantImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmzzkkVmtfatEXvtEhi0PxbxVlf4BOpFXpeMerMpRh93DqKfK7Jhi2H6i3pPZRrF4HsPH3YEJyVqSSwE6Kj_ikKvZN19Uh2F1YrVt00RuOUrRP1JETdNxxD4L3k_R39-jfeHbZNnRAkjM5nj7g7-QmondHkJGYLu4t-mmWUdz3P2jF1mX9KfKjePfF1CjdmJqOunG0IhP7_09G5ySDJh8l4pSKUnnmTxWfsDwKqR_hNAzctOuM9GC_RNWbaTxiC9KLdAr3ZB0qw6M";

const eventImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAebLsiUh2aq4Phmf8Cm6X1l_W1x6y6s2ecYIFe1dxjhJ7hBZmzQ-fw_SthrGg3MVac1k7uc1W-p7tE6lKejmYg_8IMqmB5pEyVwA7JwBIJ3_QboPEJ5kWa9VSDJ9l6l4W6Q75nESruE_hRzOIgCA6JQ_fHHKTZGrNA5moZmRk75iGlcyD6hQHu8jVmh1AC-sVoKKchJAaZuQEVYiNDIEkSmqSZo3KH6ZRe6y1HPEX67cMTbBTWDGB7UtoRsJVk72x_jRDwaWHYO54";

const initialMessages = [
  {
    role: "assistant",
    text: "Namaste! Main EFOS Saathi hoon. Aap mujhe Hindi, English ya Hinglish me career ke baare me pooch sakte hain.",
  },
];

const fakeStudent = {
  name: "Ravi Kumar",
  qualification: "12th Pass",
  location: "Rural Uttar Pradesh",
  goal: "Job after 12th",
};

const defaultSummary = {
  match: "Not generated yet",
  score: "--",
  status: "WAITING",
  roadmap: [
    "Apna education level batayein",
    "Apna interest share karein",
    "Career goal choose karein",
  ],
};

function getFakeReply(userText) {
  const text = userText.toLowerCase();

  if (
    text.includes("12th") ||
    text.includes("job") ||
    text.includes("computer") ||
    text.includes("digital") ||
    text.includes("marketing")
  ) {
    return {
      reply:
        "Aapke interest ke basis par Digital Marketing, Computer Operator aur Web Designing aapke liye strong career options ho sakte hain. Agar aap village se ho aur phone/internet use kar sakte ho, to Digital Marketing ek practical start ho sakta hai. Pehle Canva, social media basics, content writing aur SEO basics se start karo.",
      summary: {
        match: "Digital Marketing",
        score: "86%",
        status: "EXCELLENT",
        roadmap: [
          "Canva aur basic design seekho",
          "Social Media Marketing basics samjho",
          "Content writing aur SEO basics start karo",
          "Sample Instagram page ya project banao",
          "EFOS counselor se internship guidance lo",
        ],
      },
    };
  }

  if (text.includes("scholarship")) {
    return {
      reply:
        "Scholarship ke liye mujhe aapki qualification, state, category aur course type jaanna hoga. EFOS Saathi aapko verified scholarship guidance aur counselor support se connect kar sakta hai.",
      summary: {
        match: "Scholarship Guidance",
        score: "78%",
        status: "GOOD",
        roadmap: [
          "Qualification confirm karo",
          "State aur district share karo",
          "Course type choose karo",
          "Required documents ready rakho",
          "EFOS counselor se verified options check karo",
        ],
      },
    };
  }

  if (
    text.includes("skill") ||
    text.includes("course") ||
    text.includes("learn")
  ) {
    return {
      reply:
        "Aap skill-based career start karna chahte ho to Digital Marketing, Computer Basics, Data Entry, Graphic Design, Retail Sales aur Communication Skills jaise options useful ho sakte hain. Aap mujhe apna interest batao, main roadmap bana dunga.",
      summary: {
        match: "Skill Development",
        score: "82%",
        status: "GOOD",
        roadmap: [
          "Interest area choose karo",
          "Basic skill course select karo",
          "Daily 1 hour practice karo",
          "Mini project banao",
          "Internship ya Learn & Earn option explore karo",
        ],
      },
    };
  }

  return {
    reply:
      "Main aapki help kar sakta hoon. Pehle mujhe 3 cheezein batao: aapki qualification kya hai, aapko kis field me interest hai, aur aap job, higher studies ya business me se kya choose karna chahte ho?",
    summary: defaultSummary,
  };
}

function getCareerSummary(userText) {
  const text = userText.toLowerCase();

  if (
    text.includes("engineering") ||
    text.includes("btech") ||
    text.includes("b.tech") ||
    text.includes("coding") ||
    text.includes("software")
  ) {
    return {
      match: "Software / IT Career",
      score: "88%",
      status: "EXCELLENT",
      roadmap: [
        "Choose one domain: Web Dev, App Dev, Data, or Core Engineering",
        "Build 2 practical projects",
        "Learn GitHub, resume, and LinkedIn basics",
        "Apply for internships through EFOS guidance",
        "Prepare for interviews and aptitude rounds",
      ],
    };
  }

  if (
    text.includes("12th") ||
    text.includes("job") ||
    text.includes("computer") ||
    text.includes("digital") ||
    text.includes("marketing")
  ) {
    return {
      match: "Digital Marketing",
      score: "86%",
      status: "EXCELLENT",
      roadmap: [
        "Learn Canva and basic content design",
        "Understand social media marketing",
        "Start SEO and content writing basics",
        "Create one sample Instagram/page project",
        "Connect with EFOS counselor for internship guidance",
      ],
    };
  }

  if (text.includes("scholarship")) {
    return {
      match: "Scholarship Guidance",
      score: "78%",
      status: "GOOD",
      roadmap: [
        "Confirm qualification and state",
        "Check course type and eligibility",
        "Prepare required documents",
        "Shortlist verified scholarship options",
        "Connect with EFOS counselor for application help",
      ],
    };
  }

  if (
    text.includes("skill") ||
    text.includes("course") ||
    text.includes("learn")
  ) {
    return {
      match: "Skill Development",
      score: "82%",
      status: "GOOD",
      roadmap: [
        "Choose your interest area",
        "Start one beginner-friendly skill course",
        "Practice daily for 30 days",
        "Build a mini project or sample work",
        "Explore Learn & Earn opportunities",
      ],
    };
  }

  return {
    match: "Career Guidance",
    score: "70%",
    status: "STARTED",
    roadmap: [
      "Share your qualification",
      "Tell your main interest",
      "Choose goal: job, study, skill, or business",
      "Get suitable career options",
      "Connect with EFOS counselor if needed",
    ],
  };
}

function detectRedFlag(userText) {
  const text = userText.toLowerCase();

  const confusionKeywords = [
    "confused",
    "samajh nahi",
    "samajh nhi",
    "pata nahi",
    "pata nhi",
    "kya karu",
    "career choose nahi",
    "career choose nhi",
    "help chahiye",
    "guidance chahiye",
    "clear nahi",
    "clear nhi",
    "dar lag raha",
    "tension",
  ];

  const found = confusionKeywords.some((keyword) => text.includes(keyword));

  if (!found) return null;

  return {
    type: "Career Confusion",
    priority: "High",
    message:
      "Student seems confused and may need human counselor support. Recommend EFOS counselor handoff.",
  };
}

function createCounselorSummary({ lead, careerSummary, messages }) {
  const lastUserMessage =
    [...messages].reverse().find((message) => message.role === "user")?.text ||
    "No user query captured";

  return `${lead.fullName} is a ${lead.qualification} student/user interested in ${lead.careerInterest}. Last query: "${lastUserMessage}". Recommended path: ${careerSummary.match} with match score ${careerSummary.score}. Suggested next step: EFOS counselor should call the student, verify education/location, explain suitable course or internship options, and guide them with a beginner roadmap.`;
}

function DashboardPage({ onBack }) {
  const leads = JSON.parse(localStorage.getItem("efosSaathiLeads")) || [];

  return (
    <main className="dashboard-page">
      <div className="dashboard-top">
        <div>
          <p className="dashboard-eyebrow">EFOS Saathi Admin</p>
          <h1>Student Leads Dashboard</h1>
          <p>
            Chatbot se captured counselor requests yahan show hongi.
          </p>
        </div>

        <button onClick={onBack}>Back to Chat</button>
      </div>

      <div className="dashboard-stats">
        <div>
          <span>{leads.length}</span>
          <p>Total Leads</p>
        </div>

        <div>
          <span>{leads.filter((lead) => lead.status === "New").length}</span>
          <p>New Leads</p>
        </div>

        <div>
          <span>
            {leads.filter((lead) => lead.recommendedCareer !== "--").length}
          </span>
          <p>Career Matches</p>
        </div>
      </div>

      <div className="dashboard-table-card">
        <div className="table-header">
          <h2>Recent Counselor Requests</h2>
          <p>Local demo storage</p>
        </div>

        {leads.length === 0 ? (
          <div className="empty-dashboard">
            <span className="material-symbols-outlined">inbox</span>
            <h3>No leads yet</h3>
            <p>
              Chat me career guidance complete karo aur Request Counselor Call
              form submit karo.
            </p>
          </div>
        ) : (
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Qualification</th>
                  <th>Interest</th>
                  <th>Match</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Counselor Summary</th>
                  <th>Created</th>
                </tr>
              </thead>

              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.fullName}</td>
                    <td>{lead.mobile}</td>
                    <td>{lead.qualification}</td>
                    <td>{lead.careerInterest}</td>
                    <td>{lead.recommendedCareer}</td>
                    <td>{lead.matchScore}</td>
                    <td>
                      <span className="status-pill">{lead.status}</span>
                    </td>
                    <td className="summary-cell">{lead.counselorSummary || "Not available"}</td>
                    <td>{lead.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [careerSummary, setCareerSummary] = useState(defaultSummary);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceReplyEnabled, setVoiceReplyEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState("chat");
  const messagesEndRef = useRef(null);
  const [userMode, setUserMode] = useState("student");
  const [redFlag, setRedFlag] = useState(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      stopSpeaking();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      stopSpeaking();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  async function handleSend(customText) {
    const userText = customText || input;

    stopSpeaking();

    if (!userText.trim()) return;

    const userMessage = {
      role: "user",
      text: userText,
    };

    const detectedRedFlag = detectRedFlag(userText);
    setRedFlag(detectedRedFlag);

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsBotTyping(true);

    try {
      const modeContext =
        userMode === "parent"
          ? `Parent Mode: Reply as if you are guiding a parent/guardian. Use respectful simple Hindi/Hinglish. Explain career choices for their son/daughter. Avoid slang.`
          : `Student Mode: Reply directly to the student in friendly Hinglish.`;

      const redFlagContext = detectedRedFlag
        ? `Important: User seems highly confused. Be supportive, ask only one simple question, and recommend EFOS counselor support.`
        : "";

      const aiReply = await askGemini(
        `${modeContext}\n${redFlagContext}\n\nUser question: ${userText}`,
        "Hinglish"
      );

      const botMessage = {
        role: "assistant",
        text: aiReply,
      };

      setMessages((prev) => [...prev, botMessage]);
      // if (voiceReplyEnabled) {
      //   speakText(aiReply);
      // }

      const updatedSummary = getCareerSummary(userText);
      setCareerSummary(updatedSummary);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, Gemini se response nahi aa paya. API key ya internet connection check karo. Demo ke liye main fallback guidance de raha hoon: apni qualification, interest aur career goal batao.",
        },
      ]);
    } finally {
      setIsBotTyping(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  function handleVoiceInput() {
    startVoiceRecognition({
      onStart: () => {
        setIsListening(true);
      },

      onResult: (transcript) => {
        setInput(transcript);
        handleSend(transcript);
      },

      onEnd: () => {
        setIsListening(false);
      },

      onError: (error) => {
        setIsListening(false);
        alert(error);
      },
    });
  }

  function handleLeadSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let lead = {
      id: Date.now(),
      fullName: formData.get("fullName") || "Ravi Kumar",
      mobile: formData.get("mobile") || "+91 9876543210",
      qualification: formData.get("qualification") || "12th Pass",
      careerInterest: formData.get("careerInterest") || careerSummary.match,
      recommendedCareer: careerSummary.match,
      matchScore: careerSummary.score,
      language: "Hinglish",
      mode: userMode === "parent" ? "Parent Mode" : "Student Mode",
      status: "New",
      createdAt: new Date().toLocaleString(),
    };

    lead = {
      ...lead,
      counselorSummary: createCounselorSummary({
        lead,
        careerSummary,
        messages,
      }),
    };

    console.log("Saving lead:", lead);

    const oldLeads = JSON.parse(localStorage.getItem("efosSaathiLeads")) || [];

    const updatedLeads = [lead, ...oldLeads];

    localStorage.setItem("efosSaathiLeads", JSON.stringify(updatedLeads));

    console.log(
      "Saved leads:",
      JSON.parse(localStorage.getItem("efosSaathiLeads"))
    );

    setLeadSubmitted(true);

    setTimeout(() => {
      setShowLeadModal(false);
      setLeadSubmitted(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Thank you ${lead.fullName}! Aapki request EFOS counselor team ko bhej di gayi hai. Counselor aapko ${lead.mobile} par contact kar sakte hain.`,
        },
      ]);
    }, 1000);
  }

  return (
    <div className="app-shell bg-surface font-body-md text-on-surface">
      <div className="top-strip bg-inverse-surface text-inverse-on-surface">
        <p>
          EFOS.in connects India youth to verified, legal & trusted
          opportunities...
        </p>

        <div className="top-strip-contact">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">mail</span>
            connect@efos.in
          </span>

          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">call</span>
            9403890820
          </span>
        </div>
      </div>

      <header className="main-header">
        <div className="flex items-center gap-8">
          <div className="brand-logo">EFOS Saathi</div>

          <nav className="desktop-nav">
            <a href="#">Home</a>
            <a href="#">Opportunities</a>
            <a href="#">Updates</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
          </nav>
        </div>

        <div className="header-actions">
          <div className="search-box">
            <input placeholder="Search opportunities..." type="text" />
            <span className="material-symbols-outlined">search</span>
          </div>

          <button
            className="dashboard-btn"
            onClick={() =>
              setCurrentPage((prev) => (prev === "chat" ? "dashboard" : "chat"))
            }
          >
            {currentPage === "chat" ? "Dashboard" : "Back to Chat"}
          </button>
        </div>
      </header>
      {currentPage === "dashboard" ? (
        <DashboardPage onBack={() => setCurrentPage("chat")} />
      ) : (

        <div className="chat-layout">
          <aside className="left-sidebar">
            <div className="assistant-card">
              <img
                alt="Friendly Career Counselor"
                className="assistant-img"
                src={assistantImage}
              />
              <h3>EFOS Saathi</h3>
              <p>AI Career Assistant</p>
            </div>

            <div className="language-box">
              <p>Language Settings</p>
              <select>
                <option>Hinglish</option>
                <option>Hindi (हिंदी)</option>
                <option>English</option>
              </select>
            </div>

            <div className="mode-box">
              <p>Guidance Mode</p>

              <div className="mode-toggle">
                <button
                  className={userMode === "student" ? "active" : ""}
                  onClick={() => setUserMode("student")}
                >
                  Student
                </button>

                <button
                  className={userMode === "parent" ? "active" : ""}
                  onClick={() => setUserMode("parent")}
                >
                  Parent
                </button>
              </div>
            </div>

            <nav className="side-nav">
              <a className="active" href="#">
                <span className="material-symbols-outlined">psychology</span>
                Career Guidance
              </a>

              <a href="#">
                <span className="material-symbols-outlined">route</span>
                Skill Roadmap
              </a>

              <a href="#">
                <span className="material-symbols-outlined">work</span>
                Job Search
              </a>

              <a href="#">
                <span className="material-symbols-outlined">school</span>
                Scholarships
              </a>
            </nav>

            <div className="student-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="student-icon">
                  <span className="material-symbols-outlined">person</span>
                </div>

                <div>
                  <p className="text-xs font-bold">{fakeStudent.name}</p>
                  <p className="text-[10px] opacity-80">
                    Qual: {fakeStudent.qualification}
                  </p>
                </div>
              </div>

              <p className="goal-pill">Goal: {fakeStudent.goal}</p>
            </div>
          </aside>

          <main className="chat-main">
            <div className="mobile-mode-toggle">
              {redFlag && (
                <div className="mobile-red-flag">
                  <span className="material-symbols-outlined">warning</span>
                  <p>High confusion detected. Counselor support recommended.</p>
                  <button onClick={() => setShowLeadModal(true)}>Connect</button>
                </div>
              )}
              <button
                className={userMode === "student" ? "active" : ""}
                onClick={() => setUserMode("student")}
              >
                Student Mode
              </button>

              <button
                className={userMode === "parent" ? "active" : ""}
                onClick={() => setUserMode("parent")}
              >
                Parent Mode
              </button>
            </div>
            <div className="mobile-action-row">
              <button onClick={() => handleSend("12th ke baad kya karu?")}>
                Career Guidance
              </button>
              <button onClick={() => handleSend("Best skill kaunsi seekhu?")}>
                Skill Roadmap
              </button>
              <button onClick={() => handleSend("Mujhe job chahiye")}>
                Jobs
              </button>
              <button onClick={() => handleSend("Scholarship options batao")}>
                Scholarships
              </button>
            </div>

            <section className="chat-panel">
              <div className="chat-header">
                <div className="flex items-center gap-3">
                  <div className="bot-icon">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>

                  <div>
                    <h2>EFOS Saathi</h2>
                    <p>
                      <span></span>
                      Online
                    </p>
                  </div>
                </div>

                <button
                  className="clear-btn"
                  onClick={() => {
                    stopSpeaking();
                    setMessages(initialMessages);
                    setCareerSummary(defaultSummary);
                    setRedFlag(null);
                  }}
                >
                  <span className="material-symbols-outlined text-sm">
                    delete
                  </span>
                  Clear Chat
                </button>
              </div>

              <div className="messages-area scrollbar-hide">
                {messages.map((message, index) => {
                  if (message.role === "assistant") {
                    return (
                      <div className="ai-message" key={index}>
                        <div className="small-bot-icon">
                          <span className="material-symbols-outlined">
                            smart_toy
                          </span>
                        </div>

                        <div className="message-bubble ai-bubble markdown-message">
                          <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="user-message" key={index}>
                      <div className="message-bubble user-bubble">
                        <p>{message.text}</p>
                      </div>
                    </div>
                  );
                })}

                {messages.length === 1 && (
                  <div className="prompt-chips">
                    <button onClick={() => handleSend("12th ke baad kya karu?")}>
                      12th ke baad kya karu?
                    </button>
                    <button
                      onClick={() =>
                        handleSend(
                          "Mujhe 12th ke baad job chahiye aur computer pasand hai"
                        )
                      }
                    >
                      Mujhe job chahiye
                    </button>
                    <button
                      onClick={() => handleSend("Scholarship options batao")}
                    >
                      Scholarship options batao
                    </button>
                    <button onClick={() => handleSend("Skill courses batao")}>
                      Skill courses
                    </button>
                    <button
                      onClick={() =>
                        handleSend("Mere bete ne 12th pass kiya hai, uske liye best career kya hoga?")
                      }
                    >
                      Parent guidance
                    </button>
                  </div>
                )}

                {isBotTyping && (
                  <div className="ai-message">
                    <div className="small-bot-icon">
                      <span className="material-symbols-outlined">
                        smart_toy
                      </span>
                    </div>

                    <div className="message-bubble ai-bubble typing-bubble">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef}></div>
              </div>

              <div className="input-area">
                <div className="input-box">
                  <button
                    className="voice-toggle"
                    onClick={() => {
                      const latestAssistantMessage = [...messages]
                        .reverse()
                        .find((message) => message.role === "assistant");

                      if (latestAssistantMessage) {
                        stopSpeaking();
                        speakText(latestAssistantMessage.text);
                      }
                    }}
                    title="Listen latest EFOS Saathi reply"
                  >
                    <span className="material-symbols-outlined">volume_up</span>
                  </button>

                  <input
                    placeholder="Apna career question yahan likhiye..."
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />

                  <button
                    className={`mic-btn ${isListening ? "listening" : ""}`}
                    onClick={handleVoiceInput}
                    title="Speak your career question"
                  >
                    <span className="material-symbols-outlined">
                      {isListening ? "graphic_eq" : "mic"}
                    </span>
                  </button>

                  <button className="send-btn" onClick={() => handleSend()}>
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
            </section>

            <p className="footer-note">
              EFOS Saathi gives guidance based on your interest. Final counselling
              can be done by EFOS experts.
            </p>
          </main>

          <aside className="right-panel">
            <h3>Career Insights</h3>
            {redFlag && (
              <div className="red-flag-card">
                <div>
                  <span className="material-symbols-outlined">warning</span>
                  <strong>{redFlag.type}</strong>
                </div>
                <p>{redFlag.message}</p>
                <button onClick={() => setShowLeadModal(true)}>
                  Connect Counselor
                </button>
              </div>
            )}

            <div className="insight-card">
              <div className="flex justify-between items-center mb-4">
                <span className="card-label">Match Score</span>
                <span className="excellent-pill">{careerSummary.status}</span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="score">{careerSummary.score}</span>
                <span className="score-title">{careerSummary.match}</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-fill"
                  style={{
                    width:
                      careerSummary.score === "--" ? "0%" : careerSummary.score,
                  }}
                ></div>
              </div>
            </div>

            <div className="insight-card">
              <h4>
                <span className="material-symbols-outlined">alt_route</span>
                Recommended Path
              </h4>

              <div className="roadmap-list">
                {careerSummary.roadmap.map((step, index) => (
                  <div key={index}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="connect-card">
              <h4>Need Expert Help?</h4>
              <p>
                Talk directly to an EFOS Certified Counselor to finalize your
                career plan.
              </p>
              <button onClick={() => setShowLeadModal(true)}>
                Request Counselor Call
              </button>
            </div>

            <div className="event-card">
              <img alt="EFOS Career Event" src={eventImage} />
              <div>
                <p>Upcoming: Mega Job Fair in Lucknow</p>
              </div>
            </div>
          </aside>
        </div>
      )}

      {showLeadModal && (
        <div className="modal-backdrop">
          <div className="lead-modal">
            <div className="modal-header">
              <h2>Complete Profile</h2>
              <button onClick={() => setShowLeadModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="modal-subtitle">
              Tell us a bit more about yourself to get personalized career
              guidance and job alerts.
            </p>

            <form className="lead-form" onSubmit={handleLeadSubmit}>
              <div>
                <label>Full Name</label>
                <input name="fullName" defaultValue="Ravi Kumar" type="text" />
              </div>

              <div className="form-grid">
                <div>
                  <label>Mobile Number</label>
                  <input name="mobile" defaultValue="+91 9876543210" type="tel" />
                </div>

                <div>
                  <label>Qualification</label>
                  <select name="qualification" defaultValue="12th Pass">
                    <option>10th Pass</option>
                    <option>12th Pass</option>
                    <option>Graduate</option>
                    <option>ITI/Diploma</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Career Interest</label>
                <input name="careerInterest" defaultValue={careerSummary.match} type="text" />
              </div>

              <button type="submit">
                {leadSubmitted ? "Submitting..." : "Get Personalized Advice"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;