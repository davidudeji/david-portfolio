import { ArrowUpRight } from "lucide-react";
import CapacityMeter from "@/components/CapacityMeter";
import SectionLabel from "@/components/SectionLabel";
import { profile } from "@/data/portfolio";

const runtimeServices = ["frontend", "backend", "systems", "writing"];

export default function Hero() {
  return (
    <section className="hero-grid" aria-labelledby="profile-title">
      <div className="hero-profile" id="profile">
        <SectionLabel number="01" label="profile" />
        <p className="terminal-command">&gt; whoami</p>
        <h1 className="hero-title" id="profile-title">
          David
          <br />
          Udeji<span>.</span>
        </h1>
        <p className="hero-role">
          {profile.role}
          <span aria-hidden="true">+</span>
          {profile.secondaryRole}
        </p>
        <p className="hero-description">
          I build practical software systems and write about the engineering decisions behind them.
        </p>
        <dl className="profile-metadata">
          <div>
            <dt>// role</dt>
            <dd>{profile.role}</dd>
          </div>
          <div>
            <dt>// location</dt>
            <dd>{profile.location}</dd>
          </div>
          {profile.contactEmail && (
            <div>
              <dt>// contact</dt>
              <dd>
                <a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <aside className="hero-system" aria-label="System status">
        <SectionLabel number="02" label="system" />
        <div className="system-capacity">
          <p className="system-heading">SYSTEM CAPACITY</p>
          <CapacityMeter percentage={profile.availability} />
          <span className="system-path">capacity/live</span>
        </div>
        <div className="runtime">
          <h2 className="system-heading">Runtime Environment</h2>
          <dl>
            {runtimeServices.map((service) => (
              <div className="runtime-row" key={service}>
                <dt>{service}</dt>
                <dd>
                  <span aria-hidden="true">●</span> active
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <a className="system-link" href="#cases">
          Explore selected work <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </aside>
    </section>
  );
}
