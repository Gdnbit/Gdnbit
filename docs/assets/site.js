/* Static GDNbit frontend: original site's visual language, zero server/API dependencies. */
(()=>{
"use strict";
const script=document.querySelector('script[data-gdnbit]');
const base=new URL('../',script.src).pathname.replace(/\/$/,'');
const route=location.pathname.slice(base.length).replace(/\/index\.html$/,'/').replace(/\/+$/,'')||'/';
const path=p=>base+(p==='/'?'/':p.endsWith('/')?p:p+'/');
const github='https://github.com/Gdnbit';
const projects=[
{title:'班事有谱 · ClassMatter',description:'面向班主任的 Agent-native 班级工作台。把学生记录、跟进任务与时间线连成可追溯的工作记忆；AI 帮忙查询和起草，重要事实与决定仍由人把关。',tags:['Class OS','Agent','Education'],url:github+'/classmatter',categories:['Agent','产品']},
{title:'思考间 · ThinkRoom',description:'让文章、笔记和不同观点成为有出处的资料，通过检索问答、研究简报、多视角讨论和决策复盘，让积累的信息持续参与判断。',tags:['Research','Knowledge','RAG'],url:github+'/thinkroom',categories:['Agent','研究']},
{title:'健康档案盒 · HealthBox',description:'长期积累个人及家庭健康资料。保留报告原件、解析后人工复核、指标趋势与授权共享；在 MediKeep 基础上进行扩展。',tags:['Health','Data','Provenance'],url:github+'/healthbox',categories:['产品','健康']},
{title:'Enterprise AI Core',description:'从企业 AI 应用交付中形成的架构方向：连接业务 Context、可复用能力、权限和 Agent Runtime，使 Agent 能在明确边界内参与真实流程。',tags:['Enterprise AI','Workflow','Architecture'],url:github+'/Gdnbit/blob/main/NOW.md',categories:['Agent','研究']},
{title:'LLM Race',description:'围绕大语言模型能力与任务表现的实验和评测探索，用清晰的比较结果帮助理解不同模型的适用场景。',tags:['Evaluation','LLM'],url:github+'/llm-race',categories:['研究']}
];
const tools=[
{name:'图片工具',description:'调整 · 裁剪 · 打码 · EXIF · 取色 · 水印',icon:'▧',status:'待迁移'},
{name:'文件转换',description:'图片 · PDF · CSV · Excel · Markdown · Base64',icon:'⇄',status:'待迁移'},
{name:'会计工具',description:'大写 · 计算器 · 利息 · 税费',icon:'¥',status:'待迁移'},
{name:'单位转换',description:'长度 · 重量 · 时间 · 数据',icon:'↔',status:'待迁移'},
{name:'日期转换',description:'时间戳 · 中文 · ISO · 本地',icon:'◷',status:'待迁移'},
{name:'Markdown 预览',description:'编辑与实时预览',icon:'¶',status:'待迁移'},
{name:'JSON 工具',description:'格式化 · 压缩 · 校验',icon:'{ }',status:'待迁移'}];
const nav=[['首页','/'],['作品','/projects'],['博客','/blog'],['资源','/resources'],['关于','/about']];
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const a=(url,text,cls='')=>'<a class="'+cls+'" href="'+escape(url)+'"'+(url.startsWith('http')?' target="_blank" rel="noopener noreferrer"':'')+'>'+text+'</a>';
const giraffe=(size='')=>'<svg class="mascot '+size+'" viewBox="0 0 26 28" role="img" aria-label="GDNbit 的像素长颈鹿，可拖动" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">'+
'<g fill="currentColor" style="color:#8a939e"><rect x="3" y="14" width="1" height="1"/><rect x="2" y="15" width="1" height="1"/><rect x="1" y="16" width="1" height="1"/><rect x="4" y="14" width="11" height="5"/><rect x="5" y="19" width="2" height="6"/><rect x="12" y="19" width="2" height="6"/><rect x="9" y="5" width="3" height="9"/><rect x="10" y="2" width="6" height="1"/><rect x="9" y="3" width="7" height="2"/><rect x="16" y="3" width="2" height="2"/></g>'+
'<g fill="#596574"><rect x="5" y="15" width="2" height="2"/><rect x="9" y="15" width="2" height="1"/><rect x="8" y="17" width="2" height="1"/><rect x="12" y="16" width="2" height="2"/><rect x="5" y="25" width="2" height="1"/><rect x="12" y="25" width="2" height="1"/><rect x="10" y="6" width="1" height="2"/><rect x="9" y="9" width="2" height="1"/><rect x="10" y="11" width="1" height="2"/><rect x="11" y="1" width="1" height="1"/><rect x="14" y="1" width="1" height="1"/><rect x="17" y="3.5" width=".6" height=".6"/></g>'+
'<g class="giraffe-neck" style="transform-origin:10px 14px"></g><rect x="12" y="3" width="1.5" height="1.5" rx=".3" fill="white"/><rect class="giraffe-eye" x="12.5" y="3.3" width=".7" height=".7" fill="#1f2937"/></svg>';
const navHTML=()=>'<header class="site-header" id="site-header"><nav class="container nav-row" aria-label="主导航">'+a(path('/'),'GDNbit','logo')+
'<div class="nav-links">'+nav.map(([name,p])=>a(path(p),escape(name),route===p?'active':'')).join('')+
'<div class="nav-tools"><button class="icon-btn" id="search-open" aria-label="搜索" title="搜索 (Ctrl+K)">⌕</button><button class="icon-btn theme-btn" aria-label="切换深色模式" title="切换主题">☾</button></div></div>'+
'<div class="nav-mobile"><button class="icon-btn" id="mobile-search" aria-label="搜索">⌕</button><button class="icon-btn theme-btn" aria-label="切换主题">☾</button><button class="icon-btn" id="menu-toggle" aria-controls="mobile-menu" aria-expanded="false" aria-label="打开导航">☰</button></div></nav>'+
'<div class="mobile-menu" id="mobile-menu">'+nav.map(([name,p])=>a(path(p),escape(name))).join('')+'</div></header>';
const footerHTML=()=>'<footer class="footer"><div class="container"><div class="footer-grid"><div><h3 class="footer-title">GDNbit</h3><p>分享技术成果、经验和项目作品集的个人网站</p></div><div class="footer-links">'+nav.map(([name,p])=>a(path(p),escape(name))).join('')+a(github,'GitHub ↗')+'</div></div><div class="footer-cols">© <span id="copyright-year">2026</span> GDNbit. All rights reserved. · Giraffes Don’t Believe in Tears.</div></div></footer>';
const head=(section,title,description)=>'<div class="page-header"><span class="section-label">'+escape(section)+'</span><h1>'+title+'</h1><p>'+escape(description)+'</p></div>';
const card=(p,i)=>a(p.url,'<article class="card"><span class="count">'+String(i+1).padStart(2,'0')+'</span><h3>'+escape(p.title)+'</h3><p>'+escape(p.description)+'</p><div class="tags">'+p.tags.map(t=>'<span class="tag">'+escape(t)+'</span>').join('')+'</div><div class="card-bottom">查看项目 ↗</div></article>');
const contact=()=>'<section class="block-section"><span class="section-label">Stay In Touch</span><h2 class="serif">保持联系</h2><p class="contact-text">如果这里的内容对你有帮助，欢迎关注或直接来信，一起聊聊。</p><div class="contact-grid">'+
a(github,'<span class="contact-icon">⌘</span><div><b>关注 GitHub</b><span>看看开源代码和动态</span></div>','contact-card')+
a('mailto:Gdnbit@qq.com','<span class="contact-icon">✉</span><div><b>发邮件给我</b><span>交流合作或聊聊技术</span></div>','contact-card')+
a(github+'/Gdnbit/tree/main/skills/gdnbit-candidate','<span class="contact-icon">◇</span><div><b>AI 可读候选人 Skill</b><span>让 AI 了解我的工作和项目</span></div>','contact-card')+'</div></section>';
const home=()=>'<section class="home-hero"><div class="hero-grid"><div class="hero-main"><div style="position:relative">'+giraffe('mobile-hero-mascot')+
'<h1 class="hero-title"><span class="line">在输入，</span><span class="line line2">也<span class="accent">输出</span>。</span></h1></div>'+
'<div class="mobile-meta"><div><strong>工程师的笔记</strong>　Safe . Clean . Soft</div><div class="time" data-clock-short>　</div></div>'+
'<p class="hero-sub"><span class="key">Safe</span> . <span class="key">Clean</span> . <span class="key">Soft</span><span class="divide">/</span><span class="note">工程师的笔记本</span></p>'+
'<div class="hero-nav">'+[['01','博客','/blog'],['02','作品','/projects'],['03','资源','/resources'],['04','关于','/about']].map(([num,t,p])=>a(path(p),'<span class="num">'+num+'</span><span class="item-name">'+t+'</span>')).join('')+'</div>'+
'<div class="mobile-cards">'+[['✎','博客','/blog'],['◫','作品','/projects'],['▤','资源','/resources'],['◯','关于','/about']].map(([ico,t,p])=>a(path(p),'<span>'+ico+'</span>'+t,'mobile-card')).join('')+'</div>'+
'</div><aside class="hero-aside" aria-label="访客信息"><div class="meta"><div class="meta-line"><span class="meta-key">NOW</span><time class="meta-val" data-clock>　</time></div><div class="meta-line"><span class="meta-key">VISITOR</span><span class="meta-val meta-small">访客</span></div></div>'+giraffe()+'</aside></div></section>'+
'<section class="block-section" id="latest-writing"><div class="section-top"><div><span class="section-label">Latest Writing</span><h2>近期文章</h2></div>'+a(path('/blog'),'查看全部 →','section-link')+'</div><div class="empty"><p>近期文章准备中…</p><p class="desc">旧站数据库中的文章还未导入静态站点。</p></div></section>'+
'<section class="block-section" id="recent-work"><div class="section-top"><div><span class="section-label">Recent Work</span><h2>最新项目</h2></div>'+a(path('/projects'),'查看全部 →','section-link')+'</div><div class="cards">'+projects.slice(0,3).map(card).join('')+'</div></section>'+contact();
const projectsHTML=()=>'<div class="inner">'+head('Projects','项目作品集 '+giraffe('inline-mascot'),'探索我的个人项目、AI 系统和产品想法。部分项目仍在持续迭代。')+
'<div class="filter-row" id="project-filters">'+['全部','Agent','产品','研究','健康'].map((cat,i)=>'<button class="filter-btn'+(i===0?' active':'')+'" data-filter="'+cat+'">'+cat+'</button>').join('')+'</div>'+
'<div class="content-grid" id="project-grid">'+projects.map(card).join('')+'</div></div>';
const blogHTML=()=>'<div class="inner">'+head('Blog','技术博客 '+giraffe('inline-mascot'),'记录技术探索、学习和项目实践。')+
'<div class="search-wrap"><input class="search-input" type="search" placeholder="搜索文章..." aria-label="搜索文章" disabled title="文章数据尚未迁移"></div>'+
'<div class="empty"><p>内容即将更新</p><p class="desc">原站文章保存在 MongoDB，静态版尚未导入。这里不会用虚构文章填充。</p></div></div>';
const resourcesHTML=()=>'<div class="inner">'+head('Resources','资源分享','浏览可复用的内容和实用工具。纯前端工具正在分批迁移。')+
'<span class="section-label">Browser Tools</span><div class="content-grid">'+tools.map(t=>'<div class="card"><span class="count" style="font-size:20px">'+escape(t.icon)+'</span><h3>'+escape(t.name)+'</h3><p>'+escape(t.description)+'</p><div class="tags"><span class="tag">'+escape(t.status)+'</span></div></div>').join('')+'</div><p class="doc-note">为避免出现无法运行的页面，依赖原服务器的工具暂不开放；后续会优先恢复能够完全在浏览器运行的工具。</p></div>';
const aboutHTML=()=>'<div class="inner">'+head('About','关于我','AI × 产品 × 创作')+'<div class="about-columns"><div><div class="about-intro"><div class="about-avatar">G.</div><div><h2>Gdnbit</h2><p>AI Solution &amp; Product Engineer</p></div></div><div class="about-copy"><p>你好，我是 Gdnbit。我习惯把真实业务中的复杂问题拆解成清晰的流程、业务规则和可验证的系统方案，再利用 Coding Agents 和 AI 工具持续推进实现与迭代。</p><p>在企业应用交付中，我更侧重业务理解、需求澄清、数据和接口边界、系统行为、验收标准与交付推进，而不把自己的价值仅仅定义为手写了多少行代码。</p><p>我的个人项目围绕班级事务、知识研究、健康档案以及可复用的 Agent 基础设施展开。我也持续关注长期记忆、工具调用、权限、Context 和 Agent Runtime。</p></div><div class="section-label" style="margin-top:32px">Contact</div><p class="muted">交流合作或技术讨论，可以通过 '+a(github,'GitHub')+' 或 '+a('mailto:Gdnbit@qq.com','邮件')+' 找到我。</p></div>'+
'<aside class="skill-panel"><span class="section-label">Skills &amp; Practices</span>'+
[['AI Systems',['Agent Workflow','RAG / Retrieval','MCP / Tools','Context Engineering']],['Delivery',['业务流程建模','系统需求拆解','交付与验收','AI-native Development']],['Toolchain',['Codex / Claude Code','Cursor / Windsurf','ComfyUI / LoRA','GitHub / CI']]].map(g=>'<div class="group"><h3>'+g[0]+'</h3><div class="tags">'+g[1].map(s=>'<span class="tag">'+s+'</span>').join('')+'</div></div>').join('')+
'<div class="doc-note">'+a(github+'/Gdnbit/blob/main/WORK.md','完整工作方式 ↗')+'</div></aside></div><section class="block-section"><div class="section-top"><div><span class="section-label">How I Think</span><h2>从业务到系统，再到 Agent。</h2></div></div><div class="cards">'+[['01','理解问题','理解已提出的需求，并补齐业务规则、状态和实际约束。'],['02','定义方案','把业务逻辑转为实现约束、系统设计和验收标准。'],['03','持续交付','让 Agent 协助开发，用测试、联调和反馈形成迭代闭环。']].map(([num,t,d])=>'<div class="card"><span class="count">'+num+'</span><h3>'+t+'</h3><p>'+d+'</p></div>').join('')+'</div></section></div>';
const pages={'/':home,'/projects':projectsHTML,'/blog':blogHTML,'/resources':resourcesHTML,'/about':aboutHTML};
const titles={'/':'GDNbit — 在输入，也输出','/projects':'作品 - GDNbit','/blog':'博客 - GDNbit','/resources':'资源 - GDNbit','/about':'关于 - GDNbit'};
const content=pages[route]||(()=>'<div class="inner">'+head('404','找不到页面','你可以返回首页继续浏览。')+a(path('/'),'返回首页 →','section-link')+'</div>');
document.title=titles[route]||'GDNbit';
document.getElementById('app').innerHTML='<div class="container">'+content()+'</div>';
document.getElementById('site-nav').innerHTML=navHTML();
document.getElementById('site-footer').innerHTML=footerHTML();
document.getElementById('copyright-year').textContent=new Date().getFullYear();
const s=document.createElement('div');s.className='global-search';s.id='global-search';s.innerHTML='<div class="search-dialog" role="dialog" aria-modal="true" aria-label="全站搜索"><input id="global-search-input" aria-label="搜索项目与页面" placeholder="搜索作品、页面… (Esc 关闭)" autocomplete="off"><div id="search-results" class="search-hint">可搜索公开项目和页面。旧站文章尚未同步。</div></div>';document.body.appendChild(s);
const searchEntries=[...projects.map(p=>({title:p.title,description:p.description,url:p.url})),...nav.map(([title,p])=>({title,description:'GDNbit 网站页面',url:path(p)}))];
const searchInput=document.getElementById('global-search-input');const results=document.getElementById('search-results');
const openSearch=()=>{s.classList.add('open');searchInput.value='';results.innerHTML='<div class="search-hint">输入关键词搜索项目或页面</div>';searchInput.focus()};
const closeSearch=()=>s.classList.remove('open');
document.getElementById('search-open').addEventListener('click',openSearch);document.getElementById('mobile-search').addEventListener('click',openSearch);
s.addEventListener('click',e=>{if(e.target===s)closeSearch()});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();s.classList.contains('open')?closeSearch():openSearch()}if(e.key==='Escape')closeSearch()});
searchInput.addEventListener('input',()=>{const q=searchInput.value.trim().toLowerCase();const matches=q?searchEntries.filter(p=>(p.title+' '+p.description).toLowerCase().includes(q)).slice(0,10):[];results.innerHTML=matches.length?matches.map(p=>a(p.url,escape(p.title)+' ↗','result')).join(''):'<div class="search-hint">'+(q?'没有匹配的项目或页面':'输入关键词搜索项目或页面')+'</div>'});
const themeButtons=document.querySelectorAll('.theme-btn');const setTheme=t=>{document.body.classList.toggle('dark',t==='dark');themeButtons.forEach(el=>el.textContent=t==='dark'?'☀':'☾');try{localStorage.setItem('gdnbit-theme',t)}catch(e){}};
try{setTheme(localStorage.getItem('gdnbit-theme')||'light')}catch(e){setTheme('light')}
themeButtons.forEach(b=>b.addEventListener('click',()=>setTheme(document.body.classList.contains('dark')?'light':'dark')));
const toggle=document.getElementById('menu-toggle');toggle.addEventListener('click',()=>{const el=document.getElementById('mobile-menu');const open=el.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});
const header=document.getElementById('site-header');const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>50);onScroll();window.addEventListener('scroll',onScroll,{passive:true});
const pad=n=>String(n).padStart(2,'0');const clock=()=>{const n=new Date();const value=n.getFullYear()+'.'+pad(n.getMonth()+1)+'.'+pad(n.getDate())+' '+pad(n.getHours())+':'+pad(n.getMinutes())+':'+pad(n.getSeconds());document.querySelectorAll('[data-clock]').forEach(el=>el.textContent=value);document.querySelectorAll('[data-clock-short]').forEach(el=>el.textContent=pad(n.getHours())+':'+pad(n.getMinutes())+':'+pad(n.getSeconds()))};clock();setInterval(clock,1000);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));button.classList.add('active');const cat=button.getAttribute('data-filter');document.getElementById('project-grid').innerHTML=projects.filter(p=>cat==='全部'||p.categories.includes(cat)).map(card).join('')}));
document.querySelectorAll('.mascot').forEach(el=>{if(!matchMedia('(pointer:fine)').matches)return;let dragged=false;let offset={x:0,y:0};let original=null;el.addEventListener('pointerdown',e=>{if(e.button!==0)return;dragged=true;const r=el.getBoundingClientRect();offset={x:e.clientX-r.left,y:e.clientY-r.top};if(!original)original={parent:el.parentNode,next:el.nextSibling};const placeholder=document.createElement('span');placeholder.className='mascot-placeholder';placeholder.style.display='inline-block';placeholder.style.width=r.width+'px';placeholder.style.height=r.height+'px';el.parentNode.insertBefore(placeholder,el);el.dataset.placeholderId='1';el._placeholder=placeholder;document.body.appendChild(el);el.style.cssText='position:fixed;left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px;z-index:300;animation:none;pointer-events:auto';el.setPointerCapture(e.pointerId);e.preventDefault()});
el.addEventListener('pointermove',e=>{if(!dragged)return;el.style.left=e.clientX-offset.x+'px';el.style.top=e.clientY-offset.y+'px'});
el.addEventListener('pointerup',e=>{if(!dragged)return;dragged=false;el.style.left=(e.clientX-offset.x+scrollX)+'px';el.style.top=(e.clientY-offset.y+scrollY)+'px';el.style.position='absolute'});
el.addEventListener('dblclick',()=>{if(!original)return;el.style.cssText='';if(el._placeholder){el._placeholder.replaceWith(el)}else original.parent.insertBefore(el,original.next)})});
})();