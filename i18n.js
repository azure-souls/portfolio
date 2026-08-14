// i18n - Bilingual (Chinese default)
(function () {
  const translations = {
    // ── Nav ──
    'nav.about':     { zh: '关于我',           en: 'About Me' },
    'nav.education': { zh: '教育经历',         en: 'Education' },
    'nav.projects':  { zh: '项目经历',         en: 'Projects' },

    // ── Header (common) ──
    'header.name':   { zh: '韩惟皓 | Weihao Han', en: 'Weihao Han | 韩惟皓' },
    'header.subtitle': { zh: '光学工程工学硕士 · 光学实习生', en: 'M.Eng. in Optical Engineering · Optics Intern' },
    'header.email':  { zh: '📧 2411111002@post.usts.edu.cn', en: '📧 2411111002@post.usts.edu.cn' },
    'header.cv':     { zh: '简历',             en: 'CV' },

    // ── Back link ──
    'back.projects': { zh: '← 返回项目',       en: '← Back to Projects' },

    // ── Footer ──
    'footer.copyright': { zh: '© 2026 韩惟皓 版权所有', en: '© 2026 Weihao Han. All Rights Reserved.' },
    'footer.updated':  { zh: '最后更新：2026年6月',     en: 'Last updated: June 2026' },

    // ═══════════ index.html ═══════════
    'index.title': { zh: '韩惟皓 | 个人主页', en: 'Weihao Han | Homepage' },
    'index.about': { zh: '关于我', en: 'About' },
    'index.about.text': {
      zh: '我是韩惟皓，现于苏州科技大学攻读光学工程工学硕士学位，并在 Maxinsights 担任光学实习生。研究方向为智能人机交互、多模态感知融合与数字孪生，对将光学仿真和三维视觉技术与柔性电子传感器相结合以实现视觉-触觉融合感知尤感兴趣。',
      en: 'I am Weihao Han, currently pursuing an M.Eng. in Optical Engineering at Suzhou University of Science and Technology and working as an Optics Intern at Maxinsights. My research interests lie in intelligent human-computer interaction, multimodal perception fusion, and digital twins. I am particularly passionate about integrating optical simulation and 3D vision technologies with flexible electronic sensors to advance visual-tactile fusion perception.'
    },
    'index.dob':       { zh: '出生日期',     en: 'Date of Birth' },
    'index.dob.val':   { zh: '2000年10月',   en: 'October 2000' },
    'index.member':    { zh: '政治面貌',     en: 'Membership' },
    'index.member.val':{ zh: '共青团员',     en: 'CYL Member' },
    'index.research':  { zh: '研究方向',     en: 'Research Interests' },

    'index.r1.title': { zh: '多模态融合感知', en: 'Multimodal Fusion Perception' },
    'index.r1.desc':  { zh: '探索视觉、触觉等多模态信息的协同感知与融合', en: 'Exploring synergistic perception and fusion of visual, tactile, and other multimodal information' },
    'index.r2.title': { zh: '数字孪生与光学仿真', en: 'Digital Twin & Optical Simulation' },
    'index.r2.desc':  { zh: '基于 UE5 和 Zemax 的高保真光学系统仿真与数字孪生建模', en: 'High-fidelity optical system simulation and digital twin modeling based on UE5 and Zemax' },
    'index.r3.title': { zh: '计算机视觉', en: 'Computer Vision' },
    'index.r3.desc':  { zh: '目标检测、语义分割、相机标定与畸变校正算法', en: 'Object detection, semantic segmentation, camera calibration, and distortion correction algorithms' },

    'index.skills': { zh: '技能', en: 'Skills' },
    'index.skills.cat1': { zh: '多模态感知与光学仿真',     en: 'Multimodal Perception & Optical Simulation' },
    'index.skills.cat2': { zh: '计算机视觉',               en: 'Computer Vision' },
    'index.skills.cat3': { zh: '编程与工具',               en: 'Programming & Tools' },

    'index.skills.tag.ue5':       { zh: 'UE5 视锥仿真',       en: 'UE5 Frustum Simulation' },
    'index.skills.tag.zemax':     { zh: 'Zemax 光学设计',     en: 'Zemax Optical Design' },
    'index.skills.tag.tof':       { zh: 'ToF 相机标定',       en: 'ToF Camera Calibration' },
    'index.skills.tag.handeye':   { zh: '手眼标定',           en: 'Hand-Eye Calibration' },
    'index.skills.tag.distortion':{ zh: '畸变校正',           en: 'Distortion Correction' },
    'index.skills.tag.yolo':      { zh: 'YOLO 目标检测',      en: 'YOLO Object Detection' },
    'index.skills.tag.opencv':    { zh: 'OpenCV 图像处理',    en: 'OpenCV Image Processing' },
    'index.skills.tag.seg':       { zh: '语义分割',           en: 'Semantic Segmentation' },
    'index.skills.tag.annot':     { zh: '数据集标注',         en: 'Dataset Annotation' },
    // Programming & Tools tags are the same in both languages

    'index.statement': { zh: '自我评价', en: 'Personal Statement' },
    'index.eval.1': { zh: '具备较强的逻辑思维能力和良好的沟通表达能力，理论与实践并重，思维均衡。', en: 'Possess strong logical thinking and effective communication skills, with a well-balanced mindset bridging theory and practice.' },
    'index.eval.2': { zh: '执行能力强，具有高度的责任感，善于团队协作与统筹安排。', en: 'Demonstrate strong execution capability and a high sense of responsibility, adept at organizing and collaborating within teams.' },
    'index.eval.3': { zh: '性格乐观豁达，始终保持迎接新挑战的热情，抗压能力突出。', en: 'Optimistic and open-minded by nature, always eager to embrace new challenges, with proven resilience under pressure.' },
    'index.eval.4': { zh: '持续关注智能人机交互、多模态感知融合等领域的前沿进展。', en: 'Continuously follow the latest academic advances in intelligent human-computer interaction and multimodal perception fusion.' },

    // ═══════════ education.html ═══════════
    'edu.title':    { zh: '教育经历 | 韩惟皓', en: 'Education | Weihao Han' },
    'edu.heading':  { zh: '教育经历',          en: 'Education' },
    'edu.meng':     { zh: '工学硕士',          en: 'M.Eng.' },
    'edu.usts':     { zh: '苏州科技大学',      en: 'Suzhou University of Science and Technology' },
    'edu.usts.major':{ zh: '光学工程（学术硕士）', en: 'Optical Engineering (Research M.Eng.)' },
    'edu.usts.focus':{ zh: '研究方向',         en: 'Research Focus' },
    'edu.usts.focus.val':{ zh: '多模态融合感知、数字孪生与光学仿真', en: 'Multimodal Fusion Perception, Digital Twin & Optical Simulation' },
    'edu.usts.courses':{ zh: '核心课程',       en: 'Core Courses' },
    'edu.usts.courses.val':{ zh: '光学系统设计、光学原理、图像处理技术、电路分析、自动控制原理、应用光学等', en: 'Optical System Design, Principles of Optics, Image Processing Techniques, Circuit Analysis, Automatic Control Theory, Applied Optics, etc.' },
    'edu.beng':     { zh: '工学学士',          en: 'B.Eng.' },
    'edu.ldu':      { zh: '鲁东大学',          en: 'Ludong University' },
    'edu.ldu.major':{ zh: '电气工程及其自动化', en: 'Electrical Engineering & Automation' },

    // ═══════════ projects.html ═══════════
    'proj.title':      { zh: '项目经历 | 韩惟皓', en: 'Projects | Weihao Han' },
    'proj.heading':    { zh: '项目经历',           en: 'Projects' },

    'proj.1.title':    { zh: 'Maxinsights · 光学实习生', en: 'Maxinsights · Optics Intern' },
    'proj.1.time':     { zh: '2026.04 – 2026.08',       en: '2026.04 – 2026.08' },
    'proj.1.role':     { zh: '高精度视锥仿真平台与鱼眼镜头标定', en: 'High-Precision Frustum Simulation Platform & Fisheye Lens Calibration' },
    'proj.1.detail.1': { zh: '基于 UE5 构建高保真视锥仿真平台，集成 MetaHuman 骨骼绑定，实现多相机阵列的全场光线采样与准确 FOV 复现', en: 'Built a high-fidelity UE5-based frustum simulation platform with MetaHuman skeletal rigging, capturing full-field light sampling across multi-camera arrays with accurate FOV reproduction.' },
    'proj.1.detail.2': { zh: '仿真红外光源，输出长短帧图像以及设备 pose 的四元数和空间坐标，经算法完成轨迹预测可实现后续全仿真训练', en: 'Simulated infrared light sources to output long/short-exposure frame images together with the device pose\'s quaternion and spatial coordinates, enabling trajectory prediction through algorithms for subsequent full-simulation training.' },
    'proj.1.detail.3': { zh: '采用双球面畸变模型标定鱼眼镜头，将重投影误差控制在 0.5 像素以内', en: 'Calibrated fisheye lenses using a dual-spherical distortion model, achieving a reprojection error within 0.5 pixels.' },

    'proj.2.title':    { zh: '基于 CARLA 的视障辅助算法研究', en: 'Research on Visually Impaired Assistance Algorithms Based on CARLA' },
    'proj.2.time':     { zh: '2025', en: '2025' },
    'proj.2.detail.1': { zh: '使用 Carla 仿真平台构建了多天气、多障碍物数据集，部署相机进行数据采集与标注', en: 'Constructed a multi-weather, multi-obstacle dataset using the Carla simulation platform, deploying cameras for data collection and annotation.' },
    'proj.2.detail.2': { zh: '改进 YOLOv11n 并设计了基于语义分割的路沿检测算法，实现了实时安全路径规划与自主避障', en: 'Enhanced YOLOv11n and designed a semantic segmentation-based curb detection algorithm for real-time safe-path planning and autonomous obstacle avoidance.' },

    'proj.3.title':    { zh: '手部腧穴机器人', en: 'Hand Acupoint Robot' },
    'proj.3.time':     { zh: '2024', en: '2024' },
    'proj.3.detail.1': { zh: '与上海第七人民医院针灸科临床医师协作，构建了 6000+ 手部穴位图像数据集；训练改进的轻量级 YOLO 模型，精度达 0.99', en: 'Built a dataset of over 6,000 hand acupoint images in collaboration with TCM practitioners at Shanghai Seventh People\'s Hospital; trained an improved lightweight YOLO model achieving 0.99 precision.' },
    'proj.3.detail.2': { zh: '设计了基于 ArUco 标定板的一体化手眼标定方案，兼具透视变换与机械臂标定双重功能，满足腧穴机器人的临床标定需求', en: 'Designed an integrated ArUco-based hand-eye calibration board serving dual purposes for perspective transformation and robotic arm calibration for acupuncture robots.' },

    'proj.4.title':    { zh: '智能多窗切换系统', en: 'Intelligent Multi-Window Switching System' },
    'proj.4.time':     { zh: '2024', en: '2024' },
    'proj.4.detail.1': { zh: '基于 STM32F103C8T6 平台开发，实现了带霍尔编码器的双路直流有刷电机同步控制', en: 'Developed on the STM32F103C8T6 platform, achieving synchronized dual DC brushed motor control via Hall encoders.' },
    'proj.4.detail.2': { zh: '设计了基于 CC2530 的 Zigbee 无线 mesh 网络，实现多车间统一多窗切换', en: 'Designed a CC2530-based Zigbee wireless mesh network to enable unified multi-window switching across workshops.' },

    // ═══════════ project-1.html (Maxinsights) ═══════════
    'p1.title':    { zh: 'Maxinsights 光学实习生 | 韩惟皓', en: 'Maxinsights Optics Intern | Weihao Han' },
    'p1.heading':  { zh: 'Maxinsights · 光学实习生', en: 'Maxinsights · Optics Intern' },
    'p1.subtitle': { zh: '高精度视锥仿真平台与鱼眼镜头标定 · 2026.04 – 2026.08', en: 'High-Precision Frustum Simulation Platform & Fisheye Lens Calibration · 2026.04 – 2026.08' },
    'p1.overview': { zh: '概述', en: 'Overview' },
    'p1.overview.text': {
      zh: '基于 UE5 引擎构建高精度视锥仿真平台，完成三维设备模型集成、MetaHuman 骨骼绑定与运动驱动，实现了多相机阵列下的全场光学采样和准确 FOV 复现，解决了传统仿真中光锥覆盖范围与人体运动的不匹配问题。并仿真红外光源，输出长短帧图像以及设备 pose 的四元数和空间坐标，经算法完成轨迹预测可实现后续全仿真训练。采用双球面畸变模型对公司选定的鱼眼镜头进行标定，将重投影误差降至 0.5 像素以内；并在 UE5 中搭建基于标定参数的畸变还原管线，实现了镜头畸变的真实复现，为镜头优化与三维重建精度提升提供了关键数据支撑。',
      en: 'Built a high-precision frustum simulation platform using the UE5 engine, completing 3D device model integration, MetaHuman skeletal rigging, and motion driving, achieving full-field optical sampling and accurate FOV reproduction under multi-camera arrays. This resolved the traditional mismatch between light cone coverage and human motion in simulations. Simulated infrared light sources to output long/short-exposure frame images together with the device pose\'s quaternion and spatial coordinates, enabling trajectory prediction through algorithms for subsequent full-simulation training. Calibrated company-selected fisheye lenses using a dual-spherical distortion model, reducing reprojection error to within 0.5 pixels. Implemented a UE5-based restoration pipeline based on calibrated parameters to faithfully reproduce lens distortion, providing critical data support for lens optimization and improved 3D reconstruction accuracy.'
    },
    'p1.showcase': { zh: '成果展示', en: 'Visual Showcase' },
    'p1.sec1':     { zh: '视锥仿真', en: 'Frustum Simulation' },
    'p1.sec1.sub1':{ zh: 'FOV 方锥', en: 'FOV Rectangular Frustum' },
    'p1.sec1.sub2':{ zh: '大 FOV 圆锥', en: 'Wide FOV Conical Frustum' },
    'p1.sec2':     { zh: '鱼眼镜头畸变', en: 'Fisheye Lens Distortion' },

    // ═══════════ project-2.html (CARLA) ═══════════
    'p2.title':   { zh: '基于 CARLA 的视障辅助算法研究 | 韩惟皓', en: 'Research on Visually Impaired Assistance Algorithms Based on CARLA | Weihao Han' },
    'p2.heading': { zh: '基于 CARLA 的视障辅助算法研究', en: 'Research on Visually Impaired Assistance Algorithms Based on CARLA' },
    'p2.subtitle':{ zh: '2025', en: '2025' },
    'p2.overview':{ zh: '概述', en: 'Overview' },
    'p2.overview.text': {
      zh: '使用 Carla 仿真平台构建了包含多种天气条件和障碍物配置的复杂交通场景数据集，部署摄像头进行驾驶数据的采集与标注。改进 YOLOv11n 轻量化目标检测模型，并开发了基于视觉语义分割的路沿检测算法，实现了视障用户在复杂环境中的实时安全路径规划与自主避障，为智能移动机器人的环境感知提供了技术方案。',
      en: 'Constructed a complex traffic scene dataset incorporating diverse weather conditions and obstacle configurations using the Carla simulation platform. Deployed cameras to collect and annotate driving data. Enhanced the YOLOv11n lightweight object detection model and developed a visual semantic segmentation-based curb detection algorithm, enabling real-time safe-path planning and autonomous obstacle avoidance for visually impaired users in complex environments. This work provides a technical solution for environmental perception in intelligent mobile robots.'
    },
    'p2.showcase': { zh: '成果展示', en: 'Visual Showcase' },
    'p2.sec1':     { zh: 'Carla 仿真场景', en: 'Carla Simulation Scenes' },
    'p2.sec2':     { zh: '避障演示',      en: 'Obstacle Avoidance Demo' },

    // ═══════════ project-3.html (Hand Acupoint) ═══════════
    'p3.title':    { zh: '手部腧穴机器人 | 韩惟皓', en: 'Hand Acupoint Robot | Weihao Han' },
    'p3.heading':  { zh: '手部腧穴机器人', en: 'Hand Acupoint Robot' },
    'p3.subtitle': { zh: '2024', en: '2024' },
    'p3.overview': { zh: '概述', en: 'Overview' },
    'p3.overview.text': {
      zh: '与上海第七人民医院针灸科专业中医师协作，构建了超过 6000 张手部穴位图像的专业数据集。改进轻量级 YOLO 模型并在该数据集上训练，精度达到 0.99。设计了基于 ArUco 标记的一体化手眼标定板，可同时用于图像采集中的透视变换和手眼标定，实现满足腧穴机器人临床需求的机械臂标定。',
      en: 'Collaborated with professional TCM practitioners at the Acupuncture Department of Shanghai Seventh People\'s Hospital to construct a specialized dataset of over 6,000 hand acupoint images. Improved a lightweight YOLO model and trained it on the dataset, achieving a precision of 0.99. Designed an integrated hand-eye calibration board based on ArUco markers, serving simultaneously for perspective transformation in image acquisition and hand-eye calibration, enabling robotic arm calibration that meets the clinical requirements for acupuncture robots.'
    },
    'p3.showcase': { zh: '成果展示', en: 'Visual Showcase' },

    // ═══════════ project-4.html (Window System) ═══════════
    'p4.title':    { zh: '智能多窗切换系统 | 韩惟皓', en: 'Intelligent Multi-Window Switching System | Weihao Han' },
    'p4.heading':  { zh: '智能多窗切换系统', en: 'Intelligent Multi-Window Switching System' },
    'p4.subtitle': { zh: '2024', en: '2024' },
    'p4.overview': { zh: '概述', en: 'Overview' },
    'p4.overview.text': {
      zh: '基于 STM32F103C8T6 平台开发，实现了带霍尔编码器的双路直流有刷电机同步控制。设计了基于 CC2530 芯片的 Zigbee 无线通信模块，并建立了 mesh 网络实现分布式电机控制，实现了多车间环境下各墙面窗户的统一集中切换。',
      en: 'Developed on the STM32F103C8T6 platform, achieving synchronized dual DC brushed motor control via Hall encoders. Designed a Zigbee wireless communication module based on the CC2530 chip and established a mesh network to enable distributed motor control, realizing centralized switching of windows across multiple walls in a multi-workshop environment.'
    },
    'p4.showcase': { zh: '成果展示', en: 'Visual Showcase' },

    // ── Language toggle ──
    'lang.label': { zh: 'EN', en: '中文' }
  };

  function getLang() {
    return localStorage.getItem('lang') || 'zh';
  }

  function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyLang(lang);
    updateToggle(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Apply text to elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var t = translations[key];
      if (t && t[lang] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = t[lang];
        } else if (el.tagName === 'META' && el.getAttribute('name') === 'description') {
          el.setAttribute('content', t[lang]);
        } else {
          el.textContent = t[lang];
        }
      }
    });

    // Update <title>
    var pageTitleEl = document.querySelector('title[data-i18n]');
    if (pageTitleEl) {
      var titleKey = pageTitleEl.getAttribute('data-i18n');
      var titleT = translations[titleKey];
      if (titleT && titleT[lang]) {
        document.title = titleT[lang];
      }
    }

    // Update HTML attributes (e.g., placeholder, aria-label)
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr').split(':');
      var attr = spec[0];
      var key = spec[1];
      var t = translations[key];
      if (t && t[lang] !== undefined) {
        el.setAttribute(attr, t[lang]);
      }
    });
  }

  function updateToggle(lang) {
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = translations['lang.label'][lang];
    }
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyLang(getLang());
    });
  } else {
    applyLang(getLang());
  }

  // Expose toggle function globally
  window.toggleLang = function () {
    var current = getLang();
    var next = current === 'zh' ? 'en' : 'zh';
    setLang(next);
  };
})();
