const SmartTrack = (() => {
  const KEY = "smarttrack_records_v2_ru";

  // ===== Банк заданий (24: по 6 на класс) =====
  const TASKS = [
    // 3 класс
    { id:"ru3_1", grade:"3", title:"(3 кл) Оживи предложение", prompt:"Дано: «На улице было тихо». Сделай 2 версии: нейтральную и эмоциональную (по 2–3 предложения). Объясни, что изменил и зачем." },
    { id:"ru3_2", grade:"3", title:"(3 кл) Главная мысль", prompt:"Прочитай мини-текст (3–4 предложения). Допиши: «Главное здесь — … потому что …»" },
    { id:"ru3_3", grade:"3", title:"(3 кл) Заголовок + почему", prompt:"Придумай 2 разных заголовка к тексту/ситуации. Объясни: почему каждый подходит (по 1–2 предложения)." },
    { id:"ru3_4", grade:"3", title:"(3 кл) Диалог вежливо", prompt:"Составь диалог из 6 реплик: попроси о помощи вежливо. Покажи слова вежливости. Объясни: почему так говорить лучше." },
    { id:"ru3_5", grade:"3", title:"(3 кл) Слова-точки", prompt:"Выбери 3 слова, которые «делают картинку» (ярко описывают). Напиши с ними 3 предложения. Объясни выбор." },
    { id:"ru3_6", grade:"3", title:"(3 кл) Исправь смысл", prompt:"Даны 3 предложения с «путаницей смысла». Перепиши так, чтобы стало ясно. Объясни одну правку." },

    // 6 класс
    { id:"ru6_1", grade:"6", title:"(6 кл) Тезис + 2 аргумента", prompt:"Тема: «Нужны ли школьные правила?» Тезис (1 предл.) + 2 аргумента (по 2–3 предл.) + пример (1–2) + вывод (1)." },
    { id:"ru6_2", grade:"6", title:"(6 кл) Два стиля речи", prompt:"Новость: «В школе прошла олимпиада». Напиши 2 версии: официально-деловую и разговорную. Поясни: какие слова/обороты поменял." },
    { id:"ru6_3", grade:"6", title:"(6 кл) Связки текста", prompt:"Напиши 6–7 предложений на тему «Мой учебный день». Используй минимум 4 связки: «во-первых», «кроме того», «например», «поэтому», «итак» (любые 4). Подчеркни их." },
    { id:"ru6_4", grade:"6", title:"(6 кл) Описание предмета", prompt:"Опиши предмет (книга/телефон/ручка) так, чтобы его «увидели». 6–8 предложений: внешний вид + назначение + 2 яркие детали. Объясни, какие слова самые точные." },
    { id:"ru6_5", grade:"6", title:"(6 кл) Синонимы без повторов", prompt:"Дан абзац с повторами одного слова. Перепиши без повторов (синонимы/замены). Объясни 3 замены." },
    { id:"ru6_6", grade:"6", title:"(6 кл) Мини-пересказ с выводом", prompt:"Перескажи мини-текст (5–6 предложений) своими словами и добавь личный вывод: «Я думаю, что…» (1–2 предложения)." },

    // 7 класс
    { id:"ru7_1", grade:"7", title:"(7 кл) Микроанализ настроения", prompt:"Дан отрывок (4–5 предложений). Определи настроение. Найди 2 слова/выражения, которые его создают. Замени одно слово и объясни эффект." },
    { id:"ru7_2", grade:"7", title:"(7 кл) Мини-эссе: позиция", prompt:"Тема: «Почему важно читать?» 8–10 предложений: тезис, аргумент, пример, вывод. Добавь одну фразу-обращение к читателю." },
    { id:"ru7_3", grade:"7", title:"(7 кл) Сравни два героя", prompt:"Сравни двух персонажей (книга/фильм): что общего и чем отличаются. 8–9 предложений. Используй 2 связки: «однако», «зато», «в отличие от» (любые 2)." },
    { id:"ru7_4", grade:"7", title:"(7 кл) Точка зрения", prompt:"Опиши одну ситуацию дважды: 1) от 1-го лица («я»), 2) от 3-го лица («он/она»). Объясни, как меняется впечатление." },
    { id:"ru7_5", grade:"7", title:"(7 кл) Редактор логики", prompt:"Есть текст, где мысль «прыгает». Перестрой предложения, чтобы стало логично: добавь связки, убери лишнее. Объясни 2 перестановки." },
    { id:"ru7_6", grade:"7", title:"(7 кл) Заголовок как смысл", prompt:"Придумай 3 заголовка к теме «Ответственность» (нейтральный, эмоциональный, интригующий). Объясни, какой лучший и почему." },

    // 8 класс
    { id:"ru8_1", grade:"8", title:"(8 кл) Контраргумент", prompt:"Тема: «Соцсети помогают учиться». Позиция + 2 аргумента; сильный контраргумент; ответ на него; вывод." },
    { id:"ru8_2", grade:"8", title:"(8 кл) Редактор: канцелярит", prompt:"Дан текст с канцеляритом/повторами. Перепиши живым языком. Объясни 3 правки: что стало понятнее/точнее." },
    { id:"ru8_3", grade:"8", title:"(8 кл) Публицистика vs разговор", prompt:"Один факт («в городе открылся парк»). Напиши: 1) публицистический текст (6–7 предлож.), 2) разговорный пост (4–5 предлож.). Поясни различия." },
    { id:"ru8_4", grade:"8", title:"(8 кл) Тезис под проверку", prompt:"Сформулируй тезис так, чтобы его можно было проверить фактами. Дай 2 критерия проверки и один пример источника (наблюдение/опрос/книга)." },
    { id:"ru8_5", grade:"8", title:"(8 кл) Дискуссия: вопросы", prompt:"Напиши 5 вопросов к оппоненту по теме «Домашнее задание нужно/не нужно». 2 уточняющих, 2 на доказательства, 1 на примеры." },
    { id:"ru8_6", grade:"8", title:"(8 кл) Саморефлексия текста", prompt:"Возьми свой текст (8–10 предложений) и улучши: 1) убери повторы, 2) усили тезис, 3) добавь связки. В конце: «Я улучшил(а)… потому что…»" },
  ];

  // стратегии мышления (русский язык)
  const STRATEGIES = [
    "Тезис", "Аргумент", "Пример", "Контраргумент",
    "Выразительное слово", "Смена стиля", "Редактирование", "Рефлексия"
  ];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch { return []; }
  }
  function save(records) { localStorage.setItem(KEY, JSON.stringify(records)); }

  // Рубрика для русского языка (эвристика, но “демо-умно”)
  function scoreRubric(answer, strategies, confidence) {
    const a = (answer || "").trim();
    const t = a.toLowerCase();
    const len = a.length;

    let смысл = 0, выразит = 0, коммуникация = 0, рефлексия = 0;

    // 1) Смысл/логика
    if (strategies.includes("Тезис")) смысл += 2;
    if (strategies.includes("Аргумент")) смысл += 2;
    if (strategies.includes("Контраргумент")) смысл += 1;
    if (t.includes("потому") || t.includes("поэтому") || t.includes("значит") || t.includes("следовательно")) смысл += 1;

    // 2) Выразительность
    if (strategies.includes("Выразительное слово")) выразит += 2;
    if (t.includes("как будто") || t.includes("словно") || t.includes("будто")) выразит += 1;
    if (len > 120) выразит += 1;

    // 3) Коммуникативная грамотность (связность/уместность)
    if (t.includes("во-первых") || t.includes("во-вторых") || t.includes("например") || t.includes("итак") || t.includes("кроме того")) коммуникация += 2;
    if (strategies.includes("Смена стиля")) коммуникация += 2;
    if (a.split(/[.!?]/).filter(s=>s.trim()).length >= 4) коммуникация += 1;

    // 4) Рефлексия (осознание выбора)
    if (strategies.includes("Рефлексия")) рефлексия += 3;
    if (t.includes("я выбрал") || t.includes("я решил") || t.includes("я изменил") || t.includes("я понял")) рефлексия += 1;
    if (strategies.includes("Редактирование")) рефлексия += 1;

    const conf = Number(confidence || 3);
    смысл += conf >= 4 ? 1 : 0;

    const clamp = (x) => Math.max(0, Math.min(5, x));
    return {
      // чтобы не менять UI — оставляем ключи как были
      logic: clamp(смысл),
      language: clamp(коммуникация),
      creative: clamp(выразит),
      reflection: clamp(рефлексия)
    };
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]));
  }

  function renderFeed(el, records, name) {
    el.innerHTML = "";
    const items = records.filter(r => r.studentName === name).slice(-10).reverse();
    if (!items.length) {
      el.innerHTML = `<div class="card"><p class="muted">Пока нет записей. Выбери задание и сделай первую работу.</p></div>`;
      return;
    }
    for (const r of items) {
      el.insertAdjacentHTML("beforeend", `
        <div class="card">
          <div class="row">
            <span class="badge">${r.grade} класс</span>
            <span class="badge">${escapeHtml(r.taskTitle)}</span>
            <span class="badge">${new Date(r.createdAt).toLocaleString()}</span>
          </div>
          <p style="margin-top:10px">${escapeHtml(r.answer)}</p>
          <div class="row" style="margin-top:10px">
            <span class="badge">Смысл: ${r.profile.logic}/5</span>
            <span class="badge">Коммуникация: ${r.profile.language}/5</span>
            <span class="badge">Выразительность: ${r.profile.creative}/5</span>
            <span class="badge">Рефлексия: ${r.profile.reflection}/5</span>
          </div>
        </div>
      `);
    }
  }

  function renderTeacher(elStudents, elSummary, records, gradeFilter) {
    const filtered = gradeFilter ? records.filter(r => r.grade === gradeFilter) : records;

    const total = filtered.length;
    const uniq = new Set(filtered.map(r => r.studentName)).size;

    const avg = (k) => {
      if (!total) return 0;
      return Math.round(filtered.reduce((s,r)=>s + (r.profile?.[k]||0),0) / total * 10) / 10;
    };

    elSummary.innerHTML = `
      <div class="card"><div class="muted">Записей</div><div style="font-size:28px;font-weight:900">${total}</div></div>
      <div class="card"><div class="muted">Учеников</div><div style="font-size:28px;font-weight:900">${uniq}</div></div>
      <div class="card"><div class="muted">Средний смысл</div><div style="font-size:28px;font-weight:900">${avg("logic")}</div></div>
      <div class="card"><div class="muted">Средняя коммуникация</div><div style="font-size:28px;font-weight:900">${avg("language")}</div></div>
    `;

    const byStudent = {};
    for (const r of filtered) {
      byStudent[r.studentName] ||= [];
      byStudent[r.studentName].push(r);
    }

    elStudents.innerHTML = "";
    const names = Object.keys(byStudent).sort((a,b)=>a.localeCompare(b));

    if (!names.length) {
      elStudents.innerHTML = `<div class="card"><p class="muted">Пока нет данных. Пусть ученики сделают 1–2 задания.</p></div>`;
      return;
    }

    for (const name of names) {
      const recs = byStudent[name].slice(-6);
      const avgP = (k) => Math.round(recs.reduce((s,r)=>s + (r.profile?.[k]||0),0) / recs.length * 10)/10;
      const last = recs[recs.length-1];

      elStudents.insertAdjacentHTML("beforeend", `
        <div class="card">
          <div class="row">
            <strong style="font-size:18px">${escapeHtml(name)}</strong>
            <span class="badge">работ: ${recs.length}</span>
            <span class="badge">последняя: ${last ? escapeHtml(last.taskTitle) : "-"}</span>
          </div>
          <div class="row" style="margin-top:10px">
            <span class="badge">Смысл: ${avgP("logic")}</span>
            <span class="badge">Коммуникация: ${avgP("language")}</span>
            <span class="badge">Выразительность: ${avgP("creative")}</span>
            <span class="badge">Рефлексия: ${avgP("reflection")}</span>
          </div>
        </div>
      `);
    }
  }

  function initStudentPage() {
    const taskSelect = document.getElementById("taskId");
    const chipsEl = document.getElementById("strategyChips");
    const feedEl = document.getElementById("feed");
    const form = document.getElementById("workForm");
    const nameInput = document.getElementById("studentName");
    const gradeEl = document.getElementById("grade");
    const promptBox = document.getElementById("taskPrompt");

    // chips
    const selected = new Set();
    STRATEGIES.forEach(s => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = s;
      b.onclick = () => {
        if (selected.has(s)) { selected.delete(s); b.classList.remove("active"); }
        else { selected.add(s); b.classList.add("active"); }
      };
      chipsEl.appendChild(b);
    });

    function fillTasksForGrade(grade) {
      taskSelect.innerHTML = '<option value="">Выбери</option>';
      TASKS.filter(t => t.grade === grade).forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.title;
        taskSelect.appendChild(opt);
      });
      // сброс текста задания
      promptBox.querySelector("p").textContent = "Выбери задание из списка.";
    }

    gradeEl.addEventListener("change", (e) => {
      if (!e.target.value) return;
      fillTasksForGrade(e.target.value);
    });

    taskSelect.addEventListener("change", () => {
      const task = TASKS.find(t => t.id === taskSelect.value);
      const p = promptBox.querySelector("p");
      p.textContent = task ? task.prompt : "Выбери задание из списка.";
    });

    nameInput.addEventListener("input", () => {
      renderFeed(feedEl, load(), nameInput.value.trim());
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const studentName = nameInput.value.trim();
      const grade = gradeEl.value;
      const taskId = taskSelect.value;
      const task = TASKS.find(t => t.id === taskId);

      const answer = document.getElementById("answer").value.trim();
      const confidence = document.getElementById("confidence").value;

      const strategies = Array.from(selected);
      const profile = scoreRubric(answer, strategies, confidence);

      const records = load();
      records.push({
        id: (crypto?.randomUUID ? crypto.randomUUID() : String(Date.now())),
        studentName,
        grade,
        taskId,
        taskTitle: task?.title || taskId,
        answer,
        strategies,
        confidence: Number(confidence),
        profile,
        createdAt: new Date().toISOString()
      });
      save(records);

      // reset (оставим имя и класс)
      const keepName = studentName;
      const keepGrade = grade;

      form.reset();
      selected.clear();
      chipsEl.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));

      nameInput.value = keepName;
      gradeEl.value = keepGrade;

      fillTasksForGrade(keepGrade);
      renderFeed(feedEl, records, keepName);

      alert("Готово! Запись сохранена.");
    });

    // стартовое состояние
    taskSelect.innerHTML = '<option value="">Сначала выбери класс</option>';
  }

  function initTeacherPage() {
    const elStudents = document.getElementById("students");
    const elSummary = document.getElementById("summary");
    const gradeFilterEl = document.getElementById("gradeFilter");
    const exportBtn = document.getElementById("exportBtn");
    const clearBtn = document.getElementById("clearBtn");

    const draw = () => renderTeacher(elStudents, elSummary, load(), gradeFilterEl.value);

    gradeFilterEl.addEventListener("change", draw);
    draw();

    exportBtn.addEventListener("click", () => {
      const data = load();
      const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "smarttrack-data.json";
      a.click();
      URL.revokeObjectURL(a.href);
    });

    clearBtn.addEventListener("click", () => {
      const ok = confirm("Точно очистить все данные на этом устройстве?");
      if (!ok) return;
      localStorage.removeItem(KEY);
      draw();
      alert("Данные очищены.");
    });
  }

  return { initStudentPage, initTeacherPage };
})();
