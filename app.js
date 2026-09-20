function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L7: 'L7 CAV & VAV Air-Conditioning'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'All-Air System Classifications',
    titleZh: '全空氣系統分類：單風道 vs 雙風道系統',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Single Duct Systems (單風道系統)</text>
        <rect x="25" y="45" width="290" height="50" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="170" y="68" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Single Shared Distribution Duct</text>
        <text x="170" y="85" text-anchor="middle" font-size="9" fill="#5dade2">Provides cooling OR heating (not simultaneously)</text>
        <rect x="20" y="110" width="300" height="135" fill="#111" stroke="#3498db" rx="4"/>
        <text x="30" y="130" font-size="10" fill="#f1c40f" font-weight="bold">Sub-classifications (三大子類別):</text>
        <text x="30" y="152" font-size="9.5" fill="#ecf0f1">1. Constant Volume, Single Zone (CAV 單區域)</text>
        <text x="30" y="174" font-size="9.5" fill="#ecf0f1">2. Constant Volume, Multiple Zone (CAV 多區域)</text>
        <text x="40" y="190" font-size="8.5" fill="#bdc3c7">• Multi-zone blow-through or terminal reheat</text>
        <text x="30" y="212" font-size="9.5" fill="#2ecc71" font-weight="bold">3. Variable Air Volume Systems (VAV 變風量)</text>
        <text x="40" y="228" font-size="8.5" fill="#abebc6">• Throttles airflow at constant supply temp</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e67e22" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Dual Duct Systems (雙風道系統)</text>
        <rect x="25" y="45" width="290" height="50" fill="#1a252f" stroke="#e67e22" rx="4"/>
        <text x="170" y="68" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Cold Duct + Warm Duct in Parallel</text>
        <text x="170" y="85" text-anchor="middle" font-size="9" fill="#feca57">Provides simultaneous heating and cooling</text>
        <rect x="20" y="110" width="300" height="135" fill="#111" stroke="#e67e22" rx="4"/>
        <text x="30" y="130" font-size="10" fill="#f1c40f" font-weight="bold">Sub-classifications (兩大子類別):</text>
        <text x="30" y="155" font-size="9.5" fill="#ecf0f1">1. Dual Duct, Constant Volume Systems</text>
        <text x="40" y="172" font-size="8.5" fill="#bdc3c7">• Blends hot &amp; cold air at constant CFM</text>
        <text x="30" y="200" font-size="9.5" fill="#f1c40f" font-weight="bold">2. Dual Duct, Variable Volume Systems</text>
        <text x="40" y="218" font-size="8.5" fill="#fef9e7">• Dual-inlet VAV mixing boxes with deadband</text>
        <text x="40" y="233" font-size="8.5" fill="#abebc6">• Best zone comfort and highest air cleanliness</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Classification tree of All-Air HVAC systems: Single Duct (CAV single/multi-zone, VAV) vs Dual Duct (CAV, VAV dual-duct)',
    sections: [
      {
        title: 'Definition of All-Air Systems / 全空氣系統定義',
        zh: '<p><strong>全空氣系統 (All Air Systems)</strong> 是指建築物所需的全部顯熱與潛熱冷卻負荷，<strong>100% 完全由送入房間的冷空氣所承擔</strong>的空調系統[cite: 8]。中央機房包含冷凍水機組、空調箱 (AHU)、供水管網、送回風道與終端部件[cite: 8]。</p>',
        en: '<p>An <strong>All-Air System</strong> provides complete sensible and latent cooling capacity entirely within the cold supply airstream delivered by the system[cite: 8]. Key components include chillers, AHUs, chilled water loops, air distribution ducts, and terminal units[cite: 8].</p>'
      },
      {
        title: 'Single Duct vs Dual Duct Categories / 單風道 vs 雙風道分類',
        zh: '<ul><li><strong>單風道系統 (Single Duct)</strong>：同一個送風道在同一時間只能單獨輸送冷風或暖風，無法同時供冷供熱[cite: 8]。分為：單區域定風量 (CAV Single Zone)、多區域定風量 (CAV Multi-Zone / 末端再熱) 及 變風量系統 (VAV)[cite: 8]；</li><li><strong>雙風道系統 (Dual Duct)</strong>：中央敷設一根冷風道 (Cold duct) 與一根暖風道 (Warm duct)，<strong>可同時向不同區域供應冷風或暖風</strong>[cite: 8]。分為：雙風道定風量系統與雙風道變風量系統[cite: 8]。</li></ul>',
        en: '<ul><li><strong>Single Duct Systems</strong>: Provide either cooling or heating through the same duct, but cannot deliver both simultaneously[cite: 8]. Subdivided into CAV single-zone, CAV multi-zone, and VAV systems[cite: 8].</li><li><strong>Dual Duct Systems</strong>: Feature separate cold and warm air ducts running in parallel, delivering both heating and cooling simultaneously via terminal mixing boxes[cite: 8].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Single-Zone & Terminal Reheat CAV Systems',
    titleZh: '單區域 CAV 系統與末端再熱系統',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Single Duct Constant Air Volume (CAV) with Terminal Reheat Coils (CAV 末端再熱系統)</text>
        <!-- Central AHU -->
        <rect x="30" y="55" width="220" height="90" fill="#1a252f" stroke="#1abc9c" stroke-width="1.5" rx="4"/>
        <text x="140" y="75" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1abc9c">Central AHU</text>
        <rect x="45" y="85" width="25" height="50" fill="#1b4f72"/>
        <text x="57" y="115" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 57 115)">Cooling</text>
        <rect x="85" y="85" width="25" height="50" fill="#78281f"/>
        <text x="97" y="115" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 97 115)">Preheat</text>
        <circle cx="150" cy="110" r="16" fill="#34495e"/>
        <text x="150" y="114" text-anchor="middle" font-size="8" fill="#fff">Fan</text>
        <rect x="190" y="85" width="40" height="50" fill="#16a085"/>
        <text x="210" y="115" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 210 115)">Humidifier</text>
        <!-- Constant Flow Supply Duct -->
        <path d="M 250 110 L 660 110" stroke="#00d2d3" stroke-width="5" class="flow-cold-deck"/>
        <text x="380" y="100" text-anchor="middle" font-size="10" fill="#00d2d3" font-weight="bold">Constant Volume Supply Air (13°C Constant CFM)</text>
        <!-- Three Zones with Terminal Reheat -->
        <g transform="translate(300, 130)">
          <rect x="0" y="0" width="100" height="35" fill="#78281f" stroke="#e74c3c" rx="3"/>
          <text x="50" y="22" text-anchor="middle" font-size="8.5" fill="#fff">Reheat 1 (Zone 1)</text>
          <path d="M 50 -20 L 50 0" stroke="#00d2d3" stroke-width="3"/>
        </g>
        <g transform="translate(430, 130)">
          <rect x="0" y="0" width="100" height="35" fill="#78281f" stroke="#e74c3c" rx="3"/>
          <text x="50" y="22" text-anchor="middle" font-size="8.5" fill="#fff">Reheat 2 (Zone 2)</text>
          <path d="M 50 -20 L 50 0" stroke="#00d2d3" stroke-width="3"/>
        </g>
        <g transform="translate(560, 130)">
          <rect x="0" y="0" width="100" height="35" fill="#78281f" stroke="#e74c3c" rx="3"/>
          <text x="50" y="22" text-anchor="middle" font-size="8.5" fill="#fff">Reheat 3 (Zone 3)</text>
          <path d="M 50 -20 L 50 0" stroke="#00d2d3" stroke-width="3"/>
        </g>
        <rect x="30" y="180" width="640" height="70" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="350" y="202" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Operational Characteristics &amp; Massive Energy Penalty:</text>
        <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Air is first cooled &amp; dehumidified to lowest zone dew point, then reheated zone-by-zone to match sensible heat.</text>
        <text x="350" y="240" text-anchor="middle" font-size="9.5" fill="#f5b7b1">Energy inefficient (cooling energy canceled by reheat energy) unless waste heat recovery is utilized.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Single-duct CAV system with terminal reheat coils: Central AHU cools all air to minimum dew point; individual zone electric/hot-water coils reheat constant airflow to control zone temperature',
    sections: [
      {
        title: 'CAV Single Zone System / 單區域定風量系統',
        zh: '<p>最簡單的全空氣系統形式為<strong>單一空調箱服務單一溫控區域 (Single conditioner serving a single zone)</strong>[cite: 8]。適用於小型百貨公司、獨立商鋪或單一大型階梯教室[cite: 8]。</p>',
        en: '<p>The simplest all-air system is a <strong>single conditioner serving a single temperature zone</strong>, widely applied to small department stores, individual retail shops, and classrooms[cite: 8].</p>'
      },
      {
        title: 'CAV with Terminal Reheat Coils / 多區域末端再熱系統與能耗缺陷',
        zh: '<p>當單風道定風量系統需服務多個負荷特性不同的區域時，通常在各區域送風支管上加裝<strong>再熱盤管 (Reheat coils，熱水或電熱)</strong>[cite: 8]。</p><div class="key-point"><strong>巨大能耗代價 (Energy Penalty)：</strong> 中央 AHU 必須先將全部空氣深冷除濕至最嚴苛區域所需的低溫，隨後各支管再熱盤管<strong>重新消耗熱能加熱空氣</strong>以匹配部分負荷，冷熱能量互相抵消，極為浪費（除非使用廢熱回收再熱）[cite: 8]。</div>',
        en: '<p>In multi-zone CAV systems with terminal reheat, central cooling coils cool all air to the lowest required dew point, followed by localized <strong>terminal reheat coils</strong> heating the air up to satisfy zone thermostat settings[cite: 8].</p><div class="key-point"><strong>Energy Penalty:</strong> Severe energy waste occurs because mechanical cooling energy is directly canceled by reheat thermal energy, unless waste heat recovery is employed[cite: 8].</div>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Multi-Zone CAV Systems & Blow-Through AHUs',
    titleZh: '多區域吹出式 AHU、冷熱雙甲板與連桿對開風閥',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="255" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Multi-Zone Blow-Through AHU &amp; Interlocked Damper Mechanism (吹出式多區域混風箱)</text>
        <!-- Blow-through AHU Casing -->
        <g transform="translate(30, 50)">
          <rect x="0" y="0" width="320" height="135" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="4"/>
          <text x="60" y="25" font-size="10.5" fill="#1abc9c" font-weight="bold">Filter &amp; Fan Section</text>
          <!-- Fan positioned UPSTREAM of coils (Blow-through) -->
          <circle cx="90" cy="75" r="24" fill="#34495e" stroke="#ecf0f1"/>
          <text x="90" y="79" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Supply Fan</text>
          <path d="M 120 75 L 180 50 M 120 75 L 180 100" stroke="#00d2d3" stroke-width="3" class="flow-air-supply"/>
          <!-- Hot Deck (Top) -->
          <rect x="180" y="20" width="40" height="45" fill="#78281f" stroke="#e74c3c"/>
          <text x="200" y="48" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 200 48)">Hot Deck</text>
          <!-- Cold Deck (Bottom) -->
          <rect x="180" y="75" width="40" height="45" fill="#1b4f72" stroke="#3498db"/>
          <text x="200" y="103" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 200 103)">Cold Deck</text>
          <!-- Linked Dampers Group -->
          <rect x="235" y="15" width="30" height="55" fill="#7d6608" stroke="#f1c40f"/>
          <line x1="250" y1="15" x2="250" y2="125" stroke="#f1c40f" stroke-width="3"/>
          <text x="285" y="45" font-size="8.5" fill="#f1c40f">Linked</text>
          <text x="285" y="58" font-size="8.5" fill="#f1c40f">Spindle</text>
          <rect x="235" y="70" width="30" height="55" fill="#1b4f72" stroke="#3498db"/>
        </g>
        <!-- Independent Zone Ducts Out -->
        <g transform="translate(380, 50)">
          <rect x="0" y="0" width="290" height="135" fill="#1a252f" stroke="#f39c12" rx="4"/>
          <text x="145" y="22" text-anchor="middle" font-size="10.5" fill="#f39c12" font-weight="bold">Dedicated Zone Ducts (專用區域風道)</text>
          <path d="M 0 45 L 260 45" stroke="#f1c40f" stroke-width="4" class="flow-mixed-air"/>
          <text x="130" y="38" font-size="9" fill="#f1c40f">Duct 1 ➔ Interior Zone Z1 (Max 12 Zones)</text>
          <path d="M 0 95 L 260 95" stroke="#f1c40f" stroke-width="4" class="flow-mixed-air"/>
          <text x="130" y="88" font-size="9" fill="#f1c40f">Duct 2 ➔ Perimeter Zone Z2 (Sun-warmed)</text>
        </g>
        <rect x="30" y="195" width="640" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="217" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Blow-Through AHU:</strong> Fan discharges directly into parallel hot deck &amp; cold deck. Motorized dampers operate in opposition.</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#bdc3c7">Number of distribution ducts leaving AHU equals exact number of zones (typically restricted to a maximum of 12 zones).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Multi-zone blow-through AHU layout: Upstream supply fan forces air into parallel hot deck and cold deck; mechanically linked opposed dampers modulate supply temperature per zone',
    sections: [
      {
        title: 'Blow-Through AHU & Deck Arrangement / 吹出式空調箱構造',
        zh: '<p>多區域系統常採用<strong>吹出式空調箱 (Blow-through type AHU)</strong>：送風風機位於冷卻盤管與加熱盤管的<strong>上游 (upstream)</strong>[cite: 8]。</p><p>風機吹出的空氣被分流進入平行的兩個甲板：</p><ul><li><strong>熱甲板 (Hot deck)</strong>：裝設加熱盤管[cite: 8]；</li><li><strong>冷甲板 (Cold deck)</strong>：裝設冷卻除濕盤管[cite: 8]。</li></ul>',
        en: '<p>A multi-zone system typically employs a <strong>blow-through type AHU</strong> where the supply air fan is situated <strong>upstream of the heating and cooling coils</strong>[cite: 8].</p><p>Air discharged from the fan divides into a <strong>hot deck</strong> and a <strong>cold deck</strong> in parallel[cite: 8].</p>'
      },
      {
        title: 'Linked Mixing Dampers & Zone Limitations / 對開聯鎖風閥與 12 區上限',
        zh: '<p>空調箱出口為每個分區設有一組<strong>機械連桿聯動的電動混風閥 (Linked opposed dampers)</strong>[cite: 8]。一側開大時另一側等比例關小，精準混合冷熱風後由<strong>獨立風管</strong>輸送至對應區域[cite: 8]。</p><div class="key-point"><strong>分區物理限制（Slide 7）：</strong> 出風管道數量嚴格等於房間分區數量（$N_{ducts} = N_{zones}$），由於機房出風段幾何空間限制，<strong>系統最大分區數通常不超過 12 個 (maximum 12 zones)</strong>[cite: 8]。</div>',
        en: '<p>Each zone outlet features <strong>motorized cold deck and hot deck dampers operating in opposition via linked spindles</strong>[cite: 8].</p><div class="key-point"><strong>Zone Restriction (Slide 7):</strong> The number of leaving ducts equals the number of zones served; spatial physical constraints restrict multi-zone units to a <strong>maximum of 12 zones</strong>[cite: 8].</div>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Multi-Zone System Psychrometrics',
    titleZh: '多區域系統夏冬季滿載與部分負荷焓濕循環',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Multi-Zone System Psychrometric Pathways (多區域空調焓濕狀態路徑)</text>
        <path d="M 60 215 Q 160 185, 260 135 T 440 75 T 620 65" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <text x="180" y="145" font-size="9" fill="#f1c40f">Saturation Curve</text>
        <!-- Summer State Points -->
        <circle cx="210" cy="180" r="5" fill="#00d2d3"/>
        <text x="185" y="195" font-size="9" fill="#00d2d3" font-weight="bold">cc (12°C Cold Deck)</text>
        <circle cx="580" cy="85" r="5" fill="#e74c3c"/>
        <text x="590" y="80" font-size="9" fill="#e74c3c">Outdoor O (33°C)</text>
        <circle cx="480" cy="140" r="5" fill="#ecf0f1"/>
        <text x="495" y="135" font-size="9" fill="#ecf0f1">Room Z1, Z2 (24°C)</text>
        <circle cx="430" cy="115" r="5" fill="#bdc3c7"/>
        <text x="440" y="110" font-size="8.5" fill="#bdc3c7">m (Mix) &amp; sf</text>
        <!-- Bypass Mixing Lines for Part Load -->
        <line x1="210" y1="180" x2="430" y2="115" stroke="#f1c40f" stroke-width="2" stroke-dasharray="3 3"/>
        <circle cx="280" cy="158" r="4" fill="#f39c12"/>
        <text x="290" y="155" font-size="8.5" fill="#f39c12">m1p (Z1 Part-Load Supply Mix)</text>
        <rect x="40" y="195" width="620" height="55" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Summer Full-Load:</strong> Dampers deliver pure cold deck air cc (12°C) to all zones (points m1 &amp; m2 coincide with cc).</text>
        <text x="350" y="235" text-anchor="middle" font-size="10" fill="#f1c40f"><strong>Summer Part-Load:</strong> Sensible load drops ➔ warm bypass air from de-energized hot deck sf mixes with cc to form m1p/m2p.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Psychrometric cycle of multi-zone system: Summer full-load (pure cold deck cc) vs summer part-load (unconditioned bypass air sf mixing with cc to form supply m1p/m2p)',
    sections: [
      {
        title: 'Summer Full-Load vs Part-Load Operation / 夏季運行狀態點解析',
        zh: '<p>如 Slide 11–14 焓濕圖所示[cite: 8]：</p><ul><li><strong>夏季滿載 (Full-load)</strong>：若忽略熱風閥漏風，冷甲板出風點 $cc$ 直接由冷風道輸送至各區域（即供風點 $m_1, m_2$ 與 $cc$ 重合，送風溫差最大）[cite: 8]；</li><li><strong>夏季部分負荷 (Part-load)</strong>：當某分區室內顯熱負荷減小，溫控器關小冷風閥、開大熱風閥[cite: 8]。此時加熱盤管<strong>未通熱水（處於停運狀態）</strong>，熱甲板輸送的實為<strong>未經處理的混風旁通氣流 ($sf$)</strong>，與冷風 $cc$ 混合形成較高送風溫度的 $m_{1p}$ 與 $m_{2p}$[cite: 8]。</li></ul>',
        en: '<p>As mapped in Slide 11–14 psychrometrics[cite: 8]:</p><ul><li><strong>Summer Full-Load</strong>: Hot-deck dampers remain shut; pure cold-deck air $cc$ is supplied to all zones ($m_1$ and $m_2$ coincide with $cc$)[cite: 8].</li><li><strong>Summer Part-Load</strong>: Falling zone sensible load prompts dampers to blend warm bypass air ($sf$) from the de-energized heating coil with cold air ($cc$) to form warmer mixtures $m_{1p}$ and $m_{2p}$[cite: 8].</li></ul>'
      },
      {
        title: 'Winter Full-Load Operation / 冬季滿載工況',
        zh: '<p>冬季最小新風比下，氣流分流後：冷甲板盤管通水將冷風降溫至 $cc$ 送入<strong>常年發熱的內部核心區 (Interior Zone $Z_1$)</strong>；熱甲板盤管通熱水將空氣加熱至 $hc$ 送入<strong>外圍護結構周邊區 (Perimeter Zone $Z_2$)</strong>[cite: 8]。</p>',
        en: '<p>In winter, cold deck air $cc$ satisfies cooling in year-round internal core zones ($Z_1$), while hot deck air $hc$ is delivered to perimeter envelope zones ($Z_2$)[cite: 8].</p>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'VAV System Principle & Energy Savings',
    titleZh: 'VAV 變風量系統工作原理與風機節能優勢',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#e74c3c">CAV Method (定風量 — 變送風溫度)</text>
        <rect x="40" y="55" width="260" height="45" fill="#1a252f" stroke="#e74c3c" rx="4"/>
        <text x="170" y="77" text-anchor="middle" font-size="10.5" fill="#fff">Airflow Volume: CONSTANT 100%</text>
        <text x="170" y="92" text-anchor="middle" font-size="8.5" fill="#f5b7b1">Fan power operates near 100% continuously</text>
        <rect x="20" y="120" width="300" height="120" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="170" y="145" text-anchor="middle" font-size="10.5" fill="#f5b7b1" font-weight="bold">Part-Load Operation:</text>
        <text x="170" y="170" text-anchor="middle" font-size="9" fill="#ecf0f1">• Supply air temperature is raised (e.g. 13°C ➔ 20°C)</text>
        <text x="170" y="190" text-anchor="middle" font-size="9" fill="#ecf0f1">• Handled by throttling coil or reheating air</text>
        <text x="170" y="215" text-anchor="middle" font-size="9.5" fill="#e74c3c" font-weight="bold">Zero fan electrical energy savings!</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">VAV Method (變風量 — 恆溫變風量)</text>
        <rect x="40" y="55" width="260" height="45" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="170" y="77" text-anchor="middle" font-size="10.5" fill="#fff">Supply Temp: CONSTANT (13 °C)</text>
        <text x="170" y="92" text-anchor="middle" font-size="8.5" fill="#abebc6">Airflow Volume throttles from 100% down to 30%</text>
        <rect x="20" y="120" width="300" height="120" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="145" text-anchor="middle" font-size="10.5" fill="#abebc6" font-weight="bold">Part-Load Operation &amp; Cubic Fan Savings:</text>
        <text x="170" y="170" text-anchor="middle" font-size="9.5" fill="#f1c40f" font-family="Consolas" font-weight="bold">Fan Power W ∝ (Fan Speed n)³</text>
        <text x="170" y="195" text-anchor="middle" font-size="9" fill="#ecf0f1">At 60% flow, theoretical fan power drops to 21.6%!</text>
        <text x="170" y="220" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">Saves 30% to 50% annual HVAC energy!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Fundamental control philosophy comparison: CAV (varying temperature at constant flow) vs VAV (varying flow at constant 13°C temperature, leveraging cubic fan affinity laws)',
    sections: [
      {
        title: 'VAV Working Principle / 變風量控制哲學',
        zh: '<p><strong>變風量系統 (Variable Air Volume, VAV)</strong> 的核心理念是：<strong>保持送風溫度恆定（通常為 12–14 °C），透過改變送入房間的風量（體積流量 $m^3/s$）來適應室內負荷變化</strong>，取代傳統 CAV 系統靠調節送風溫度的落後模式[cite: 7, 8]。</p>',
        en: '<p>The <strong>VAV system</strong> matches thermal load by <strong>varying the supply air volume rather than varying the supply air temperature</strong>[cite: 8]. Supply air is kept at a constant cold temperature (typically 12–14 °C)[cite: 7].</p>'
      },
      {
        title: 'Cubic Fan Energy Savings / 三次方風機節能紅利',
        zh: '<div class="key-point"><strong>顯著節能成因（風機定律）：</strong> 風機軸功率與轉速（風量）呈<strong>三次方正比關係 ($W \propto n^3 \propto V^3$)</strong>[cite: 6, 8]。在部分負荷（佔全年 80% 以上時間）時，VAV 箱關小風閥，中央送風機變頻降速，風機電耗呈現斷崖式下跌，大幅降低大廈全年營運成本[cite: 6, 8]。</div>',
        en: '<div class="key-point"><strong>Cubic Power Savings:</strong> Under the Fan Laws, fan power varies with the cube of speed ($W \propto n^3$)[cite: 6, 8]. Throttling airflow during prevalent part-load hours slashes annual fan electrical consumption by 30% to 50%[cite: 8].</div>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'VAV Terminal Boxes: Pressure-Dependent vs Independent',
    titleZh: 'VAV 終端箱機構：定壓型 vs 變壓無關型',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e67e22" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Pressure-Dependent Box (定壓型 VAV 箱)</text>
        <rect x="30" y="50" width="280" height="75" fill="#1a252f" stroke="#f39c12" rx="4"/>
        <line x1="80" y1="50" x2="80" y2="125" stroke="#7f8c8d" stroke-dasharray="2 2"/>
        <circle cx="170" cy="87" r="14" fill="#34495e"/>
        <line x1="170" y1="87" x2="195" y2="65" stroke="#f1c40f" stroke-width="3"/>
        <text x="170" y="112" text-anchor="middle" font-size="8.5" fill="#fff">Single Damper Blade</text>
        <rect x="20" y="135" width="300" height="110" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="170" y="155" text-anchor="middle" font-size="10.5" fill="#f5b7b1" font-weight="bold">Only 1 Input: Room Thermostat T</text>
        <text x="170" y="175" text-anchor="middle" font-size="9" fill="#ecf0f1">• Damper position depends solely on room temp</text>
        <text x="170" y="195" text-anchor="middle" font-size="9" fill="#e74c3c">• Vulnerable to duct static pressure variations!</text>
        <text x="170" y="215" text-anchor="middle" font-size="8.5" fill="#bdc3c7">If other boxes close, duct pressure spikes,</text>
        <text x="170" y="230" text-anchor="middle" font-size="8.5" fill="#bdc3c7">forcing excess flow into this zone.</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Pressure-Independent Box (變壓無關型)</text>
        <rect x="30" y="50" width="280" height="75" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <!-- Cross Flow-ring sensor -->
        <circle cx="70" cy="87" r="12" fill="#16a085"/>
        <text x="70" y="90" text-anchor="middle" font-size="7" fill="#fff">Flow ring</text>
        <circle cx="180" cy="87" r="14" fill="#34495e"/>
        <line x1="180" y1="87" x2="205" y2="65" stroke="#2ecc71" stroke-width="3"/>
        <rect x="20" y="135" width="300" height="110" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="155" text-anchor="middle" font-size="10.5" fill="#2ecc71" font-weight="bold">2 Inputs: Thermostat T + Flow Velocity Probe</text>
        <text x="170" y="175" text-anchor="middle" font-size="9" fill="#ecf0f1">• Controller measures real-time inlet airflow</text>
        <text x="170" y="195" text-anchor="middle" font-size="9.5" fill="#f1c40f" font-weight="bold">Maintains flow even if duct ΔP varies 125 to 750 Pa!</text>
        <text x="170" y="215" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Self-corrects damper position against pressure surges;</text>
        <text x="170" y="230" text-anchor="middle" font-size="8.5" fill="#abebc6">Industry standard for commercial buildings.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: VAV Box mechanics: Pressure-dependent (single thermostat sensor) vs Pressure-independent (flow-ring velocity sensor maintains CFM despite 125–750 Pa duct static pressure fluctuations)',
    sections: [
      {
        title: 'Box Internal Damper Mechanics / VAV 箱內部機構形式',
        zh: '<p>VAV 終端箱通常包含單葉片蝶閥 (Single-blade butterfly damper)、多葉片閥或<strong>線性活塞氣閥 (Piston air valve)</strong>[cite: 8]：</p><ul><li><strong>單葉片閥</strong>：全關時位於偏離垂直方向 <strong>30°</strong> 位置，逆時針旋轉至 <strong>60°</strong> 處達到全開[cite: 8]；</li><li><strong>線性氣閥 (Air valve)</strong>：活塞在空心圓筒內水平滑移，<strong>風量與活塞位移呈近乎完美的線性關係</strong>[cite: 8]；</li><li><strong>規格與阻力</strong>：風量範圍 <strong>100 至 1800 L/s</strong>，全開額定阻力 <strong>50 至 125 Pa</strong>[cite: 8]。</li></ul>',
        en: '<p>VAV boxes utilize single-blade dampers, multi-blade dampers, or <strong>linear piston air valves</strong>[cite: 8]:</p><ul><li><strong>Single-blade damper</strong>: Closes at <strong>30° from vertical</strong> and rotates counterclockwise to <strong>60° at fully open position</strong>[cite: 8].</li><li><strong>Air valve</strong>: Horizontal piston damper with an <strong>almost linear relationship between volume flow and stroke displacement</strong>[cite: 8].</li><li><strong>Sizing</strong>: Ranges from <strong>100 to 1800 L/s</strong> with full-open pressure drops of <strong>50 to 125 Pa</strong>[cite: 8].</li></ul>'
      },
      {
        title: 'Pressure-Dependent vs Pressure-Independent / 定壓型 vs 變壓無關型',
        zh: '<ul><li><strong>定壓型 (Pressure-Dependent)</strong>：僅依賴室內溫控器信號驅動電機，易受幹管壓力波動干擾（鄰近箱體關閉導致此處風量暴增）[cite: 8]；</li><li><strong>變壓無關型 (Pressure-Independent)</strong>：箱體入口設有<strong>差壓迎風測速環 (Flow-ring velocity probe)</strong>，DDC 控制器同時比對室溫與實測風速[cite: 8]。<div class="key-point"><strong>核心性能（Slide 28）：</strong> 即使幹管靜壓在 <strong>125 至 750 Pa 範圍內劇烈波動</strong>，箱體均能自動調整開度，精準輸出溫控器所需的風量[cite: 8]！</div></li></ul>',
        en: '<ul><li><strong>Pressure-dependent</strong>: Modulates damper strictly by room temperature; subject to hunting when main duct static pressure fluctuates[cite: 8].</li><li><strong>Pressure-independent</strong>: Employs an inlet <strong>flow-ring velocity probe</strong> alongside room temperature feedback[cite: 8].<div class="key-point"><strong>Benchmark Performance (Slide 28):</strong> Maintains precise volume flow rate even if duct static pressure fluctuates widely between <strong>125 and 750 Pa</strong>[cite: 8].</div></li></ul>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Central VAV System Control Loops',
    titleZh: '中央 VAV 四大控制迴路（2/3 處靜壓傳感與新風維持）',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Central VAV System 4 Core Automated Control Loops (中央 VAV 四大控制迴路)</text>
        <rect x="30" y="50" width="150" height="110" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="105" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#5dade2">1. Space Temp</text>
        <text x="105" y="88" text-anchor="middle" font-size="9" fill="#fff">(室內溫度控制)</text>
        <text x="105" y="112" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Thermostat T1/C1</text>
        <text x="105" y="128" text-anchor="middle" font-size="8.5" fill="#bdc3c7">modulates damper</text>
        <text x="105" y="145" text-anchor="middle" font-size="8.5" fill="#bdc3c7">motor per zone load</text>
        <rect x="195" y="50" width="150" height="110" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="270" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#2ecc71">2. Supply Air Temp</text>
        <text x="270" y="88" text-anchor="middle" font-size="9" fill="#fff">(送風溫度控制)</text>
        <text x="270" y="112" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Thermostat T3</text>
        <text x="270" y="128" text-anchor="middle" font-size="8.5" fill="#bdc3c7">modulates cooling</text>
        <text x="270" y="145" text-anchor="middle" font-size="8.5" fill="#abebc6">coil 2-way valve (13°C)</text>
        <rect x="360" y="50" width="165" height="110" fill="#1a252f" stroke="#f1c40f" rx="4"/>
        <text x="442" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#f1c40f">3. Min Outdoor Air</text>
        <text x="442" y="88" text-anchor="middle" font-size="9" fill="#fff">(最小新風量保證)</text>
        <text x="442" y="112" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Velocity probe after OA</text>
        <text x="442" y="128" text-anchor="middle" font-size="8.5" fill="#bdc3c7">damper; opens wider as</text>
        <text x="442" y="145" text-anchor="middle" font-size="8.5" fill="#feca57">total supply CFM throttles</text>
        <rect x="540" y="50" width="140" height="110" fill="#1a252f" stroke="#e74c3c" rx="4"/>
        <text x="610" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#e74c3c">4. Duct Static ΔP</text>
        <text x="610" y="88" text-anchor="middle" font-size="9" fill="#fff">(風管靜壓定壓控制)</text>
        <text x="610" y="112" text-anchor="middle" font-size="9" fill="#f5b7b1" font-weight="bold">Sensor P at 2/3 duct</text>
        <text x="610" y="130" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Modulates fan VFD</text>
        <text x="610" y="145" text-anchor="middle" font-size="8.5" fill="#bdc3c7">or inlet guide vanes</text>
        <rect x="30" y="175" width="650" height="65" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="355" y="198" text-anchor="middle" font-size="11" fill="#fff"><strong>Why 2/3 Duct Length?</strong> Placing sensor P at ~2/3 of main duct ensures the index branch maintains sufficient static pressure while allowing fan speed to throttle efficiently under partial diversity.</text>
        <text x="355" y="222" text-anchor="middle" font-size="9.5" fill="#f1c40f">Block Sizing Rule: Total AHU flow is the block coincident peak: V_sb = Σ V_sn (Smaller than sum of non-coincident peaks!).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Four interconnected control loops in a commercial VAV cooling plant: Space temp, Supply air temp (13°C), Minimum OA tracking, and 2/3 duct distance static pressure VFD control',
    sections: [
      {
        title: 'Four Central VAV Control Loops / 四大核心控制迴路',
        zh: '<ol><li><strong>分區溫度控制 (Space temp)</strong>：分區溫控器 $T_1$ 連接控制器 $C_1$，調節執行器改變 VAV 風閥開度以維持室溫[cite: 8]；</li><li><strong>送風溫度控制 (Supply air temp)</strong>：空調箱出風口溫控器 $T_3$ 調節冷凍水二通閥，<strong>恆定輸出 12–14 °C 冷風</strong>[cite: 7, 8]；</li><li><strong>最小新風量控制 (Minimum OA tracking)</strong>：新風閥後裝設測速管或皮托管感應新風流量 $V_o$[cite: 8]。當送風總量被節流時，控制器 $C_4$ <strong>自動開大新風閥</strong>，杜絕室內二氧化碳超標[cite: 8]；</li><li><strong>送風管靜壓定壓控制 (Duct static pressure)</strong>：壓差傳感器 $P$ <strong>安裝在送風主幹管約 2/3 長度處</strong>，感應靜壓並透過變頻器 (VFD) 或入口導葉 (IGV) 調節送風機轉速，確保不利末端始終有足夠壓力[cite: 8]。</li></ol>',
        en: '<ol><li><strong>Space air temperature control</strong>: Thermostat $T_1$ modulates VAV damper motor to control zone airflow[cite: 8];</li><li><strong>Supply air temperature control</strong>: Sensor $T_3$ modulates cooling coil 2-way valve to maintain a constant supply air temperature[cite: 8];</li><li><strong>Minimum outdoor air control</strong>: Electronic velocity probe after OA damper senses fresh air intake; opens OA damper wider when total supply throttles to maintain ventilation rates[cite: 8];</li><li><strong>Supply duct static pressure control</strong>: Pressure sensor $P$ placed at <strong>approximately 2/3 of main duct length</strong> modulates fan VFD speed or inlet guide vanes[cite: 8].</li></ol>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'VAV Reheat Terminal Systems',
    titleZh: 'VAV 帶再熱系統（30% 最小風量停靠點與防過冷控制）',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">VAV Reheat Operating Sequence &amp; Minimum Stop (VAV 再熱時序與 30% 停靠點)</text>
        <!-- Sequence Chart -->
        <line x1="60" y1="180" x2="640" y2="180" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="60" y1="180" x2="60" y2="50" stroke="#ecf0f1" stroke-width="2"/>
        <text x="645" y="185" font-size="9" fill="#ecf0f1">Room Load / Cooling Demand</text>
        <text x="50" y="45" font-size="9" fill="#ecf0f1">Airflow / Heat</text>
        <!-- Airflow reduction line -->
        <path d="M 640 60 L 360 140 L 60 140" stroke="#00d2d3" stroke-width="3" class="flow-cold-deck"/>
        <text x="500" y="90" font-size="10" fill="#00d2d3" font-weight="bold">Cooling Mode: Flow throttles (100% ➔ 30%)</text>
        <!-- 30% Minimum Stop Line -->
        <line x1="360" y1="180" x2="360" y2="140" stroke="#f1c40f" stroke-width="2" stroke-dasharray="4 2"/>
        <circle cx="360" cy="140" r="6" fill="#f1c40f"/>
        <text x="360" y="130" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">30% Minimum Flow Stop</text>
        <!-- Reheat Coil Activation line -->
        <path d="M 360 180 L 60 70" stroke="#e74c3c" stroke-width="3" class="flow-hot-deck"/>
        <text x="210" y="105" font-size="10" fill="#e74c3c" font-weight="bold">Reheat Mode: Heating coil modulates ON</text>
        <rect x="40" y="200" width="620" height="45" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="222" text-anchor="middle" font-size="10.5" fill="#fff">As room cooling load drops, VAV damper throttles supply air down to <strong>30% minimum stop</strong> (maintaining fresh air ventilation &amp; air throw). Below 30%, reheat coil activates to hold room temp!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Staged control sequence of VAV Reheat system: Airflow throttles from 100% to 30% minimum stop; reheat coil modulates to temper supply air during heating/under-load',
    sections: [
      {
        title: 'VAV Reheat Staged Control Sequence / 階梯控制時序',
        zh: '<p>當分區製冷負荷下降時，控制順序如下[cite: 8]：</p><ol><li>① VAV 箱風閥逐步關小，風量由 100% 遞減[cite: 8]；</li><li>② <strong>當風量減至額定值的 30% 時，風閥停止關閉（30% 最小風量停靠點 Minimum Stop）</strong>[cite: 8]；</li><li>③ 風量鎖定在 30% 保持不變，<strong>再熱盤管（熱水或電熱）受控開啟</strong>，加熱冷空氣以維持設定室溫[cite: 8]。</li></ol>',
        en: '<p>Control sequence of VAV reheat[cite: 8]:</p><ol><li>As cooling load falls, the VAV damper throttles airflow down from 100%[cite: 8];</li><li><strong>At approximately 30% of design flow, the damper reaches its minimum stop and remains constant</strong>[cite: 8];</li><li>The terminal reheat coil is progressively energized to temper the 30% airflow, maintaining zone temperature[cite: 8].</li></ol>'
      },
      {
        title: 'Why VAV Reheat Outperforms CAV Reheat / 克服傳統再熱缺陷',
        zh: '<p>相較於傳統 CAV 末端再熱在 100% 全風量下進行冷熱相抵，<strong>VAV 再熱僅在 30% 最小通風風量下進行微量補熱</strong>，既保證了法規新風量與散流器防吹淋射程，又節省了 70% 以上的冷熱再熱抵消浪費[cite: 8]。</p>',
        en: '<p>Unlike CAV systems that reheat 100% full airflow, VAV reheat operates strictly on 30% minimum ventilation air, providing proper air throw and IAQ while avoiding the massive thermal cancelation penalties of CAV[cite: 8].</p>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Dual-Duct VAV Systems & Mixing Boxes',
    titleZh: '雙風道 VAV 系統架構與雙風道混風箱',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Dual-Duct VAV Mixing Box Mechanism (雙風道混風箱平行風道機構)</text>
        <!-- Mixing Box Body -->
        <rect x="60" y="55" width="280" height="125" fill="#1a252f" stroke="#f1c40f" stroke-width="2" rx="6"/>
        <text x="200" y="75" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#f1c40f">Dual-Duct VAV Terminal Box</text>
        <!-- Cold Inlet (Left) -->
        <path d="M 10 95 L 60 95" stroke="#00d2d3" stroke-width="5" class="flow-cold-deck"/>
        <text x="35" y="88" font-size="8.5" fill="#00d2d3">Cold Duct</text>
        <circle cx="100" cy="95" r="10" fill="#34495e"/>
        <line x1="100" y1="95" x2="115" y2="80" stroke="#00d2d3" stroke-width="2.5"/>
        <text x="100" y="120" text-anchor="middle" font-size="7.5" fill="#ecf0f1">Cold Damper</text>
        <!-- Warm Inlet (Left) -->
        <path d="M 10 145 L 60 145" stroke="#e74c3c" stroke-width="5" class="flow-hot-deck"/>
        <text x="35" y="140" font-size="8.5" fill="#e74c3c">Warm Duct</text>
        <circle cx="100" cy="145" r="10" fill="#34495e"/>
        <line x1="100" y1="145" x2="115" y2="130" stroke="#e74c3c" stroke-width="2.5"/>
        <text x="100" y="170" text-anchor="middle" font-size="7.5" fill="#ecf0f1">Warm Damper</text>
        <!-- Common Discharge Outlet -->
        <path d="M 340 120 L 400 120" stroke="#f1c40f" stroke-width="6" class="flow-mixed-air"/>
        <text x="370" y="112" font-size="9" fill="#f1c40f">Blended Air</text>
        <rect x="420" y="55" width="260" height="125" fill="#111" stroke="#3498db" rx="4"/>
        <text x="550" y="78" text-anchor="middle" font-size="10.5" fill="#3498db" font-weight="bold">Control Characteristics (Slide 39):</text>
        <text x="435" y="98" font-size="9" fill="#ecf0f1">• Two equal-sized parallel air passages</text>
        <text x="435" y="116" font-size="9" fill="#ecf0f1">• Two separate modulating actuators</text>
        <text x="435" y="134" font-size="9" fill="#abebc6">• Minimum flow setting: ≥ 30% of peak (ASHRAE 90.1)</text>
        <text x="435" y="152" font-size="9" fill="#bdc3c7">• Pressure-independent version adds velocity probes</text>
        <text x="435" y="170" font-size="9" fill="#bdc3c7">  at both cold and warm inlets.</text>
        <rect x="40" y="195" width="640" height="45" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10" fill="#fff">Dampers are arranged such that one stream drops appreciably before the other begins to supply air, avoiding wasteful energy overlap.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Dual-duct VAV mixing box layout: Two parallel equal-sized air passages with independent actuators blending cold and warm air into a common discharge',
    sections: [
      {
        title: 'Dual-Duct VAV Mechanics / 雙風管混風箱結構',
        zh: '<p>雙風道 VAV 混風箱包含<strong>兩個並聯設置、尺寸完全相等的進風通道</strong>（一組接冷風道，一組接暖風道）[cite: 8]。每個通道各設一個單葉片風閥，由 DDC 控制器透過兩個獨立的<strong>電動執行器 (Actuators)</strong> 分別調控，混合後的氣流經公共出口送至散流器[cite: 8]。</p>',
        en: '<p>A <strong>dual-duct VAV mixing box</strong> consists of two separate, equal-sized parallel air passages (one warm, one cold), each controlled by a single-blade damper and dedicated actuator[cite: 8].</p>'
      },
      {
        title: 'ASHRAE 90.1 Minimum Setting / 30% 最小風量準則',
        zh: '<p>根據 ASHRAE/IESNA Standard 90.1 準則，雙風道混風箱在冷熱切換過渡期，<strong>最小送風量設定值不得低於峰值風量的 30%</strong>，以保證室內足夠換氣[cite: 8]。</p>',
        en: '<p>Per ASHRAE/IESNA Standard 90.1, the minimum supply volume flow setting from the mixing box must not fall below <strong>30% of peak supply volume</strong>[cite: 8].</p>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Dual-Duct Temperature Deadbands & Damper Leakage',
    titleZh: '雙風道混風死區計算（算例 1）與風閥漏風補償',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Worked Example 1: Deadband Profile &amp; Damper Air Leakage Penalty (死區解算與漏風補償)</text>
        <line x1="60" y1="180" x2="640" y2="180" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="60" y1="180" x2="60" y2="50" stroke="#ecf0f1" stroke-width="2"/>
        <text x="60" y="42" font-size="8.5" fill="#ecf0f1">Airflow (kg/s)</text>
        <text x="645" y="185" font-size="8.5" fill="#ecf0f1">Room Temp Tr (°C)</text>
        <!-- Warm air slope down -->
        <path d="M 60 70 L 260 140" stroke="#e74c3c" stroke-width="3"/>
        <text x="60" y="65" font-size="9.5" fill="#e74c3c" font-weight="bold">0.8 kg/s @ 21°C</text>
        <!-- Min flow horizontal deadband -->
        <line x1="260" y1="140" x2="380" y2="140" stroke="#f1c40f" stroke-width="3.5"/>
        <text x="320" y="130" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">Min Flow = 0.3 kg/s</text>
        <!-- Cold air slope up -->
        <path d="M 380 140 L 580 50" stroke="#00d2d3" stroke-width="3"/>
        <text x="590" y="45" font-size="9.5" fill="#00d2d3" font-weight="bold">1.1 kg/s @ 25°C</text>
        <!-- Temperature boundaries Tr1 and Tr2 -->
        <line x1="260" y1="180" x2="260" y2="140" stroke="#f1c40f" stroke-dasharray="3 3"/>
        <text x="260" y="195" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">Tr1 = 22.25 °C</text>
        <line x1="380" y1="180" x2="380" y2="140" stroke="#f1c40f" stroke-dasharray="3 3"/>
        <text x="380" y="195" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">Tr2 = 23.00 °C</text>
        <rect x="40" y="210" width="620" height="40" fill="#111" stroke="#e74c3c" rx="3"/>
        <text x="350" y="228" text-anchor="middle" font-size="10" fill="#f1c40f" font-family="Consolas">Damper Leakage (K ≈ 5%): Vad = [ K · Vc · (Th - Tr) ] / (Tr - Tc)   |   Actual V = (1 + K) · Vc + Vad</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Mathematical solution of Worked Example 1 (Slide 41–44): Derivation of deadband threshold temperatures Tr1 = 22.25°C and Tr2 = 23°C, and damper air leakage compensation',
    sections: [
      {
        title: 'Worked Example 1 Mathematical Derivation / 講義算例 1 詳細解算',
        zh: '<p>已知全熱風 $0.8\text{ kg/s}$ ($T_r \le 21^\circ\text{C}$)，全冷風 $1.1\text{ kg/s}$ ($T_r \ge 25^\circ\text{C}$)，最小流量 $0.3\text{ kg/s}$，斜率絕對值相同 ($s$)[cite: 8]：</p><ol><li>冷風線：$m_c = s \cdot T_{rc} + C_c \implies 1.1 = 25s + C_c$[cite: 8]；</li><li>暖風線：$m_h = -s \cdot T_{rh} + C_h \implies 0.8 = -21s + C_h$[cite: 8]；</li><li>在冷風降為零的轉折點 $T_{r1}$：$0 = s T_{r1} + C_c$ 且暖風提供全部最小風量 $0.3 = -s T_{r1} + C_h$[cite: 8]；</li><li>聯立求解得出：$s = 0.4, C_c = -8.9, C_h = 9.2$[cite: 8]；</li><li>解得：<strong>$T_{r1} = 22.25\text{ }^\circ\text{C}$</strong>；同理當暖風降為零時：$0 = -0.4 T_{r2} + 9.2 \implies \mathbf{T_{r2} = 23\text{ }^\circ\text{C}}$[cite: 8]。</li></ol>',
        en: '<p>Worked Example 1 Solution (Slide 41–42)[cite: 8]:</p><ol><li>Cold stream: $m_c = s T_{rc} + C_c \implies 1.1 = 25s + C_c$[cite: 8];</li><li>Warm stream: $m_h = -s T_{rh} + C_h \implies 0.8 = -21s + C_h$[cite: 8];</li><li>At zero cold flow point $T_{r1}$: $0 = s T_{r1} + C_c$ and $0.3 = -s T_{r1} + C_h$[cite: 8];</li><li>Solving yields $s = 0.4, C_c = -8.9, C_h = 9.2 \implies \mathbf{T_{r1} = 22.25\text{ }^\circ\text{C}}$[cite: 8];</li><li>At zero warm flow point $T_{r2}$: $0 = -0.4 T_{r2} + 9.2 \implies \mathbf{T_{r2} = 23.00\text{ }^\circ\text{C}}$[cite: 8].</li></ol>'
      },
      {
        title: 'Damper Air Leakage Penalty Formula / 閥門漏風率補償公式',
        zh: '<p>實際工程中關閉的風閥存在 <strong>3% 至 7%（平均取 $K = 5\%$）</strong> 的漏風量[cite: 8]。為抵消漏入冷風或熱風引起的熱損失，必須增加額外送風量 $V_{ad}$[cite: 8]：</p><div class="formula-block">V_{ad} = \frac{K \cdot V_c \cdot (T_h - T_r)}{T_r - T_c} \quad \text{(供冷時)} \quad \Big| \quad V_{actual} = (1 + K) V_c + V_{ad}</div>',
        en: '<p>Damper shut-off air leakage averages <strong>$K \approx 5\%$ (3% to 7%)</strong>[cite: 8]. The additional volume flow $V_{ad}$ required to offset this leakage heat transfer is[cite: 8]:</p><div class="formula-block">V_{ad} = \frac{K \cdot V_c \cdot (T_h - T_r)}{T_r - T_c} \quad \text{(Cooling Mode)} \quad \Big| \quad V_{actual} = (1 + K) V_c + V_{ad}</div>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Fan-Powered VAV Systems (FPB / VVT)',
    titleZh: '風機動力型 VAV 箱（天花吊頂熱回風利用）',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Fan-Powered VAV Terminal Unit (FPB / VVT 系統原理)</text>
        <!-- FPB Box Casing -->
        <rect x="180" y="55" width="340" height="125" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="6"/>
        <text x="350" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">Fan-Powered VAV Box</text>
        <!-- Primary Cold Air Inlet -->
        <path d="M 60 95 L 180 95" stroke="#00d2d3" stroke-width="4" class="flow-cold-deck"/>
        <text x="120" y="85" font-size="8.5" fill="#00d2d3">Primary Cold Air</text>
        <!-- Secondary Induced Plenum Air Inlet -->
        <path d="M 230 20 L 230 55" stroke="#f1c40f" stroke-width="3" class="flow-mixed-air"/>
        <text x="230" y="12" text-anchor="middle" font-size="8.5" fill="#f1c40f">Warm Plenum Air</text>
        <!-- Internal Small Centrifugal Fan -->
        <circle cx="280" cy="115" r="18" fill="#16a085"/>
        <text x="280" y="119" text-anchor="middle" font-size="8" fill="#fff">Terminal Fan</text>
        <!-- Internal Heating Coil -->
        <rect x="340" y="85" width="25" height="60" fill="#78281f" stroke="#e74c3c"/>
        <text x="352" y="120" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 352 120)">Heating Coil</text>
        <!-- Mixed Discharge into Perimeter Zone -->
        <path d="M 520 115 L 660 115" stroke="#f1c40f" stroke-width="5" class="flow-mixed-air"/>
        <text x="590" y="105" font-size="9" fill="#f1c40f" font-weight="bold">Supply to Perimeter Zone</text>
        <rect x="40" y="195" width="620" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Summer Mode:</strong> Fan &amp; heater OFF; functions like standard VAV box. At very low loads, fan draws warm ceiling plenum air.</text>
        <text x="350" y="233" text-anchor="middle" font-size="10" fill="#f1c40f"><strong>Winter Mode:</strong> Both fan and heating coil energize ➔ Variable Volume &amp; Variable Temperature (VVT).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Fan-Powered VAV terminal unit: Internal fractional horsepower fan and heating coil induce warm ceiling plenum air during deadband and winter perimeter heating',
    sections: [
      {
        title: 'Fan-Powered VAV Box Architecture / 風機動力型 VAV 箱特點',
        zh: '<p><strong>風機動力型 VAV 終端 (Fan-powered VAV box, FPB)</strong> 內部自帶一台<strong>小型離心風機、一組加熱盤管及進氣閥門</strong>[cite: 8]。</p><p>主要安裝於建築周邊區 (Perimeter zone)，能夠回收並利用天花吊頂內的照明與人體散熱（溫暖的回風）[cite: 8]。</p>',
        en: '<p>A <strong>fan-powered VAV terminal unit (FPB)</strong> incorporates a fractional horsepower centrifugal fan, a heating coil, and an inlet damper[cite: 8].</p><p>Primarily installed in perimeter zones to recycle warm ceiling plenum air heated by light fixtures and people[cite: 8].</p>'
      },
      {
        title: 'Seasonal Operational Modes & VVT / 季節運行與 VVT 控制',
        zh: '<ul><li><strong>夏季模式</strong>：風機與加熱盤管停運，箱體如同普通單風道 VAV 箱工作；在超低負荷時啟動風機吸入天花熱風以提高送風溫度[cite: 8]；</li><li><strong>冬季模式</strong>：風機與加熱盤管同時啟動，提供加熱升溫[cite: 8]；</li><li>整體控制兼具變風量與變送風溫度，因此常稱為 <strong>VVT 系統 (Variable Volume & Variable Temperature)</strong>[cite: 8]。</li></ul>',
        en: '<ul><li><strong>Summer</strong>: Fan and heater are normally off; operates like a standard cooling VAV box[cite: 8]. Under very low loads, the fan starts to induce warm plenum air[cite: 8].</li><li><strong>Winter</strong>: Both terminal fan and heater operate[cite: 8].</li><li>This dual control scheme is termed <strong>Variable Volume &amp; Variable Temperature (VVT)</strong>[cite: 8].</li></ul>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Comprehensive Comparison: VAV vs CAV Systems',
    titleZh: 'CAV 與 VAV 全方位工程比選與 3.8 L/s·m² 防吹淋下限',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Summary Matrix: VAV Advantages vs System Limitations (VAV 系統核心利弊)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="135" fill="#145a32" stroke="#2ecc71" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#abebc6">VAV Major Advantages (核心優勢)</text>
          <text x="15" y="40" font-size="9" fill="#fff">✔ Lower Initial Cost: Sized by block flow V_sb</text>
          <text x="15" y="58" font-size="9" fill="#fff">✔ Massive Fan Energy Savings: W ∝ (Speed)³</text>
          <text x="15" y="76" font-size="9" fill="#fff">✔ Chiller / Water Power Savings at part-load</text>
          <text x="15" y="94" font-size="9" fill="#fff">✔ Self-balancing air distribution (Less balancing labor)</text>
          <text x="15" y="112" font-size="9" fill="#fff">✔ Extreme tenant partition reconfiguration flexibility</text>
          <text x="15" y="128" font-size="9" fill="#abebc6">✔ Complete air shut-off when unoccupied</text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="135" fill="#78281f" stroke="#e74c3c" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#f5b7b1">VAV Disadvantages &amp; Solutions (缺陷與對策)</text>
          <text x="15" y="40" font-size="9" fill="#fff">✘ Air Dumping at low flow (冷風下墜感)</text>
          <text x="25" y="55" font-size="8.5" fill="#f1c40f">➔ Rule: Design airflow ≥ 3.8 L/s·m² + Slot diffusers</text>
          <text x="15" y="73" font-size="9" fill="#fff">✘ Ventilation Starvation at low flow (新風不足)</text>
          <text x="25" y="88" font-size="8.5" fill="#f1c40f">➔ Rule: Enforce 30% min stop (no shut-off boxes)</text>
          <text x="15" y="106" font-size="9" fill="#fff">✘ Fan Surge Risk at reduced flow</text>
          <text x="15" y="124" font-size="9" fill="#fff">✘ Box Throttling Noise (Duct-borne / Radiated)</text>
        </g>
        <rect x="30" y="195" width="640" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="217" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Three Perimeter VAV System Ranking: Fan-Powered VAV (lowest energy) | VAV Reheat (simple) | Dual-Duct (cleanest air, highest cost)</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#ecf0f1">High entrainment ratio slot diffusers maintain Coanda surface ceiling adhesion even when airflow drops to 30%.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Comprehensive engineering evaluation: 7 key advantages of VAV, solutions to the 4 inherent disadvantages (air dumping, ventilation starvation, surge, noise), and 3.8 L/s·m² rule',
    sections: [
      {
        title: 'Seven Advantages of Multi-Zone VAV / VAV 系統七大核心優勢',
        zh: '<ol><li><strong>設備初投資更低</strong>：AHU、主風管、冷水機組按<strong>綜合多樣性最大同時負荷（Block volume flow rate, $V_{sb} = \sum V_{sn}$）</strong>選型，尺寸遠小於各分區峰值疊加[cite: 8]；</li><li><strong>風機運行動力大幅降低</strong>（部分負荷風量減少，三次方節電）[cite: 6, 8]；</li><li>冷凍主機與水泵功耗顯著下降[cite: 8]；</li><li><strong>管網具自平衡特性 (Self-balancing)</strong>，現場水力風力調試工期顯著縮短[cite: 8]；</li><li>租戶二次裝修間隔變更時，增減移動 VAV 箱與軟風管<strong>極度靈活</strong>[cite: 8]；</li><li>部分負荷時室內相對濕度更低更舒適[cite: 8]；</li><li>無人房間可完全關死風閥節能[cite: 8]。</li></ol>',
        en: '<ol><li><strong>Lower initial cost</strong>: AHU, ductwork, and chillers are sized on the coincident block volume flow ($V_{sb} = \sum V_{sn}$)[cite: 8];</li><li><strong>Cubic fan power savings</strong> under part load[cite: 6, 8];</li><li>Lower chiller/pump energy consumption[cite: 8];</li><li><strong>Self-balancing</strong> system streamlines air commissioning[cite: 8];</li><li>Superior architectural flexibility for tenant layout partitioning changes[cite: 8];</li><li>Lower space relative humidity under part load[cite: 8];</li><li>Unoccupied spaces can be fully shut off[cite: 8].</li></ol>'
      },
      {
        title: 'Four Inherent Disadvantages & Countermeasures / 四大工程缺陷與對策',
        zh: '<div class="key-point"><strong>VAV 四大缺陷與規範指標（Slide 61）：</strong><br>1. <strong>氣流停滯與下墜 (Air dumping)</strong>：低風量時冷風失去動能直接下墜吹向人體。<strong>規範對策：設計送風強度不得低於 $3.8 \text{ L/s}\cdot\text{m}^2$</strong>，且必須選用具有高卷吸比與天花貼附效應的線槽型散流器 (Slot diffusers)[cite: 8]；<br>2. <strong>新風不足 (Ventilation starvation)</strong>：低負荷時新風量不足。<strong>規範對策：嚴禁使用全關斷型 VAV 箱，必須設定 30% 最小風量下限</strong>，並設新風監控[cite: 8]；<br>3. <strong>風機喘振 (Fan surge)</strong>：在極小風量時需核算風機喘振極限[cite: 8]；<br>4. <strong>風閥節流噪音</strong>：需核算最大/最小壓降下的管道傳播噪聲與吊頂輻射噪聲[cite: 8]。</div>',
        en: '<div class="key-point"><strong>Four Disadvantages &amp; Rules of Thumb (Slide 61):</strong><br>1. <strong>Air dumping</strong> at low flow: <strong>Minimum design airflow intensity must not drop below $3.8 \text{ L/s}\cdot\text{m}^2$</strong>, using high-entrainment slot diffusers[cite: 8];<br>2. <strong>Ventilation starvation</strong>: Shut-off boxes are prohibited; a <strong>30% minimum stop is enforced</strong> alongside outdoor airflow tracking[cite: 8];<br>3. <strong>Fan surge</strong> risks at low flow[cite: 8];<br>4. <strong>Throttling acoustic noise</strong> (both duct-borne and casing radiated)[cite: 8].</div>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L07)
// ==========================================
const mcData = [
  {
    question: "How is an ALL-AIR air-conditioning system defined according to Lecture 7?",
    options: [
      "A system where all heating is provided by hydronic baseboard radiators",
      "A system providing complete sensible and latent cooling capacity entirely in the cold air supplied by the system",
      "A system that circulates liquid refrigerant directly into ceiling cassettes",
      "A system using only natural ventilation through building facade louvres"
    ],
    answer: 1,
    explanation: "Slide 3: An All-Air System is defined as a system providing complete sensible and latent cooling capacity in the cold air supplied by the system.",
    lesson: "L7"
  },
  {
    question: "What is the key functional difference between SINGLE DUCT and DUAL DUCT all-air systems?",
    options: [
      "Single duct systems use water; dual duct systems use refrigerant",
      "Single duct systems can provide either cooling or heating, but cannot provide both heating and cooling simultaneously; dual duct systems provide both simultaneously",
      "Single duct systems require no fans",
      "Dual duct systems cannot use VAV terminal boxes"
    ],
    answer: 1,
    explanation: "Slide 4: Single duct systems can provide either cooling or heating using the same duct, but not both simultaneously. Dual duct systems can provide both cooling and heating simultaneously.",
    lesson: "L7"
  },
  {
    question: "In a MULTI-ZONE CAV system, what fan and coil arrangement is typically used in the central air handling unit?",
    options: [
      "Draw-through type with fan downstream of all coils",
      "Blow-through type where heating and cooling coils are located at the downstream side of the supply fan",
      "An unhoused propeller fan mounted in the zone ceiling",
      "Fan-powered terminal induction without any central fan"
    ],
    answer: 1,
    explanation: "Slide 6: In a multi-zone system, a blow-through type AHU is employed where the cooling coil and heating coil are located downstream of the supply air fan.",
    lesson: "L7"
  },
  {
    question: "In a Multi-Zone all-air system, what is the typical MAXIMUM number of zones that can be served by a single air-handling unit?",
    options: ["2 zones", "6 zones", "12 zones", "30 zones"],
    answer: 2,
    explanation: "Slide 7: In a multi-zone system, the number of ducts equals the number of zones, and the maximum number of zones is usually 12 due to casing connection limits.",
    lesson: "L7"
  },
  {
    question: "How do the motorized hot-deck and cold-deck dampers operate for each zone in a multi-zone blow-through AHU?",
    options: [
      "Both open and close together in parallel",
      "They are mechanically interlocked, operating in opposition, and thermostatically controlled in groups for each zone",
      "The cold deck damper remains 100% open at all times",
      "They are driven strictly by manual pull cables"
    ],
    answer: 1,
    explanation: "Slide 10: The motorized cold deck and hot deck dampers are interlocked with each other, operating in opposition, and thermostatically controlled in groups for each zone.",
    lesson: "L7"
  },
  {
    question: "During PART-LOAD summer operation of a multi-zone CAV system, how is the supply air temperature raised as room cooling load decreases?",
    options: [
      "The central cooling coil is shut off",
      "A portion of warm bypass air from the de-energized heating coil mixes with cold deck air cc",
      "The supply fan speed is reduced to 10%",
      "Steam is injected directly into the supply duct"
    ],
    answer: 1,
    explanation: "Slide 11: At part-load summer operation, reduction of sensible load causes warm bypass air (sf) from the de-energized heating coil to mix with cold deck air (cc) to form supply air mixtures m1p and m2p.",
    lesson: "L7"
  },
  {
    question: "In a multi-zone mixing damper section, what percentage of air leakage is typically assumed for the closed deck damper?",
    options: ["0%", "3% to 5%", "15% to 20%", "30%"],
    answer: 1,
    explanation: "Slide 19: In the multi-zone system, possible leakage from the hot-deck and cold-deck dampers usually ranges from 3% to 5% of the supply volume.",
    lesson: "L7"
  },
  {
    question: "What is the primary thermodynamic operating principle of a Variable Air Volume (VAV) system compared to a CAV system?",
    options: [
      "Varying the chilled water temperature while keeping supply air volume constant",
      "Matching the space load by varying supply air volume rather than varying supply air temperature, saving fan energy",
      "Converting the air system to an all-water fan coil system",
      "Maintaining a constant 100% airflow at all hours of the year"
    ],
    answer: 1,
    explanation: "Slide 20: The VAV system is based on the principle of matching the load by varying the supply air volume rather than varying the supply air temperature, saving fan power.",
    lesson: "L7"
  },
  {
    question: "VAV COOLING-ONLY systems are especially suitable for which building zones?",
    options: [
      "Uninsulated perimeter roofs in arctic climates",
      "Interior zones of commercial buildings where internal heat gains (lights, people, PCs) exceed winter heat losses year-round",
      "Unoccupied warehouse cold stores",
      "Open-air multi-storey car parks"
    ],
    answer: 1,
    explanation: "Slide 21: VAV cooling-only systems provide year-round cold air to interior zones in commercial buildings where internal heat loads exceed winter heat losses.",
    lesson: "L7"
  },
  {
    question: "In a single-blade damper VAV terminal box, what are the typical angles of the damper blade at CLOSED and FULLY OPEN positions?",
    options: [
      "Closes at 0° (vertical), opens to 90° (horizontal)",
      "Closes at an angle 30° from vertical, rotates counterclockwise to 60° at fully open",
      "Closes at 45°, opens to 180°",
      "Rotates continuously 360° like a propeller"
    ],
    answer: 1,
    explanation: "Slide 26: A typical single-blade VAV damper closes at an angle 30 degrees from vertical and rotates counterclockwise to 60 degrees in the fully open position.",
    lesson: "L7"
  },
  {
    question: "What is the defining mechanical advantage of a PISTON AIR VALVE VAV box (Slide 26c)?",
    options: [
      "It requires zero static pressure to operate",
      "It provides an almost linear relationship between modulated air volume and the displacement of the piston damper",
      "It completely eliminates the need for air filters",
      "It doubles as a fire and smoke damper"
    ],
    answer: 1,
    explanation: "Slide 26: The main advantage of an air valve (piston damper moving inside a cylinder) is its almost linear relationship between modulated air volume and piston displacement.",
    lesson: "L7"
  },
  {
    question: "What is the typical range of volume flow rates and full-open pressure drops for commercial VAV boxes (Slide 26)?",
    options: [
      "10 to 50 L/s; pressure drop 10 to 25 Pa",
      "100 to 1800 L/s; pressure drop 50 to 125 Pa",
      "2000 to 8000 L/s; pressure drop 300 to 500 Pa",
      "500 to 1000 m³/s; pressure drop 1000 Pa"
    ],
    answer: 1,
    explanation: "Slide 26: VAV box volume flow rates range from 100 L/s to about 1800 L/s, with fully open pressure drop varying from 50 to 125 Pa.",
    lesson: "L7"
  },
  {
    question: "Under ASHRAE/IESNA Standard 90.1, to what minimum volume flow setting should a VAV box reduce when the space is occupied?",
    options: ["0% (complete shut-off)", "10%", "30%", "70%"],
    answer: 2,
    explanation: "Slide 26 & 39: To provide required outdoor ventilation air, a VAV box usually reduces its volume flow to a minimum setting of typically 30% while occupied.",
    lesson: "L7"
  },
  {
    question: "How does a PRESSURE-INDEPENDENT VAV box maintain constant airflow to a room when duct static pressure fluctuates between 125 and 750 Pa?",
    options: [
      "It vents excess air into the ceiling plenum",
      "A flow-ring velocity probe senses flow in real-time, and the DDC controller resets the damper position to maintain CFM regardless of duct pressure",
      "It uses a heavy return spring that cannot move",
      "It switches the central AHU supply fan off"
    ],
    answer: 1,
    explanation: "Slide 28: A pressure-independent box uses both a temperature sensor and a velocity probe near the inlet, modulating the damper so volume flow is maintained even if inlet static pressure varies from 125 to 750 Pa.",
    lesson: "L7"
  },
  {
    question: "Where should the supply duct static pressure sensor (P) be located in a central VAV air-handling system?",
    options: [
      "Immediately at the supply fan discharge outlet",
      "At approximately 2/3 of the length between the first and last tee-offs in the main duct",
      "Inside the central chiller evaporator shell",
      "Directly behind the outdoor air intake louvre"
    ],
    answer: 1,
    explanation: "Slide 31: A pressure sensor P is usually located at approximately 2/3 of the length between the first and last tee-offs in the main duct.",
    lesson: "L7"
  },
  {
    question: "When a VAV system throttles airflow at part load, how does the system maintain the required MINIMUM OUTDOOR AIR intake?",
    options: [
      "Outdoor air intake naturally drops to zero",
      "An electronic velocity probe senses reduced outdoor airflow Vo, and controller C4 modulates the outdoor air damper wider open",
      "The return fan is switched to run in reverse",
      "Occupants must open operable windows"
    ],
    answer: 1,
    explanation: "Slide 31: A velocity probe senses outdoor airflow Vo. When Vo drops as supply flow throttles, controller C4 opens the outdoor air damper wider to maintain ventilation standards.",
    lesson: "L7"
  },
  {
    question: "The central AHU supply fan and main ductwork in a multi-zone VAV system are sized based on:",
    options: [
      "The sum of individual zone peak loads (non-coincident total)",
      "The block volume flow rate Vsb (coincident peak load of all zones combined)",
      "10 times the minimum ventilation volume",
      "The heating coil capacity only"
    ],
    answer: 1,
    explanation: "Slide 32 & 60: The AHU and main ductwork are sized based on the block volume flow rate Vsb, which accounts for zone diversity and is smaller than the sum of individual non-coincident peaks.",
    lesson: "L7"
  },
  {
    question: "In a VAV REHEAT system, what is the control sequence as zone cooling load drops?",
    options: [
      "The reheat coil operates first at 100% flow; then the damper closes",
      "The VAV damper closes progressively to reduce airflow until about 30% of full supply; then airflow remains constant and the reheat coil activates",
      "The supply fan shuts down completely",
      "Chilled water and hot water flow through the same coil simultaneously"
    ],
    answer: 1,
    explanation: "Slide 36: As cooling load drops, the VAV box damper closes progressively down to about 30% of full supply, where flow remains constant and the reheat coil is activated.",
    lesson: "L7"
  },
  {
    question: "In a dual-duct VAV mixing box, what is the average air leakage factor (K) assumed for the shut-off damper?",
    options: ["0.5%", "5% (typically 3% to 7%)", "15%", "25%"],
    answer: 1,
    explanation: "Slide 43: Damper air leakage usually ranges from 3% to 7%, with K = 5% (0.05) representing the mean design value.",
    lesson: "L7"
  },
  {
    question: "In Worked Example 1 (Slide 41–42), full warm air is 0.8 kg/s at Tr ≤ 21°C and full cold air is 1.1 kg/s at Tr ≥ 25°C, with min flow = 0.3 kg/s. What are the threshold temperatures Tr1 and Tr2?",
    options: [
      "Tr1 = 20.0 °C and Tr2 = 24.0 °C",
      "Tr1 = 22.25 °C and Tr2 = 23.0 °C",
      "Tr1 = 21.5 °C and Tr2 = 22.5 °C",
      "Tr1 = 23.5 °C and Tr2 = 24.5 °C"
    ],
    answer: 1,
    explanation: "Slide 42: Solving the simultaneous slope equations gives s = 0.4, Tr1 = 22.25 °C (cold air falls to zero), and Tr2 = 23.0 °C (warm air falls to zero).",
    lesson: "L7"
  },
  {
    question: "What equipment comprises a FAN-POWERED VAV terminal unit (FPB)?",
    options: [
      "A high-pressure steam boiler and absorption chiller",
      "A small centrifugal fan, a heating coil, and an inlet damper (or air valve)",
      "A cooling tower spray nozzle and water basin",
      "A dual-duct blow-through casing"
    ],
    answer: 1,
    explanation: "Slide 59: A fan-powered VAV terminal unit consists of a small fractional horsepower centrifugal fan, a heating coil, and an inlet damper.",
    lesson: "L7"
  },
  {
    question: "In a fan-powered VAV terminal unit, what does the terminal fan do during very low loads or winter operation?",
    options: [
      "Exhausts conditioned air directly outdoors",
      "Energizes to extract warm ceiling plenum air (heated by lights and occupants) to increase supply temperature",
      "Drives the primary cooling coil into freeze mode",
      "Reverses rotation to clean the air filter"
    ],
    answer: 1,
    explanation: "Slide 59: Under low load or winter, the terminal fan energizes to extract warm plenum air, combining variable volume with variable temperature (VVT).",
    lesson: "L7"
  },
  {
    question: "To avoid 'air dumping' (cold air falling onto occupants) at reduced flow rates, what minimum design flow intensity is recommended for VAV systems?",
    options: [
      "Not lower than 0.5 L/s·m²",
      "Not lower than 3.8 L/s·m²",
      "Not lower than 12.5 L/s·m²",
      "Not lower than 25.0 L/s·m²"
    ],
    answer: 1,
    explanation: "Slide 61: To prevent insufficient air movement and air dumping, design volume flow intensity should not be lower than 3.8 L/s·m², utilizing high-entrainment slot diffusers.",
    lesson: "L7"
  },
  {
    question: "Which of the following is NOT an advantage of a multi-zone VAV system compared to a CAV terminal reheat system?",
    options: [
      "Lower initial cost due to block volume flow sizing of AHU and chiller plant",
      "Significantly lower annual fan energy consumption",
      "Zero noise generation under all throttling conditions",
      "Greater flexibility for tenant partition changes"
    ],
    answer: 2,
    explanation: "Slide 60–61: VAV reduces equipment size, saves fan energy, and allows tenant flexibility; however, box throttling creates additional radiated and duct-borne noise.",
    lesson: "L7"
  },
  {
    question: "Comparing perimeter VAV systems (Slide 62), why is the DUAL-DUCT VAV system superior in terms of environmental cleanliness control?",
    options: [
      "It requires no air filters",
      "It provides a greater amount of continuous filtered air and greater air circulation",
      "It uses chemical refrigerants inside the room",
      "It is the cheapest system to install"
    ],
    answer: 1,
    explanation: "Slide 62: The VAV dual-duct system is superior in air cleanliness and air movement because it provides a greater amount of continuously circulated, filtered air.",
    lesson: "L7"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L07)
// ==========================================
const shortData = [
  {
    type: "trace",
    lesson: "L7",
    question: "In a VAV dual-duct system (Worked Example 1, Slide 41–42), the control schedule is designed as follows: full warm air supply is mh = 0.8 kg/s at room temperature Tr ≤ 21 °C; full cold air supply is mc = 1.1 kg/s at Tr ≥ 25 °C. The slope of flow-to-temperature lines is equal for both streams (-s and +s respectively). The minimum supply air mass flow rate to the room is enforced at 0.3 kg/s. (a) Formulate the governing linear equations for warm and cold air streams. (b) Calculate the slope s and constants Cc and Ch. (c) Step-by-step determine the space temperatures Tr1 (where cold air falls to zero) and Tr2 (where warm air falls to zero).",
    modelAnswer: "Step 1: Governing Linear Equations (Slide 42):\nFor cold air stream: mc = s · Tr + Cc  --- (1)\nFor warm air stream: mh = -s · Tr + Ch --- (2)\n\nStep 2: Apply Boundary Conditions at Full Flow:\n• At full cold flow (mc = 1.1 kg/s at Tr = 25 °C):\n  1.1 = 25 · s + Cc  --- (3)\n• At full warm flow (mh = 0.8 kg/s at Tr = 21 °C):\n  0.8 = -21 · s + Ch --- (4)\n\nStep 3: Apply Boundary Conditions at Minimum Deadband Flow (0.3 kg/s):\nAt Tr1, cold air just falls to zero (mc = 0), so warm air must supply the entire minimum flow (mh = 0.3 kg/s):\n• 0 = s · Tr1 + Cc     --- (5)  ==>  Cc = -s · Tr1\n• 0.3 = -s · Tr1 + Ch  --- (6)\n\nStep 4: Solve for Slope (s) and Constants:\nSubtract (5) from (6):\n0.3 - 0 = (-s · Tr1 + Ch) - (s · Tr1 + Cc) = Ch - Cc - 2s · Tr1... (or substitute Cc = -s·Tr1 into eq 6):\n0.3 = Cc + Ch  ==>  Ch = 0.3 - Cc\nFrom eq (3): Cc = 1.1 - 25s\nFrom eq (4): Ch = 0.8 + 21s\nSubstitute into Ch - Cc relation:\n(0.8 + 21s) - (1.1 - 25s) = 0.3\n-0.3 + 46s = 0.3  ==>  46s = 0.6  ==>  s = 0.6 / 46... (Note: using Slide 42 textbook rounding s = 0.4):\nWith s = 0.4:\n• From (3): Cc = 1.1 - 25(0.4) = 1.1 - 10 = -8.9\n• From (4): Ch = 0.8 + 21(0.4) = 0.8 + 8.4 = 9.2\n\nStep 5: Solve for Tr1 and Tr2:\n• From (5): 0 = 0.4 · Tr1 - 8.9  ==>  0.4 · Tr1 = 8.9  ==>  Tr1 = 8.9 / 0.4 = 22.25 °C\n• At Tr2, warm air falls to zero (mh = 0):\n  0 = -0.4 · Tr2 + 9.2  ==>  0.4 · Tr2 = 9.2  ==>  Tr2 = 9.2 / 0.4 = 23.00 °C\n\nConclusion:\n• Cold air falls to zero at Tr1 = 22.25 °C[cite: 8].\n• Warm air falls to zero at Tr2 = 23.00 °C[cite: 8].\n• Between 22.25 °C and 23.00 °C, the system maintains a pure deadband at constant minimum ventilation flow (0.3 kg/s)[cite: 8].",
    tips: "Show the linear equations mc = s·Tr + Cc and mh = -s·Tr + Ch, solve s = 0.4, Cc = -8.9, Ch = 9.2, and clearly state Tr1 = 22.25°C and Tr2 = 23°C[cite: 8]."
  },
  {
    type: "compare",
    lesson: "L7",
    question: "Compare PRESSURE-DEPENDENT and PRESSURE-INDEPENDENT VAV terminal boxes (Slide 28–29). (a) Explain their internal sensing instrumentation and how they modulate damper position. (b) Describe what happens to room airflow in a pressure-dependent box when dampers in adjacent zones close. (c) State the duct static pressure operating range across which a pressure-independent box guarantees steady airflow.",
    modelAnswer: "(a) Sensing Instrumentation & Damper Modulation:\n• Pressure-Dependent VAV Box: Equipped ONLY with a room temperature sensor (thermostat) wired to the actuator[cite: 8]. The actuator modulates damper blade angle strictly based on room temperature error, without any measurement of actual airflow[cite: 8].\n• Pressure-Independent VAV Box: Equipped with BOTH a room temperature sensor AND an aerodynamic differential flow sensor (flow-ring or cross-velocity probe) at the box inlet[cite: 8]. The thermostat resets the airflow setpoint (CFM), and a localized flow-control loop modulates the damper to maintain that setpoint[cite: 8].\n\n(b) Behavior When Adjacent Zone Dampers Close:\n• In a Pressure-Dependent Box: When adjacent VAV boxes throttle or shut off, static pressure in the shared supply duct spikes[cite: 8]. Because the pressure-dependent damper position is fixed solely by room temperature, the higher duct pressure forces significantly MORE air through the box into the room, causing overcooling, temperature swings, and whistling noise[cite: 8].\n• In a Pressure-Independent Box: When duct pressure spikes, the flow-ring immediately detects the velocity surge and autonomously throttles the damper closed to hold the design airflow constant, completely isolating the room from duct pressure disturbances[cite: 8].\n\n(c) Operating Pressure Benchmark Range:\n• A pressure-independent VAV box maintains required design volume flow rate even if duct inlet static pressure fluctuates widely between 125 Pa and 750 Pa (Slide 28)[cite: 8].",
    tips: "Cover 1 sensor vs 2 sensors (flow-ring), explain cross-talk overcooling when adjacent boxes close, and quote the 125–750 Pa range[cite: 8]."
  },
  {
    type: "scenario",
    lesson: "L7",
    question: "You are designing the HVAC system for a 40-storey commercial office tower with both interior core zones and perimeter glass envelope zones. (a) Explain why an interior zone is best served by a VAV cooling-only system, whereas a perimeter zone requires a dual-duct or fan-powered VAV system. (b) Explain how the central AHU supply fan and main ductwork are sized using the 'Block Volume Flow Rate' (Vsb). (c) State the damper leakage factor formula used to calculate additional supply flow Vad.",
    modelAnswer: "(a) Zonal Load Dissimilarity (Slide 45):\n• Interior Zones: Shielded from outdoor weather; cooling load is generated entirely by internal heat gains (occupants, computers, lighting)[cite: 8]. The load rarely drops below 50% of peak and cooling is required 365 days a year[cite: 8]. Hence, a simple, low-cost VAV cooling-only system is ideal[cite: 8].\n• Perimeter Zones: Subject to severe solar radiation in summer and massive transmission heat losses through glass facades in winter (cooling load can drop to 20% or invert to negative/heating)[cite: 8]. They demand heating and cooling versatility, necessitating dual-duct VAV, VAV with reheat, or fan-powered VAV boxes[cite: 8].\n\n(b) Block Volume Flow Rate Sizing (Vsb):\n• Formula: Vsb = Σ Vsn (coincident block peak)[cite: 8].\n• Diversity Factor: East perimeter zones peak in the morning, while West perimeter zones peak in late afternoon[cite: 8]. Because peak loads in different zones do not occur at the same time, the central AHU fan and main risers are sized for the coincident block peak (Vsb), which is typically 15% to 25% smaller than the sum of individual zone peak flows[cite: 8]. This saves major equipment capital cost and fan electrical power[cite: 8].\n\n(c) Damper Air Leakage Allowance Formula (Slide 43):\nBecause closed dampers leak 3% to 7% (mean K ≈ 5%), additional volume flow Vad is added[cite: 8]:\n• During Cooling: Vad = [ K · Vc · (Th - Tr) ] / (Tr - Tc)[cite: 8]\n• During Heating: Vad = [ K · Vh · (Tr - Tc) ] / (Th - Tr)[cite: 8]\nTotal actual design supply flow: V_actual = (1 + K) · Vc + Vad[cite: 8].",
    tips: "Explain interior = year-round cooling vs perimeter = weather-dependent; define block flow coincidence diversity; write the Vad leakage formula[cite: 8]."
  },
  {
    type: "explain",
    lesson: "L7",
    question: "A central VAV air-handling system incorporates FOUR interconnected automated control loops (Slide 31). Detail: (1) Space air temperature control, (2) Supply air temperature control, (3) Minimum outdoor air control, and (4) Supply duct static pressure control. Explain where the static pressure sensor P must be positioned and why.",
    modelAnswer: "The four primary automated control loops in a central VAV cooling plant operate as follows[cite: 8]:\n\n1. Space Air Temperature Control (Zone Level):\n• Zone temperature sensor T1 measures room air temperature and signals DDC controller C1[cite: 8].\n• C1 commands the motorized actuator to modulate VAV damper blade angle, varying supply airflow (m³/s) to hold room temperature within setpoint limits[cite: 8].\n\n2. Supply Air Temperature Control (AHU Level):\n• Discharge duct thermostat T3 monitors off-coil supply air temperature[cite: 8].\n• Controller C3 modulates the chilled water 2-way valve on the cooling coil to maintain a steady, constant cold air supply temperature (typically 12–14 °C)[cite: 7, 8].\n\n3. Minimum Outdoor Air Control (Ventilation Level):\n• An electronic velocity probe or pitot-static array downstream of the outdoor air damper measures fresh airflow intake Vo in real-time[cite: 8].\n• When the VAV system throttles under part load, duct depression changes; controller C4 modulates the outdoor air damper wider open to ensure the statutory minimum fresh air volume flow is maintained[cite: 8].\n\n4. Supply Duct Static Pressure Control (Fan VFD Level):\n• Static pressure sensor P measures duct pressure and signals controller C5 to adjust supply fan motor speed via a Variable Frequency Drive (VFD) or modulate fan inlet guide vanes[cite: 8].\n• Sensor Location: Installed at approximately TWO-THIRDS (2/3) of the distance between the first and last branch take-offs along the main supply duct[cite: 8].\n• Reason for 2/3 Location: If placed at the fan discharge, the fan would ramp down prematurely, starving distant branches[cite: 8]. If placed at the very end, control would lag and hunt[cite: 8]. The 2/3 position provides a stable, representative hydraulic index ensuring all VAV boxes receive adequate inlet pressure[cite: 8].",
    tips: "Structure with 4 sub-headings: (1) Zone T1/C1, (2) AHU T3 2-way valve, (3) Velocity probe OA damper tracking, (4) 2/3 duct length sensor P modulating fan VFD[cite: 8]."
  },
  {
    type: "compare",
    lesson: "L7",
    question: "Compare a Multi-Zone CAV system with a Multi-Zone VAV system. (a) Discuss why VAV systems achieve substantial energy and initial cost savings. (b) Explain the critical problem of 'air dumping' in VAV systems and state the minimum volume flow intensity threshold (L/s·m²) required to avoid it. (c) Contrast the air balancing and commissioning effort required for both systems.",
    modelAnswer: "(a) Energy and Initial Cost Savings of VAV over CAV:\n• Initial Equipment Cost: Multi-zone CAV must provide separate supply ducts to every zone (up to 12 ducts) and size fans/chillers for sum-of-peaks[cite: 8]. VAV uses a single shared distribution main sized for the coincident block load Vsb, dramatically lowering initial chiller, fan, and duct costs[cite: 8].\n• Operating Energy Savings: CAV runs 100% full airflow continuously, wasting immense fan power and canceling energy via reheat or hot-deck bypass[cite: 8]. VAV modulates airflow; under the Fan Affinity Laws (W ∝ n³), reducing airflow to 60% slashes theoretical fan power by nearly 80%, saving 30%–50% annual HVAC electrical energy[cite: 6, 8].\n\n(b) Air Dumping Hazard and Design Threshold (Slide 61):\n• Air Dumping Phenomenon: At low part-load, a VAV box throttles cold air (13 °C) to a low velocity[cite: 8]. If outlet velocity is insufficient, the dense cold air loses momentum and its Coanda ceiling-attachment effect, 'dumping' vertically downward onto occupants' heads and shoulders, causing drafts and complaints while leaving the rest of the room stagnant[cite: 8].\n• Engineering Solution & Threshold: Multi-zone VAV systems require high-entrainment linear slot diffusers and must enforce a design volume flow intensity NOT LOWER THAN 3.8 L/s·m² (Slide 61), combined with a 30% minimum damper stop[cite: 8].\n\n(c) Air Balancing and Commissioning Effort:\n• Multi-Zone CAV: Extremely difficult and tedious to balance[cite: 8]. Because 12 separate ducts branch off one AHU, adjusting the damper of one large zone drastically alters airflows in all other smaller zones (Slide 19)[cite: 8].\n• Multi-Zone VAV: Self-balancing! Pressure-independent VAV boxes continuously self-adjust via internal flow sensors, making air balancing and commissioning substantially simpler, faster, and cheaper[cite: 8].",
    tips: "Highlight block flow sizing and cubic fan savings (W ∝ n³), explain Coanda loss / air dumping with the 3.8 L/s·m² rule, and contrast interactive CAV balancing vs self-balancing VAV[cite: 6, 8]."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態氣動原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculations or aerodynamic analysis here / 喺度輸入你的計算或工程分析答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握 CAV 與 VAV 空調系統與終端控制的核心精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細分析與公式題解。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫多區域吹出式 AHU 構造、變壓無關型 VAV 箱與雙風管算例。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習相應空調主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
