// Site content used by the Arvid-pku Academic Homepage Template.

const publications = [
  {
    title: "QualityFlow: An Agentic Workflow for Program Synthesis Controlled by LLM Quality Checks",
    authors: "Yaojie Hu, Qiang Zhou, Qihong Chen, Xiaopeng Li, <b>Linbo Liu</b>, Dejiao Zhang, Amit Kachroo, Talha Oz, Omer Tripp",
    venue: "arXiv preprint arXiv:2501.17167, 2025",
    links: [{ text: "arXiv", url: "https://arxiv.org/abs/2501.17167" }],
    isPreprint: true,
    isSelected: false
  },
  {
    title: "High-dimensional Simultaneous Inference on Non-Gaussian VAR Model via De-biased Estimator",
    authors: "<b>Linbo Liu</b>, Danna Zhang",
    venue: "arXiv preprint arXiv:2111.01382, 2021",
    links: [{ text: "arXiv", url: "https://arxiv.org/abs/2111.01382" }],
    isPreprint: true,
    isSelected: false
  },
  {
    title: "LLM Agents Already Know When to Call Tools - Even Without Reasoning",
    authors: "Chung-En Sun, <b>Linbo Liu</b>, Ge Yan, Zimo Wang, Tsui-Wei Weng",
    venue: "NeurIPS, 2026",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2605.09252" },
      { text: "Site", url: "https://lilywenglab.github.io/when2tool/" },
      { text: "Code", url: "https://github.com/Trustworthy-ML-Lab/when2tool" }
    ],
    isNew: true,
    isPreprint: false,
    isSelected: true,
    selectedRank: 1
  },
  {
    title: "CLEAR: Context Augmentation from Contrastive Learning of Experience via Agentic Reflection",
    authors: "<b>Linbo Liu</b>, Guande Wu, Han Ding, Yawei Wang, Qiang Zhou, Yuzhe Lu, Zhichao Xu, Huan Song, Panpan Xu, Lin Lee Cheong",
    venue: "EMNLP, 2026",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2604.07487" },
      { text: "Code", url: "https://github.com/awslabs/CLEAR" }
    ],
    isNew: true,
    isPreprint: false,
    isSelected: true,
    selectedRank: 2
  },
  {
    title: "The Cold-Start Safety Gap in LLM Agents",
    authors: "Chung-En Sun, <b>Linbo Liu</b>, Tsui-Wei Weng",
    venue: "EMNLP, 2026",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2606.07867" },
      { text: "Site", url: "https://lilywenglab.github.io/Agent-Cold-Start-Safety-Gap/" },
      { text: "Code", url: "https://github.com/Trustworthy-ML-Lab/Agent-Cold-Start-Safety-Gap" },
      { text: "Dataset", url: "https://huggingface.co/datasets/cesun/SODA" }
    ],
    isNew: true,
    isPreprint: false,
    isSelected: true,
    selectedRank: 3
  },
  {
    title: "ReflCtrl: Controlling LLM Reflection Efficiently via Representation Engineering",
    authors: "Ge Yan, Chung-En Sun, <b>Linbo Liu</b>, Tsui-Wei Weng",
    venue: "COLM, 2026",
    links: [{ text: "Paper", url: "https://arxiv.org/abs/2512.13979" }],
    isPreprint: false,
    isSelected: true,
    selectedRank: 4
  },
  {
    title: "MigrationBench: Repository-Level Code Migration Benchmark from Java 8",
    authors: "<b>Linbo Liu</b>, Xinle Liu, Qiang Zhou, Lin Chen, Yihan Liu, Hoan Nguyen, Behrooz Omidvar-Tehrani, Xi Shen, Jun Huan, Omer Tripp, Anoop Deoras",
    venue: "KDD, 2026",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2505.09569" },
      { text: "Code", url: "https://github.com/amazon-science/MigrationBench" },
      { text: "Docs", url: "https://amazon-science.github.io/MigrationBench/" },
      { text: "Dataset", url: "https://huggingface.co/collections/AmazonScience/migrationbench" }
    ],
    isPreprint: false,
    isSelected: true,
    selectedRank: 5
  },
  {
    title: "Enhancing Language Model Agents using Diversity of Thoughts",
    authors: "Vijay Lingam, Behrooz Omidvar Tehrani, Sujay Sanghavi, Gaurav Gupta, Sayan Ghosh, <b>Linbo Liu</b>, Jun Huan, Anoop Deoras",
    venue: "ICLR, 2025",
    links: [
      { text: "Paper", url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/737ab809016b2c79086374f9c8a11831-Paper-Conference.pdf" },
      { text: "Code", url: "https://github.com/amazon-science/DiversityOfThoughts" }
    ],
    isPreprint: false,
    isSelected: false
  },
  {
    title: "Reasoning and Planning with Large Language Models in Code Development",
    authors: "Hao Ding, Ziwei Fan, Ingo Guehring, Gaurav Gupta, Wooseok Ha, Jun Huan, <b>Linbo Liu</b>, Behrooz Omidvar-Tehrani, Shiqi Wang, Hao Zhou",
    venue: "KDD, 2024",
    links: [{ text: "Paper", url: "https://dl.acm.org/doi/pdf/10.1145/3637528.3671452" }],
    isPreprint: false,
    isSelected: false
  },
  {
    title: "CodeFort: Robust Training for Code Generation Models",
    authors: "Yuhao Zhang, Shiqi Wang, Haifeng Qian, Baishakhi Ray, Zijian Wang, <b>Linbo Liu</b>, Mingyue Shang, Anoop Deoras, Murali Krishna Ramanathan",
    venue: "Findings of EMNLP, 2024",
    links: [{ text: "Paper", url: "https://aclanthology.org/2024.findings-emnlp.303.pdf" }],
    isPreprint: false,
    isSelected: false
  },
  {
    title: "Promoting Robustness of Randomized Smoothing: Two Cost-Effective Approaches",
    authors: "<b>Linbo Liu</b>, Trong Nghia Hoang, Lam M. Nguyen, Tsui-Wei Weng",
    venue: "ICDM, 2023",
    links: [{ text: "Paper", url: "https://doi.org/10.1109/ICDM58522.2023.00139" }],
    isPreprint: false,
    isSelected: false
  },
  {
    title: "Robust Multivariate Time-Series Forecasting: Adversarial Attacks and Defense Mechanisms",
    authors: "<b>Linbo Liu</b>, Youngsuk Park, Trong Nghia Hoang, Hilaf Hasson, Jun Huan",
    venue: "ICLR, 2023",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2207.09572" },
      { text: "Code", url: "https://github.com/awslabs/gluonts/tree/dev/src/gluonts/nursery/robust-mts-attack" }
    ],
    isPreprint: false,
    isSelected: true,
    selectedRank: 6
  },
  {
    title: "A Bernstein-type Inequality for High Dimensional Linear Processes with Applications to Robust Estimation of Time Series Regressions",
    authors: "<b>Linbo Liu</b>, Danna Zhang",
    venue: "Statistica Sinica, 35 (2025), 151-170",
    links: [{ text: "Paper", url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/A35n108.pdf" }],
    isPreprint: false,
    isJournal: true,
    isSelected: false
  }
];

const newsItems = [
  {
    date: "Sep 2026",
    text: 'Our paper <a href="https://arxiv.org/abs/2605.09252">LLM Agents Already Know When to Call Tools - Even Without Reasoning</a> has been accepted at NeurIPS 2026.'
  },
  {
    date: "Aug 2026",
    text: 'Two of our papers, <a href="https://arxiv.org/abs/2604.07487">CLEAR</a> and <a href="https://arxiv.org/abs/2606.07867">The Cold-Start Safety Gap in LLM Agents</a>, have been accepted at EMNLP 2026.'
  },
  {
    date: "Jul 2026",
    text: 'Our paper <a href="https://arxiv.org/abs/2512.13979">ReflCtrl</a> has been accepted at COLM 2026.'
  },
  {
    date: "Jul 2026",
    text: 'We published a blog post on <a href="https://rllm-project.com/post.html?post=realtime_rl.md">continual learning via real-time RL for agents</a>.'
  },
  {
    date: "Jul 2026",
    text: 'We released <a href="https://strandsagents.com/blog/introducing-harness-optimizer/">Harness Optimizer</a>, which automatically optimizes your agent harness.'
  },
  {
    date: "Jun 2026",
    text: 'We published a blog post on <a href="https://rllm-project.com/post.html?post=agentcore_migrationbench.md">training a frontier Java code migration agent with AWS AgentCore Runtime</a>.'
  },
  {
    date: "May 2026",
    text: 'We launched the <a href="https://amazon-science.github.io/MigrationBench/">MigrationBench website</a>.'
  },
  {
    date: "May 2026",
    text: 'Our paper <a href="https://amazon-science.github.io/MigrationBench/">MigrationBench</a> was accepted at KDD 2026.'
  }
];

const projects = [
  {
    title: "MigrationBench",
    image: "assets/migrationbench-thumbnail.png",
    description: 'A large-scale, repository-level code migration benchmark from Java 8 to long-term support versions, with a comprehensive evaluation framework and RL training recipe.',
    links: [
      { text: "Code", url: "https://github.com/amazon-science/MigrationBench" },
      { text: "Docs", url: "https://amazon-science.github.io/MigrationBench/" }
    ],
    isSelected: true
  },
  {
    title: "AgentCore RL Toolkit",
    image: "assets/art.png",
    description: "Turns Bedrock AgentCore into a scalable rollout engine for agentic reinforcement learning, integrating with major RL frameworks such as veRL, Tinker, and Slime.",
    links: [
      { text: "Code", url: "https://github.com/awslabs/agentcore-rl-toolkit" },
      { text: "Docs", url: "https://awslabs.github.io/agentcore-rl-toolkit/" }
    ],
    isSelected: true
  },
  {
    title: "Harness Optimizer",
    image: "assets/harness-optimization.png",
    description: "A framework for flexible harness optimization via customizable objectives, supporting system prompt optimization, tool description optimization, skill creation, and advisor model optimization.",
    links: [
      { text: "Code", url: "https://github.com/strands-labs/harness-optimizer" },
      { text: "Blog", url: "https://strandsagents.com/blog/introducing-harness-optimizer/" }
    ],
    isSelected: true
  }
];

const blogPosts = [
  {
    title: "Continual Learning via Real-Time RL for Agents",
    source: "rLLM",
    date: "2026",
    url: "https://rllm-project.com/post.html?post=realtime_rl.md",
    excerpt: "Can an agent keep learning after deployment, directly from real production-style interactions where each interaction usually gives only one trajectory?"
  },
  {
    title: "Training a Frontier Java Code Migration Agent with AWS AgentCore Runtime",
    source: "rLLM",
    date: "2026",
    url: "https://rllm-project.com/post.html?post=agentcore_migrationbench.md",
    excerpt: "Training Qwen3-Coder-30B-A3B using AgentCore Runtime integration to outperform Claude 4.5 Haiku on long-horizon Java repo migrations."
  },
  {
    title: "Introducing Harness Optimizer: Automatically optimize your agent harness",
    source: "Strands Agents",
    date: "2026",
    url: "https://strandsagents.com/blog/introducing-harness-optimizer/",
    excerpt: "Tuning the agent harness itself: system prompts, tool descriptions, skills, and advisor models from collected rollout trajectories."
  },
  {
    title: "Amazon introduces two benchmark datasets for evaluating AI agents' ability on code migration",
    source: "AWS Blog",
    date: "2025",
    url: "https://aws.amazon.com/blogs/devops/amazon-introduces-two-benchmark-datasets-for-evaluating-ai-agents-ability-on-code-migration/",
    excerpt: "Announcing MigrationBench and Poly-MigrationBench for repository-level migration evaluation."
  }
];

const researchExperience = [
  {
    period: "2022 - Present",
    institution: "AWS AI",
    role: "Research Scientist",
    description: "Post-training for LLM agents, including agentic RL, continual learning, robust ML, and production coding agents."
  }
];

const education = [
  "Ph.D. in Statistics, University of California San Diego, 2018 - 2022",
  "M.S. in Statistics, University of Pennsylvania, 2016 - 2018"
];

const teaching = [];
const academicServices = [];
const talks = [];
const honors = [];

const bySelectedRank = (a, b) => (a.selectedRank || 999) - (b.selectedRank || 999);

const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected).sort(bySelectedRank);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getConferencePublications = () => publications.filter(pub => !pub.isPreprint && !pub.isJournal);
const getJournalPublications = () => publications.filter(pub => pub.isJournal);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected).sort(bySelectedRank);
const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;
