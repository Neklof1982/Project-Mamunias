let translations = {};
let currentLang = "es";

async function loadTranslations(lang) {
  if (translations[lang]) return translations[lang];

  const basePath = location.pathname.includes("/pages/") ? "../locales/" : "locales/";

  try {
    const res = await fetch(`${basePath}${lang}.json`);
    if (!res.ok) throw new Error(`No se pudo cargar ${lang}.json`);
    const data = await res.json();
    translations[lang] = data;
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function setLanguage(lang) {
  const data = await loadTranslations(lang);
  if (!data) return;

  currentLang = lang;
  document.documentElement.lang = lang;

document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  if (key in data) {
    if (key === "title") {
      document.title = data[key];
    } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = data[key];
    } else if (key === "contact_privacy_agree") {
      // InnerHTML para que el link funcione
      el.innerHTML = data[key];
    } else {
      el.textContent = data[key];
    }
  }
});

  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (key in data) {
      el.setAttribute("aria-label", data[key]);
    }
  });

  const langLabel = document.getElementById("lang-label");
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }
}

function getTranslation(key) {
  if (translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  return key;  // Si no se encuentra la clave, devuelve la clave como fallback
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const newLang = currentLang === "es" ? "en" : "es";
      setLanguage(newLang);
    });
  }
});

export { setLanguage, getTranslation };
