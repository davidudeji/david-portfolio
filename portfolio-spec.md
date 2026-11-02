# Clarity: Product Discovery, Learning-System Design, and Technical Architecture

## Role

Act as a senior product strategist, learning-science researcher, UX architect, and full-stack software architect working together on one product.

Your responsibility is to transform the product vision below into a coherent, evidence-based, technically feasible specification.

Do not simply expand the feature list or generate a generic application plan.

Investigate the fundamental problem, identify the riskiest assumptions, select appropriate methods, define measurable outcomes, and recommend the smallest implementation that can validate the product's central value.

Clearly distinguish verified evidence, design hypotheses, technical assumptions, and recommendations.

Do not invent research findings, performance benchmarks, API capabilities, or test results.

## 1. Product vision

Clarity is a personal learning and deep-work application that helps users transform documents and reading materials into structured understanding, retained knowledge, organized research, and practical action.

Its central promise is:

"Understand what you read. Investigate what you don't know. Learn in the right order. Apply what matters."

The initial user is a knowledge worker who wants to improve productivity, concentration, technical knowledge, and the ability to learn independently.

The application should support both general learning and professional development.

The initial frontend stack is React, TypeScript, and Vite, with a separate Node.js and TypeScript backend.

## 2. The fundamental problem

Investigate this problem:

How can someone move from encountering unfamiliar information to understanding it, retaining it, and applying it without losing concentration or creating an unmanageable collection of notes, research tabs, and unfinished learning tasks?

Treat this as the central product question.

Determine which aspects of the problem belong in the first release and which should remain future capabilities.

Do not assume every requested feature contributes equally to the outcome.

## 3. Core capabilities

### A. Document ingestion and intelligent reading

Allow users to upload PDF and Word documents.

Investigate how to support:

- Original-document viewing.
- Clean, reflowable reading.
- Document outlines and section navigation.
- Chapter and section summaries.
- Explanations grounded in the uploaded material.
- Source-location tracking.
- Persistent reading position.
- Document processing status and recoverable failures.
- Scanned PDFs and OCR when required.
- Complex layouts, tables, footnotes, and technical terminology.

The application must not silently present incomplete or incorrectly ordered extracted text as reliable content.

Define appropriate behavior when extraction quality is poor.

### B. Synchronized narration

Design a reading experience that supports:

- Play, pause, resume, and seeking.
- Adjustable playback speed.
- Word-level highlighting where supported.
- Sentence-level highlighting.
- Automatic scrolling.
- Section and chapter navigation.
- Reading-position persistence.
- Reading selected passages or entire sections.
- Appropriate behavior when users navigate away or interrupt playback.

Investigate browser-native speech synthesis against speech services that provide word-level timestamps.

Compare voice quality, timing reliability, latency, operating costs, privacy, browser support, and offline behavior.

Do not assume browser speech synthesis guarantees reliable word-level synchronization.

Recommend a practical initial implementation and a fallback strategy.

### C. Concept capture and connected knowledge

When users select a passage, allow them to:

- Explain the passage.
- Investigate its meaning.
- Connect it to existing concepts.
- Attach research notes.
- Record unanswered questions.
- Create learning tasks.
- Link it to practical applications.

The primary requirement is not merely saving highlights. It is preserving the relationship between a passage, the user's question, subsequent research, the resulting understanding, and any practical application.

Design a data model and user workflow that preserve these relationships.

### D. Research workspace

Provide a research environment where users can investigate unfamiliar concepts without losing their original reading position.

Evaluate a staged approach:

1. An internal research workspace with persistent tabs and notes.
2. A later browser extension for capturing information from external browser tabs.
3. Optional AI-assisted web research, source comparison, and citation management.

Support source links, page titles, source metadata, notes, and links back to the passage that initiated the investigation.

Research must remain traceable.

Distinguish the claims made by the original author, the claims made by external sources, the AI's synthesis, and the user's own conclusions.

Do not assume an ordinary web application can freely inspect arbitrary browser tabs.

Recommend the smallest reliable implementation that validates the research workflow.

### E. Prerequisite-aware learning

Analyze documents and propose an ordered learning sequence.

Consider:

- The author's intended structure.
- Concepts explicitly present in the document.
- Necessary prerequisite knowledge.
- The user's learning objective.
- The user's existing knowledge.
- Evidence of misunderstanding.
- The importance of each concept to the user's goal.

The application must distinguish essential prerequisites from optional related research.

Let users inspect, override, and reorder recommendations.

Explain why a prerequisite is recommended.

Avoid creating endless chains of research that prevent users from completing their original learning objective.

### F. Understanding, retention, and application

Design a learning model that distinguishes:

1. Unfamiliar concepts.
2. Concepts the user can explain accurately.
3. Concepts the user can recall later.
4. Concepts the user can apply in an appropriate context.

Consider self-explanation, retrieval practice, spaced repetition, confidence calibration, and practical exercises.

Do not equate reading completion, AI-generated summaries, or quiz completion with mastery.

Specify what evidence is sufficient to update each learning state.

Allow uncertainty when the available evidence is insufficient.

### G. Deep-work support

Support distraction-free reading and focused learning sessions.

Consider:

- Session intentions.
- Focus timers.
- Temporary capture of unrelated thoughts.
- Deferred research queues.
- Session notes.
- Daily priorities.
- Learning progress.
- Action items derived from reading.

Design these features to reduce unnecessary task switching rather than encourage users to spend more time managing the application.

### H. Productivity learning path

Use the following books as foundational materials when the user has legally obtained copies:

- Getting Things Done — David Allen.
- Deep Work — Cal Newport.
- Atomic Habits — James Clear.

Use their actual contents as the authority for claims about what their authors teach.

Do not fabricate quotations or attribute an AI-created synthesis to an author.

Help users study the original material, identify connections between ideas, and apply relevant principles.

Treat any combined productivity framework as an explicitly labeled synthesis rather than an author's original framework.

Do not reproduce copyrighted books or create substitutes for their full contents.

## 4. Research requirements

Before making major product or architecture decisions, investigate relevant primary evidence and authoritative technical documentation.

Research these areas:

- Retrieval practice and spaced learning.
- Cognitive load and self-explanation.
- Metacognition and knowledge calibration.
- Task switching and attention.
- Document parsing and reading interfaces.
- Browser speech synthesis and timestamped speech.
- PDF and DOCX extraction.
- Browser extension permissions and limitations.
- Reliable source attribution in AI-assisted research.
- Privacy and security for uploaded documents.

Prioritize original research, systematic reviews, official API documentation, standards, and reproducible technical evidence.

Use current sources when capabilities, APIs, or costs may have changed.

For each important conclusion, identify the supporting evidence and its limitations.

Distinguish empirical findings from product hypotheses.

Do not make unsupported claims that a feature will improve productivity or learning.

## 5. Product discovery

Perform a structured analysis of the learning journey.

Map the following workflow:

1. Define a learning goal.
2. Upload a document.
3. Inspect its outline.
4. Begin reading.
5. Encounter an unfamiliar concept.
6. Capture the concept without interrupting reading.
7. Decide whether to research immediately or later.
8. Investigate the concept.
9. Save findings and source references.
10. Reconnect findings to the original passage.
11. Explain the concept independently.
12. Review it later.
13. Apply it to a practical task.

For every step, identify:

- User intention.
- Required information.
- Expected application behavior.
- Possible failure modes.
- Recovery behavior.
- Data that must persist.
- A measurable completion criterion.

Identify the most important unresolved user needs and recommend targeted usability tests.

## 6. Technical investigation

Identify the highest-risk assumptions before committing to the full architecture.

At minimum, define technical experiments for:

### Experiment A: Document fidelity

Test representative PDFs and DOCX files, including complex layouts and scanned pages.

Evaluate text extraction, heading detection, source-location tracking, reading order, and failure detection.

### Experiment B: Speech synchronization

Test actual word-boundary events and playback synchronization across supported browsers.

Measure highlighting accuracy, timing error, seeking, playback-speed changes, and resume behavior.

### Experiment C: Research persistence

Test saving research pages, notes, source metadata, and concept relationships across navigation and subsequent sessions.

### Experiment D: Learning-sequence quality

Evaluate generated learning sequences against source material and known prerequisite relationships.

Check whether recommendations are justified, whether optional topics are incorrectly treated as mandatory, and whether the sequence respects the user's existing knowledge.

For each experiment, define:

- Hypothesis.
- Test setup.
- Representative test data.
- Measurements.
- Acceptance threshold.
- Failure conditions.
- Consequences for architecture.

Do not claim an experiment has passed until actual results are available.

## 7. Proposed technology foundation

Start with the following candidates and change them only when supported by a clear technical reason.

Frontend:
- React.
- TypeScript.
- Vite.
- Accessible, reusable UI components.
- A consistent design system.

Backend:
- Node.js.
- TypeScript.
- Express or another justified API framework.
- Server-side AI orchestration.
- Document-processing services.

Data:
- PostgreSQL.
- Prisma or another justified database-access layer.
- Object storage for uploaded documents.
- A background-job mechanism when processing needs justify it.

Testing:
- Vitest for suitable unit and component tests.
- Playwright for end-to-end browser workflows.
- Appropriate backend integration tests.
- Representative document fixtures.
- Human-reviewed evaluation cases for AI behavior.

AI:
- A provider-independent integration layer where practical.
- Source-grounded document explanations.
- Structured outputs with schema validation.
- Explicit source attribution.
- Controlled handling of long documents.
- Evaluation of AI output quality and operating costs.

Research:
- A suitable search provider or supported research API.
- Source metadata and citation preservation.
- Clear separation between retrieved evidence and generated synthesis.

Do not add a technology merely because it is popular.

Explain the role, cost, benefits, risks, and alternatives of each major component.

Avoid unnecessary microservices or infrastructure for the first release.

## 8. Data architecture

Design the conceptual data model for:

- Users.
- Documents.
- Document versions.
- Sections and passages.
- Reading progress.
- Highlights.
- Concepts.
- Concept relationships.
- Questions.
- Research tabs and sources.
- Research notes.
- Learning goals.
- Learning paths.
- Prerequisite relationships.
- Learning attempts.
- Recall assessments.
- Review schedules.
- Focus sessions.
- Practical actions.

Identify the required entities for the first release and defer those that are not yet necessary.

Define important relationships, uniqueness constraints, persistence requirements, and deletion behavior.

Address document versioning so that a passage reference does not silently point to the wrong location after a document is replaced or reprocessed.

Do not generate a large schema without demonstrating why each entity is necessary.

## 9. Security and privacy

Specify safeguards for:

- Authentication and authorization.
- Private document storage.
- Upload validation and file-size limits.
- Malicious or malformed documents.
- Isolation of user data.
- Protection of AI provider credentials.
- Rate limits and usage budgets.
- Prompt injection contained within uploaded documents or retrieved web pages.
- Safe rendering of imported HTML and document content.
- Deletion and retention of documents and derived data.
- External AI processing and user disclosure.
- Research source validation.
- Auditability of consequential data changes.

Treat document contents and retrieved web pages as untrusted input.

Do not allow instructions embedded in documents or websites to override the application's system behavior or access controls.

## 10. Design direction

The product is called Clarity.

The interface should feel calm, focused, professional, and intellectually useful.

Prioritize:

- Reading space.
- Clear typography.
- A restrained visual hierarchy.
- Low-friction document navigation.
- A research workspace that does not overwhelm the reader.
- Useful concept relationships.
- Clear learning progress.
- Accessible keyboard and screen-reader interactions.
- Responsive behavior for desktop and mobile browsers.

Avoid decorative dashboards, unnecessary gamification, excessive cards, and visualizations that do not support a user task.

Define a small set of reusable components and interaction states before expanding the interface.

The primary reading workflow should be validated before building the full dashboard.

## 11. Independent evaluation

Define an evaluation plan that does not depend on the developer's opinion that the application looks complete.

Include:

### Document correctness
- Extraction accuracy.
- Reading-order accuracy.
- Source-location accuracy.
- Detection of incomplete extraction.

### Narration correctness
- Word-highlighting accuracy.
- Timing error.
- Seeking and resume reliability.
- Behavior across supported browsers.

### Learning quality
- Source fidelity.
- Accuracy of prerequisite recommendations.
- Quality of feedback on learner explanations.
- Distinction between understanding, retention, and application.

### Usability
- Task completion.
- Error frequency.
- Recovery from interruptions.
- Time required to complete representative workflows.
- User-reported cognitive burden.

### Learning outcomes
- Immediate comprehension.
- Delayed recall.
- Practical application.
- Study time and unnecessary interruptions.

Propose numerical acceptance criteria where appropriate, but label them as proposed targets until validated.

Explain how benchmark results will be recorded and how failures will influence design decisions.

Use human review where automated evaluation cannot reliably establish correctness.

## 12. Required deliverables

Produce the following outputs in order.

### Deliverable 1: Problem definition

State the core problem, intended user, desired outcome, and most important constraints.

Identify which assumptions still require evidence.

### Deliverable 2: Evidence and research register

Provide a concise research matrix containing:

- Question investigated.
- Source.
- Type of evidence.
- Relevant finding.
- Limitations.
- Product decision influenced.

Use verifiable citations.

### Deliverable 3: Product requirements

Define:

- Primary user journey.
- Functional requirements.
- Non-functional requirements.
- Failure states.
- Explicit exclusions.
- Measurable acceptance criteria.

### Deliverable 4: Interaction model

Describe the states and transitions connecting reading, capture, research, explanation, review, and application.

Show how the system preserves context when users move between these activities.

### Deliverable 5: Technical feasibility report

Report the proposed experiments, test cases, acceptance criteria, and architecture implications.

Clearly separate proposed experiments from experiments that have actually been performed.

### Deliverable 6: System architecture

Provide a justified architecture, major components, data flows, external dependencies, and the conceptual database model.

Include architecture decision records for consequential choices.

### Deliverable 7: Evaluation plan

Define independent tests for document handling, speech synchronization, research continuity, AI reliability, usability, and learning outcomes.

### Deliverable 8: Phased implementation plan

Organize development into small, independently testable stages.

The first stage must validate the complete central workflow:

Upload document → read → listen with synchronized highlighting → capture a concept → research → return to the source → explain the concept → schedule a review.

Prioritize vertical slices over building every layer of the system separately.

For each stage, specify:
- Scope.
- Prerequisites.
- Deliverables.
- Dependencies.
- Acceptance criteria.
- Known risks.
- Conditions for proceeding to the next stage.

### Deliverable 9: Implementation-ready specification

Produce the consolidated specification that a developer or coding agent can use without inventing missing product behavior.

Include:
- Project structure.
- API boundaries.
- Core data relationships.
- Key user flows.
- Error handling.
- Testing strategy.
- Security requirements.
- Environment configuration.
- Definition of done.

Do not generate the entire production application before the product and technical assumptions have been evaluated.

## 13. Working rules

1. Challenge assumptions when doing so improves the product.
2. Do not add features merely to make the specification appear comprehensive.
3. Prefer evidence over confident-sounding speculation.
4. Explain consequential trade-offs.
5. Keep the distinction between source material, AI inference, external evidence, and user interpretation explicit.
6. Never invent test results.
7. Do not confuse time spent reading with learning achieved.
8. Preserve the user's ability to override AI-generated recommendations.
9. Design for interruption recovery and persistent context.
10. Keep the first release small enough to validate with real users.
11. Make every important feature testable.
12. Identify unresolved decisions instead of silently making consequential assumptions.

## Final objective

Deliver a rigorous, evidence-based product and engineering specification for Clarity.

The result must demonstrate not merely that the application can be built, but that its core workflow is technically feasible, its learning logic is defensible, its behavior is testable, and its design addresses the actual friction of studying unfamiliar material.

Optimize for verified usefulness, not feature count.