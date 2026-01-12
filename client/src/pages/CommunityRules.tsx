import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle } from "lucide-react";

export default function CommunityRules() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        <section className="py-16" style={{ backgroundColor: '#2d1b4e', borderBottom: '1px solid rgba(247, 166, 0, 0.3)' }}>
          <div className="container">
            <h1 className="heading-casino text-5xl md:text-6xl mb-6 text-white">
              Community <span style={{ color: '#f7a600' }}>Rules</span>
            </h1>
            <p className="text-gray-400">
              Our commitment to maintaining a safe, respectful, and fair gaming environment for all players.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-3xl">
            {/* Warning Banner */}
            <div className="p-6 mb-12 flex gap-4 rounded-lg" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '2px dashed rgba(220, 38, 38, 0.5)' }}>
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-white mb-2">
                  Violation Consequences
                </h3>
                <p className="text-gray-400 text-sm">
                  Violations of these community rules may result in account suspension, permanent bans, or legal action. We take the safety and integrity of our community seriously.
                </p>
              </div>
            </div>

            {/* Rules */}
            <div className="space-y-6">
              {[
                {
                  title: "Confidentiality & Privacy",
                  description: "Respect the privacy of other players. Do not share, distribute, or publish other players' personal data, including names, email addresses, phone numbers, or any identifying information without explicit consent.",
                  icon: "🔒",
                },
                {
                  title: "Respect & Equality",
                  description: "Treat all players with respect and dignity. We have zero tolerance for hatred, discrimination, racism, sexism, homophobia, or any form of prejudice based on protected characteristics.",
                  icon: "🤝",
                },
                {
                  title: "Respectful Communication",
                  description: "Keep all communication civil and constructive. Do not threaten, intimidate, harass, bully, or humiliate other players. Abusive language and hostile behavior are strictly prohibited.",
                  icon: "💬",
                },
                {
                  title: "No Impersonation",
                  description: "Do not impersonate other players, staff members, or create accounts pretending to be someone else. Each account must represent a genuine individual.",
                  icon: "🚫",
                },
                {
                  title: "Fair Play",
                  description: "Play fairly and honestly. Cheating, exploiting bugs, using unauthorized third-party tools, or conspiring with other players to gain unfair advantages is strictly prohibited.",
                  icon: "⚖️",
                },
                {
                  title: "No Spam or Flooding",
                  description: "Do not spam the chat, send repetitive messages, or flood channels with content. This disrupts the gaming experience for others.",
                  icon: "📵",
                },
                {
                  title: "Appropriate Content",
                  description: "Do not share explicit, violent, or otherwise inappropriate content. Keep the platform family-friendly and suitable for all ages.",
                  icon: "🎮",
                },
                {
                  title: "Reporting Violations",
                  description: "If you witness a violation of these rules, report it immediately to our moderation team. Use the in-game reporting system or contact support@statnix.com with details and evidence.",
                  icon: "🚨",
                },
              ].map((rule, idx) => (
                <div key={idx} className="card-casino p-6">
                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">{rule.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-white mb-2">
                        {rule.title}
                      </h3>
                      <p className="text-gray-400">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enforcement */}
            <div className="card-casino p-8 mt-12">
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Enforcement & Moderation
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Our moderation team actively monitors the platform to ensure compliance with these community rules. We use a combination of automated systems and human moderators to detect and address violations.
                </p>
                <p>
                  <strong className="text-white">Progressive Discipline:</strong> We typically follow a progressive discipline approach, starting with warnings for minor violations and escalating to temporary or permanent bans for serious or repeated offenses.
                </p>
                <p>
                  <strong className="text-white">Appeals:</strong> If you believe your account has been unfairly suspended or banned, you can appeal the decision by contacting our support team at support@statnix.com with details about your case.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="p-8 mt-8 rounded-lg" style={{ backgroundColor: 'rgba(247, 166, 0, 0.1)', border: '2px dashed #f7a600' }}>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Questions or Concerns?
              </h2>
              <p className="text-gray-400 mb-4">
                If you have questions about these community rules or need to report a violation, please contact our moderation team:
              </p>
              <p className="text-white">
                <strong>Email:</strong> support@statnix.com<br />
                <strong>In-Game Report:</strong> Use the report button on any player profile or message
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
