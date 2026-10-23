/* ASR Bilservice AB - Digital Core Platform - Protected Bundle */
(function(){
  var _0xa7e1 = function(s){ return decodeURIComponent(escape(window.atob(s))); };
  var _0x9b4c = document.createElement('script');
  _0x9b4c.type = 'text/javascript';
  _0x9b4c.text = (function(){
    const WORKSHOP_PHONE = "0737255557";
    const WORKSHOP_WHATSAPP = "46737255557";
    const BASE_SERVICE_URL = "https://service.asrbilservice.se";

    const SUPABASE_URL = "https://xlhbzjmuohosijhibgbo.supabase.co";
    const SUPABASE_KEY = "sb_publishable_XiOUO8haa_Ko7LYrj30vaw_AsxLztP2";
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    let currentReg = '';
    let currentLang = 'sv';
    let cachedVehicle = null;
    let cachedServices = [];
    let currentUser = null;
    let lastSearchedNotFoundReg = '';
    let regCheckTimeout = null;
    let logoClicks = 0;
    let logoClickTimer = null;

    const translations = {
      sv: {
        headerTitle: "Digital Servicebok & Protokoll",
        headerSub: "Auktoriserad Verkstad & Serviceportal",
        lblOwner: "Ägare",
        lblMileage: "Mätarställning",
        lblVinOnly: "Chassinummer (VIN)",
        lblVisits: "Servicehistorik",
        btnPrint: "Skriv ut protokoll",
        phSearch: "Sök Reg.nr (t.ex. OOB237)",
        btnSearch: "Sök",
        formTitle: "📝 Registrera Service",
        formTitleEdit: "✏️ Redigera Service",
        lblReg: "Registreringsnummer *",
        lblServiceDate: "Servicedatum *",
        lblModel: "Bilmärke & Modell",
        lblYear: "Årsmodell",
        lblVin: "Chassinummer (VIN)",
        lblCustName: "Kundens namn",
        lblCustPhone: "Telefonnummer",
        lblCurMileage: "Mätarställning (km) *",
        lblMechanic: "Mekaniker",
        lblOil: "Motorolja (Märke & Viskositet)",
        lblOilQty: "Oljemängd (Liter)",
        lblPartsSource: "Materialkälla (Olja & Delar)",
        optWorkshop: "Från verkstaden (ASR Bilservice)",
        optCustomer: "Från kunden (Medtagna delar)",
        lblChecklist: "Utbytta Delar & Filter",
        lblFiltersDesc: "Inspekterade och bytta enligt specifikation",
        lblOilUsed: "Motorolja som användes",
        lblNextServiceBox: "Nästa Rekommenderade Service",
        partOilFilter: "Oljefilter",
        partAirFilter: "Luftfilter",
        partCabinFilter: "Kupéfilter",
        partFuelFilter: "Bränslefilter",
        partSparkPlugs: "Tändstift",
        lblNextMileage: "Nästa service (km) [+15000 km]",
        lblNextDate: "Nästa service datum [+1 år]",
        lblNotes: "Noteringar / Anteckningar",
        btnSave: "💾 Spara & Skapa QR",
        btnUpdate: "💾 Uppdatera Service",
        msgSaved: "✅ Service Sparad!",
        msgScan: "Skanna koden för serviceprotokollet:",
        btnView: "👁️ Visa sida",
        historyTitle: "📜 Servicehistorik",
        thDate: "Datum",
        thMileage: "Mätare",
        thParts: "Olja & Delar",
        thMechanic: "Mekaniker",
        thNext: "Nästa service",
        thAction: "Åtgärd",
        stOverdue: "⚠️ Försenad",
        stDue: "⚠️ Snart dags",
        stOk: "✔ Uppdaterad (OK)",
        smsMsg: "Hej! Här är ditt digitala serviceprotokoll från ASR Bilservice för din bil",
        btnCall: "Ring oss",
        btnBook: "Boka tid via WhatsApp",
        bokaMsg: "Hej ASR Bilservice! Jag vill boka tid för service/reparation för min bil med reg.nr",
        msgNotFound: "⚠️ Inget fordon eller servicehistorik hittades för registreringsnummer",
        btnAllRecords: "Alla bilar & poster",
        allVehiclesTitle: "📋 Alla registrerade bilar & protokoll",
        btnCloseArchive: "Stäng arkiv",
        btnExport: "Exportera Excel",
        btnImport: "Importera Excel",
        thAllReg: "Reg.nr",
        thAllCar: "Märke / Modell",
        thAllOwner: "Kund / Ägare",
        thAllPhone: "Telefon",
        thAllTotal: "Antal poster",
        btnOpen: "Öppna"
      },
      en: {
        headerTitle: "Digital Service Book & Protocol",
        headerSub: "Authorized Workshop & Service Portal",
        lblOwner: "Owner",
        lblMileage: "Current Mileage",
        lblVinOnly: "Chassis Number (VIN)",
        lblVisits: "Total Services",
        btnPrint: "Print Protocol",
        phSearch: "Search Reg.nr (e.g. OOB237)",
        btnSearch: "Search",
        formTitle: "📝 New Service Record",
        formTitleEdit: "✏️ Edit Service",
        lblReg: "Registration Number *",
        lblServiceDate: "Service Date *",
        lblModel: "Car Make & Model",
        lblYear: "Model Year",
        lblVin: "Chassis Number (VIN)",
        lblCustName: "Customer Name",
        lblCustPhone: "Phone Number",
        lblCurMileage: "Mileage (km) *",
        lblMechanic: "Mechanic",
        lblOil: "Engine Oil (Brand & Grade)",
        lblOilQty: "Oil Volume (Liters)",
        lblPartsSource: "Parts & Oil Source",
        optWorkshop: "Supplied by workshop (ASR)",
        optCustomer: "Supplied by customer",
        lblChecklist: "Replaced Parts & Filters",
        lblFiltersDesc: "Inspected and replaced according to specification",
        lblOilUsed: "Engine Oil Used",
        lblNextServiceBox: "Next Recommended Service",
        partOilFilter: "Oil Filter",
        partAirFilter: "Air Filter",
        partCabinFilter: "Cabin Filter",
        partFuelFilter: "Fuel Filter",
        partSparkPlugs: "Spark Plugs",
        lblNextMileage: "Next Service (km) [+15000 km]",
        lblNextDate: "Next Service Date [+1 year]",
        lblNotes: "Notes / Work Order",
        btnSave: "💾 Save & Generate QR",
        btnUpdate: "💾 Update Service",
        msgSaved: "✅ Service Saved!",
        msgScan: "Scan QR code to open service record:",
        btnView: "👁️ View Page",
        historyTitle: "📜 Service History",
        thDate: "Date",
        thMileage: "Mileage",
        thParts: "Oil & Parts",
        thMechanic: "Mechanic",
        thNext: "Next Service",
        thAction: "Action",
        stOverdue: "⚠️ Overdue",
        stDue: "⚠️ Due Soon",
        stOk: "✔ Up To Date",
        smsMsg: "Hello! Here is your digital service protocol from ASR Bilservice for your vehicle",
        btnCall: "Call Us",
        btnBook: "Book Appointment",
        bokaMsg: "Hello ASR Bilservice! I would like to book a service appointment for vehicle reg.nr",
        msgNotFound: "⚠️ No vehicle or service history found for registration number",
        btnAllRecords: "All Vehicles & Records",
        allVehiclesTitle: "📋 All Registered Vehicles & Records",
        btnCloseArchive: "Close Archive",
        thAllReg: "Reg.nr",
        thAllCar: "Make / Model",
        thAllOwner: "Customer / Owner",
        thAllPhone: "Phone",
        thAllTotal: "Total Records",
        btnOpen: "Open"
      },
      ar: {
        headerTitle: "سجل الخدمة والفحص الرقمي",
        headerSub: "الورشة المعتمدة وبوابة الصيانة",
        lblOwner: "المالك",
        lblMileage: "العداد الحالي",
        lblVinOnly: "رقم الشاسيه (VIN)",
        lblVisits: "عدد مرات الصيانة",
        btnPrint: "طباعة التقرير الرسمي",
        phSearch: "ابحث برقم اللوحة (مثلاً OOB237)",
        btnSearch: "بحث",
        formTitle: "📝 تسجيل صيانة جديدة",
        formTitleEdit: "✏️ تعديل بيانات الصيانة",
        lblReg: "رقم اللوحة *",
        lblServiceDate: "تاريخ الصيانة *",
        lblModel: "ماركة وموديل السيارة",
        lblYear: "سنة الصنع",
        lblVin: "رقم الشاسيه (VIN)",
        lblCustName: "اسم العميل",
        lblCustPhone: "رقم الهاتف",
        lblCurMileage: "عداد الكيلومترات (km) *",
        lblMechanic: "اسم الفني",
        lblOil: "زيت المحرك (النوع واللزوجة)",
        lblOilQty: "كمية الزيت (لتر)",
        lblPartsSource: "مصدر الزيت والقطع",
        optWorkshop: "من الورشة (مع كفالة ASR)",
        optCustomer: "من العميل (قطع جلبها العميل)",
        lblChecklist: "الفلاتر والقطع المستبدلة",
        lblFiltersDesc: "تم الفحص والاستبدال حسب معايير الصانع",
        lblOilUsed: "زيت المحرك المستخدم",
        lblNextServiceBox: "الصيانة القادمة الموصى بها",
        partOilFilter: "فلتر زيت",
        partAirFilter: "فلتر هواء",
        partCabinFilter: "فلتر مكيف",
        partFuelFilter: "فلتر وقود",
        partSparkPlugs: "بواجي / شمعات احتراق",
        lblNextMileage: "الصيانة القادمة (km) [+15000 km]",
        lblNextDate: "تاريخ الصيانة القادمة [+سنة واحدة]",
        lblNotes: "ملاحظات إضافية / أمر الشغل",
        btnSave: "💾 حفظ وتوليد الكود",
        btnUpdate: "💾 تحديث بيانات الصيانة",
        msgSaved: "✅ تم حفظ الصيانة بنجاح!",
        msgScan: "امسح الكود لفتح سجل السيارة الرقمي:",
        btnView: "👁️ عرض الصفحة",
        historyTitle: "📜 سجل الصيانات السابقة",
        thDate: "التاريخ",
        thMileage: "العداد",
        thParts: "الزيت والقطع",
        thMechanic: "الفني",
        thNext: "الصيانة القادمة",
        thAction: "إجراء",
        stOverdue: "⚠️ متأخر عن الموعد",
        stDue: "⚠️ يقترب موعدها",
        stOk: "✔ الحالة ممتازة (Up To Date)",
        smsMsg: "مرحباً! هذا هو بروتوكول الصيانة الرقمي لسيارتك من ورشة ASR Bilservice",
        btnCall: "اتصل بنا",
        btnBook: "حجز موعد عبر الواتساب",
        bokaMsg: "مرحباً ASR Bilservice، أود حجز موعد صيانة لسيارتي رقم اللوحة",
        msgNotFound: "⚠️ عذراً، لا يوجد أي مركبة أو سجل صيانة مسجل لرقم السيارة",
        btnAllRecords: "كل السيارات والسجلات",
        allVehiclesTitle: "📋 جميع السيارات المسجلة وسجلات الفحص",
        btnCloseArchive: "إغلاق الأرشيف",
        btnExport: "تصدير نسخة إكسيل",
        btnImport: "استيراد من إكسيل",
        thAllReg: "رقم اللوحة",
        thAllCar: "الموديل والماركة",
        thAllOwner: "اسم العميل",
        thAllPhone: "الهاتف",
        thAllTotal: "عدد الصيانات",
        btnOpen: "فتح السجل"
      }
    };

    window.setLanguage = function(lang) {
      currentLang = lang;
      const root = document.getElementById('htmlRoot');
      root.setAttribute('lang', lang);
      root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
      });

      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
      });

      updateWorkshopButtons();

      if (lastSearchedNotFoundReg) {
        showNotFoundAlert(lastSearchedNotFoundReg);
      }

      if (currentReg) {
        loadVehicleData(currentReg);
      }
    };

    function showNotFoundAlert(regNr) {
      const t = translations[currentLang];
      const noMsgEl = document.getElementById('noVehicleMsg');
      const noTxtEl = document.getElementById('noVehicleText');
      if (noTxtEl) noTxtEl.textContent = `${t.msgNotFound} (${regNr})`;
      if (noMsgEl) noMsgEl.style.display = 'block';
    }

    function hideNotFoundAlert() {
      lastSearchedNotFoundReg = '';
      const noMsgEl = document.getElementById('noVehicleMsg');
      if (noMsgEl) noMsgEl.style.display = 'none';
    }

    function updateWorkshopButtons() {
      const t = translations[currentLang];
      document.getElementById('wsPhoneBtn').href = `tel:${WORKSHOP_PHONE}`;
      const bookMsg = encodeURIComponent(`${t.bokaMsg}: ${currentReg || ''}`);
      document.getElementById('wsBokaBtn').href = `https://wa.me/${WORKSHOP_WHATSAPP}?text=${bookMsg}`;
    }

    window.handleCurrentMileageInput = function() {
      const km = parseInt(document.getElementById('mileage').value);
      if (!isNaN(km) && km > 0) {
        document.getElementById('nextMileage').value = km + 15000;
      }
    };

    window.handleServiceDateChange = function() {
      const dateVal = document.getElementById('serviceDate').value;
      if (dateVal) {
        const d = new Date(dateVal);
        d.setFullYear(d.getFullYear() + 1);
        document.getElementById('nextDate').value = d.toISOString().substring(0, 10);
      }
    };

    window.handleSecretLogoClick = function() {
      logoClicks++;
      clearTimeout(logoClickTimer);
      logoClickTimer = setTimeout(() => { logoClicks = 0; }, 1000);

      if (logoClicks >= 3) {
        logoClicks = 0;
        const authBtn = document.getElementById('authBtn');
        if (authBtn) authBtn.style.display = 'inline-flex';
        document.getElementById('loginModal').style.display = 'flex';
      }
    };

    window.handleRegAutoCheck = async function(force = false) {
      const regInput = document.getElementById('regNr');
      const notice = document.getElementById('regCheckNotice');
      const reg = regInput.value.trim().toUpperCase();

      if (!reg || (!force && reg.length < 5)) {
        notice.style.display = 'none';
        return;
      }

      clearTimeout(regCheckTimeout);
      regCheckTimeout = setTimeout(async () => {
        const { data: vehicle } = await supabaseClient
          .from('vehicles')
          .select('*')
          .eq('reg_nr', reg)
          .maybeSingle();

        if (vehicle) {
          if (!document.getElementById('carModel').value) document.getElementById('carModel').value = vehicle.model || '';
          if (!document.getElementById('yearModel').value) document.getElementById('yearModel').value = vehicle.year_model || '';
          if (!document.getElementById('vin').value) document.getElementById('vin').value = vehicle.vin || '';
          if (!document.getElementById('custName').value) document.getElementById('custName').value = vehicle.customer_name || '';
          if (!document.getElementById('custPhone').value) document.getElementById('custPhone').value = vehicle.customer_phone || '';

          const { data: services } = await supabaseClient
            .from('service_records')
            .select('id, mileage, service_date')
            .eq('reg_nr', reg)
            .order('service_date', { ascending: false });

          const count = services ? services.length : 0;
          const lastKm = services && services.length > 0 ? services[0].mileage : null;

          notice.style.display = 'block';
          notice.style.color = '#34d399';
          
          const openLink = `<a href="javascript:void(0)" onclick="loadVehicleData('${reg}')" style="color: var(--accent-gold); text-decoration: underline; margin-left: 6px; margin-right: 6px;">[${currentLang === 'ar' ? 'عرض السجل' : 'Visa profil'}]</a>`;
          if (currentLang === 'ar') {
            notice.innerHTML = `✔ السيارة مسجلة مسبقاً (${count} صيانة مسجلة ${lastKm ? `- آخر عداد: ${lastKm} km` : ''}) ${openLink}`;
          } else {
            notice.innerHTML = `✔ Registrerat fordon (${count} tidigare service ${lastKm ? `- senaste mätare: ${lastKm} km` : ''}) ${openLink}`;
          }
        } else {
          notice.style.display = 'block';
          notice.style.color = '#94a3b8';
          notice.textContent = currentLang === 'ar' ? '🆕 سيارة جديدة (غير مسجلة بالنظام)' : '🆕 Nytt fordon (ej tidigare registrerat)';
        }
      }, 350);
    };

    async function initAuth() {
      const { data: { session } } = await supabaseClient.auth.getSession();
      handleAuthState(session ? session.user : null);

      supabaseClient.auth.onAuthStateChange((_event, session) => {
        handleAuthState(session ? session.user : null);
      });
    }

    function handleAuthState(user) {
      currentUser = user;
      const authBtn = document.getElementById('authBtn');
      const authBtnText = document.getElementById('authBtnText');
      const adminSection = document.getElementById('adminSection');
      const adminActionRow = document.getElementById('adminActionRow');
      const btnAllRecords = document.getElementById('btnAllRecords');
      const btnExportData = document.getElementById('btnExportData');
      const btnImportData = document.getElementById('btnImportData');

      const urlParams = new URLSearchParams(window.location.search);
      const hasAdminParam = urlParams.get('admin') === '1' || urlParams.has('mekaniker');

      if (user) {
        if (authBtn) authBtn.style.display = 'inline-flex';
        authBtnText.textContent = "Logga ut (" + user.email.split('@')[0] + ")";
        adminSection.style.display = 'block';
        adminActionRow.style.display = 'grid';
        if (btnAllRecords) btnAllRecords.style.display = 'inline-flex';
        if (btnExportData) btnExportData.style.display = 'inline-flex';
        if (btnImportData) btnImportData.style.display = 'inline-flex';
        if (!document.getElementById('serviceDate').value) {
          const today = new Date().toISOString().substring(0, 10);
          document.getElementById('serviceDate').value = today;
          handleServiceDateChange();
        }
      } else {
        authBtnText.textContent = "Logga in (Mekaniker)";
        if (authBtn) {
          authBtn.style.display = hasAdminParam ? 'inline-flex' : 'none';
        }
        adminSection.style.display = 'none';
        adminActionRow.style.display = 'none';
        if (btnAllRecords) btnAllRecords.style.display = 'none';
        if (btnExportData) btnExportData.style.display = 'none';
        if (btnImportData) btnImportData.style.display = 'none';
        document.getElementById('allVehiclesCard').style.display = 'none';
        cancelEdit();
      }
      if (cachedServices.length > 0) {
        renderHistory(cachedServices);
      }
    }

    window.handleAuthAction = function() {
      if (currentUser) {
        if (confirm("Vill du logga ut från verkstadskontot?")) {
          supabaseClient.auth.signOut();
        }
      } else {
        document.getElementById('loginModal').style.display = 'flex';
      }
    };

    window.closeLoginModal = function() {
      document.getElementById('loginModal').style.display = 'none';
    };

    window.handleLoginSubmit = async function(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();

      const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) {
        alert("Fel vid inloggning: " + error.message);
      } else {
        closeLoginModal();
        document.getElementById('loginPassword').value = '';
      }
    };

    window.exportAllDataToExcel = async function() {
      if (!currentUser) return;
      
      const { data: vehicles } = await supabaseClient.from('vehicles').select('*');
      const { data: services } = await supabaseClient.from('service_records').select('*').order('service_date', { ascending: false });

      if (!services || services.length === 0) {
        alert("Det finns ingen data att exportera.");
        return;
      }

      const vMap = {};
      if (vehicles) {
        vehicles.forEach(v => { vMap[v.reg_nr] = v; });
      }

      const headers = [
        "Reg.nr", "Märke & Modell", "Årsmodell", "Chassinummer (VIN)", "Kundens Namn", "Telefonnummer",
        "Servicedatum", "Mätarställning (km)", "Motorolja", "Materialkälla",
        "Oljefilter", "Luftfilter", "Kupéfilter", "Bränslefilter", "Tändstift",
        "Nästa Service (km)", "Nästa Service Datum", "Ansvarig Mekaniker", "Mekanikernoteringar"
      ];

      let tableHtml = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
          <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
          <style>
            th { background-color: #0b1120; color: #f59e0b; font-weight: bold; padding: 10px; border: 1px solid #cbd5e1; }
            td { padding: 8px; border: 1px solid #e2e8f0; font-family: Arial, sans-serif; mso-number-format:"\\@"; }
            .reg { font-weight: bold; color: #b45309; }
          </style>
        </head>
        <body>
          <table border="1">
            <thead>
              <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
      `;

      services.forEach(s => {
        const v = vMap[s.reg_nr] || {};
        const isCust = s.notes && s.notes.includes('[KÄLLA: KUND]');
        const cleanNotes = s.notes ? s.notes.replace(/\[KÄLLA: (KUND|VERKSTAD)\]/g, '').trim() : '';

        tableHtml += `
          <tr>
            <td class="reg">${s.reg_nr || ''}</td>
            <td>${v.model || ''}</td>
            <td>${v.year_model || ''}</td>
            <td>${v.vin || ''}</td>
            <td>${v.customer_name || ''}</td>
            <td>${v.customer_phone || ''}</td>
            <td>${s.service_date ? s.service_date.substring(0, 10) : ''}</td>
            <td>${s.mileage || ''}</td>
            <td>${s.oil_brand_type || ''}</td>
            <td>${isCust ? 'Kunden' : 'Verkstaden'}</td>
            <td>${s.oil_filter ? 'JA' : 'NEJ'}</td>
            <td>${s.air_filter ? 'JA' : 'NEJ'}</td>
            <td>${s.cabin_filter ? 'JA' : 'NEJ'}</td>
            <td>${s.fuel_filter ? 'JA' : 'NEJ'}</td>
            <td>${s.spark_plugs ? 'JA' : 'NEJ'}</td>
            <td>${s.next_service_mileage || ''}</td>
            <td>${s.next_service_date || ''}</td>
            <td>${s.mechanic || ''}</td>
            <td>${cleanNotes}</td>
          </tr>
        `;
      });

      tableHtml += `</tbody></table></body></html>`;

      const blob = new Blob([tableHtml], { type: 'application/vnd.ms-excel;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `ASR_Bilservice_Data_${new Date().toISOString().substring(0,10)}.xls`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    window.triggerImportCSV = function() {
      document.getElementById('csvFileInput').click();
    };

    function parseStandardDate(str) {
      if (!str) return null;
      str = String(str).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
      const parts = str.split(/[\/\-\.]/);
      if (parts.length === 3) {
        if (parts[0].length === 4) {
          return `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
        } else if (parts[2].length === 4) {
          return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        }
      }
      return null;
    }

    function isTrueValue(val) {
      if (!val) return false;
      const clean = String(val).toLowerCase().replace(/[^a-z0-9]/g, '');
      return ['ja', 'true', '1', 'yes'].includes(clean);
    }

    window.handleCSVImport = async function(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async function(e) {
        const content = e.target.result;
        let rowsData = [];

        if (content.includes('<table') || content.includes('<tr')) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(content, 'text/html');
          const rows = doc.querySelectorAll('tr');

          rows.forEach((tr, rIdx) => {
            if (rIdx === 0) return;
            const tds = tr.querySelectorAll('td');
            if (tds.length >= 8) {
              rowsData.push({
                reg_nr: tds[0]?.textContent?.trim().toUpperCase(),
                model: tds[1]?.textContent?.trim(),
                year_model: tds[2]?.textContent?.trim(),
                vin: tds[3]?.textContent?.trim(),
                customer_name: tds[4]?.textContent?.trim(),
                customer_phone: tds[5]?.textContent?.trim(),
                service_date: parseStandardDate(tds[6]?.textContent),
                mileage: parseInt(tds[7]?.textContent?.replace(/\D/g, '')) || 0,
                oil_brand_type: tds[8]?.textContent?.trim() || '',
                materialkalla: tds[9]?.textContent?.trim() || '',
                oil_filter: isTrueValue(tds[10]?.textContent),
                air_filter: isTrueValue(tds[11]?.textContent),
                cabin_filter: isTrueValue(tds[12]?.textContent),
                fuel_filter: isTrueValue(tds[13]?.textContent),
                spark_plugs: isTrueValue(tds[14]?.textContent),
                next_service_mileage: parseInt(tds[15]?.textContent?.replace(/\D/g, '')) || null,
                next_service_date: parseStandardDate(tds[16]?.textContent),
                mechanic: tds[17]?.textContent?.trim() || 'AHD',
                notes: tds[18]?.textContent?.trim() || ''
              });
            }
          });
        } else {
          const lines = content.split(/\r\n|\n/).filter(line => line.trim() !== '');
          if (lines.length >= 2) {
            const delimiter = lines[0].includes(';') ? ';' : (lines[0].includes('\t') ? '\t' : ',');
            const headers = lines[0].split(delimiter).map(h => h.replace(/[\ufeff"'\r\n]/g, '').trim().toLowerCase());

            for (let i = 1; i < lines.length; i++) {
              const rawCols = lines[i].split(delimiter).map(c => c.replace(/^["\s]+|["\s]+$/g, '').trim());
              const row = {};
              headers.forEach((h, idx) => { row[h] = rawCols[idx] || ''; });

              const reg = (row['reg.nr'] || row['regnr'] || row['reg_nr'] || row['registreringsnummer'] || rawCols[0] || '').toUpperCase();
              if (!reg) continue;

              const oilFilterVal = row['oljefilter'] || row['oljefilter (byte)'] || rawCols[10];

              rowsData.push({
                reg_nr: reg,
                model: row['märke & modell'] || row['modell'] || row['model'] || rawCols[1] || '',
                year_model: row['årsmodell'] || row['arsmodell'] || row['year_model'] || rawCols[2] || '',
                vin: row['chassinummer (vin)'] || row['vin'] || row['chassinummer'] || rawCols[3] || '',
                customer_name: row['kundens namn'] || row['kundnamn'] || row['customer_name'] || rawCols[4] || '',
                customer_phone: row['telefonnummer'] || row['telefon'] || row['customer_phone'] || rawCols[5] || '',
                service_date: parseStandardDate(row['servicedatum'] || row['service_date'] || rawCols[6]) || new Date().toISOString().substring(0, 10),
                mileage: parseInt(row['mätarställning (km)'] || row['matarstallning_km'] || row['mileage'] || rawCols[7]) || 0,
                oil_brand_type: row['motorolja'] || row['oil_brand_type'] || rawCols[8] || '',
                materialkalla: row['materialkälla'] || row['materialkalla'] || rawCols[9] || '',
                oil_filter: isTrueValue(oilFilterVal),
                air_filter: isTrueValue(row['luftfilter'] || rawCols[11]),
                cabin_filter: isTrueValue(row['kupéfilter'] || row['kupefilter'] || rawCols[12]),
                fuel_filter: isTrueValue(row['bränslefilter'] || row['branslefilter'] || rawCols[13]),
                spark_plugs: isTrueValue(row['tändstift'] || row['tandstift'] || rawCols[14]),
                next_service_mileage: parseInt(row['nästa service (km)'] || row['nasta_service_km'] || rawCols[15]) || null,
                next_service_date: parseStandardDate(row['nästa service datum'] || row['nasta_service_datum'] || rawCols[16]),
                mechanic: row['ansvarig mekaniker'] || row['mekaniker'] || row['mechanic'] || rawCols[17] || 'AHD',
                notes: row['mekanikernoteringar'] || row['noteringar'] || row['notes'] || rawCols[18] || ''
              });
            }
          }
        }

        if (rowsData.length === 0) {
          alert("Ingen giltig data kunde läsas från filen. Kontrollera filen.");
          return;
        }

        let updatedCount = 0;
        let insertedCount = 0;

        for (const item of rowsData) {
          if (!item.reg_nr) continue;

          const vPayload = {
            reg_nr: item.reg_nr,
            model: item.model,
            year_model: item.year_model,
            vin: item.vin,
            customer_name: item.customer_name,
            customer_phone: item.customer_phone
          };
          await supabaseClient.from('vehicles').upsert(vPayload, { onConflict: 'reg_nr' });

          const isCust = (item.materialkalla || '').toLowerCase().includes('kund');
          const sourceTag = isCust ? '[KÄLLA: KUND]' : '[KÄLLA: VERKSTAD]';
          const finalNotes = `${sourceTag} ${item.notes}`.trim();
          const sDate = item.service_date || new Date().toISOString().substring(0, 10);
          
          let finalNextMileage = item.next_service_mileage;
          if (!finalNextMileage && item.mileage > 0) {
            finalNextMileage = item.mileage + 15000;
          }

          let finalNextDate = item.next_service_date;
          if (!finalNextDate && sDate) {
            const d = new Date(sDate);
            d.setFullYear(d.getFullYear() + 1);
            finalNextDate = d.toISOString().substring(0, 10);
          }

          const sPayload = {
            reg_nr: item.reg_nr,
            service_date: sDate,
            mileage: item.mileage,
            oil_brand_type: item.oil_brand_type,
            oil_filter: item.oil_filter,
            air_filter: item.air_filter,
            cabin_filter: item.cabin_filter,
            fuel_filter: item.fuel_filter,
            spark_plugs: item.spark_plugs,
            next_service_mileage: finalNextMileage,
            next_service_date: finalNextDate,
            mechanic: item.mechanic,
            notes: finalNotes
          };

          const { data: existingRecords } = await supabaseClient
            .from('service_records')
            .select('id')
            .eq('reg_nr', item.reg_nr)
            .eq('service_date', sDate)
            .limit(1);

          if (existingRecords && existingRecords.length > 0) {
            const { error: upErr } = await supabaseClient
              .from('service_records')
              .update(sPayload)
              .eq('id', existingRecords[0].id);
            if (!upErr) updatedCount++;
          } else {
            const { error: insErr } = await supabaseClient
              .from('service_records')
              .insert([sPayload]);
            if (!insErr) insertedCount++;
          }
        }

        alert(`✅ Klart! Import slutförd:\n- ${updatedCount} befintliga poster uppdaterades (korrigerades).\n- ${insertedCount} nya poster lades till.`);
        event.target.value = '';
        if (currentReg) loadVehicleData(currentReg);
      };
      reader.readAsText(file, "UTF-8");
    };

    window.toggleAllVehiclesView = async function() {
      const card = document.getElementById('allVehiclesCard');
      if (card.style.display === 'block') {
        card.style.display = 'none';
        return;
      }

      card.style.display = 'block';
      card.scrollIntoView({ behavior: 'smooth' });
      loadAllVehiclesList();
    };

    async function loadAllVehiclesList() {
      const tbody = document.getElementById('allVehiclesBody');
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Laddar databas...</td></tr>`;

      const { data: vehicles, error: vErr } = await supabaseClient
        .from('vehicles')
        .select('*')
        .order('reg_nr', { ascending: true });

      const { data: services, error: sErr } = await supabaseClient
        .from('service_records')
        .select('reg_nr');

      if (vErr || sErr) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--danger);">Kunde inte hämta arkivet: ${vErr?.message || sErr?.message}</td></tr>`;
        return;
      }

      if (!vehicles || vehicles.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Inga fordon registrerade ännu.</td></tr>`;
        return;
      }

      const counts = {};
      if (services) {
        services.forEach(s => {
          counts[s.reg_nr] = (counts[s.reg_nr] || 0) + 1;
        });
      }

      const t = translations[currentLang];
      tbody.innerHTML = '';

      vehicles.forEach(v => {
        const totalServices = counts[v.reg_nr] || 0;
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong style="color: var(--accent-gold); letter-spacing: 1px;">${v.reg_nr}</strong></td>
          <td>${v.model || '-'} ${v.year_model ? `(${v.year_model})` : ''}</td>
          <td>${v.customer_name || '-'}</td>
          <td>${v.customer_phone ? `<a href="tel:${v.customer_phone}" style="color: var(--accent-blue); text-decoration: none;">${v.customer_phone}</a>` : '-'}</td>
          <td><span class="status-badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-blue);">${totalServices}</span></td>
          <td>
            <button class="btn btn-gold" style="width: auto; padding: 4px 10px; font-size: 11px;" onclick="selectVehicleFromArchive('${v.reg_nr}')">
              👁️ ${t.btnOpen}
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    window.selectVehicleFromArchive = function(regNr) {
      document.getElementById('lookupReg').value = regNr;
      document.getElementById('allVehiclesCard').style.display = 'none';
      searchVehicle();
      window.scrollTo({ top: 100, behavior: 'smooth' });
    };

    window.addEventListener('DOMContentLoaded', () => {
      initAuth();
      updateWorkshopButtons();
      const today = new Date().toISOString().substring(0, 10);
      document.getElementById('serviceDate').value = today;
      handleServiceDateChange();
      
      const params = new URLSearchParams(window.location.search);
      const regParam = params.get('reg');
      
      if (regParam && regParam.trim() !== '') {
        loadVehicleData(regParam.trim().toUpperCase());
      }
    });

    window.searchVehicle = function() {
      const reg = document.getElementById('lookupReg').value.trim().toUpperCase();
      if (reg) {
        hideNotFoundAlert();
        loadVehicleData(reg);
      }
    };

    async function loadVehicleData(regNr) {
      currentReg = regNr;
      document.getElementById('regNr').value = regNr;
      updateWorkshopButtons();

      const { data: vehicle } = await supabaseClient
        .from('vehicles')
        .select('*')
        .eq('reg_nr', regNr)
        .maybeSingle();

      const { data: services } = await supabaseClient
        .from('service_records')
        .select('*')
        .eq('reg_nr', regNr)
        .order('service_date', { ascending: false });

      cachedVehicle = vehicle;
      cachedServices = services || [];

      if (vehicle) {
        document.getElementById('carModel').value = vehicle.model || '';
        document.getElementById('yearModel').value = vehicle.year_model || '';
        document.getElementById('vin').value = vehicle.vin || '';
        document.getElementById('custName').value = vehicle.customer_name || '';
        document.getElementById('custPhone').value = vehicle.customer_phone || '';
      }

      if (vehicle || (services && services.length > 0)) {
        hideNotFoundAlert();
        renderSummary(vehicle, services);
        renderHistory(services);
        preparePrintData(vehicle, services);
      } else {
        document.getElementById('vehicleOverviewContainer').style.display = 'none';
        document.getElementById('historyCard').style.display = 'none';
        lastSearchedNotFoundReg = regNr;
        showNotFoundAlert(regNr);
      }
    }
    window.loadVehicleData = loadVehicleData;

    function renderSummary(vehicle, services) {
      const overviewContainer = document.getElementById('vehicleOverviewContainer');
      overviewContainer.style.display = 'block';

      const latest = services && services.length > 0 ? services[0] : null;
      const t = translations[currentLang];

      document.getElementById('sumReg').textContent = currentReg;
      document.getElementById('sumModel').textContent = (vehicle?.model || '') + (vehicle?.year_model ? ` (${vehicle.year_model})` : '');
      document.getElementById('sumOwner').textContent = vehicle?.customer_name || (currentLang === 'ar' ? 'عميل' : 'Customer');
      document.getElementById('sumMileage').textContent = latest?.mileage ? `${latest.mileage} km` : '---';
      document.getElementById('sumVin').textContent = vehicle?.vin || '---';
      document.getElementById('sumVisits').textContent = services ? services.length : 0;

      const statusDiv = document.getElementById('sumStatus');
      if (latest && latest.next_service_date) {
        const today = new Date();
        const nextDate = new Date(latest.next_service_date);
        const diffDays = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));

        if (diffDays < 0) {
          statusDiv.innerHTML = `<span class="status-pill status-overdue">${t.stOverdue} (${Math.abs(diffDays)} d)</span>`;
        } else if (diffDays <= 30) {
          statusDiv.innerHTML = `<span class="status-pill status-due-soon">${t.stDue} (${diffDays} d)</span>`;
        } else {
          statusDiv.innerHTML = `<span class="status-pill status-up-to-date">${t.stOk}</span>`;
        }
      } else {
        statusDiv.innerHTML = `<span class="status-pill status-up-to-date">${t.stOk}</span>`;
      }

      document.getElementById('cardOilVal').textContent = latest?.oil_brand_type || (currentLang === 'ar' ? 'زيت محرك معتمد' : 'Kvalitetsmotorolja');

      const srcEl = document.getElementById('cardPartsSource');
      if (latest?.notes && latest.notes.includes('[KÄLLA: KUND]')) {
        srcEl.innerHTML = `<span class="badge-source" style="background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.35); color: #f87171;">📦 ${t.optCustomer}</span>`;
      } else {
        srcEl.innerHTML = `<span class="badge-source">🔧 ${t.optWorkshop}</span>`;
      }

      const fGrid = document.getElementById('filtersGrid');
      fGrid.innerHTML = '';
      const filterItems = [
        { name: t.partOilFilter, icon: '🛢️', active: latest?.oil_filter },
        { name: t.partAirFilter, icon: '💨', active: latest?.air_filter },
        { name: t.partCabinFilter, icon: '❄️', active: latest?.cabin_filter },
        { name: t.partFuelFilter, icon: '⛽', active: latest?.fuel_filter },
        { name: t.partSparkPlugs, icon: '⚡', active: latest?.spark_plugs }
      ];

      filterItems.forEach(item => {
        const box = document.createElement('div');
        box.className = `filter-item ${item.active ? 'filter-checked' : 'filter-unchecked'}`;
        box.innerHTML = `
          <span style="font-size: 14px;">${item.icon}</span>
          <span>${item.name}</span>
          <span style="margin-left: auto; font-size: 11px;">${item.active ? '✔' : '—'}</span>
        `;
        fGrid.appendChild(box);
      });

      document.getElementById('cardNextMileageVal').textContent = latest?.next_service_mileage ? `${latest.next_service_mileage} km` : '---';
      document.getElementById('cardNextDateVal').textContent = latest?.next_service_date ? `${latest.next_service_date}` : '---';

      const targetUrl = `${BASE_SERVICE_URL}/?reg=${encodeURIComponent(currentReg)}`;
      const msg = encodeURIComponent(`${t.smsMsg} (${currentReg}): ${targetUrl}`);
      
      const phone = vehicle?.customer_phone || '';
      let cleanPhone = phone.replace(/[^0-9]/g, '');
      if (cleanPhone.startsWith('07')) cleanPhone = '46' + cleanPhone.substring(1);

      document.getElementById('btnSendWhatsapp').href = `https://wa.me/${cleanPhone}?text=${msg}`;
      document.getElementById('btnSendSms').href = `sms:${phone}?body=${msg}`;
    }

    function renderHistory(services) {
      const histCard = document.getElementById('historyCard');
      const container = document.getElementById('historyListContainer');
      container.innerHTML = '';

      if (!services || services.length === 0) {
        histCard.style.display = 'none';
        return;
      }

      histCard.style.display = 'block';
      const t = translations[currentLang];
      const isAdmin = currentUser !== null;

      services.forEach(s => {
        const parts = [];
        if (s.oil_filter) parts.push(t.partOilFilter);
        if (s.air_filter) parts.push(t.partAirFilter);
        if (s.cabin_filter) parts.push(t.partCabinFilter);
        if (s.fuel_filter) parts.push(t.partFuelFilter);
        if (s.spark_plugs) parts.push(t.partSparkPlugs);

        const partsHtml = parts.length > 0 
          ? parts.map(p => `<span class="badge-part">✔ ${p}</span>`).join('')
          : `<span style="font-size: 11.5px; color: var(--text-muted);">${currentLang === 'ar' ? 'لم يتم استبدال فلاتر' : 'Inga filter bytta'}</span>`;

        const isFromCust = s.notes && s.notes.includes('[KÄLLA: KUND]');
        const cleanNotes = s.notes ? s.notes.replace(/\[KÄLLA: (KUND|VERKSTAD)\]/g, '').trim() : '';

        let adminBtns = '';
        if (isAdmin) {
          adminBtns = `
            <div class="btn-action-group">
              <button class="btn-tbl btn-tbl-edit" onclick="editServiceRecord('${s.id}')">✏️ Redigera</button>
              <button class="btn-tbl btn-tbl-del" onclick="deleteServiceRecord('${s.id}')">🗑️ Ta bort</button>
            </div>
          `;
        }

        const itemCard = document.createElement('div');
        itemCard.className = 'history-card-item';
        itemCard.innerHTML = `
          <div class="h-card-top">
            <span class="h-card-date">📅 ${s.service_date ? s.service_date.substring(0, 10) : ''}</span>
            <span class="h-card-mileage">${s.mileage || ''} km</span>
          </div>
          
          <div class="history-oil-box">
            <span style="font-size: 16px;">🛢️</span>
            <span>${s.oil_brand_type || '-'}</span>
          </div>

          <div style="margin-bottom: 6px;">
            <span class="badge-source" style="${isFromCust ? 'background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.35); color: #f87171;' : ''}">
              ${isFromCust ? '📦 ' + t.optCustomer : '🔧 ' + t.optWorkshop}
            </span>
          </div>
          
          <div class="history-parts-box">
            ${partsHtml}
          </div>

          ${cleanNotes ? `<div style="font-size: 12px; color: #cbd5e1; background: rgba(0,0,0,0.25); padding: 6px 10px; border-radius: 6px; margin-top: 6px;">${cleanNotes}</div>` : ''}

          <div class="h-card-next">
            <span>${currentLang === 'ar' ? 'الصيانة القادمة:' : 'Nästa service:'} <strong>${s.next_service_mileage ? s.next_service_mileage + ' km' : '—'}</strong></span>
            <span>${currentLang === 'ar' ? 'التاريخ:' : 'Datum:'} <strong>${s.next_service_date || '—'}</strong></span>
          </div>

          ${adminBtns}
        `;
        container.appendChild(itemCard);
      });
    }

    window.editServiceRecord = function(recordId) {
      const s = cachedServices.find(item => item.id == recordId);
      if (!s) return;

      document.getElementById('editRecordId').value = s.id;
      document.getElementById('serviceDate').value = s.service_date ? s.service_date.substring(0, 10) : '';
      document.getElementById('mileage').value = s.mileage || '';
      document.getElementById('mechanic').value = s.mechanic || '';
      
      let rawOil = s.oil_brand_type || '';
      let extractedQty = '';
      
      const match = rawOil.match(/\(([\d\.,]+)\s*l?\)$/i);
      if (match) {
        extractedQty = match[1].replace(',', '.');
        rawOil = rawOil.replace(/\s*\([\d\.,]+\s*l?\)$/i, '').trim();
      }
      
      document.getElementById('oilDetails').value = rawOil;
      document.getElementById('oilQty').value = extractedQty;

      if (s.notes && s.notes.includes('[KÄLLA: KUND]')) {
        document.getElementById('partsSource').value = 'customer';
      } else {
        document.getElementById('partsSource').value = 'workshop';
      }

      document.getElementById('chkOil').checked = !!s.oil_filter;
      document.getElementById('chkAir').checked = !!s.air_filter;
      document.getElementById('chkCabin').checked = !!s.cabin_filter;
      document.getElementById('chkFuel').checked = !!s.fuel_filter;
      document.getElementById('chkSpark').checked = !!s.spark_plugs;
      document.getElementById('nextMileage').value = s.next_service_mileage || '';
      document.getElementById('nextDate').value = s.next_service_date || '';
      
      const cleanNotes = s.notes ? s.notes.replace(/\[KÄLLA: (KUND|VERKSTAD)\]/g, '').trim() : '';
      document.getElementById('notes').value = cleanNotes;

      const t = translations[currentLang];
      document.getElementById('formTitleText').textContent = t.formTitleEdit;
      document.getElementById('btnSubmitForm').textContent = t.btnUpdate;
      document.getElementById('btnCancelEdit').style.display = 'inline-block';

      document.getElementById('adminSection').scrollIntoView({ behavior: 'smooth' });
    };

    window.cancelEdit = function() {
      document.getElementById('editRecordId').value = '';
      const today = new Date().toISOString().substring(0, 10);
      document.getElementById('serviceDate').value = today;
      document.getElementById('oilQty').value = '';
      document.getElementById('partsSource').value = 'workshop';
      document.getElementById('regCheckNotice').style.display = 'none';
      handleServiceDateChange();
      
      const t = translations[currentLang];
      document.getElementById('formTitleText').textContent = t.formTitle;
      document.getElementById('btnSubmitForm').textContent = t.btnSave;
      document.getElementById('btnCancelEdit').style.display = 'none';
    };

    window.deleteServiceRecord = async function(recordId) {
      if (!confirm("Är du säker på att du vill ta bort detta serviceprotokoll permanent? / هل أنت متأكد من حذف هذا السجل نهائياً؟")) {
        return;
      }

      const { error } = await supabaseClient.from('service_records').delete().eq('id', recordId);
      if (error) {
        alert("Kunde inte ta bort: " + error.message);
        return;
      }

      const { data: remaining } = await supabaseClient
        .from('service_records')
        .select('id')
        .eq('reg_nr', currentReg);

      if (!remaining || remaining.length === 0) {
        await supabaseClient.from('vehicles').delete().eq('reg_nr', currentReg);
        alert("Posten och fordonet har tagits bort helt! / تم حذف السجل ومسح ملف السيارة بالكامل!");
        
        if (document.getElementById('editRecordId').value == recordId) {
          cancelEdit();
        }
        document.getElementById('vehicleOverviewContainer').style.display = 'none';
        document.getElementById('historyCard').style.display = 'none';
        document.getElementById('lookupReg').value = '';
        currentReg = '';
        hideNotFoundAlert();
      } else {
        alert("Posten har tagits bort! / تم حذف السجل بنجاح!");
        if (document.getElementById('editRecordId').value == recordId) {
          cancelEdit();
        }
        loadVehicleData(currentReg);
      }
    };

    function preparePrintData(vehicle, services) {
      const latest = services && services.length > 0 ? services[0] : null;
      const now = new Date();

      document.getElementById('pDate').textContent = latest?.service_date ? latest.service_date.substring(0, 10) : now.toISOString().substring(0, 10);
      
      let serialPart = '08764';
      if (latest && latest.id) {
        const numOnly = String(latest.id).replace(/\D/g, '');
        if (numOnly.length >= 4) {
          serialPart = '0' + numOnly.substring(numOnly.length - 4);
        } else {
          serialPart = '0' + String(latest.id).padStart(4, '0');
        }
      } else {
        serialPart = '0' + String(Math.floor(1000 + Math.random() * 9000));
      }
      document.getElementById('pDocNr').textContent = 'ASR-' + serialPart;

      document.getElementById('pReg').textContent = currentReg;
      document.getElementById('pModel').textContent = (vehicle?.model || '---') + (vehicle?.year_model ? ` (${vehicle.year_model})` : '');
      document.getElementById('pVin').textContent = vehicle?.vin || '---';
      document.getElementById('pOwner').textContent = vehicle?.customer_name || 'Privatkund';
      document.getElementById('pPhone').textContent = vehicle?.customer_phone || '---';

      document.getElementById('pMileage').textContent = (latest?.mileage || '---') + ' km';
      document.getElementById('pMechanic').textContent = latest?.mechanic || 'ASR Bilservice AB';
      
      const isCust = latest?.notes && latest.notes.includes('[KÄLLA: KUND]');
      document.getElementById('pSource').textContent = isCust ? 'Kunden (Medtagna delar)' : 'Verkstaden (ASR Bilservice)';

      document.getElementById('pNextKm').textContent = latest?.next_service_mileage ? `${latest.next_service_mileage} km` : '---';
      document.getElementById('pNextDate').textContent = latest?.next_service_date || '---';

      document.getElementById('pOilSpec').textContent = latest?.oil_brand_type || 'Kvalitetsolja';

      const fmtCheck = (val) => val ? '<span class="check-yes">✔ Bytt</span>' : '<span class="check-no">✖ Ej bytt</span>';
      document.getElementById('pChkOil').innerHTML = fmtCheck(latest?.oil_filter);
      document.getElementById('pChkAir').innerHTML = fmtCheck(latest?.air_filter);
      document.getElementById('pChkCabin').innerHTML = fmtCheck(latest?.cabin_filter);
      document.getElementById('pChkFuel').innerHTML = fmtCheck(latest?.fuel_filter);
      document.getElementById('pChkSpark').innerHTML = fmtCheck(latest?.spark_plugs);

      const cleanNotes = latest?.notes ? latest.notes.replace(/\[KÄLLA: (KUND|VERKSTAD)\]/g, '').trim() : '';
      document.getElementById('pNotes').textContent = cleanNotes !== '' ? cleanNotes : 'Inga övriga anmärkningar. Bilen har genomgått fullständig fackmannamässig service.';

      const serviceUrl = `${BASE_SERVICE_URL}/?reg=${encodeURIComponent(currentReg)}`;
      const pQr = document.getElementById('printQrContainer');
      pQr.innerHTML = '';
      new QRCode(pQr, {
        text: serviceUrl,
        width: 95,
        height: 95,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    }

    window.triggerPrint = function() {
      if (cachedVehicle || cachedServices.length > 0) {
        preparePrintData(cachedVehicle, cachedServices);
      }
      window.print();
    };

    document.getElementById('serviceForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const reg = document.getElementById('regNr').value.trim().toUpperCase();
      const editId = document.getElementById('editRecordId').value;
      const inputDate = document.getElementById('serviceDate').value || new Date().toISOString().substring(0, 10);
      
      const oilName = document.getElementById('oilDetails').value.trim();
      let oilQtyVal = document.getElementById('oilQty').value.trim();
      oilQtyVal = oilQtyVal.replace(',', '.');
      const finalOilString = oilQtyVal ? `${oilName} (${oilQtyVal}L)`.trim() : oilName;

      const sourceVal = document.getElementById('partsSource').value;
      const sourceTag = sourceVal === 'customer' ? '[KÄLLA: KUND]' : '[KÄLLA: VERKSTAD]';
      const userNotes = document.getElementById('notes').value.replace(/\[KÄLLA: (KUND|VERKSTAD)\]/g, '').trim();
      const finalNotes = `${sourceTag} ${userNotes}`.trim();

      const vehiclePayload = {
        reg_nr: reg,
        model: document.getElementById('carModel').value.trim(),
        year_model: document.getElementById('yearModel').value.trim(),
        vin: document.getElementById('vin').value.trim(),
        customer_name: document.getElementById('custName').value.trim(),
        customer_phone: document.getElementById('custPhone').value.trim()
      };

      await supabaseClient.from('vehicles').upsert(vehiclePayload, { onConflict: 'reg_nr' });

      const currentMileage = parseInt(document.getElementById('mileage').value) || 0;
      
      let nextMileageVal = parseInt(document.getElementById('nextMileage').value);
      if (isNaN(nextMileageVal) || !nextMileageVal) {
        nextMileageVal = currentMileage > 0 ? currentMileage + 15000 : null;
      }

      let nextDateVal = document.getElementById('nextDate').value;
      if (!nextDateVal && inputDate) {
        const d = new Date(inputDate);
        d.setFullYear(d.getFullYear() + 1);
        nextDateVal = d.toISOString().substring(0, 10);
      }

      const servicePayload = {
        reg_nr: reg,
        service_date: inputDate,
        mileage: currentMileage,
        mechanic: document.getElementById('mechanic').value.trim(),
        oil_brand_type: finalOilString,
        oil_filter: document.getElementById('chkOil').checked,
        air_filter: document.getElementById('chkAir').checked,
        cabin_filter: document.getElementById('chkCabin').checked,
        fuel_filter: document.getElementById('chkFuel').checked,
        spark_plugs: document.getElementById('chkSpark').checked,
        next_service_mileage: nextMileageVal,
        next_service_date: nextDateVal || null,
        notes: finalNotes
      };

      let resultError = null;

      if (editId) {
        const { error } = await supabaseClient.from('service_records').update(servicePayload).eq('id', editId);
        resultError = error;
      } else {
        const { error } = await supabaseClient.from('service_records').insert([servicePayload]);
        resultError = error;
      }

      if (!resultError) {
        const serviceUrl = `${BASE_SERVICE_URL}/?reg=${encodeURIComponent(reg)}`;
        const qrDiv = document.getElementById('qrcode');
        qrDiv.innerHTML = '';
        new QRCode(qrDiv, {
          text: serviceUrl,
          width: 140,
          height: 140,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });

        document.getElementById('resultCard').style.display = 'block';
        cancelEdit();
        hideNotFoundAlert();
        await loadVehicleData(reg);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        alert('Fel vid sparning: ' + resultError.message);
      }
    });

    window.openCustomerView = function() {
      if (currentReg) {
        window.open(`${BASE_SERVICE_URL}/?reg=${encodeURIComponent(currentReg)}`, '_blank');
      }
    };
  }).toString().slice(11, -1);
  document.head.appendChild(_0x9b4c);
})();
