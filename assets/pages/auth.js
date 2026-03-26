// assets/js/auth.js

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // منع الصفحة من التحديث عند الضغط على الزر

  // جلب البيانات من الحقول
  const name = document.querySelector(
    'input[placeholder="أدخل اسمك بالكامل"]',
  ).value;
  const email = document.querySelector('input[type="email"]').value;

  // هنا تضع كود خدمة إرسال الإيميل (مثل EmailJS التي ذكرتها لك)
  console.log("جاري إرسال رسالة تأكيد لـ: " + email);

  // مثال بسيط للتفاعل مع المستخدم
  alert("أهلاً بك يا " + name + "! تم إرسال رابط التأكيد لبريدك الإلكتروني.");

  // توجيهه لصفحة الدخول بعد النجاح
  window.location.href = "login.html";
});
// تهيئة المكتبة بمفتاحك العام
(function () {
  emailjs.init("Eo4wdYx57rOHdysj5"); // استبدله بـ Public Key الخاص بك
})();

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // منع تحديث الصفحة

  // الحصول على بيانات المستخدم من الحقول
  const userName = document.querySelector(
    'input[placeholder="أدخل اسمك بالكامل"]',
  ).value;
  const userEmail = document.querySelector('input[type="email"]').value;

  // البيانات التي سيتم إرسالها للقالب (يجب أن تطابق الأسماء في القالب بـ EmailJS)
  const templateParams = {
    user_name: userName,
    to_email: userEmail,
    message: "شكراً لانضمامك إلى Anime On! حسابك قيد التفعيل.",
  };

  // إرسال الإيميل فعلياً
  emailjs.send("service_wbjwcsh", "template_ig7363r", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("تم إرسال رسالة التأكيد لبريدك الإلكتروني!");
      window.location.href = "login.html"; // التوجه لصفحة الدخول
    },
    function (error) {
      console.log("FAILED...", error);
      alert("نعتذر، حدث خطأ أثناء الإرسال.");
    },
  );
});

localStorage.setItem("isLoggedIn", "true");
// في ملف auth.js (عند الضغط على اشتراك)
const templateParams = {
  user_name: userName,
  user_email: userEmail,
  user_password: userPassword, // سنرسل الباسورد للقالب لاستخدامه لاحقاً
  to_email: userEmail,
};

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(() => {
  alert("تفقد بريدك الإلكتروني لتأكيد الحساب");
});
