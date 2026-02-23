---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm an AI4SE researcher building trustworthy, efficient, and sustainable software using AI.

<style>
.bio-para { overflow: hidden; margin-bottom: 1em; }
.bio-logo { float: right; max-height: 120px; width: auto; margin: 0.1em 0 0.6em 1.2em; border-radius: 4px; }
</style>

<div class="bio-para" markdown="1">
<img class="bio-logo" src="/images/event_images/kcl_logo.png" alt="King's College London" style="max-height: 100px;">
I currently work as a Research Associate in AI for Software Engineering at [King's College London](https://www.kcl.ac.uk/), contributing to the [ITEA GENIUS project](https://itea4.org/project/genius.html)—a multinational collaboration leveraging GenAI and LLMs to enhance software development life cycle. I am a member of the [Software Systems (SSY) group](https://www.kcl.ac.uk/research/ssy) in the [Department of Informatics](https://www.kcl.ac.uk/informatics), supervised by [Dr Jie M. Zhang](https://www.kcl.ac.uk/people/jie-zhang), [Dr Gunel Jahangirova](https://www.kcl.ac.uk/people/gunel-jahangirova), and [Prof Mohammad Reza Mousavi](https://www.kcl.ac.uk/people/mohammad-reza-mousavi). My work focuses on developing quality assurance methods for LLM-based software engineering, ensuring the functionality, quality, and architectural soundness of both human and AI-generated software systems.
</div>

<div class="bio-para" markdown="1">
<img class="bio-logo" src="/images/event_images/ktp_logos.jpg" alt="University of Leeds / TurinTech AI" style="max-height: 120px;">
Previously, from June 2024 to November 2025, I worked as a postdoctoral [KTP Associate](https://www.ktp-uk.org/) with both the [University of Leeds](https://www.leeds.ac.uk/) and [TurinTech AI](https://www.turintech.ai/), focusing on compiler- and LLM-based code optimisation. We successfully completed the two-year KTP plan in just one and a half years. At the University of Leeds, I was a member of the [Intelligent Systems Software Lab (ISSL)](https://issl-uk.com/) and the [Distributed Systems and Services (DSS)](https://distributed-systems.leeds.ac.uk/) research group, supervised by [Prof Jie Xu](https://eps.leeds.ac.uk/computing/staff/331/professor-jie-xu) and [Prof Zheng Wang](https://zwang4.github.io/). At TurinTech AI, I was a member of the Data Science team led by [Dr Fan Wu](https://scholar.google.com/citations?user=p8z2_usAAAAJ&hl=en) and [Dr Paul Brookes](https://www.linkedin.com/in/paul-brookes-125288b2/).
</div>

<div class="bio-para" markdown="1">
<img class="bio-logo" src="/images/event_images/spec-award.jpg" alt="SPEC Kaivalya Dixit Distinguished Dissertation Award" style="max-height: 160px;">
I completed my PhD in Dec 2024 in the [Department of Computer Science](https://www.lboro.ac.uk/departments/compsci/) at [Loughborough University](https://www.lboro.ac.uk/), supervised by [Dr Tao Chen](https://scholar.google.co.uk/citations?user=K4teyvoAAAAJ&hl=en) in the [<kbd>IDEAS Laboratory</kbd>](https://ideas-labo.github.io/) (Intelligent Dependability Engineering for Adaptive Software Laboratory). My PhD thesis received the [SPEC Kaivalya Dixit Distinguished Dissertation Award 2024](https://research.spec.org/awards/past-winners/2024/), a prominent award in computer benchmarking, performance evaluation, and experimental system analysis.
</div>

## Research Interests

<style>
.research-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin: 1rem 0 1.5rem 0;
}
.research-card {
  border: 1px solid #e0e0e0;
  border-top: 3px solid #5cb85c;
  border-radius: 4px;
  padding: 1rem 1.1rem 0.9rem;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.10);
}
.research-card-title {
  font-weight: bold;
  font-size: 0.95em;
  margin-bottom: 0.6rem;
  color: #222;
}
.research-card-body {
  font-size: 0.88em;
  line-height: 1.55;
  margin-bottom: 0.75rem;
}
.research-card-why {
  font-size: 0.83em;
  color: #555;
  border-top: 1px solid #eee;
  padding-top: 0.55rem;
  line-height: 1.45;
}
@media (max-width: 640px) {
  .research-grid { grid-template-columns: 1fr; }
}
</style>

<div class="research-grid">

  <div class="research-card">
    <div class="research-card-title">Software Configuration Performance Engineering</div>
    <div class="research-card-body">
      Data-driven <a href="https://dl.acm.org/doi/full/10.1145/3702986">ML/DL approaches</a> that learn high‑dimensional configuration spaces to predict and optimise performance without exhaustive benchmarking, tackling challenges such as <a href="https://ieeexplore.ieee.org/abstract/document/10744216">feature sparsity</a>, <a href="https://ieeexplore.ieee.org/abstract/document/10832565">rugged performance spaces</a>, and <a href="https://dl.acm.org/doi/abs/10.1145/3643743">cross‑environment drift</a> (versions, hardware, workloads).
    </div>
    <div class="research-card-why"><strong>Why it matters:</strong> Enables earlier performance issue detection, software adaptability and autoscaling, and faster product evolution with far fewer measurements.</div>
  </div>

  <div class="research-card">
    <div class="research-card-title">Trustworthy AI-assisted Software Development</div>
    <div class="research-card-body">
      Quality assurance and optimisation methods for LLM‑based software engineering — focusing on how we <a href="https://arxiv.org/abs/2601.04886">evaluate</a>, <a href="https://arxiv.org/abs/2601.04886">compare</a>, and improve AI-assisted coding workflows under realistic constraints (correctness, robustness, cost, sustainability), using SBSE‑style strategies to orchestrate LLMs and make results more reliable in practice.
    </div>
    <div class="research-card-why"><strong>Why it matters:</strong> Transforms unverified, ad-hoc LLM-assisted coding into a reproducible engineering process, reducing computing resources and carbon footprint.</div>
  </div>

  <div class="research-card">
    <div class="research-card-title">GenAI for Code Performance Optimisation</div>
    <div class="research-card-body">
      <a href="https://arxiv.org/abs/2501.01277">Search-based multi‑LLM optimisation</a> and <a href="https://arxiv.org/abs/2508.01443">meta‑prompting</a> for robust code scoring and optimisation, combined with <a href="https://arxiv.org/abs/2503.13505">ensembling</a> and compiler techniques; implemented in commercial platforms via <a href="https://www.turintech.ai/">TurinTech AI</a> and evaluated on real production workloads.
    </div>
    <div class="research-card-why"><strong>Why it matters:</strong> Delivers verifiable speedups and cost reductions on production codebases while making GenAI systems more reliable and auditable in practice.</div>
  </div>

  <div class="research-card">
    <div class="research-card-title">General AI4SE &amp; SE4AI</div>
    <div class="research-card-body">
      LLM performance modeling (hybrid models + online adaptive tuning), performance‑aware GenAI systems (dynamic prompt engineering + configuration tuning), trustworthy GenAI (RLHF + uncertainty verification), and industry standards and tooling (benchmarks, profiling, static analysis, CI/CD integration).
    </div>
    <div class="research-card-why"><strong>Why it matters:</strong> Makes GenAI systems predictable and safe in real-world workloads, enabling reproducible evaluation, faster industrial adoption, and lower compute and carbon footprints.</div>
  </div>

</div>

If you’re interested in collaboration, please feel free to reach out!

## News

<style>
.news-timeline {
  list-style: none;
  padding: 0 0 0 1.3rem;
  margin: 0.75rem 0 0.5rem;
  border-left: 2px solid #e0e0e0;
}
.news-timeline li {
  position: relative;
  padding: 0 0 0.85rem 0.5rem;
  font-size: 0.9em;
  line-height: 1.5;
}
.news-timeline li::before {
  content: '';
  position: absolute;
  left: -1.55rem;
  top: 0.38em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
}
.news-timeline li.paper::before  { background: #5cb85c; }
.news-timeline li.award::before   { background: #e06666; }
.news-timeline li.service::before { background: #0087BD; }
.news-badge {
  display: inline;
  padding: .15em .5em .2em;
  font-size: 72%;
  font-weight: bold;
  color: #fff;
  border-radius: .25em;
  white-space: nowrap;
  vertical-align: middle;
  margin-right: 0.25em;
}
.news-badge.paper   { background: #5cb85c; }
.news-badge.award   { background: #e06666; }
.news-badge.service { background: #0087BD; }
.news-date {
  font-size: 0.83em;
  color: #999;
  margin-right: 0.3em;
}
.news-toggle-btn {
  background: none;
  border: none;
  border-bottom: 1px dotted #5cb85c;
  color: #5cb85c;
  cursor: pointer;
  font-size: 0.88em;
  padding: 0;
  margin: 0 0 0.5rem 0;
  display: inline-block;
}
</style>

<ul class="news-timeline">
  <li class="service"><span class="news-badge service">Service</span><span class="news-date">Feb 2026</span>Invited as <strong>Program Committee Member</strong> for the <em>ACM SIGSOFT International Symposium on Software Testing and Analysis</em> <a href="https://conf.researchr.org/home/issta-2026">(ISSTA 2026)</a>.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Jan 2026</span>'<a href="https://arxiv.org/abs/2601.04886">Analyzing Message-Code Inconsistency in AI Coding Agent-Authored Pull Requests</a>' and '<a href="">Comparing AI Coding Agents: A Task-Stratified Analysis of Pull Request Acceptance</a>' accepted at <a href="https://2026.msrconf.org/track/msr-2026-mining-challenge#Call-for-Mining-Challenge-Papers">MSR 2026</a> Mining Challenge track.</li>
  <li class="service"><span class="news-badge service">Service</span><span class="news-date">Jan 2026</span>Selected as <strong>Program Committee Member</strong> for the <em>IEEE International Conference on Software Testing, Verification and Validation</em> <a href="https://conf.researchr.org/home/icst-2026">(ICST 2026)</a>.</li>
  <li class="award"><span class="news-badge award">Award</span><span class="news-date">Nov 2025</span>Received the <strong>Distinguished Reviewer</strong> award at the <em>IEEE/ACM International Conference on Software Engineering</em> <a href="https://conf.researchr.org/home/icse-2025">(ICSE 2025)</a> Shadow PC.</li>
  <li class="service"><span class="news-badge service">Service</span><span class="news-date">Oct 2025</span>Selected as <strong>Junior Program Committee member</strong> for the <em>ACM/IEEE International Conference on Mining Software Repositories</em> <a href="https://2026.msrconf.org/">(MSR 2026)</a>.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Oct 2025</span>'<a href="placeholder-link">GA4GC: Greener Agent for Greener Code via Multi-Objective Configuration Optimization</a>' accepted at <a href="https://conf.researchr.org/home/ssbse-2025">SSBSE 2025</a> as a challenge track paper.</li>
  <li class="service"><span class="news-badge service">Service</span><span class="news-date">Sep 2025</span>Invited as <strong>Program Committee Member</strong> for the <em>ACM Web Conference</em> <a href="https://www2026.thewebconf.org/">(WWW 2026)</a>.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Sep 2025</span>'<a href="https://arxiv.org/abs/2508.01443">Tuning LLM-based Code Optimization via Meta-Prompting: An Industrial Perspective</a>' accepted at <a href="https://conf.researchr.org/home/ase-2025">ASE 2025</a> as an industry showcase paper (acceptance rate 44%, 61/139).</li>
  <li class="service"><span class="news-badge service">Service</span><span class="news-date">Jul 2025</span>Selected as <strong>Shadow Program Committee Member</strong> for the <em>IEEE/ACM International Conference on Software Engineering</em> <a href="https://conf.researchr.org/home/icse-2026">(ICSE 2026)</a>.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Jun 2025</span>'<a href="https://arxiv.org/abs/2507.08730">Dually Hierarchical Drift Adaptation for Online Configuration Performance Learning</a>' accepted at <a href="https://conf.researchr.org/home/icse-2026">ICSE 2026</a> in the first round (acceptance rate 9.29%, 60/646).</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Jun 2025</span>'<a href="https://dl.acm.org/doi/abs/10.1145/3750040">Learning Software Bug Reports: A Systematic Literature Review</a>' accepted at <a href="https://dl.acm.org/toc/tosem/justaccepted">TOSEM</a> as a journal paper.</li>
  <li class="award"><span class="news-badge award">Award</span><span class="news-date">Jan 2025</span>Awarded the <a href="https://research.spec.org/news/2025-01-31-00-00-winner-of-spec-kaivalya-dixit-distinguished-dissertation-award-2024/"><strong>SPEC Kaivalya Dixit Distinguished Dissertation Award 2024</strong></a>, a prominent award in computer benchmarking, performance evaluation, and experimental system analysis.</li>
</ul>

<button id="toggle-older-news" class="news-toggle-btn" onclick="toggleOlderNews()">Show older news</button>

<div id="older-news" style="display: none; margin-top: 0.5rem;">
<ul class="news-timeline">
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Nov 2024</span>'<a href="https://ieeexplore.ieee.org/abstract/document/10832565">Accuracy Can Lie: On the Impact of Surrogate Model in Configuration Tuning</a>' accepted at <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32">TSE</a> as a journal paper.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Oct 2024</span>'<a href="https://arxiv.org/abs/2409.07629">Dividable Configuration Performance Learning</a>' accepted at <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32">TSE</a> as a journal paper.</li>
  <li class="service"><span class="news-badge service">Service</span><span class="news-date">Sep 2024</span>Selected as <strong>Junior Program Committee member</strong> for the <em>ACM/IEEE International Conference on Mining Software Repositories</em> <a href="https://conf.researchr.org/home/msr-2025">(MSR 2025)</a>.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Aug 2024</span>'<a href="https://arxiv.org/abs/2403.03322">Deep Configuration Performance Learning: A Systematic Survey and Taxonomy</a>' accepted at <a href="https://dl.acm.org/journal/tosem">TOSEM</a> as a survey paper.</li>
  <li class="award"><span class="news-badge award">Award</span><span class="news-date">Jul 2024</span>The team I led received the <strong>SSBSE'24 Challenge Track award</strong> for '<a href="https://arxiv.org/abs/2407.14982">GreenStableYolo: Optimizing Inference Time and Image Quality of Text-to-Image Generation</a>'.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">May 2024</span>'<a href="https://arxiv.org/abs/2407.14982">GreenStableYolo: Optimizing Inference Time and Image Quality of Text-to-Image Generation</a>' accepted at <a href="https://conf.researchr.org/track/ssbse-2024/ssbse-2024-challenge">SSBSE 2024</a> as a challenge track paper.</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">Jan 2024</span>'<a href="https://arxiv.org/abs/2402.03183">Predicting Configuration Performance in Multiple Environments with Sequential Meta-Learning</a>' accepted at <a href="https://conf.researchr.org/home/fse-2024">FSE 2024</a> (acceptance rate 11.6%, 56/483).</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">May 2023</span>'<a href="https://arxiv.org/pdf/2306.06651">Predicting Software Performance with Divide-and-Learn</a>' accepted at <a href="https://2023.esec-fse.org/">ESEC/FSE 2023</a> (acceptance rate 12.7%, 60/473).</li>
  <li class="paper"><span class="news-badge paper">Paper</span><span class="news-date">May 2022</span>'<a href="https://arxiv.org/abs/2203.15988">Does Configuration Encoding Matter in Learning Software Performance? An Empirical Study on Encoding Schemes</a>' accepted at <a href="https://conf.researchr.org/details/msr-2022/msr-2022-technical-papers/1/Does-Configuration-Encoding-Matter-in-Learning-Software-Performance-An-Empirical-Stu">MSR 2022</a> (acceptance rate 34%, 45/138).</li>
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

## Selected Publications

<style>
.pub-filters {
  margin: 0.5rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.pub-filter {
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding: .3em .9em;
  font-size: 0.85em;
  cursor: pointer;
  color: #555;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.pub-filter:hover {
  border-color: #5cb85c;
  color: #5cb85c;
}
.pub-filter.active {
  background: #5cb85c;
  border-color: #5cb85c;
  color: #fff;
}
.pub-list { margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.pub-item {
  font-size: 0.9em;
  text-align: justify;
  line-height: 1.5;
  padding: 0.6rem 0.85rem;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.pub-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.09);
}
.pub-badge {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
.pub-badge.venue   { background: #5cb85c; }
.pub-badge.ccf     { background: #e06666; }
.pub-badge.ranking { background: #0087BD; }
</style>

<div class="pub-filters">
  <button class="pub-filter active" data-filter="all">All</button>
  <button class="pub-filter" data-filter="journal">Journal</button>
  <button class="pub-filter" data-filter="conference">Conference</button>
</div>

<div class="pub-list">
  <div class="pub-item" data-type="conference"><span class="pub-badge venue">MSR'26</span> <span class="pub-badge ccf">CCF-C</span> <span class="pub-badge ranking">CORE-A</span> <b>J. Gong</b>, G. Pinna, Y. Bian, and J. M. Zhang, <a href="https://arxiv.org/abs/2601.04886">Analyzing Message-Code Inconsistency in AI Coding Agent-Authored Pull Requests</a>, The ACM/IEEE International Conference on Mining Software Repositories Mining Challenge Track <a href="https://2026.msrconf.org/track/msr-2026-mining-challenge#Call-for-Mining-Challenge-Papers">(MSR 2026)</a>, 2026.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">MSR'26</span> <span class="pub-badge ccf">CCF-C</span> <span class="pub-badge ranking">CORE-A</span> G. Pinna, <b>J. Gong</b>, D. Williams, and F. Sarro, <a href="https://arxiv.org/abs/2601.04886">Comparing AI Coding Agents: A Task-Stratified Analysis of Pull Request Acceptance</a>, The ACM/IEEE International Conference on Mining Software Repositories Mining Challenge Track <a href="https://2026.msrconf.org/track/msr-2026-mining-challenge#Call-for-Mining-Challenge-Papers">(MSR 2026)</a>, 2026.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">ICSE'26</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">CORE-A*</span> Z. Xiang, <b>J. Gong</b>, and T. Chen, <a href="https://arxiv.org/abs/2507.08730">Dually Hierarchical Drift Adaptation for Online Configuration Performance Learning</a>, The IEEE/ACM International Conference on Software Engineering <a href="https://conf.researchr.org/home/icse-2026">(ICSE)</a>, 2026, 13 pages.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">ASE'25</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">CORE-A*</span> <b>J. Gong</b>, R. Giavrimis, P. Brookes, V. Voskanyan, F. Wu, M. Ashiga, M. Truscott, M. Basios, L. Kanthan, J. Xu, and Z. Wang, <a href="https://arxiv.org/abs/2508.01443">Tuning LLM-based Code Optimization via Meta-Prompting: An Industrial Perspective</a>, The IEEE/ACM International Conference on Automated Software Engineering <a href="https://conf.researchr.org/home/ase-2025">(ASE)</a>, 2025, 12 pages.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">SSBSE'25</span> <span class="pub-badge ccf">Challenge Track</span> <span class="pub-badge ranking">CORE-B</span> <b>J. Gong</b>, Y. Bian, L. de la Cal, G. Pinna, A. Uteem, D. Williams, M. Zamorano, K. Even-Mendoza, W. B. Langdon, H. Menendez, and F. Sarro, <a href="placeholder-link">GA4GC: Greener Agent for Greener Code via Multi-Objective Configuration Optimization</a>, The Symposium on Search-Based Software Engineering Challenge Track <a href="https://conf.researchr.org/home/ssbse-2025">(SSBSE 2025)</a>, 2025.</div>

  <div class="pub-item" data-type="journal"><span class="pub-badge venue">TOSEM'25</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">JCR-Q1</span> G. Long, <b>J. Gong</b>, H. Fang, and T. Chen, <a href="https://dl.acm.org/doi/abs/10.1145/3750040">Learning Software Bug Reports: A Systematic Literature Review</a>, The ACM Transactions on Software Engineering and Methodology <a href="https://dl.acm.org/toc/tosem/justaccepted">(TOSEM)</a>, 2025, 47 pages.</div>

  <div class="pub-item" data-type="journal"><span class="pub-badge venue">TSE'24</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">JCR-Q1</span> P. Chen, <b>J. Gong</b>, and T. Chen, <a href="https://ieeexplore.ieee.org/abstract/document/10832565">Accuracy Can Lie: On the Impact of Surrogate Model in Configuration Tuning</a>, The IEEE Transactions on Software Engineering <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32">(TSE)</a>, 2024, 33 pages.</div>

  <div class="pub-item" data-type="journal"><span class="pub-badge venue">TSE'24</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">JCR-Q1</span> <b>J. Gong</b>, T. Chen, and R. Bahsoon, <a href="https://arxiv.org/abs/2409.07629">Dividable Configuration Performance Learning</a>, The IEEE Transactions on Software Engineering <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32">(TSE)</a>, 2024, 29 pages.</div>

  <div class="pub-item" data-type="journal"><span class="pub-badge venue">TOSEM'24</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">JCR-Q1</span> <b>J. Gong</b> and T. Chen, <a href="https://arxiv.org/abs/2403.03322">Deep Configuration Performance Learning: A Systematic Survey and Taxonomy</a>, The ACM Transactions on Software Engineering and Methodology <a href="https://dl.acm.org/journal/tosem">(TOSEM)</a>, 2024, 62 pages.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">SSBSE'24</span> <span class="pub-badge ccf">Challenge Winner</span> <span class="pub-badge ranking">CORE-B</span> <b>J. Gong</b>, S Li, G d'Aloisio, Z Ding, Y Ye, W Langdon and F Sarro, <a href="https://arxiv.org/abs/2407.14982">GreenStableYolo: Optimizing Inference Time and Image Quality of Text-to-Image Generation</a>, The Symposium on Search-Based Software Engineering Challenge Track <a href="https://conf.researchr.org/track/ssbse-2024/ssbse-2024-challenge">(SSBSE 2024)</a>, 6 pages.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">FSE'24</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">CORE-A*</span> <b>J. Gong</b> and T. Chen, <a href="https://arxiv.org/abs/2402.03183">Predicting Configuration Performance in Multiple Environments with Sequential Meta-Learning</a>, The ACM International Conference on the Foundations of Software Engineering <a href="https://conf.researchr.org/home/fse-2024">(FSE 2024)</a>, 24 pages.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">FSE'23</span> <span class="pub-badge ccf">CCF-A</span> <span class="pub-badge ranking">CORE-A*</span> <b>J. Gong</b> and T. Chen, <a href="https://arxiv.org/pdf/2306.06651">Predicting Software Performance with Divide-and-Learn</a>, The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering <a href="https://2023.esec-fse.org/">(ESEC/FSE 2023)</a>, 13 pages.</div>

  <div class="pub-item" data-type="conference"><span class="pub-badge venue">MSR'22</span> <span class="pub-badge ccf">CCF-C</span> <span class="pub-badge ranking">CORE-A</span> <b>J. Gong</b> and T. Chen, <a href="https://arxiv.org/abs/2203.15988">Does Configuration Encoding Matter in Learning Software Performance? An Empirical Study on Encoding Schemes</a>, The International Conference on Mining Software Repositories <a href="https://conf.researchr.org/details/msr-2022/msr-2022-technical-papers/1/Does-Configuration-Encoding-Matter-in-Learning-Software-Performance-An-Empirical-Stu">(MSR 2022)</a>, 13 pages.</div>
</div>

<script>
document.querySelectorAll('.pub-filter').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.pub-filter').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.pub-item').forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.type === filter) ? '' : 'none';
    });
  });
});
</script>



## Further Background
I received first-class BSc degree from both the [Information and Computing Science](https://www.xjtlu.edu.cn/en/study/undergraduate/information-and-computing-science)
programme at [Xi'an Jiaotong-Liverpool University](https://www.xjtlu.edu.cn/) (2014-16), and the [Computer Science](https://www.liverpool.ac.uk/courses/2024/computer-science-bsc-hons) 
course at [University of Liverpool](https://www.liverpool.ac.uk/) (2016-18). 