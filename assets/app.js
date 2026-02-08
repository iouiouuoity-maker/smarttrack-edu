const SmartTrack = (() => {
  const KEY = "smarttrack_records_v3_ru_text";

  // ===== Полноценные задания: ТЕКСТ + ВОПРОСЫ =====
  // Формат:
  // { id, grade, title, text, questions: [{id, prompt, type:'short'|'long'}] }
  const TASKS = [
    // ----------------- 3 класс -----------------
    {
      id: "ru3_t1",
      grade: "3",
      title: "(3 кл) Текст: «Потерянный шарик»",
      text:
`У Айданы был красный воздушный шарик. Она шла домой и крепко держала ниточку.
Вдруг подул ветер. Шарик дёрнулся и выскользнул из руки.
Айдана остановилась и посмотрела вверх: шарик поднимался всё выше.
Рядом стоял мальчик. Он молча протянул Айдане свою ленту и улыбнулся.`,
      questions: [
        { id:"q1", type:"short", prompt:"О чём этот текст? Напиши 1 предложение." },
        { id:"q2", type:"short", prompt:"Какой поступок совершил мальчик? Почему это важно?" },
        { id:"q3", type:"short", prompt:"Подбери 2 слова, которые лучше всего описывают настроение текста. Объясни выбор." },
        { id:"q4", type:"long",  prompt:"Перепиши 2 последних предложения так, чтобы текст стал более радостным. Что ты изменил(а)?" }
      ]
    },
    {
      id: "ru3_t2",
      grade: "3",
      title: "(3 кл) Текст: «Синица на окне»",
      text:
`Утром Тимур увидел на окне маленькую синицу. Птица стучала клювом и дрожала.
Тимур тихо открыл форточку и положил на подоконник крошки хлеба.
Синица прыгнула ближе, схватила крошку и улетела.
А Тимур долго смотрел ей вслед и думал: «Как мало нужно, чтобы помочь».`,
      questions: [
        { id:"q1", type:"short", prompt:"Почему синица дрожала? (предположи)" },
        { id:"q2", type:"short", prompt:"Найди в тексте предложение, где герой сделал вывод. Перепиши его." },
        { id:"q3", type:"short", prompt:"Какие качества есть у Тимура? (2–3 слова) Докажи одной фразой из текста." },
        { id:"q4", type:"long",  prompt:"Напиши продолжение (3–4 предложения): что Тимур сделал бы завтра?" }
      ]
    },

    // ----------------- 6 класс -----------------
    {
      id: "ru6_t1",
      grade: "6",
      title: "(6 кл) Текст: «Спор о правилах»",
      text:
`В нашем классе начался спор: нужны ли школьные правила. Арман сказал, что правила мешают быть свободным.
Алия возразила: «Без правил сильные будут давить слабых».
Тогда Арман спросил: «Но почему мы должны молчать на перемене в коридоре?».
Учитель не вмешивался и только попросил: «Сначала докажите свою позицию, потом предлагайте изменения».`,
      questions: [
        { id:"q1", type:"short", prompt:"Сформулируй проблему текста одним вопросом." },
        { id:"q2", type:"long",  prompt:"Напиши тезис: правила нужны/не нужны. Дай 2 аргумента (по 2–3 предложения)." },
        { id:"q3", type:"short", prompt:"Приведи пример правила, которое стоит изменить. Как именно?" },
        { id:"q4", type:"short", prompt:"Какая фраза учителя помогает вести спор правильно? Почему?" }
      ]
    },
    {
      id: "ru6_t2",
      grade: "6",
      title: "(6 кл) Текст: «Два стиля одной новости»",
      text:
`В школе прошёл день добрых дел. Ученики собрали книги для младших классов и помогли библиотеке.
После уроков ребята убрали во дворе и посадили несколько деревьев.
Многие сказали, что такие дни делают школу дружнее.`,
      questions: [
        { id:"q1", type:"long", prompt:"Перепиши текст в официально-деловом стиле (4–5 предложений)." },
        { id:"q2", type:"long", prompt:"Перепиши текст в разговорном стиле (3–4 предложения, как пост)." },
        { id:"q3", type:"short",prompt:"Назови 2 отличия между стилями (по словам/оборотам)." },
        { id:"q4", type:"short",prompt:"Какая версия сильнее «влияет на читателя» и почему?" }
      ]
    },

    // ----------------- 7 класс -----------------
    {
      id: "ru7_t1",
      grade: "7",
      title: "(7 кл) Текст: «Слово и тишина»",
      text:
`Иногда одно слово может поддержать сильнее, чем длинные советы.
Но бывает и так, что вовремя сказанное «я рядом» звучит громче любой речи.
А тишина, в которой тебя слушают, помогает не меньше.`,
      questions: [
        { id:"q1", type:"short", prompt:"Определи главную мысль текста (1–2 предложения)." },
        { id:"q2", type:"short", prompt:"Найди 2 выразительных приёма (повтор, противопоставление и т.п.) и объясни их эффект." },
        { id:"q3", type:"long",  prompt:"Напиши мини-эссе (8–10 предложений): согласен(на) ли ты с автором? Тезис + 2 аргумента + пример + вывод." },
        { id:"q4", type:"short", prompt:"Предложи заголовок, который передаёт смысл, и объясни выбор." }
      ]
    },
    {
      id: "ru7_t2",
      grade: "7",
      title: "(7 кл) Текст: «Один поступок»",
      text:
`В автобусе было тесно. Женщина с тяжёлой сумкой стояла у двери.
Подросток смотрел в телефон и не поднимал глаз.
Но когда автобус резко затормозил, он быстро поддержал женщину и тихо сказал: «Извините».
Иногда уважение проявляется не словами, а действиями.`,
      questions: [
        { id:"q1", type:"short", prompt:"Как меняется образ подростка по ходу текста?" },
        { id:"q2", type:"short", prompt:"Какая фраза выражает вывод автора? Перепиши её." },
        { id:"q3", type:"long",  prompt:"Перепиши текст от лица подростка (6–7 предложений): что он думал и почему поступил так?" },
        { id:"q4", type:"short", prompt:"Подчеркни (в своём ответе) 2 слова, которые делают текст более выразительным." }
      ]
    },

    // ----------------- 8 класс -----------------
    {
      id: "ru8_t1",
      grade: "8",
      title: "(8 кл) Текст: «Соцсети и учёба»",
      text:
`Одни считают, что соцсети мешают учиться: они крадут время и внимание.
Другие уверены, что соцсети помогают: там можно найти объяснения, курсы и сильное сообщество.
Проблема в том, что у многих нет навыка управлять своим вниманием.
Поэтому спор о соцсетях — это спор не о телефоне, а о привычках человека.`,
      questions: [
        { id:"q1", type:"short", prompt:"Сформулируй тезис автора (1 предложение)." },
        { id:"q2", type:"long",  prompt:"Твоя позиция: помогают/мешают. Дай 2 аргумента и 1 пример (факт/наблюдение)." },
        { id:"q3", type:"long",  prompt:"Сильный контраргумент (как от умного оппонента) + ответ на него." },
        { id:"q4", type:"short", prompt:"Сделай вывод (1–2 предложения) с советом: как управлять вниманием?" }
      ]
    },
    {
      id: "ru8_t2",
      grade: "8",
      title: "(8 кл) Текст: «Редактор»",
      text:
`В настоящее время в нашей школе осуществляется реализация мероприятий, направленных на улучшение качества образования.
Учащиеся принимают активное участие в различных направлениях деятельности.
В рамках проведённых работ были достигнуты определённые результаты.`,
      questions: [
        { id:"q1", type:"long",  prompt:"Перепиши текст живым языком (3–4 предложения), сохрани смысл." },
        { id:"q2", type:"short", prompt:"Назови 3 проблемы исходного текста (повторы/канцелярит/пустые слова и т.д.)." },
        { id:"q3", type:"short", prompt:"Объясни 3 свои правки: что стало точнее/понятнее?" },
        { id:"q4", type:"short", prompt:"Предложи 1 сильное предложение-вывод, которое реально мотивирует." }
      ]
    }
  ];

  // стратегии мышления
  const STRATEGIES = [
    "Тезис", "Аргумент", "Пример", "Контраргумент",
    "Выразительное слово", "Смена стиля", "Редактирование", "Рефлексия"
  ];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch { return []; }
  }
  function save(records) { localStorage.setItem(KEY, JSON.stringify(records)); }

  // Рубрика под русский язык (демо-диагностика)
  function scoreRubric(allText, strategies, confidence) {
    const a = (allText || "").trim();
    const t = a.toLowerCase();
    const len = a.length;

    let смысл = 0, выразит = 0, коммуникация = 0, рефлексия = 0;

    if (strategies.includes("Тезис")) смысл += 2;
    if (strategies.includes("Аргумент")) смысл += 2;
    if (strategies.includes("Контраргумент")) смысл += 1;
    if (t.includes("потому") || t.includes("поэтому") || t.includes("значит") || t.includes("следовательно")) смысл += 1;

    if (strategies.includes("Выразительное слово")) выразит += 2;
    if (t.includes("как будто") || t.includes("словно") || t.includes("будто")) выразит += 1;
    if (len > 220) выразит += 1;

    if (t.includes("во-первых") || t.includes("во-вторых") || t.includes("например") || t.includes("итак") || t.includes("кроме того")) коммуникация += 2;
    if (strategies.includes("Смена стиля")) коммуникация += 2;
    if (a.split(/[.!?]/).filter(s=>s.trim()).length >= 6) коммуникация += 1;

    if (strategies.includes("Рефлексия")) рефлексия += 3;
    if (t.includes("я выбрал") || t.includes("я решил") || t.includes("я изменил") || t.includes("я понял")) рефлексия += 1;
    if (strategies.includes("Редактирование")) рефлексия += 1;

    const conf = Number(confidence || 3);
    смысл += conf >= 4 ? 1 : 0;

    const clamp = (x) => Math.max(0, Math.min(5, x));
    return {
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
    const items = records.filter(r => r.studentName === name).slice(-8).reverse();
    if (!items.length) {
      el.innerHTML = `<div class="card"><p class="muted">Пока нет записей. Выбери задание и выполни вопросы.</p></div>`;
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

  function initStudentPage() {
    const taskSelect = document.getElementById("taskId");
    const chipsEl = document.getElementById("strategyChips");
    const feedEl = document.getElementById("feed");
    const form = document.getElementById("workForm");

    const nameInput = document.getElementById("studentName");
    const gradeEl = document.getElementById("grade");

    const taskBlock = document.getElementById("taskBlock");
    const taskTitleEl = document.getElementById("taskTitle");
    const taskMetaEl = document.getElementById("taskMeta");
    const taskTextEl = document.getElementById("taskText");
    const questionsEl = document.getElementById("questions");

    const selected = new Set();

    // chips
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
    }

    function renderTask(task) {
      if (!task) {
        taskBlock.style.display = "none";
        questionsEl.innerHTML = "";
        return;
      }
      taskBlock.style.display = "block";
      taskTitleEl.textContent = task.title;
      taskMetaEl.textContent = `Прочитай текст и ответь на вопросы.`;

      // текст
      const safeText = escapeHtml(task.text).replace(/\n/g, "<br/>");
      taskTextEl.innerHTML = safeText;

      // вопросы
      questionsEl.innerHTML = "";
      task.questions.forEach((q, idx) => {
        const isLong = q.type === "long";
        questionsEl.insertAdjacentHTML("beforeend", `
          <div class="panel">
            <div class="row" style="margin-bottom:8px">
              <span class="badge">Вопрос ${idx+1}</span>
              <span class="muted">${escapeHtml(q.prompt)}</span>
            </div>
            ${isLong
              ? `<textarea data-qid="${q.id}" rows="4" placeholder="Напиши ответ..."></textarea>`
              : `<input data-qid="${q.id}" placeholder="Короткий ответ..." />`
            }
          </div>
        `);
      });
    }

    gradeEl.addEventListener("change", (e) => {
      const g = e.target.value;
      if (!g) return;
      fillTasksForGrade(g);
      renderTask(null);
      taskSelect.value = "";
    });

    taskSelect.addEventListener("change", () => {
      const task = TASKS.find(t => t.id === taskSelect.value);
      renderTask(task);
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

      if (!task) {
        alert("Выбери задание.");
        return;
      }

      // собрать ответы по вопросам
      const answers = {};
      const fields = questionsEl.querySelectorAll("[data-qid]");
      fields.forEach(el => {
        answers[el.getAttribute("data-qid")] = (el.value || "").trim();
      });

      // общий текст для рубрики (все ответы вместе)
      const combined = Object.values(answers).filter(Boolean).join(" ");

      const confidence = document.getElementById("confidence").value;
      const strategies = Array.from(selected);

      const profile = scoreRubric(combined, strategies, confidence);

      const records = load();
      records.push({
        id: (crypto?.randomUUID ? crypto.randomUUID() : String(Date.now())),
        studentName,
        grade,
        taskId,
        taskTitle: task.title,
        answers,
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
      taskSelect.value = "";
      renderTask(null);

      renderFeed(feedEl, records, keepName);
      alert("Готово! Запись сохранена.");
    });

    // старт
    taskSelect.innerHTML = '<option value="">Сначала выбери класс</option>';
  }

  // teacher.html можно оставить как раньше (он читает profile)
  // если у тебя уже был teacher.html + вывод — он продолжит работать.
  // Если нужно — я дам обновлённый teacher.html под просмотр ответов по вопросам.

  function initTeacherPage() {
    // Минимальная совместимость: если у тебя уже стоит мой teacher.html из прошлой версии — оставь его.
    // Здесь просто заглушка на случай, если файл вызывается.
    const gradeFilterEl = document.getElementById("gradeFilter");
    const exportBtn = document.getElementById("exportBtn");
    const clearBtn = document.getElementById("clearBtn");
    const elStudents = document.getElementById("students");
    const elSummary = document.getElementById("summary");

    if (!gradeFilterEl || !exportBtn || !clearBtn || !elStudents || !elSummary) return;

    const renderTeacher = (records, gradeFilter) => {
      const filtered = gradeFilter ? records.filter(r => r.grade === gradeFilter) : records;
      const total = filtered.length;
      const uniq = new Set(filtered.map(r => r.studentName)).size;

      const avg = (k) => total ? Math.round(filtered.reduce((s,r)=>s + (r.profile?.[k]||0),0) / total * 10)/10 : 0;

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
        elStudents.innerHTML = `<div class="card"><p class="muted">Пока нет данных.</p></div>`;
        return;
      }

      for (const name of names) {
        const recs = byStudent[name].slice(-5);
        const avgP = (k) => Math.round(recs.reduce((s,r)=>s + (r.profile?.[k]||0),0) / recs.length * 10)/10;
        const last = recs[recs.length-1];

        elStudents.insertAdjacentHTML("beforeend", `
          <div class="card">
            <div class="row">
              <strong style="font-size:18px">${escapeHtml(name)}</strong>
              <span class="badge">работ: ${recs.length}</span>
              <span class="badge">последняя: ${escapeHtml(last.taskTitle)}</span>
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
    };

    const draw = () => renderTeacher(load(), gradeFilterEl.value);
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
