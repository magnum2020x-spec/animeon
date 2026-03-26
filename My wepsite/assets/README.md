# AnimeBest Assets

مجلد الموارد الشامل لمنصة AnimeBest يحتوي على جميع الملفات المطلوبة لتشغيل الموقع.

## 📁 هيكل المجلد

```
assets/
├── css/
│   ├── style.css          # ملف التنسيق الرئيسي
│   └── responsive.css     # تنسيقات الاستجابة
├── js/
│   ├── main.js            # ملف JavaScript الرئيسي
│   ├── api.js             # دوال التعامل مع API
│   └── utils.js           # دوال مساعدة
├── images/
│   ├── logo.png           # شعار الموقع
│   ├── hero-bg.jpg        # خلفية البطل
│   └── placeholder.jpg    # صور بديلة
├── icons/
│   ├── favicon.ico        # أيقونة الموقع
│   └── svg/               # أيقونات SVG
├── fonts/
│   ├── cairo.woff2        # خط Cairo
│   └── poppins.woff2      # خط Poppins
└── README.md              # هذا الملف
```

## 🎨 الملفات المتضمنة

### CSS Files

#### `css/style.css`
ملف التنسيق الرئيسي يحتوي على:
- متغيرات الألوان (Colors)
- أنماط الأزرار (Buttons)
- أنماط البطاقات (Cards)
- أنماط النماذج (Forms)
- أنماط الشبكة (Grid)
- الرسوم المتحركة (Animations)
- الأنماط المساعدة (Utilities)

### JavaScript Files

#### `js/main.js`
ملف JavaScript الرئيسي يحتوي على:
- دوال مساعدة (Utility Functions)
- إدارة التنقل (Navigation)
- تفاعلات الأزرار (Button Interactions)
- الرسوم المتحركة عند التمرير (Scroll Animations)
- البحث (Search Functionality)
- إدارة النوافذ المنبثقة (Modal Management)
- التحقق من النماذج (Form Validation)
- الإشعارات (Notifications)
- استدعاءات API (API Calls)
- إدارة التخزين المحلي (Local Storage)
- إدارة المظهر (Theme Manager)

## 🚀 كيفية الاستخدام

### 1. تضمين الملفات في HTML

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimeBest</title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- محتوى الصفحة -->
    
    <!-- JavaScript Files -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### 2. استخدام الفئات المساعدة

```html
<!-- أزرار -->
<button class="btn btn-primary">زر أساسي</button>
<button class="btn btn-secondary">زر ثانوي</button>

<!-- بطاقات -->
<div class="card">
    <div class="card-header">
        <h3>عنوان البطاقة</h3>
    </div>
    <div class="card-body">
        محتوى البطاقة
    </div>
</div>

<!-- شبكة -->
<div class="grid grid-3">
    <div class="card">...</div>
    <div class="card">...</div>
    <div class="card">...</div>
</div>
```

### 3. استخدام دوال JavaScript

```javascript
// إظهار إشعار
Notification.success('تم بنجاح!');
Notification.error('حدث خطأ');

// التمرير السلس
smoothScroll('#section-id');

// إضافة/إزالة فئات
addClass('.element', 'active');
removeClass('.element', 'active');

// التخزين المحلي
StorageManager.set('user', { name: 'أحمد' });
const user = StorageManager.get('user');

// استدعاءات API
API.get('/anime/trending')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## 🎨 نظام الألوان

```css
--primary: #a855f7      /* البنفسجي */
--secondary: #06b6d4    /* التيركواز */
--success: #10b981      /* الأخضر */
--warning: #f59e0b      /* البرتقالي */
--danger: #ef4444       /* الأحمر */
--dark: #0f172a         /* الأسود الداكن */
--gray-300: #d1d5db     /* الرمادي الفاتح */
```

## 📱 الاستجابة

جميع الملفات مصممة لتكون مستجيبة على جميع أحجام الشاشات:
- **Desktop**: 1400px وما فوق
- **Tablet**: 768px - 1399px
- **Mobile**: أقل من 768px

## 🔧 التخصيص

### تغيير الألوان

عدّل متغيرات CSS في `css/style.css`:

```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    /* ... */
}
```

### إضافة خطوط جديدة

أضف رابط Google Fonts في HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

ثم استخدمها في CSS:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 🐛 استكشاف الأخطاء

### الأزرار لا تعمل
تأكد من تضمين `main.js` في نهاية ملف HTML

### الرسوم المتحركة لا تظهر
تحقق من أن `style.css` محمّل بشكل صحيح

### البحث لا يعمل
تأكد من وجود عنصر `.search-input` و `.search-results` في HTML

## 📚 موارد إضافية

- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Google Fonts](https://fonts.google.com)

## 📝 الترخيص

جميع الملفات مفتوحة المصدر ومتاحة للاستخدام الحر.

## 👥 المساهمة

للمساهمة في تحسين الموارد، يرجى التواصل مع فريق AnimeBest.

---

**آخر تحديث**: مارس 2026
