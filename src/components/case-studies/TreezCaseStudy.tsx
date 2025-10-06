import { CaseStudyLayout } from './CaseStudyLayout';
import imgTreez from '../../assets/treez_cover.png';
import '../../styles/CaseStudyContent.css';

export function TreezCaseStudy() {
  return (
    <CaseStudyLayout
      title="Root Design System"
      subtitle="A scalable, accessible, and cross-platform design system that unified visual language, increased team efficiency, and improved product quality at scale."
      heroImage={imgTreez}
      details={[
        { label: "Role", value: "Design System Lead" },
        { label: "Duration", value: "12 months" },
        { label: "Year", value: "2023-2024" },
        { label: "Team", value: "4 Designers, 8 Engineers, 3 PMs" }
      ]}
      overview={{
        title: "Overview",
        content: "Treez is a fast-growing B2B SaaS platform for cannabis retailers. As the product scaled across mobile and web, inconsistencies in UI, accessibility, and brand application created friction for designers, engineers, and users alike.\n\nI led the creation of a scalable, accessible, and cross-platform design system that unified visual language, increased team efficiency, and improved product quality at scale."
      }}
      sections={[
        {
          title: "Context",
          content: "Treez is an enterprise SaaS platform supporting cannabis dispensary operations — from inventory and compliance to point-of-sale and e-commerce.\n\nBy late 2023, the company had grown rapidly, and its web platform had accumulated years of visual debt and inconsistent design practices. The mobile POS app was in early design planning for 2024, but the web experience was already used daily by hundreds of dispensary employees and admins.\n\nAt that time:\n• Teams were working in silos\n• Figma files were bloated with duplicates\n• Design-to-dev handoffs were inconsistent\n• Accessibility was mostly unaccounted for\n• There was no shared design language\n\nEvery new feature required designers and developers to re-solve the same problems from scratch."
        },
        {
          title: "The Problem",
          content: (
            <div className="cs-content-wrapper">
              <p>Treez needed a scalable and accessible foundation to support rapid product delivery and future platform expansion.</p>

              <blockquote className="cs-quote">
                "Without a system, we were rebuilding the same UI — with different quality — every sprint."
              </blockquote>

              <div className="cs-challenge-list">
                <div className="cs-challenge-item">
                  <span className="cs-challenge-icon">🚫</span>
                  <span>Inconsistent UI components across the platform</span>
                </div>
                <div className="cs-challenge-item">
                  <span className="cs-challenge-icon">📁</span>
                  <span>Redundant and poorly organized Figma assets</span>
                </div>
                <div className="cs-challenge-item">
                  <span className="cs-challenge-icon">🔗</span>
                  <span>Inefficient communication between design and engineering</span>
                </div>
                <div className="cs-challenge-item">
                  <span className="cs-challenge-icon">♿</span>
                  <span>No accessibility standards or visual contrast testing</span>
                </div>
                <div className="cs-challenge-item">
                  <span className="cs-challenge-icon">🧪</span>
                  <span>QA cycles bloated by misaligned styling and interactions</span>
                </div>
                <div className="cs-challenge-item">
                  <span className="cs-challenge-icon">⌛</span>
                  <span>Onboarding delays for new designers and engineers</span>
                </div>
              </div>

              <p>The design team knew we needed a solution that was more than just a component library — we needed a system.</p>
            </div>
          )
        },
        {
          title: "Why Root DS?",
          content: "We named the system Root because it represents the foundation beneath everything we build — a connected structure of tokens, components, and design decisions that supports the entire product experience.\n\nLike a root network, it's invisible to users, but essential to what they see, feel, and use."
        },
        {
          title: "Objectives",
          content: "Our goals were clear and intentionally limited to the web platform, with the understanding that mobile support (POS) would come next:\n\n• Establish visual and interaction consistency across all web surfaces\n• Improve accessibility by default through compliant, tested components\n• Reduce redundancy in Figma and production code\n• Enable faster onboarding and lower the cost of delivery\n• Create a system flexible enough to support future POS and mobile products"
        },
        {
          title: "Discovery",
          content: (
            <div className="cs-content-wrapper">
              <p>Our process began with a comprehensive discovery and audit phase:</p>

              <div className="cs-feature-block-list">
                <div className="cs-feature-block">
                  <h3>UI Audit</h3>
                  <p>Mapped inconsistencies across the Treez platform</p>
                </div>

                <div className="cs-feature-block">
                  <h3>Component Inventory</h3>
                  <p>Collected and documented 100+ repeated patterns</p>
                </div>

                <div className="cs-feature-block">
                  <h3>Stakeholder Interviews</h3>
                  <p>Engaged with engineers, designers, QA, and PMs</p>
                </div>

                <div className="cs-feature-block">
                  <h3>WCAG Accessibility Review</h3>
                  <p>Assessed current failures in color contrast, focus states, and structure</p>
                </div>

                <div className="cs-feature-block">
                  <h3>Workflow Mapping</h3>
                  <p>Identified points of friction in handoff, review, and implementation</p>
                </div>
              </div>

              <p>We didn't assume what teams needed — we investigated and listened.</p>
            </div>
          )
        },
        {
          title: "Design Principles",
          content: (
            <div className="cs-content-wrapper">
              <p>We defined 5 guiding principles to shape every component, token, and interaction:</p>

              <div className="cs-principles-list">
                <div className="cs-principle-item">
                  <h3>Consistency over customization</h3>
                </div>
                <div className="cs-principle-item">
                  <h3>Accessibility by default</h3>
                </div>
                <div className="cs-principle-item">
                  <h3>Platform-aware, not platform-bound</h3>
                </div>
                <div className="cs-principle-item">
                  <h3>Tokens over styles</h3>
                </div>
                <div className="cs-principle-item">
                  <h3>Documentation is part of the product</h3>
                </div>
              </div>

              <p>These principles ensured Root wasn't just scalable — it was sustainable.</p>
            </div>
          )
        },
        {
          title: "System Architecture",
          content: (
            <div className="cs-content-wrapper">
              <p>Root was built on an atomic foundation, structured to grow with product demands.</p>

              <div className="cs-two-column">
                <div>
                  <h3 className="cs-section-heading">Foundations</h3>
                  <ul className="cs-feature-list">
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Color palette and contrast-compliant tokens</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Typographic scale and modular spacing system</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Iconography, grid, and motion primitives</span>
                    </li>
                  </ul>

                  <h3 className="cs-section-heading">Components</h3>
                  <ul className="cs-feature-list">
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Buttons, form elements, tables, cards, navigation</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Responsive structure for admin-heavy dashboard layouts</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Component states: hover, focus, disabled, error</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="cs-section-heading">Patterns</h3>
                  <ul className="cs-feature-list">
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Form groups, input validation, error handling</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Empty states, alerts, filtering, modals</span>
                    </li>
                  </ul>

                  <h3 className="cs-section-heading">Documentation</h3>
                  <ul className="cs-feature-list">
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Figma library with tokens and auto-layout</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Zeroheight for usage guidelines, do/don't examples</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Connected to Storybook for developer parity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Collaboration & Rollout",
          content: (
            <div className="cs-content-wrapper">
              <p>Root was designed <em>with</em> engineering — not <em>for</em> them.</p>

              <ul className="cs-feature-list">
                <li className="cs-feature-item">
                  <span className="cs-bullet"></span>
                  <span>Weekly syncs with frontend leads ensured token architecture aligned with CSS vars</span>
                </li>
                <li className="cs-feature-item">
                  <span className="cs-bullet"></span>
                  <span>Established naming conventions across design and code</span>
                </li>
                <li className="cs-feature-item">
                  <span className="cs-bullet"></span>
                  <span>Created a contribution model for designers and devs to evolve the system</span>
                </li>
                <li className="cs-feature-item">
                  <span className="cs-bullet"></span>
                  <span>Hosted internal onboarding sessions to walk through system usage, rationale, and workflow</span>
                </li>
              </ul>

              <p>This wasn't a handoff. It was a shared ownership model.</p>
            </div>
          )
        },
        {
          title: "Outcomes",
          content: (
            <div className="cs-content-wrapper">
              <p>Root created clarity and scale across the Treez design and development ecosystem.</p>

              <div className="cs-metrics-grid">
                <div className="cs-metric-item">
                  <div className="cs-metric-value">82%</div>
                  <div className="cs-metric-label">Reduced Figma component duplication</div>
                </div>
                <div className="cs-metric-item">
                  <div className="cs-metric-value">30%</div>
                  <div className="cs-metric-label">Decreased UI QA tickets across three sprints</div>
                </div>
                <div className="cs-metric-item">
                  <div className="cs-metric-value">3w → 1w</div>
                  <div className="cs-metric-label">Designer onboarding time dropped</div>
                </div>
                <div className="cs-metric-item">
                  <div className="cs-metric-value">94%</div>
                  <div className="cs-metric-label">Resolved accessibility contrast issues in core components</div>
                </div>
                <div className="cs-metric-item">
                  <div className="cs-metric-value">20%</div>
                  <div className="cs-metric-label">Product delivery velocity improved</div>
                </div>
              </div>

              <blockquote className="cs-quote">
                "It's the first time we've had a true source of truth"
                <cite>— Sam, Engineering Lead</cite>
              </blockquote>
            </div>
          )
        },
        {
          title: "What's Next",
          content: "Root was intentionally scoped to the web platform, but its architecture was designed to extend into mobile and POS — a roadmap priority for 2024.\n\nIn progress:\n• Extending tokens for mobile breakpoints and interaction patterns\n• POS app alignment with web design language\n• Brand theme flexibility for white-label features\n\nFuture goals:\n• Integrate automated accessibility linting\n• Versioned documentation with automated changelogs\n• Design ops dashboard for system health and adoption metrics"
        },
        {
          title: "Reflection",
          content: "Root wasn't just a project — it was a shift in how Treez teams build, collaborate, and scale.\n\nWe moved from individual craftsmanship to shared ownership. From design chaos to clarity. From reactivity to intentionality.\n\nAnd we did it by listening, aligning, and scaling with purpose."
        }
      ]}
    />
  );
}

export default TreezCaseStudy;
