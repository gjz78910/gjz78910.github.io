---
layout: printer
permalink: /
title: "About"
excerpt: "About me"
author_profile: false
redirect_from:
  - /printer/
  - /printer
---

## About

I'm an AI4SE researcher building trustworthy, efficient, and sustainable software using AI.

<div class="bio-para">
<div class="bio-para-text" markdown="1">
I currently work as a Research Associate in AI for Software Engineering at [King's College London](https://www.kcl.ac.uk/), contributing to the [ITEA4 GENIUS project](https://itea4.org/project/genius.html)—a multinational collaboration leveraging GenAI and LLMs to enhance software development life cycle. I am a member of the [Software Systems (SSY) group](https://www.kcl.ac.uk/research/ssy) in the [Department of Informatics](https://www.kcl.ac.uk/informatics), supervised by [Dr Jie M. Zhang](https://sites.google.com/view/jie-zhang/home), [Dr Gunel Jahangirova](https://www.kcl.ac.uk/people/gunel-jahangirova), and [Prof Mohammad Reza Mousavi](https://www.kcl.ac.uk/people/mohammad-reza-mousavi). My work focuses on developing quality assurance methods for LLM-based software engineering, ensuring the functionality, quality, and architectural soundness of both human and AI-generated software systems.
</div>
<img class="bio-logo" src="/images/event_images/kcl_logo.png" alt="King's College London" style="max-height: 100px;">
</div>

<div class="bio-para">
<div class="bio-para-text" markdown="1">
Previously, from June 2024 to November 2025, I worked as a [KTP Associate](https://www.ktp-uk.org/) with both the [University of Leeds](https://www.leeds.ac.uk/) and [TurinTech AI](https://www.turintech.ai/), focusing on compiler- and LLM-based code optimisation. We successfully completed the two-year KTP plan in just one and a half years. At the University of Leeds, I was a member of the [Intelligent Systems Software Lab (ISSL)](https://issl-uk.com/) and the [Distributed Systems and Services (DSS)](https://distributed-systems.leeds.ac.uk/) research group, supervised by [Prof Jie Xu](https://eps.leeds.ac.uk/computing/staff/331/professor-jie-xu) and [Prof Zheng Wang](https://zwang4.github.io/). At TurinTech AI, I was a member of the Data Science team led by [Dr Fan Wu](https://scholar.google.com/citations?user=p8z2_usAAAAJ&hl=en) and [Dr Paul Brookes](https://www.linkedin.com/in/paul-brookes-125288b2/).
</div>
<img class="bio-logo" src="/images/event_images/ktp_logos.png" alt="University of Leeds / TurinTech AI" style="max-height: 120px;">
</div>

<div class="bio-para">
<div class="bio-para-text" markdown="1">
I completed my PhD in Dec 2024 in the [Department of Computer Science](https://www.lboro.ac.uk/departments/compsci/) at [Loughborough University](https://www.lboro.ac.uk/), supervised by [Dr Tao Chen](https://scholar.google.co.uk/citations?user=K4teyvoAAAAJ&hl=en) in the [<kbd>IDEAS Laboratory</kbd>](https://ideas-labo.github.io/) (Intelligent Dependability Engineering for Adaptive Software Laboratory). My PhD thesis received the [SPEC Kaivalya Dixit Distinguished Dissertation Award 2024](https://research.spec.org/awards/past-winners/2024/), a prominent award in computer benchmarking, performance evaluation, and experimental system analysis.
</div>
<img class="bio-logo" src="/images/event_images/spec-award.jpg" alt="SPEC Kaivalya Dixit Distinguished Dissertation Award" style="max-height: 180px;">
</div>

## Research Interests

<div class="ri-briefs">
  <details class="ri-brief">
    <summary>Software Configuration Performance Engineering</summary>
    <div class="ri-brief-content">
      <p>Build data-driven <a href="https://dl.acm.org/doi/full/10.1145/3702986">ML/DL approaches</a> that learn high-dimensional configuration spaces to predict and optimise performance without exhaustive benchmarking, while tackling challenges such as <a href="https://ieeexplore.ieee.org/abstract/document/10744216">feature sparsity</a>, <a href="https://ieeexplore.ieee.org/abstract/document/10832565">rugged performance spaces</a>, and <a href="https://dl.acm.org/doi/abs/10.1145/3643743">cross-environment drift</a> (versions, hardware, workloads).</p>
      <img class="ri-brief-image" src="/images/event_images/config_perf_eng.jpeg" alt="Software Configuration Performance Engineering">
      <p class="ri-brief-why"><strong>Why it matters:</strong> Enables earlier performance issue detection, software adaptability and autoscaling, and faster product evolution with far fewer measurements.</p>
    </div>
  </details>
  <details class="ri-brief">
    <summary>Trustworthy AI-assisted Software Development</summary>
    <div class="ri-brief-content">
      <p>Develop quality assurance and optimisation methods for LLM-based software engineering, focusing on how we <a href="https://arxiv.org/abs/2601.04886">evaluate</a>, <a href="https://arxiv.org/abs/2601.04886">compare</a>, and improve AI-assisted coding workflows under realistic constraints (correctness, robustness, cost, sustainability), using SBSE-style strategies to orchestrate LLMs and make results more reliable in practice.</p>
      <img class="ri-brief-image" src="/images/event_images/trust_SDLC.jpeg" alt="Trustworthy AI-assisted Software Development">
      <p class="ri-brief-why"><strong>Why it matters:</strong> Transforms unverified, ad-hoc LLM-assisted coding into a reproducible engineering process, reducing computing resources and carbon footprint.</p>
    </div>
  </details>
  <details class="ri-brief">
    <summary>GenAI for Code Performance Optimisation</summary>
    <div class="ri-brief-content">
      <p>Apply <a href="https://arxiv.org/abs/2501.01277">search-based multi-LLM optimisation</a> and <a href="https://arxiv.org/abs/2508.01443">meta-prompting</a> for robust code scoring and optimisation, combined with <a href="https://arxiv.org/abs/2503.13505">ensembling</a> and compiler techniques; these methods are implemented in commercial platforms via <a href="https://www.turintech.ai/">TurinTech AI</a> and evaluated on real production workloads.</p>
      <img class="ri-brief-image" src="/images/event_images/code_opt.jpeg" alt="GenAI for Code Performance Optimisation">
      <p class="ri-brief-why"><strong>Why it matters:</strong> Delivers verifiable speedups and cost reductions on production codebases while making GenAI systems more reliable and auditable in practice.</p>
    </div>
  </details>
  <details class="ri-brief">
    <summary>General AI4SE &amp; SE4AI</summary>
    <div class="ri-brief-content">
      <p>Explore broader AI4SE and SE4AI directions including LLM performance modeling (hybrid models + online adaptive tuning), performance-aware GenAI systems (dynamic prompt engineering + configuration tuning), trustworthy GenAI (RLHF + uncertainty verification), and industry standards and tooling (benchmarks, profiling, static analysis, CI/CD integration).</p>
      <img class="ri-brief-image" src="/images/event_images/SE4AI.jpeg" alt="General AI4SE &amp; SE4AI">
      <p class="ri-brief-why"><strong>Why it matters:</strong> Makes GenAI systems predictable and safe in real-world workloads, enabling reproducible evaluation, faster industrial adoption, and lower compute and carbon footprints.</p>
    </div>
  </details>
</div>

If you're interested in collaboration, please feel free to reach out!

## News

<ul class="news-timeline">
  <li class="service"><span class="news-date">Feb 2026</span><span class="news-badge service">Service</span><span class="news-content">Served as <strong>Program Committee Member</strong> for <a href="https://conf.researchr.org/home/issta-2026"><em>ISSTA 2026</em></a>.</span></li>
  <li class="paper"><span class="news-date">Jan 2026</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2601.04886">Analyzing Message-Code Inconsistency in AI Coding Agent-Authored Pull Requests</a>' and '<a href="">Comparing AI Coding Agents: A Task-Stratified Analysis of Pull Request Acceptance</a>' accepted at <a href="https://2026.msrconf.org/track/msr-2026-mining-challenge#Call-for-Mining-Challenge-Papers">MSR 2026</a> Mining Challenge track.</span></li>
  <li class="service"><span class="news-date">Jan 2026</span><span class="news-badge service">Service</span><span class="news-content">Served as <strong>Program Committee Member</strong> for <a href="https://conf.researchr.org/home/icst-2026"><em>ICST 2026</em></a>.</span></li>
  <li class="award"><span class="news-date">Nov 2025</span><span class="news-badge award">Award</span><span class="news-content">Received the <strong>Distinguished Reviewer</strong> award at <a href="https://conf.researchr.org/home/icse-2025"><em>ICSE 2025</em></a> Shadow PC.</span></li>
  <li class="service"><span class="news-date">Oct 2025</span><span class="news-badge service">Service</span><span class="news-content">Served as <strong>Junior Program Committee Member</strong> for <a href="https://2026.msrconf.org/"><em>MSR 2026</em></a>.</span></li>
  <li class="paper"><span class="news-date">Oct 2025</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="placeholder-link">GA4GC: Greener Agent for Greener Code via Multi-Objective Configuration Optimization</a>' accepted at <a href="https://conf.researchr.org/home/ssbse-2025">SSBSE 2025</a> as a challenge track paper.</span></li>
  <li class="service"><span class="news-date">Sep 2025</span><span class="news-badge service">Service</span><span class="news-content">Served as <strong>Program Committee Member</strong> for <a href="https://www2026.thewebconf.org/"><em>WWW 2026</em></a>.</span></li>
  <li class="paper"><span class="news-date">Sep 2025</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2508.01443">Tuning LLM-based Code Optimization via Meta-Prompting: An Industrial Perspective</a>' accepted at <a href="https://conf.researchr.org/home/ase-2025">ASE 2025</a> as an industry showcase paper (acceptance rate 44%, 61/139).</span></li>
  <li class="service"><span class="news-date">Jul 2025</span><span class="news-badge service">Service</span><span class="news-content">Served as <strong>Shadow Program Committee Member</strong> for <a href="https://conf.researchr.org/home/icse-2026"><em>ICSE 2026</em></a>.</span></li>
  <li class="paper"><span class="news-date">Jun 2025</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2507.08730">Dually Hierarchical Drift Adaptation for Online Configuration Performance Learning</a>' accepted at <a href="https://conf.researchr.org/home/icse-2026">ICSE 2026</a> in the first round (acceptance rate 9.29%, 60/646).</span></li>
  <li class="paper"><span class="news-date">Jun 2025</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://dl.acm.org/doi/abs/10.1145/3750040">Learning Software Bug Reports: A Systematic Literature Review</a>' accepted at <a href="https://dl.acm.org/toc/tosem/justaccepted">TOSEM</a> as a journal paper.</span></li>
  <li class="award"><span class="news-date">Jan 2025</span><span class="news-badge award">Award</span><span class="news-content">Awarded the <a href="https://research.spec.org/news/2025-01-31-00-00-winner-of-spec-kaivalya-dixit-distinguished-dissertation-award-2024/"><strong>SPEC Kaivalya Dixit Distinguished Dissertation Award 2024</strong></a>, a prominent award in computer benchmarking, performance evaluation, and experimental system analysis.</span></li>
</ul>

<button id="toggle-older-news" class="news-toggle-btn" onclick="toggleOlderNews()">Show older news</button>

<div id="older-news" style="display: none; margin-top: 0.5rem;">
<ul class="news-timeline">
  <li class="paper"><span class="news-date">Nov 2024</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://ieeexplore.ieee.org/abstract/document/10832565">Accuracy Can Lie: On the Impact of Surrogate Model in Configuration Tuning</a>' accepted at <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32">TSE</a> as a journal paper.</span></li>
  <li class="paper"><span class="news-date">Oct 2024</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2409.07629">Dividable Configuration Performance Learning</a>' accepted at <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32">TSE</a> as a journal paper.</span></li>
  <li class="service"><span class="news-date">Sep 2024</span><span class="news-badge service">Service</span><span class="news-content">Served as <strong>Junior Program Committee Member</strong> for <a href="https://conf.researchr.org/home/msr-2025"><em>MSR 2025</em></a>.</span></li>
  <li class="paper"><span class="news-date">Aug 2024</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2403.03322">Deep Configuration Performance Learning: A Systematic Survey and Taxonomy</a>' accepted at <a href="https://dl.acm.org/journal/tosem">TOSEM</a> as a survey paper.</span></li>
  <li class="award"><span class="news-date">Jul 2024</span><span class="news-badge award">Award</span><span class="news-content">The team I led received the <strong>SSBSE'24 Challenge Track award</strong> for '<a href="https://arxiv.org/abs/2407.14982">GreenStableYolo: Optimizing Inference Time and Image Quality of Text-to-Image Generation</a>'.</span></li>
  <li class="paper"><span class="news-date">May 2024</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2407.14982">GreenStableYolo: Optimizing Inference Time and Image Quality of Text-to-Image Generation</a>' accepted at <a href="https://conf.researchr.org/track/ssbse-2024/ssbse-2024-challenge">SSBSE 2024</a> as a challenge track paper.</span></li>
  <li class="paper"><span class="news-date">Jan 2024</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2402.03183">Predicting Configuration Performance in Multiple Environments with Sequential Meta-Learning</a>' accepted at <a href="https://conf.researchr.org/home/fse-2024">FSE 2024</a> (acceptance rate 11.6%, 56/483).</span></li>
  <li class="paper"><span class="news-date">May 2023</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/pdf/2306.06651">Predicting Software Performance with Divide-and-Learn</a>' accepted at <a href="https://2023.esec-fse.org/">ESEC/FSE 2023</a> (acceptance rate 12.7%, 60/473).</span></li>
  <li class="paper"><span class="news-date">May 2022</span><span class="news-badge paper">Paper</span><span class="news-content">'<a href="https://arxiv.org/abs/2203.15988">Does Configuration Encoding Matter in Learning Software Performance? An Empirical Study on Encoding Schemes</a>' accepted at <a href="https://conf.researchr.org/details/msr-2022/msr-2022-technical-papers/1/Does-Configuration-Encoding-Matter-in-Learning-Software-Performance-An-Empirical-Stu">MSR 2022</a> (acceptance rate 34%, 45/138).</span></li>
</ul>
</div>

<script>
function toggleOlderNews() {
  const olderNews = document.getElementById('older-news');
  const button = document.getElementById('toggle-older-news');
  if (olderNews.style.display === 'none') {
    olderNews.style.display = 'block';
    button.textContent = 'Hide older news';
  } else {
    olderNews.style.display = 'none';
    button.textContent = 'Show older news';
  }
}
</script>

## Further Background
I received first-class BSc degree from both the [Information and Computing Science](https://www.xjtlu.edu.cn/en/study/undergraduate/information-and-computing-science)
programme at [Xi'an Jiaotong-Liverpool University](https://www.xjtlu.edu.cn/) (2014-16), and the [Computer Science](https://www.liverpool.ac.uk/courses/2024/computer-science-bsc-hons) 
course at [University of Liverpool](https://www.liverpool.ac.uk/) (2016-18).

<style>
.bio-para {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.bio-para-text { flex: 1; min-width: 0; text-align: justify; }
.bio-logo { width: auto; border-radius: 4px; flex-shrink: 0; }
@media (max-width: 640px) {
  .bio-para { flex-direction: column; align-items: flex-start; margin-bottom: 1.5rem; }
  .bio-logo { align-self: center; margin-top: 0.2rem; margin-bottom: 0; }
}
.ri-briefs {
  margin: 0.5rem 0 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.ri-brief {
  border: 1px solid #ded7ca;
  border-radius: 4px;
  background: rgba(255,255,255,0.5);
  padding: 0.35rem 0.65rem;
}
.ri-brief summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 0.92em;
  list-style: none;
}
.ri-brief summary::-webkit-details-marker {
  display: none;
}
.ri-brief summary::before {
  content: "▸ ";
  color: #666;
}
.ri-brief[open] summary::before {
  content: "▾ ";
}
.ri-brief-content {
  margin: 0.5rem 0 0.2rem;
}
.ri-brief-content p {
  font-size: 0.86em;
  line-height: 1.5;
  margin: 0 0 0.55rem;
  text-align: left;
}
.ri-brief-content .ri-brief-image {
  display: block;
  width: 100% !important;
  max-width: 600px !important;
  height: auto !important;
  margin: 0.35rem auto 0.55rem;
  border-radius: 4px;
}
.ri-brief-why {
  color: #555;
  border-top: 1px solid #e5ded3;
  padding-top: 0.5rem;
}
.news-timeline {
  list-style: none;
  --news-date-w: 5rem;
  --news-tag-w: 3.5rem;
  --news-gap: 1.5rem;
  --news-line-x: calc(var(--news-date-w) + (var(--news-gap) / 2));
  padding: 0;
  margin: 0.75rem 0 0.5rem -6rem;
  position: relative;
  width: 100%;
  max-width: none;
}
.news-timeline::before {
  content: '';
  position: absolute;
  left: var(--news-line-x);
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
}
.news-timeline li {
  display: grid;
  grid-template-columns: var(--news-date-w) var(--news-tag-w) minmax(0, 1fr);
  column-gap: var(--news-gap);
  align-items: start;
  position: relative;
  padding: 0 0 0.9rem 0;
  font-size: 0.9em;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  margin: 0;
}
.news-timeline li::before {
  content: '';
  position: absolute;
  left: var(--news-line-x);
  top: 0.6em;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
}
.news-timeline li.paper::before  { background: #5cb85c; }
.news-timeline li.award::before   { background: #e06666; }
.news-timeline li.service::before { background: #0087BD; }
.news-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 var(--news-tag-w);
  min-width: var(--news-tag-w);
  text-align: center;
  padding: .22em .6em .26em;
  font-size: 75%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  line-height: 1.05;
  border-radius: .25em;
  border: none;
  background-repeat: no-repeat;
  box-shadow: none;
  white-space: nowrap;
  vertical-align: middle;
  margin-right: 0;
  align-self: start;
  margin-top: 0.06em;
}
.news-badge::before,
.news-badge::after {
  content: none;
}
.news-badge.paper   { background-color: #56ae5d; }
.news-badge.award   { background-color: #cf6363; }
.news-badge.service { background-color: #1988b8; }
.news-date {
  grid-column: 1;
  text-align: right;
  font-size: 0.83em;
  color: #999;
  line-height: 1.2;
  padding-top: 0.16em;
  white-space: nowrap;
}
.news-content {
  grid-column: 3;
  min-width: 0;
  overflow-wrap: break-word;
  align-self: start;
  margin-top: -0.1em;
}
@media (max-width: 768px) {
  .news-timeline {
    --news-date-w: 3.5rem;
    --news-tag-w: 3.5rem;
    --news-gap: 1rem;
    --news-line-x: calc(var(--news-date-w) + (var(--news-gap) / 2));
    margin-left: -10em;
  }
  .news-date {
    font-size: 0.79em;
  }
}
@media (max-width: 480px) {
  .news-timeline {
    --news-date-w: 3.5rem;
    --news-tag-w: 3.5rem;
    --news-gap: 1rem;
    --news-line-x: calc(var(--news-date-w) + (var(--news-gap) / 2));
    margin-left: -10em;
  }
  .news-badge { font-size: 68%; }
}
.news-toggle-btn {
  background: linear-gradient(to bottom, #f8f4ec 0%, #eae3d6 100%);
  border: 1px solid #bfb7aa;
  border-radius: 4px;
  color: #5a544a;
  cursor: pointer;
  font-size: 0.82em;
  letter-spacing: 0.3px;
  padding: 0.28rem 0.68rem;
  margin: 0.15rem 0 0.55rem 0;
  display: inline-block;
  box-shadow:
    0 1px 0 rgba(255,255,255,0.75) inset,
    0 1px 2px rgba(0,0,0,0.08);
}
.news-toggle-btn:hover {
  border-color: #aaa192;
  background: linear-gradient(to bottom, #fbf8f1 0%, #efe8db 100%);
}
</style>
