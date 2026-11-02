import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { products } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return {};
  return {
    title: `${product.name} | David Udeji`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) notFound();

  return (
    <main className="page-shell">
      <div className="container page-stack">

        {/* Back link */}
        <nav aria-label="Breadcrumb">
          <Link href="/product" className="inline-link inline-link--muted">
            <ArrowLeft size={14} aria-hidden="true" />
            All products
          </Link>
        </nav>

        {/* Hero */}
        <header className="product-hero">
          <div className="product-hero__meta">
            <span className="chip">{product.status}</span>
            <span className="project-card__role">{product.category}</span>
          </div>
          <h1 className="product-hero__name">{product.name}</h1>
          <p className="product-hero__tagline">{product.tagline}</p>
        </header>

        {/* Promise block */}
        <section className="product-block" aria-labelledby="clarity-promise">
          <p className="eyebrow">
            <span aria-hidden="true">01</span> product vision
          </p>
          <blockquote className="product-quote" id="clarity-promise">
            &ldquo;{product.tagline}&rdquo;
          </blockquote>
          <p className="product-body">{product.promise}</p>
        </section>

        {/* Problem */}
        <section className="product-block" aria-labelledby="problem-heading">
          <p className="eyebrow">
            <span aria-hidden="true">02</span> the problem
          </p>
          <h2 id="problem-heading">The central question</h2>
          <p className="product-body product-body--highlight">{product.problem}</p>
          <p className="product-body">{product.approach}</p>
        </section>

        {/* Target user */}
        <section className="product-block" aria-labelledby="user-heading">
          <p className="eyebrow">
            <span aria-hidden="true">03</span> intended user
          </p>
          <h2 id="user-heading">Who this is for</h2>
          <p className="product-body">{product.targetUser}</p>
        </section>

        {/* Features */}
        <section className="product-block" aria-labelledby="features-heading">
          <p className="eyebrow">
            <span aria-hidden="true">04</span> core capabilities
          </p>
          <h2 id="features-heading">What Clarity does</h2>
          <div className="product-features-grid">
            {product.features.map((feature) => (
              <article className="product-feature-card" key={feature.id} id={`feature-${feature.id}`}>
                <span className="product-feature-card__icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Design principles */}
        <section className="product-block" aria-labelledby="principles-heading">
          <p className="eyebrow">
            <span aria-hidden="true">05</span> design direction
          </p>
          <h2 id="principles-heading">Design principles</h2>
          <ol className="product-principles-list">
            {product.designPrinciples.map((principle, i) => (
              <li key={i}>
                <span className="product-principle-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <span>{principle}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Phases */}
        <section className="product-block" aria-labelledby="phases-heading">
          <p className="eyebrow">
            <span aria-hidden="true">06</span> implementation
          </p>
          <h2 id="phases-heading">Phased plan</h2>
          <div className="product-phases">
            {product.phases.map((phase) => (
              <article className="product-phase" key={phase.phase}>
                <div className="product-phase__header">
                  <span className="product-phase__number" aria-hidden="true">
                    Phase {phase.phase}
                  </span>
                  <h3>{phase.title}</h3>
                </div>
                <ul className="product-phase__scope">
                  {phase.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="product-block" aria-labelledby="tech-heading">
          <p className="eyebrow">
            <span aria-hidden="true">07</span> technology
          </p>
          <h2 id="tech-heading">Proposed stack</h2>
          <ul className="tag-list">
            {product.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Launch project CTA */}
        {product.projectUrl && (
          <section className="product-block product-block--launch" aria-labelledby="launch-heading">
            <div className="product-launch-card">
              <div className="product-launch-card__content">
                <p className="eyebrow">
                  <span aria-hidden="true">08</span> live prototype
                </p>
                <h2 id="launch-heading" className="product-launch-card__title">
                  Try {product.name}
                </h2>
                <p className="product-launch-card__desc">
                  The prototype is running locally. Explore the full reading interface,
                  concept capture, research workspace, and deep-work session flow.
                </p>
              </div>
              <div className="product-launch-card__actions">
                <a
                  href={product.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary product-launch-btn"
                >
                  Open {product.name}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
                <span className="product-launch-card__note">
                  Opens in a new tab &middot; localhost:5174
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Footer nav */}
        <div className="product-footer-nav">
          <Link href="/product" className="inline-link inline-link--muted">
            <ArrowLeft size={14} aria-hidden="true" />
            All products
          </Link>
          <Link href="/#contact" className="button button--primary">
            Discuss this product
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </main>
  );
}
