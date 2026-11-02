import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductIndexPage() {
  return (
    <main className="page-shell">
      <div className="container page-stack">
        <header className="page-header page-header--stacked">
          <p className="eyebrow">
            <span aria-hidden="true">01</span> product work
          </p>
          <h1>Products I&apos;m building</h1>
          <p className="lede" style={{ marginTop: "12px", maxWidth: "640px" }}>
            Beyond client and contract work, I build products from scratch — from
            problem definition through architecture, design, and implementation.
          </p>
        </header>

        <div className="product-index-grid">
          {products.map((product) => (
            <article className="product-index-card" key={product.id} id={product.id}>
              <div className="product-index-card__header">
                <div className="product-index-card__meta">
                  <span className="chip">{product.status}</span>
                  <span className="project-card__role">{product.category}</span>
                </div>
                <h2>{product.name}</h2>
                <p className="product-index-card__tagline">{product.tagline}</p>
              </div>

              <p className="product-index-card__summary">{product.summary}</p>

              <ul className="tag-list">
                {product.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <Link href={product.href} className="inline-link">
                View full product spec
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
