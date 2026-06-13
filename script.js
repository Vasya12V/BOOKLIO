const BASE_DATABASE = [
    { 
        title: "Різдвяна Свинка", author: "Дж.К. Ролінґ", price: 360, category: "management-picks", section: "popular", 
        color: "#c0392b", icon: "👑🐷", desc: "Абсолютний ТОП-1! Неймовірна святкова історія про хлопчика Джека та його втрачену улюблену іграшку Галку, яка змінить усе.", 
        tag: "🏆 ТОП-1 КЕРІВНИКА", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "320 ст.", cover: "Тверда з тисненням" 
    },
    { 
        title: "Дивовижні пригоди в лісовій школі", author: "Всеволод Нестайко", price: 280, category: "management-picks", section: "popular", 
        color: "#27ae60", icon: "🦔🦊", desc: "Неймовірно веселі та повчальні пригоди зайчика Косі Вуханя та їжачка Колька Колючки у лісовій школі з ведмежою мовою викладання.", 
        tag: "🔥 СУПЕРХІТ", publisher: "Школа", pages: "208 ст.", cover: "Тверда" 
    },
    { 
        title: "Звіродухи. Книга 1: Narodження легенди", author: "Брендон Mулл", price: 185, category: "management-picks", section: "recommend", 
        color: "#16a085", icon: "🐺✨", desc: "Початок великої серії. Четверо підлітків виявляють у собі особливий дар — зв'язок із тотемними тваринами-духами.", 
        tag: "⭐ РАДЖУ", publisher: "Ранок", pages: "320 ст.", cover: "Тверда" 
    },
    { 
        title: "Тореадори з Васюківки", author: "Всеволод Нестайко", price: 295, category: "management-picks", section: "popular", 
        color: "#f39c12", icon: "🐂 Subway", desc: "Пригоди Яви та Павлуші — шедевр української дитячої прози, наповнений іскрометним гумором та щирістю.", 
        tag: "⭐ РАДЖУ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "544 ст.", cover: "Тверда" 
    },
    { 
        title: "П'ять ночей із Фредді. Срібні очі", author: "Скотт Коутон", price: 290, category: "management-picks", section: "recommend", 
        color: "#1a1a1a", icon: "🐻🍕", desc: "Офіційний культовий хорор-роман за мотивами мегапопулярної гри FNAF. Таємниці піцерії Фредді Фазбера розкриваються тут.", 
        tag: "🔥 ТРЕНД", publisher: "Vivat", pages: "352 ст.", cover: "Тверда" 
    },
    { 
        title: "Таємне Товариство Боягузів, або Засіб від переляку №9", author: "Леся Воронина", price: 165, category: "management-picks", section: "recommend", 
        color: "#27ae60", icon: "🐸🛸", desc: "Пригодницька підліткова повість про Клима Джуру, який неочікувано стає рятівником Землі від підступних космічних прибульців.", 
        tag: "⭐ РАДЖУ", publisher: "Знання", pages: "128 ст.", cover: "Тверда" 
    },
    { 
        title: "Чарлі і шоколадна фабрика", author: "Роальд Дал", price: 260, category: "management-picks", section: "popular", 
        color: "#8e44ad", icon: "🍫🎩", desc: "Культова історія про бідного хлопчика Чарлі Бакета, який виграє Золотил квиток на загадкову фабрику містера Віллі Вонки.", 
        tag: "⭐ РАДЖУ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "240 ст.", cover: "Тверда" 
    },
    { 
        title: "Матильда", author: "Роальд Дал", price: 270, category: "management-picks", section: "recommend", 
        color: "#2980b9", icon: "📚👧", desc: "Геніальна історія про надзвичайну дівчинку Матильду, яка дуже любить читати та вміє карати несправедливих дорослих.", 
        tag: "🔥 ХІТ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "272 ст.", cover: "Тверда" 
    },
    { 
        title: "БДГ (Великий Добрий Велетень)", author: "Роальд Дал", price: 285, category: "management-picks", section: "popular", 
        color: "#16a085", icon: "👂🎺", desc: "Неймовірна пригоди маленької Софії та єдиного доброго велетня, який дарує дітям прекрасні сни замість того, щоб їх їсти.", 
        tag: "⭐ РАДЖУ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "272 ст.", cover: "Тверда" 
    },
    { 
        title: "Відьми", author: "Роальд Дал", price: 265, category: "management-picks", section: "recommend", 
        color: "#2c3e50", icon: "👵🐭", desc: "Справжні відьми не носять мітел і дурних капелюхів. Вони маснуються під звичайних жінок і терпіти не можуть дітей!", 
        tag: "🔥 ХІТ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "256 ст.", cover: "Тверда" 
    },
    { 
        title: "Джеймс і гігантський персик", author: "Роальд Дал", price: 250, category: "management-picks", section: "recommend", 
        color: "#e67e22", icon: "🍑🐛", desc: "Дивовижна подорож хлопчика Джеймса всередині велетенського магічного персика в компанії великих розмовних комах.", 
        tag: "⭐ РАДЖУ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "224 ст.", cover: "Тверда" 
    },
    { 
        title: "Чарлі і великий скляний ліфт", author: "Роальд Дал", price: 255, category: "management-picks", section: "popular", 
        color: "#34495e", icon: "🚀🏢", desc: "Продовження історії про Чарлі Бакета та Віллі Вонку. Цього разу космічний ліфт виносить їх на орбіту прямо до космічного готелю!", 
        tag: "✨ КЛАСИКА", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "240 ст.", cover: "Тверда" 
    },
    { 
        title: "Фантастичний містер Лис", author: "Роальд Дал", price: 230, category: "management-picks", section: "popular", 
        color: "#d35400", icon: "🦊🐔", desc: "Розумний та винахідливий містер Лис щоночі перехитровує трьох тупих і жадібних фермерів, щоб прогодувати свою родину.", 
        tag: "⭐ РАДЖУ", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "144 ст.", cover: "Тверда" 
    },
    { 
        title: "One Piece. Книга 1", author: "Ейічіро Ода", price: 280, category: "comics", section: "popular", 
        color: "#1e3a8a", icon: "🏴‍☠️👒", desc: "Легендарна манґа про пригоди мавпи Д. Луффі, який мріє знайти скарб Ван Піс і стане Королем Піратів!", 
        tag: "🔥 МАНҐА ХІТ", publisher: "MangaUA", pages: "200 ст.", cover: "М'яка з клапанами" 
    },
    { 
        title: "Naruto. Том 1", author: "Масаші Кішімото", price: 280, category: "comics", section: "popular", 
        color: "#ea580c", icon: "🦊🥷", desc: "Початок історії про Наруто Узумакі — хлопчика, в якому запечатаний дев'ятихвостий лис, та його шлях до звання Хокаґе.", 
        tag: "🔥 МАНҐА ХІТ", publisher: "MangaUA", pages: "192 ст.", cover: "М'яка з клапанами" 
    },
    { 
        title: "Атака Титанів. Том 1", author: "Хадзіме Ісаяма", price: 340, category: "comics", section: "recommend", 
        color: "#7f1d1d", icon: "🧱⚔️", desc: "Людство живе за величезними стінами, ховаючись від м'ясоїдних гігантів. Але одного дня стіна падає...", 
        tag: "💥 ТОП АНІМЕ", publisher: "MangaUA", pages: "210 ст.", cover: "Тверда" 
    },
    { 
        title: "Клинок, що знищує демонів. Том 1", author: "Койохару Ґотоґе", price: 290, category: "comics", section: "popular", 
        color: "#065f46", icon: "🌊👹", desc: "Танджіро стає винищувачем демонів, щоб повернути людську подобу своїй єдиній сестрі Незуко.", 
        tag: "✨ МАНҐА", publisher: "MangaUA", pages: "196 ст.", cover: "М'яка преміум" 
    },
    { 
        title: "Людина-Павук: Історія життя (Marvel)", author: "Зеб Веллс", price: 450, category: "comics", section: "recommend", 
        color: "#b91c1c", icon: "🕷️🔴", desc: "Унікальний графічний роман від Marvel, який показує життя Пітера Паркера, якби він старів у реальному часі з 1960-х років.", 
        tag: "🦸 MARVEL", publisher: "MAL'OPUS", pages: "244 ст.", cover: "Тверда преміум" 
    },
    { 
        title: "Бетмен: Рік перший (DC)", author: "Френк Міллер", price: 420, category: "comics", section: "popular", 
        color: "#111827", icon: "🦇🏙️", desc: "Абсолютна класика DC Comics. Початок похмурого шляху Брюса Вейна як захисника Ґотем-сіті.", 
        tag: "🦇 DC COMICS", publisher: "Рідна Мова", pages: "144 ст.", cover: "Тверда" 
    },
    { 
        title: "Магістр диявольського культу. Том 1 (Новела)", author: "Мосян Тунсю", price: 490, category: "comics", section: "popular", 
        color: "#4c1d95", icon: "🐇🔮", desc: "Всесвітньо відома китайська фентезі-новела (ранобе) про засновника темного шляху Вей Усяня та його відданого друга Lань Ванцзі.", 
        tag: "📜 НОВЕЛА/РАНОБЕ", publisher: "Коротка версія", pages: "400 ст.", cover: "Тверда (Подарункова)" 
    },
    { 
        title: "Підняття рівня поодинці. Книга 1 (Solo Leveling)", author: "Chugong", price: 460, category: "comics", section: "recommend", 
        color: "#1e1b4b", icon: "🗡️⚡", desc: "Культова корейська новела-манхва. Найслабший мисливець людства Джинву отримує таємничу систему прокачки, яка змінює все.", 
        tag: "⚡ МАНХВА/НОВЕЛА", publisher: "MAL'OPUS", pages: "312 ст.", cover: "Тверда" 
    },
    { 
        title: "Комплект: Всі книги Гаррі Поттер", author: "Дж.К. Ролінґ", price: 2150, oldPrice: 2550, category: "bundles", section: "sale", 
        color: "#7a1c1c", icon: "⚡🏰", desc: "Повне колекційне зібрання з 7 книг про Гаррі Поттера у легендарному оформленні від А-БА-БА-ГА-ЛА-МА-ГА.", 
        tag: "📦 МЕГА-ПАК", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "7 книг", cover: "Тверда преміум" 
    },
    { 
        title: "Комплект книг Роальда Дала (7 в 1)", author: "Роальд Дал", price: 1650, oldPrice: 1815, category: "bundles", section: "sale", 
        color: "#7f8c8d", icon: "📦🎩", desc: "Повне зібрання найкращих дитячих шедеврів автора в одному фірмовому комплекті від видавництва А-БА-БА-ГА-ЛА-МА-ГА.", 
        tag: "📦 СУПЕР-ПАК", publisher: "А-БА-БА-ГА-ЛА-МА-ГА", pages: "7 книг", cover: "Тверда" 
    },
    { 
        title: "Комплект: Сага про Відьмака", author: "Анджей Сапковський", price: 1980, oldPrice: 2400, category: "bundles", section: "sale", 
        color: "#1a1a1a", icon: "⚔️🐺", desc: "Епічне фентезі про відьмака Ґеральта з Рівії. Повне зібрання культової саги з 8 книг в ексклюзивному подарунковому боксі.", 
        tag: "📦 ПРЕМІУМ", publisher: "КСД", pages: "8 книг", cover: "Тверда (Подарункова)" 
    },
    { 
        title: "Комплект: Серія Звіродухи (Книги 1-4)", author: "Брендон Малл", price: 740, oldPrice: 880, category: "bundles", section: "sale", 
        color: "#16a085", icon: "📦🐺", desc: "Перші чотири захопливі частини легендарного підліткового фентезі про Ердас та зв'язок із тотемними тваринами в одному наборі.", 
        tag: "📦 СУПЕР-ЦІНА", publisher: "Ранок", pages: "4 книги", cover: "Тверда" 
    },
    { 
        title: "Комплект: Пригоди в лісовій школі (Всі 4 книги)", author: "Всеволод Нестайко", price: 950, oldPrice: 1120, category: "bundles", section: "sale", 
        color: "#27ae60", icon: "📦🦔", desc: "Усі неймовірні, веселі та повчальні історії про лісову школу під однією стильною акційною обгорткою! Суперподарунок.", 
        tag: "📦 АКЦІЯ 4 в 1", publisher: "Школа", pages: "4 книги", cover: "Тверда" 
    },
    { 
        title: "П'ять ночей із Фредді (Комплект-трилогія FNAF)", author: "Скотт Коутон", price: 690, oldPrice: 840, category: "bundles", section: "sale", 
        color: "#1a1a1a", icon: "📦🐻", desc: "Повністю офіційна трилогія романів за мотивами культової хорор-гри: 'Срібні очі', 'Ненормальні' та 'Четверта шафа'.", 
        tag: "📦 FNAF ПАК", publisher: "Vivat", pages: "3 книги", cover: "Тверда" 
    },
    { 
        title: "Комплект: Таємне Товариство (Повне зібрання: 5 частин)", author: "Леся Воронина", price: 490, oldPrice: 600, category: "bundles", section: "sale", 
        color: "#8e44ad", icon: "📦🐸", desc: "Всі 5 частин пригод КЛИМА ДЖУРИ під однією обкладинкою! Від товариства Боягузів до Таємного Товариства Близнюків.", 
        tag: "📦 5 В 1", publisher: "Знання", pages: "5 частин", cover: "Тверда" 
    },
    { 
        title: "Гіпотеза кохання", author: "Алі Газелвуд", price: 290, category: "tiktok-trends", section: "popular", 
        color: "#d946ef", icon: "🧪🥼", desc: "Абсолютний хіт TikTok та BookTok! Затишний і шалено кумедний підлітковий роман про фейкові стосунки у лабораторії.", 
        tag: "🔥 ТРЕНД", publisher: "Vivat", pages: "380 ст.", cover: "М'яка з клапанами" 
    },
    { 
        title: "Кров і попіл", author: "Дженніфер Л. Арментраут", price: 395, category: "fantasy", section: "popular", 
        color: "#1e1b4b", icon: "🗡️🩸", desc: "Захопливе підліткове фентезі про Діву, обрану богами, та її таємничого гвардійця, що приховує небезпечні секрети.", 
        tag: "⚡ ФЕНТЕЗІ", publisher: "BookChef", pages: "640 ст.", cover: "Тверда преміум" 
    },
    { 
        title: "Жорстокий принц", author: "Голлі Блек", price: 310, category: "fantasy", section: "recommend", 
        color: "#064e3b", icon: "👑🧚", desc: "Історія про смертну дівчину Джуд, яка бореться за свое место у підступному королівстві Фейрі.", 
        tag: "✨ BOOKTOK", publisher: "Vivat", pages: "410 ст.", cover: "Тверда" 
    },
    { 
        title: "Керівництво з убивства для хороших дівчат", author: "Голлі Джексон", price: 320, category: "detective", section: "recommend", 
        color: "#7f1d1d", icon: "🎧🕵️‍♀️", desc: "Суперпопулярний детективний трилер про старшокласницю Піппу, яка вирішує розслідувати закриту справу про вбивство у своєму містечку.", 
        tag: "🔍 ДЕТЕКТИВ", publisher: "Ранок", pages: "440 ст.", cover: "Тверда" 
    },
    { 
        title: "Шістка воронів", author: "Лі Бардуґо", price: 340, category: "fantasy", section: "popular", 
        color: "#111827", icon: "🦅🪙", desc: "Грандіозне підліткове фентезі про шістьох відчайдушних покидьків, які наважуються на найнебезпечніше пограбування століття.", 
        tag: "💥 ХІТ", publisher: "Vivat", pages: "540 ст.", cover: "Тверда" 
    }
];
const DATABASE = [];
let currentId = 1;
BASE_DATABASE.forEach(item => {
    DATABASE.push({ id: currentId++, ...item });
});
const titlesFantasy = ["Тінь та кістка", "Двір шпигунів", "Серце дракона", "Клятви крові", "Нічний цирк"];
const titlesTrends = ["Дівчина онлайн", "Остання ніч", "Крутий поворот", "Заплутане крило"];
const titlesDetective = ["Загадка Ендгауза", "Останній пацієнт", "Тінь у темряві", "Капкан для вбивці"];
const titlesManga = ["Banzai Маніфест", "Токійські месники (Альтернатива)", "Кіберпанк Новела", "Шлях Самурая"];
const titlesSelfDev = ["Атомні звички підлітка", "Магія мислення", "Емоційний інтелект", "Тайм-менеджмент для Z"];
const authorsList = ["Колін Гувер", "Кассандра Клер", "Лей Бардуго", "Сара Дж. Маас", "Джон Ґрін", "Ренсом Ріґґз"];
const colors = ["#2c3e50", "#1e824c", "#8e44ad", "#d35400", "#16a085", "#2980b9", "#34495e", "#27ae60", "#e67e22"];
const icons = ["📚", "✨", "🔑", "🦅", "🐺", "🌙", "⚔️", "🔮", "🔥", "👑"];
const categories = ["fantasy", "tiktok-trends", "detective", "comics", "self-dev"]; 
const sections = ["popular", "recommend", "sale"];
while (DATABASE.length < 300) {
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const sec = sections[Math.floor(Math.random() * sections.length)];
    const randomAuthor = authorsList[Math.floor(Math.random() * authorsList.length)];
    let randomTitle = "";
    let tagLabel = "✨ Книга";
    if (cat === "fantasy") {
        randomTitle = titlesFantasy[Math.floor(Math.random() * titlesFantasy.length)] + " — Том " + (Math.floor(Math.random() * 3) + 1);
        tagLabel = "🔮 Фентезі";
    } else if (cat === "tiktok-trends") {
        randomTitle = titlesTrends[Math.floor(Math.random() * titlesTrends.length)] + " — Том " + (Math.floor(Math.random() * 3) + 1);
        tagLabel = "🔥 Тренди";
    } else if (cat === "detective") {
        randomTitle = titlesDetective[Math.floor(Math.random() * titlesDetective.length)];
        tagLabel = "🔍 ДЕТЕКТИВ";
    } else if (cat === "comics") {
        randomTitle = titlesManga[Math.floor(Math.random() * titlesManga.length)] + " # " + (Math.floor(Math.random() * 5) + 1);
        tagLabel = "🎨 Манґа / Комікс";
    } else if (cat === "self-dev") {
        randomTitle = titlesSelfDev[Math.floor(Math.random() * titlesSelfDev.length)];
        tagLabel = "💡 СУПЕР РОЗВИТОК";
    }
    DATABASE.push({
        id: currentId++,
        title: randomTitle,
        author: cat === "comics" ? "Японські / Світові автори" : randomAuthor,
        price: Math.floor(Math.random() * 220) + 220,
        oldPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 150) + 450 : null,
        category: cat,
        section: sec,
        color: colors[Math.floor(Math.random() * colors.length)],
        icon: cat === "comics" ? "💥" : icons[Math.floor(Math.random() * icons.length)],
        desc: "Абсолютний хіт продажів нашої платформи! Книга, яка підкорила серця читачів цього року завдяки динамічному сюжету та стильній подачі.",
        tag: tagLabel,
        publisher: "Booklio Преміум",
        pages: (Math.floor(Math.random() * 200) + 200) + " ст.",
        cover: "Тверда"
    });
}
const MERCH = [
    { id: 501, title: "Кухоль 'Booklio Лев'", author: "Бренд Booklio", price: 340, category: "merch", isMerch: true, type: "cup" },
    { id: 502, title: "Свічка 'Затишні Сторінки'", author: "Бренд Booklio", price: 250, category: "merch", isMerch: true, type: "candle" },
    { id: 503, title: "Читацький теплий коцик", author: "Бренд Booklio", price: 720, category: "merch", isMerch: true, type: "blanket" },
    { id: 504, title: "Блокнот 'My Stories'", author: "Бренд Booklio", price: 180, category: "merch", isMerch: true, type: "notebook" }
];
MERCH.forEach(m => DATABASE.push(m));
const PROMO_CODES = { "BOOKLIO20": 0.20, "START10": 0.10 };
let appliedDiscount = 0;
let cart = JSON.parse(localStorage.getItem('booklio_cart')) || [];
const storePage = document.getElementById('store-page');
const profilePage = document.getElementById('profile-page');
const checkoutPage = document.getElementById('checkout-page');
const mainSectionsContainer = document.getElementById('main-books-sections');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const searchSubmitBtn = document.getElementById('search-submit-btn');
const searchStatus = document.getElementById('search-status-message');
document.getElementById('nav-logo').onclick = (e) => { e.preventDefault(); showStoreSection(); };
if (document.getElementById('profile-back-btn')) document.getElementById('profile-back-btn').onclick = () => showStoreSection();
if (document.getElementById('cancel-order-btn')) document.getElementById('cancel-order-btn').onclick = () => showStoreSection();
function showStoreSection() { 
    storePage.style.display = 'block'; 
    profilePage.style.display = 'none'; 
    checkoutPage.style.display = 'none'; 
    resetSearch(); 
}
function showProfileSection() { 
    storePage.style.display = 'none'; 
    profilePage.style.display = 'block'; 
    checkoutPage.style.display = 'none'; 
    loadProfileData(); 
}
function showCheckoutSection() {
    storePage.style.display = 'none';
    profilePage.style.display = 'none';
    checkoutPage.style.display = 'block';
    renderCheckoutSummary();
}
function getVisualHTML(item, isModal = false) {
    if (item.isMerch) {
        let icon = "☕"; if (item.type === "candle") icon = "🕯️"; if (item.type === "blanket") icon = "🛋️"; if (item.type === "notebook") icon = "📝";
        return `<div class="merch-box-visual ${item.type}"><div class="m-icon">${icon}</div><div class="m-txt">BOOKLIO</div></div>`;
    }
    return `
        <div class="css-book-cover" style="background: ${item.color || '#34495e'}; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
            <img src="https://images.openlibrary.org/b/id/14545330-M.jpg" 
                 alt="${item.title}" 
                 style="width: 100%; height: 100%; object-fit: cover; position: absolute; top:0; left:0; z-index: 2;"
                 onerror="this.style.display='none';" />
            <div class="cover-lines" style="z-index: 1;"></div>
            <div class="cover-main-icon" style="z-index: 1;">${item.icon || '📚'}</div>
            <div class="cover-title-label" style="z-index: 1;">${item.title}</div>
            <div class="cover-author-label" style="z-index: 1;">${item.author}</div>
            <div class="cover-footer-brand" style="z-index: 1;">Booklio Line</div>
        </div>
    `;
}
function createProductCard(item) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    const priceHTML = item.oldPrice ? `<span class="price-val sale">${item.price} грн <span class="old">${item.oldPrice} грн</span></span>` : `<span class="price-val">${item.price} грн</span>`;
    card.innerHTML = `
        <div class="cover-holder">${getVisualHTML(item, false)}<span class="badge-tag">${item.tag || 'Книга'}</span></div>
        <div class="details-holder">
            <h4>${item.title}</h4>
            <p>${item.author}</p>
            <div class="card-bottom-row">${priceHTML}<button class="buy-now-btn" data-id="${item.id}">В кошик</button></div>
        </div>
    `;
    card.addEventListener('click', (e) => { if (!e.target.classList.contains('buy-now-btn')) openProductModal(item); });
    return card;
}
function displayMainPage() {
    mainSectionsContainer.innerHTML = `
        <section class="page-section">
            <div class="section-header-box"><div class="section-icon-badge">🔥</div><h2>Популярні видання України та світу</h2></div>
            <div class="books-grid" id="sect-popular"></div>
        </section>
        <section class="page-section" style="background: linear-gradient(to bottom right, #ffffff, #fffef8);">
            <div class="section-header-box"><div class="section-icon-badge">🏷️</div><h2>Вигідні комплекти та Акційні Пропозиції</h2></div>
            <div class="books-grid" id="sect-sale"></div>
        </section>
        <section class="page-section">
            <div class="section-header-box"><div class="section-icon-badge">✨</div><h2>Рекомендації нашої редакції</h2></div>
            <div class="books-grid" id="sect-recommend"></div>
        </section>
    `;
    DATABASE.filter(item => !item.isMerch && item.section === "popular").slice(0, 10).forEach(item => {
        document.getElementById('sect-popular').appendChild(createProductCard(item));
    });
    DATABASE.filter(item => !item.isMerch && (item.section === "sale" || item.category === "bundles" || item.title.includes("Комплект"))).slice(0, 10).forEach(item => {
        const parent = document.getElementById('sect-sale');
        if(parent && !parent.querySelector(`[data-id="${item.id}"]`)) {
            parent.appendChild(createProductCard(item));
        }
    });
    DATABASE.filter(item => !item.isMerch && item.section === "recommend").slice(0, 10).forEach(item => {
        document.getElementById('sect-recommend').appendChild(createProductCard(item));
    });
    attachBuyEvents();
}
function displayFlatList(title, itemsList) {
    mainSectionsContainer.innerHTML = `<section class="page-section"><div class="section-header-box"><div class="section-icon-badge">📚</div><h2>${title}</h2></div><div class="books-grid" id="flat-grid"></div></section>`;
    const grid = document.getElementById('flat-grid');
    if (itemsList.length === 0) { grid.innerHTML = `<div class="empty-msg">Нічого не знайдено 😢</div>`; return; }
    itemsList.forEach(item => grid.appendChild(createProductCard(item)));
    attachBuyEvents();
}
document.getElementById('brand-merch-tab-btn').onclick = function(e) {
    e.preventDefault(); showStoreSection(); displayFlatList("Ексклюзивний затишний мерч від Booklio", DATABASE.filter(item => item.isMerch));
};
function attachBuyEvents() {
    document.querySelectorAll('.buy-now-btn').forEach(btn => {
        btn.onclick = function(e) { 
            e.stopPropagation(); 
            addToCart(parseInt(this.getAttribute('data-id'))); 
        };
    });
}
const catalogBtn = document.getElementById('catalog-toggle-btn');
const catalogMenu = document.getElementById('catalog-menu');
catalogBtn.onclick = (e) => { e.stopPropagation(); catalogMenu.classList.toggle('open'); };
document.addEventListener('click', () => catalogMenu.classList.remove('open'));
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); showStoreSection();
        const cat = this.getAttribute('data-category');
        if (cat === 'all') {
            displayMainPage();
        } else if (cat === 'bundles') {
            const allBundles = DATABASE.filter(item => item.category === 'bundles' || item.title.includes("Комплект"));
            displayFlatList("Вигідні комплекти та Акційні Пропозиції", allBundles);
        } else {
            let displayTitle = this.textContent;
            if (cat === 'management-picks') {
                displayTitle = "📋 Поради керівництва";
            }
            displayFlatList(displayTitle, DATABASE.filter(b => b.category === cat));
        }
    });
});
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length > 0) {
        searchClearBtn.style.display = 'block';
        const res = DATABASE.filter(b => b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query));
        searchStatus.style.display = 'block'; searchStatus.textContent = `Знайдено товарів: ${res.length}`;
        displayFlatList(`Результати пошуку для: "${query}"`, res);
    } else { resetSearch(); }
}
searchInput.oninput = handleSearch;
searchSubmitBtn.onclick = handleSearch;
searchClearBtn.onclick = resetSearch;
function resetSearch() { searchInput.value = ''; searchClearBtn.style.display = 'none'; searchStatus.style.display = 'none'; displayMainPage(); }
const cartToggle = document.getElementById('cart-toggle');
const cartDropdown = document.getElementById('cart-dropdown');
const cartCount = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-items-container');
const cartTotalBox = document.getElementById('cart-total-box');
const cartTotalAmount = document.getElementById('cart-total-amount');
const cartFooter = document.getElementById('cart-footer');
const cartPromoBox = document.getElementById('cart-promo-box');
const promoInput = document.getElementById('promo-input');
const applyPromoBtn = document.getElementById('apply-promo-btn');
const promoMessage = document.getElementById('promo-message');
cartToggle.onclick = (e) => { e.preventDefault(); e.stopPropagation(); cartDropdown.classList.toggle('active'); };
document.addEventListener('click', () => cartDropdown.classList.remove('active'));
cartDropdown.onclick = (e) => e.stopPropagation();
applyPromoBtn.onclick = () => {
    const code = promoInput.value.trim().toUpperCase();
    if (PROMO_CODES[code] !== undefined) {
        appliedDiscount = PROMO_CODES[code];
        promoMessage.style.color = "#28a745";
        promoMessage.textContent = `Активовано знижку ${appliedDiscount * 100}%! 🎉`;
    } else {
        appliedDiscount = 0;
        promoMessage.style.color = "#ef4444";
        promoMessage.textContent = "Невірний код! ❌";
    }
    calculateCartTotal();
};
function addToCart(itemId) {
    const item = DATABASE.find(b => b.id == itemId);
    if (!item) return;
    const existingItem = cart.find(i => i.id == itemId);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ ...item, quantity: 1, cartIndex: Date.now() + Math.random() });
    }
    localStorage.setItem('booklio_cart', JSON.stringify(cart));
    updateCartUI();
    animateCartIcon();
}
function removeFromCart(cIndex) { 
    cart = cart.filter(i => i.cartIndex !== cIndex); 
    localStorage.setItem('booklio_cart', JSON.stringify(cart));
    updateCartUI(); 
}
function calculateCartTotal() {
    let baseTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    let finalTotal = Math.round(baseTotal * (1 - appliedDiscount));
    cartTotalAmount.textContent = finalTotal;
    return finalTotal;
}
function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCount.textContent = totalQty; 
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart-text">Ваш кошик зараз порожній 📚<br><span style='font-size:12px; color:#94a3b8;'>Додайте бестселери або мерч, щоб почати!</span></p>`; 
        cartTotalBox.style.display = 'none'; 
        cartFooter.style.display = 'none';
        cartPromoBox.style.display = 'none';
        promoMessage.textContent = '';
        appliedDiscount = 0;
        promoInput.value = '';
    } else {
        const headerTitle = document.createElement('div');
        headerTitle.classList.add('active-cart-text');
        headerTitle.innerHTML = `🛒 Товари у вашому кошику:`;
        cartContainer.appendChild(headerTitle);
        cart.forEach(item => {
            const row = document.createElement('div'); row.classList.add('cart-item');
            const qtyText = item.quantity > 1 ? ` (×${item.quantity})` : '';
            row.innerHTML = `<div><span>${item.title}${qtyText}</span><br><strong>${item.price * (item.quantity || 1)} грн</strong></div><button class="remove-btn" data-index="${item.cartIndex}">✕</button>`;
            cartContainer.appendChild(row);
        });
        calculateCartTotal();
        cartTotalBox.style.display = 'flex'; 
        cartFooter.style.display = 'block';
        cartPromoBox.style.display = 'flex';
        document.querySelectorAll('.remove-btn').forEach(b => {
            b.onclick = function() { removeFromCart(parseFloat(this.getAttribute('data-index'))); };
        });
    }
}
function animateCartIcon() {
    const icon = document.getElementById('cart-toggle');
    icon.style.transform = "scale(1.15)";
    setTimeout(() => icon.style.transform = "scale(1)", 200);
}
document.getElementById('checkout-btn').onclick = () => {
    if (cart.length === 0) return;
    cartDropdown.classList.remove('active');
    showCheckoutSection();
};
function renderCheckoutSummary() {
    const itemsBox = document.getElementById('checkout-summary-items');
    const finalPriceBox = document.getElementById('summary-total-price');
    itemsBox.innerHTML = '';
    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('checkout-summary-item');
        const qtyText = item.quantity > 1 ? ` (×${item.quantity})` : '';
        row.innerHTML = `<span>${item.title}${qtyText}</span> <span>${item.price * (item.quantity || 1)} грн</span>`;
        itemsBox.appendChild(row);
    });
    let total = calculateCartTotal();
    finalPriceBox.textContent = `${total} грн`;
}
document.getElementById('submit-order-final-btn').onclick = () => {
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const city = document.getElementById('order-city').value.trim();
    const wh = document.getElementById('order-warehouse').value.trim();
    if(!name || !phone || !city || !wh) {
        alert("Будь ласка, заповніть всі поля для доставки!");
        return;
    }
    alert(`🎉 Замовлення успішно сформовано!\nДякуємо, ${name}! Дані надіслані в логістику Нової Пошти у м. ${city}.\nОчікуйте SMS із ТТН.`);
    let history = JSON.parse(localStorage.getItem('order_history') || '[]');
    cart.forEach(item => history.push({ title: item.title, price: item.price * (item.quantity || 1), date: new Date().toLocaleDateString() }));
    localStorage.setItem('order_history', JSON.stringify(history));
    cart = []; 
    appliedDiscount = 0;
    localStorage.removeItem('booklio_cart');
    document.getElementById('order-name').value = '';
    document.getElementById('order-phone').value = '';
    document.getElementById('order-city').value = '';
    document.getElementById('order-warehouse').value = '';
    updateCartUI(); 
    showStoreSection();
};
const modal = document.getElementById('book-modal');
let currentModalProductId = null;
function openProductModal(item) {
    currentModalProductId = item.id;
    document.getElementById('modal-img-container').innerHTML = getVisualHTML(item, true);
    document.getElementById('modal-book-title').textContent = item.title;
    document.getElementById('modal-book-author').textContent = item.author;
    document.getElementById('modal-book-tag').textContent = item.tag || "Книга";
    document.getElementById('modal-book-description').textContent = item.desc || "Прекрасне видання для поціновувачів якісної літератури.";
    document.getElementById('modal-book-price').textContent = `${item.price} грн`;
    document.getElementById('spec-publisher').textContent = item.publisher || "Booklio Преміум";
    document.getElementById('spec-pages').textContent = item.pages || "240 ст.";
    document.getElementById('spec-cover').textContent = item.cover || "Тверда";
    modal.classList.add('open');
}
document.getElementById('modal-close-btn').onclick = () => modal.classList.remove('open');
modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('open'); };
document.getElementById('modal-buy-btn').onclick = () => { if (currentModalProductId) { addToCart(currentModalProductId); modal.classList.remove('open'); } };
function checkUserSession() {
    const zone = document.getElementById('account-zone');
    const user = localStorage.getItem('username');
    const avatar = localStorage.getItem('user_avatar') || 'https://api.dicebear.com/7.x/bottts/svg?seed=booklio1';
    if (user) {
        zone.innerHTML = `
            <div class="user-header-panel">
                <div class="user-header-profile" id="go-to-profile-btn">
                    <img class="header-avatar" src="${avatar}" alt="Avatar">
                    <span class="header-username">${user}</span>
                </div>
                <button class="fast-logout-btn" id="header-logout-btn">Вихід</button>
            </div>
        `;
        document.getElementById('go-to-profile-btn').onclick = showProfileSection;
        document.getElementById('header-logout-btn').onclick = logoutUser;
    } else { 
        zone.innerHTML = `<a class="login-btn" href="login.html">Увійти</a>`; 
    }
}
function logoutUser() {
    localStorage.removeItem('username');
    localStorage.removeItem('user_avatar');
    checkUserSession();
    showStoreSection();
}
function loadProfileData() {
    const user = localStorage.getItem('username') || "Гість";
    const email = localStorage.getItem('reg_email') || "customer@booklio.ua";
    if (document.getElementById('profile-display-name')) document.getElementById('profile-display-name').textContent = user;
    if (document.getElementById('profile-display-email')) document.getElementById('profile-display-email').textContent = email;
    if (document.getElementById('current-avatar-img')) document.getElementById('current-avatar-img').src = localStorage.getItem('user_avatar') || 'https://api.dicebear.com/7.x/bottts/svg?seed=booklio1';
    if (document.getElementById('change-name-input')) document.getElementById('change-name-input').value = user;
    const historyContainer = document.getElementById('order-history-container');
    if (historyContainer) {
        const history = JSON.parse(localStorage.getItem('order_history') || '[]');
        if (history.length === 0) {
            historyContainer.innerHTML = `<p style="color:#777; font-weight: 500; margin-top: 10px;">Немає замовлень.</p>`;
        } else {
            historyContainer.innerHTML = history.map(i => `
                <div class="history-item" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:14px; border-bottom:1px solid #f1f5f9; padding-bottom:5px;">
                    <span>📚 <strong>${i.title}</strong></span>
                    <span>${i.price} грн</span>
                </div>
            `).join('');
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const avatarOptions = document.querySelectorAll('.avatar-option');
    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newAvatarUrl = option.getAttribute('data-avatar');
            localStorage.setItem('user_avatar', newAvatarUrl);
            const profileAvatarImg = document.getElementById('current-avatar-img');
            if (profileAvatarImg) {
                profileAvatarImg.src = newAvatarUrl;
            }
            const headerAvatar = document.querySelector('.header-avatar');
            if (headerAvatar) {
                headerAvatar.src = newAvatarUrl;
            }
        });
    });
});
displayMainPage();
updateCartUI();
checkUserSession();