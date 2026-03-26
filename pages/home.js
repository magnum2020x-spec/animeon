window.onload = function() {
    // إخفاء الـ Skeleton
    document.getElementById('skeleton-wrapper').style.display = 'none';
    // إظهار المحتوى الحقيقي (تأكد إن الـ anime-grid الحقيقية لها id="real-content")
    document.getElementById('real-content').style.display = 'grid';
};